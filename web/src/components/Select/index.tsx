import React, { useState } from 'react';
import { ClickAwayListener } from '@material-ui/core'

import arrowIcon from '../../assets/images/icons/select-arrow.svg';

import './styles.css';

interface SelectProps {
  name: string;
  label: string;
  value?: string | number;
  valueDefaultLabel?: string;
  onChangeValue: Function;
  options: Array<{
    value: string;
    label: string;
  }>;

}

const Select: React.FC<SelectProps> = ({ label, name, value, valueDefaultLabel, options, onChangeValue }) => {
  const [isVisibleOptions, setVisibleOptions] = useState<Boolean>(false);
  const [selectedOptionLabel, setSelectedOptionLabel] = useState<string>(setInitialLabel());
  const [selectedOptionValue, setSelectedOptionValue] = useState<string | number>(setInitialLabe());

  function setInitialLabel() {
    let label = '';
    if (value) {
      const option = options.find(option => option.value === value);
      label = option ? option.label : '';
    }

    return label;
  }

  function setInitialLabe() {
    return value ? value : '';
  }

  function handleClasses(defaultClasses: Array<string>, optionalClasses: Array<string>) {
    let classes = defaultClasses;
    isVisibleOptions && classes.push(...optionalClasses);
    return classes.join(' ');
  }

  function toggleVisibilityOfOptions() {
    setVisibleOptions(!isVisibleOptions);
  }

  function setValueOfSelectAndLabel(element: any) {
    setSelectedOptionValue(element.children[0].value);
    setSelectedOptionLabel(element.children[1].innerHTML);
    onChangeValue(element.children[0]);
  }

  function getLi(e: any) {
    if (e.target.tagName === 'LI')
      return e.target;
    else if (e.target.parentElement.tagName === 'LI')
      return e.target.parentElement;

    return null;
  }
  return (
    <ClickAwayListener
      mouseEvent="onMouseDown"
      touchEvent="onTouchStart"
      onClickAway={() => isVisibleOptions && toggleVisibilityOfOptions()}
    >
      <div
        className="select-block"
        onClick={(e) => {
          const li = getLi(e);
          toggleVisibilityOfOptions();
          li && setValueOfSelectAndLabel(li);
        }}
      >
        <span
          className="label"
        >
          {label}
        </span>
        <span
          className={handleClasses(['select'], ['select-open'])}
        >
          {selectedOptionLabel || valueDefaultLabel || 'Selecione uma opção'}
          <img
            className={handleClasses(['arrowIcon'], ['arrowIconUp'])}
            src={arrowIcon} alt="Seta de abertura do select"
          />
        </span>
        <input
          type="hidden"
          name={name}
          value={selectedOptionValue}
        />

        <ul
          className={handleClasses(['option-block'], ['option-open'])}
        >
          {options.map(option => {
            return (
              <li
                key={option.value}
                className="option"
              >
                <input type="hidden" value={option.value} />
                <span>{option.label}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </ClickAwayListener>
  );
}

export default Select;