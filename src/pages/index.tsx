import { contentProject } from '../common/projects';
import { contentTech } from '../common/technologies';
import { contentExperiences } from '../common/experiences';
import React from 'react';
import Home from './home';

export default function index() {
  return (
    <Home
      contentExp={contentExperiences}
      contentProject={contentProject}
      contentImgTech={contentTech} />
  )
}
