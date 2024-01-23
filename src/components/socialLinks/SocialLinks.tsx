import React from 'react';
import './socialLinks.css'
import { links } from '../../data/Links.ts';

export const SocialLinks = ({ vertical = false, background = false }) => {
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
      <a href={links.github} className={iconType} target='_blank' rel="noreferrer" aria-label="Click to check out my GitHub account">
        <i className='uil uil-github-alt' />
      </a>
      <a href={links.linkedin} className={iconType} target='_blank' rel="noreferrer" aria-label="Visit my Linkedin profile">
        <i className='uil uil-linkedin-alt' />
      </a>
    </div>
  )
}