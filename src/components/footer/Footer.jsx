import { SocialLinks } from '../socialLinks/SocialLinks';
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Monte</h1>

        <ul className="footer_list">
          <li>
            <a href="#hero" className="footer_link">Go top</a>
          </li>
          <li>
            <a href="#skills" className="footer_link">Skills</a>
          </li>
          <li>
            <a href="#projects" className="footer_link">Projects</a>
          </li>
        </ul>

        <SocialLinks background />

        <span className="footer_copy">
          &#169; Matias Monteverde. All rights reserved
        </span>
      </div>
    </footer>
  )
}