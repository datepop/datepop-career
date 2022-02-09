import React from 'react';

import {
  Wrapper, Line
} from './style';


const HamburgerMenu = props => {
  return (
    <Wrapper
      isOpen={props.isOpen}
      onClick={() => props.menuClicked()}
      className={props.className}
    >
      <Line />
      <Line />
      <Line />
    </Wrapper>
  )
};

export default HamburgerMenu;