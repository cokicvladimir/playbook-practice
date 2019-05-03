import React from 'react';
import withTranslations from '../../../utility/withTranslations';
import SectionTitle from '../../shared/sectionTitle';
import WaveIcon from '../../../assets/icons/wave.svg';

const HomePage = (props) => {
  const { translations } = props;
  return (
    <SectionTitle title={translations.title} iconImg={WaveIcon} />
  );
};


export default withTranslations(HomePage, 'HomePage');
