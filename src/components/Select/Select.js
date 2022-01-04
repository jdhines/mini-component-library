import React from 'react';
import styled from 'styled-components';

import {COLORS} from '../../constants';
import Icon from '../Icon';
import {getDisplayedValue} from './Select.helpers';

const Select = ({label, value, onChange, children}) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} displayValue={displayedValue} onChange={onChange}>
      <SelectWrapper>{children}</SelectWrapper>
      <PresentationalBits>
        {displayedValue}
        <Icon id="chevron-down" size="16" strokeWidth="3" />
      </PresentationalBits>
    </Wrapper>
  );
};

// helped out by:
// https://moderncss.dev/custom-select-styles-with-pure-css/
// Only issue is that clicking the chevron itself doesn't activate the dropdown
const Wrapper = styled.div`
  color: ${COLORS.gray700};
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  width: max-content;
  position: relative;

  &:hover {
    color: ${COLORS.black};
  }
`;

const PresentationalBits = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 1rem;
  align-items: center;
  padding: 12px;
`;

const SelectWrapper = styled.select`
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

export default Select;
