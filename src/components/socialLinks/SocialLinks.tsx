import React from 'react';
import { useTranslation } from 'react-i18next';
import './socialLinks.css'
import { links } from '../../data/Links.ts';

export const SocialLinks = ({ vertical = false, background = false }) => {
  const { t } = useTranslation();
  let containerType: string;
  let iconType: string;

  if (vertical === true) {
    containerType = 'container_social vertical'
  } else {
    containerType = 'container_social'
  }

  if (background === true) {
    iconType = 'icon-background'
  } else {
    iconType = 'icon-no-background'
  }

  return (
    <div className={containerType}>
      <a href={links.github} className={iconType} target='_blank' rel="noreferrer" aria-label={t('socialLinks.githubAria')}>
        <i className='uil uil-github-alt' aria-hidden />
      </a>
      <a href={links.linkedin} className={iconType} target='_blank' rel="noreferrer" aria-label={t('socialLinks.linkedinAria')}>
        <i className='uil uil-linkedin-alt' aria-hidden />
      </a>
    </div>
  )
}