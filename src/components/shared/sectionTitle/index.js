import React, { PureComponent } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
  main: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
});

class SectionTitle extends PureComponent {
  render() {
    console.log(this.props);
    const {
      trt,
      classes,
      className,
      title,
      iconImg,
      variant,
      textClassName,
      iconSize,
    } = this.props;
    const textVariant = variant || 'title';
    console.log(trt);

    return (
      <div className={classNames(classes.main, className)}>
        {iconImg ? (
          <img
            className={classNames(iconSize, classes.icon)}
            src={iconImg}
            alt="icon"
          />
        ) : null}
        <Typography className={textClassName} variant={textVariant}>
          {title}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(SectionTitle);
