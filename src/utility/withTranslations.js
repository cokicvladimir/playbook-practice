import React from 'react';
import hoistStatics from 'hoist-non-react-statics';

import translations from '../constants/translations';

/**
 * A public higher-order component to access translations
 */
const withTranslations = (SourceComponent, ComponentName) => {
  const TranslatableComponent = props => {
    return (
      <SourceComponent
        {...props}
        translations={translations.en[ComponentName]}
      />
    );
  };

  TranslatableComponent.displayName = `withTranslations(${ComponentName})`;

  return hoistStatics(TranslatableComponent, SourceComponent);
};

export default withTranslations;
