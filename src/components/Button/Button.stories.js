import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';
import './Button.css';

storiesOf('Button', module)
  .add(
    'default button', () => (
      <Button
        label="Default Button"
        handleClick={action('clicked')}
      />
    ),
  )
  .add(
    'red button', () => (
      <Button
        className="Button Button--red"
        label="Red Button"
        handleClick={action('clicked')}
      />
    ),
  );
