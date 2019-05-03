import React from 'react';
import { storiesOf } from '@storybook/react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import ExecutionerTheme from '../src/styles/theme';
import SectionTitle from '../src/components/shared/sectionTitle';

import WaveIcon from '../src/assets/icons/wave.svg';

storiesOf('SectionTitle', module)
  .add('SectionTitle - with icon', () => (
    <MuiThemeProvider theme={ExecutionerTheme}>
      <SectionTitle title="Section title" iconImg={WaveIcon} />
    </MuiThemeProvider>
  ))
  .add('SectionTitle - without icon', () => (
    <MuiThemeProvider theme={ExecutionerTheme}>
      <SectionTitle title="Section Information" />
    </MuiThemeProvider>
  ))
  .add('SectionTitle - without icon - different variant', () => (
    <MuiThemeProvider theme={ExecutionerTheme}>
      <SectionTitle title="Dashboard" variant="headline" />
    </MuiThemeProvider>
  ));
