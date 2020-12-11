import React from 'react';

import './BlockHighlight.scss';

const BlockHighlight: React.FC = ({
                                    children
                                  }) => {

  return (
    <div className="BlockHighlight">{children}</div>
  );
};

export default BlockHighlight;