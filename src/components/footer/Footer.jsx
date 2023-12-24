import { useTranslation } from 'react-i18next';

import { SocialLinks } from '../socialLinks/SocialLinks';
import './footer.css';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">{t("footer.name")}</h1>

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
          {t("footer.copyright")}
        </span>
      </div>
    </footer>
  )
}