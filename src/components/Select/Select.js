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
      <IconWrapper>
        <Icon id="chevron-down" size="12" strokeWidth="3" />
      </IconWrapper>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  grid-area: select;
  justify-self: end;
  padding-right: 12px;
`;

// helped out by:
// https://moderncss.dev/custom-select-styles-with-pure-css/
// Only issue is that clicking the chevron itself doesn't activate the dropdown
const SelectWrapper = styled.select`
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: none;
  color: transparent;
  grid-area: select;
  height: 100%;
  width: 100%;
  padding: 12px;
`;

const Wrapper = styled.div`
  color: ${COLORS.gray700};
  display: grid;
  grid-template-areas: 'select';
  align-items: center;
  border-radius: 8px;
  background: ${COLORS.transparentGray15};
  min-width: 10rem;
  width: ${(props) => 0.8 * props.displayValue.length + 'em'};

  &:before {
    content: ${(props) => '"' + props.displayValue + '"'};
    grid-area: select;
    padding-left: 12px;
    color: inherit;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
