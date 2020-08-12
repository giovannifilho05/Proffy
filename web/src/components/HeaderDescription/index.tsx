import React from 'react';

import rocketIcon from '../../assets/images/icons/rocket.svg';
import smileIcon from '../../assets/images/icons/smile.svg';

import './styles.css';

interface HeaderDescriptionProps {
  title: string;
  description?: string;
  icon: string;
  label: Array<string>;
}

const HeaderDescription: React.FC<HeaderDescriptionProps> = (props) => {

  const img = props.icon === 'rocket' ? rocketIcon : smileIcon;
  const alt = props.icon === 'rocket' ? 'rocket icon' : 'smile icon';

  return (
    <div id="header-description">
      <div className="content">
        <div className="description-text">
          <strong>{props.title}</strong>
          {props.description && <p>{props.description}</p>}
        </div>

        <div className="label">
          <img src={img} alt={alt} />
          <span>{props.label[0]}<br />{props.label[1]}</span>
        </div>

      </div>

      {props.children}
    </div>
  );
}

export default HeaderDescription;





