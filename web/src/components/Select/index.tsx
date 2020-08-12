import React, { SelectHTMLAttributes} from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  valueDefaultLabel?: string;
  options: Array<{
    value: string;
    label: string;
  }>;

}

const Select: React.FC<SelectProps> = ({ label, name, valueDefaultLabel, options,...rest }) => {
  return (
    <div className="select-block">
      <label htmlFor={name}>{label}</label>
      <select id={name} value="" {...rest} >
        <option value="" disabled hidden>{valueDefaultLabel || 'Selecione uma opção'}</option>
        {options.map(option => {
          return (
            <option 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </option>
          )
        })}
      </select>
    </div>
  );
}

export default Select;