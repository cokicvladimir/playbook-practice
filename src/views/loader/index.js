import React from 'react';
import { connect } from 'react-redux';
import { setLoading } from '../../store/modules/loading';

import { loadingSelector } from '../../store/selectors/loadingSelector';
import Loader from '../../components/shared/loader';

const mapStateToProps = state => ({
  ...loadingSelector(state),
});

const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(setLoading(data)),
});

const LoaderView = props => {
  return <Loader {...props} />;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoaderView);
