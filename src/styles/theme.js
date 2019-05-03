import { createMuiTheme } from '@material-ui/core/styles';

export const primaryPalette = {
  main: '#0d91f3',
  white: '#FFFFFF',
};

const ExecutionerTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 601,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  palette: {
    primary: primaryPalette,
  },
});

export default ExecutionerTheme;
