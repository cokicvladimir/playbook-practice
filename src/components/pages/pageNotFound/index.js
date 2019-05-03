import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import BrokenImage from '@material-ui/icons/BrokenImage';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';

import withTranslations from '../../../utility/withTranslations';

const styles = theme => ({
  main: {
    position: 'absolute',
    top: 0,
    left: 72,
    right: 0,
    bottom: '30vh',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSize: {
    width: 120,
    height: 120,
  },
  avatarSection: {
    marginBottom: '1em',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  avatar: {
    width: 160,
    height: 160,
    backgroundColor: theme.palette.primary.main,
  },
});

class PageNotFound extends PureComponent {
  render() {
    const { classes, translations } = this.props;
    return (
      <div className={classes.main}>
        <div className={classes.avatarSection}>
          <Avatar className={classes.avatar}>
            <BrokenImage className={classes.iconSize} />
          </Avatar>
        </div>
        <Typography variant="h5" gutterBottom>
          {translations.title}
        </Typography>
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles)(withTranslations(PageNotFound, 'PageNotFound'))
);
