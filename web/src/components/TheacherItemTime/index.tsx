import React from 'react';

import { Schedule } from '../TeacherItem'

import arrowIcon from '../../assets/images/icons/arrowTime.svg';

import './styles.css';

// interface classesTime {
//   schedule: Schedule
// }

const TeacherItemTime = () => {
  return (
    // schedules-item schedules-item-disabled
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
        <span className="day-time">08h - 18h</span>
      </li>
      <li className="schedules-item">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Terça</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">08h - 18h</span>
      </li>
      <li className="schedules-item schedules-item-disabled">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Quarta</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">-</span>
      </li>
      <li className="schedules-item">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Quinta</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">08h - 18h</span>
      </li>
      <li className="schedules-item schedules-item-disabled">
        <span className="schedule-inner-label">Dia</span>
        <span className="day-time">Sexta</span>
        <img src={arrowIcon} alt="arrow" />
        <span className="schedule-inner-label">Horário</span>
        <span className="day-time">-</span>
      </li>
    </ul>
  );
}

export default TeacherItemTime;