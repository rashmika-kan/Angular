import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import '../css/app.css';

export default {
  title: 'Welcome',
  component: Welcome,
};

export const ToStorybook = () => <div className="test"><Welcome showApp={linkTo('Button')} /></div>;

ToStorybook.story = {
  name: 'to Storybook',
};
