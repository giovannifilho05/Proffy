import React from 'react';

import './styles.css'

interface ScreenMessageType {
  message: string;
}

const ScreenMessage: React.FC<ScreenMessageType> = ({ message }) => {
  return (
    <div className="screen-messege">
      <p >{message}</p>
    </div>
  );
}

export default ScreenMessage;