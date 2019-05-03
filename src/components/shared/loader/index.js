import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const styles = theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    height: '100vh',
    background: 'transparent',
    zIndex: 10000,
  },
  loader: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    height: '3px',
    zIndex: 10000,
    '& div': {
      backgroundColor: theme.palette.primary.main,
    },
  },
});

class Loader extends PureComponent {
  render() {
    const { classes, loading } = this.props;
    return (
      loading > 0 && (
      <Fragment>
        <div className={classes.root}>
          <LinearProgress className={classes.loader} />
        </div>
      </Fragment>
      )
    );
  }
}

export default withStyles(styles)(Loader);
