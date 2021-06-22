import React, {ReactNode} from 'react';

import './BlockHighlight.scss';

type Props = {
  children: ReactNode
}

const BlockHighlight = ({children}: Props) => {

  return (
    <div className="BlockHighlight">{children}</div>
  );
};

export default BlockHighlight;