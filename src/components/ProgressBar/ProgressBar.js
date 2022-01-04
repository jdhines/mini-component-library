/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    '--height': '24px',
    '--padding': '4px',
    '--borderRadius': '8px',
  },
  medium: {
    '--height': '12px',
    '--padding': '0px',
    '--borderRadius': '4px',
  },
  small: {
    '--height': '8px',
    '--padding': '0px',
    '--borderRadius': '4px',
  },
};
const ProgressBar = ({value, size}) => {
  const styles = SIZES[size];
  if (!styles) {
    throw new Error(`No style object found for provided size '${size}'`);
  }
  return (
    <Bar
      value={value}
      style={styles}
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      role="progressbar"
    >
      <span>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </span>
    </Bar>
  );
};

const Bar = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
  padding: var(--padding);
  height: var(--height);

  span {
    display: block;
    width: ${(props) => props['aria-valuenow'] + '%'};
    background: ${COLORS.primary};
    height: 100%;
    border-radius: ${(props) => {
      if (props.value < 98) {
        return '4px 0 0 4px';
      } else if (props.value <= 99) {
        return '4px 2px 2px 4px';
      } else {
        return '4px';
      }
    }};
    transition: width 0.4s cubic-bezier(0.86, -0.08, 0.21, 1.39);
  }
`;

export default ProgressBar;
