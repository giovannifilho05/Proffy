import React from 'react';

import arrowIcon from '../../assets/images/icons/arrowTime.svg';

import './styles.css';

const TeacherItemTime = () => {
  return (
    <ul>
      <li className="schedule-external-label">
        <span>Dia</span>
        <span>Horário</span>
      </li>
      <li className="schedules-item">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Segunda</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">24h - 18h</span>
      </li>
      <li className="schedules-item">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Segunda</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">24h - 18h</span>
      </li>
      <li className="schedules-item">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Segunda</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">24h - 18h</span>
      </li>
      <li className="schedules-item schedules-item-disabled">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Segunda</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">24h - 18h</span>
      </li>
      <li className="schedules-item schedules-item-disabled">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Terça</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">-</span>
      </li>

    </ul>
  );
}

export default TeacherItemTime;