import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    '--iconSize': '16px',
    '--borderWidth': '1px',
    '--fontSize': 14 / 16 + 'rem',
    '--inputPadding': '24px',
  },
  large: {
    '--iconSize': '24px',
    '--borderWidth': '2px',
    '--fontSize': 18 / 16 + 'rem',
    '--inputPadding': '32px',
  },
};
const IconInput = ({label, icon, width = 250, size, placeholder}) => {
  const style = STYLES[size];
  if (!style) {
    throw new Error('No defined configuration for the size parameter ' + size);
  }
  return (
    <Wrapper style={style} size={width}>
      <Icon id={icon} size={style['--iconSize']} />
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <NativeInput placeholder={placeholder} type="text" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: ${(props) => props.size + 'px'};
  color: ${COLORS.gray700};
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  font-size: var(--fontSize);
  padding-bottom: 4px;

  &:hover {
    color: ${COLORS.black};
  }
`;

const NativeInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding-left: var(--inputPadding);
  padding-bottom: 4px;
  border: none;
  background: transparent;
  color: currentColor;
  font-weight: 700;
  font-size: inherit;

  &:focus {
    outline-offset: 4px;
  }

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
