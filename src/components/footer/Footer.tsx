import React from 'react';
import { useTranslation } from 'react-i18next';

import { SocialLinks } from '../socialLinks/SocialLinks.tsx';
import './footer.css';
import { LogoM } from '../../assets/LogoM.tsx';

export const Footer = () => {
  const { t } = useTranslation();

  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container container">
        <div className='footer_logo'>
          <LogoM color='#333333'/>
        </div>

        <ul className="footer_list">
          <li>
            <a href="#hero" className="footer_link">{t("footer.home")}</a>
          </li>
          <li>
            <a href="#skills" className="footer_link">{t("footer.skills")}</a>
          </li>
          <li>
            <a href="#projects" className="footer_link">{t("footer.projects")}</a>
          </li>
        </ul>

        <SocialLinks background />

        <span className="footer_copy">
          {t("footer.copyright")}{year}.
        </span>
      </div>
    </footer>
  )
}