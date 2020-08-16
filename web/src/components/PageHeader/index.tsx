import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => {
  return (
    <header className="page-header" >
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>

        {title && <h1 >{title}</h1>}

        <img src={logoImg} alt="Proffy" />
      </div>

      {children && <div className="page-header-children">{children}</div>}

    </header>
  );
}

export default PageHeader;