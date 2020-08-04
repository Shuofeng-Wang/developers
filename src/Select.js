import React, { forwardRef } from "react";
import styled from "styled-components";
import { space, typography } from "styled-system";
import { default as styledProps } from "@styled-system/prop-types";
import { menuDownIcon as ChevronDown, BlendIcon } from "@blend-ui/icons";
import Box from "./Box";
//import PropTypes from "prop-types";

const selectVariation = props => {
  //console.log("VARIATION ", props);
  let selectProps = props.theme.componentStyles.select;

  return selectProps;
};

const SelectElement = styled.select`
  appearance: none;
  display: block;
  width: 100%;
  font-family: inherit;
  margin:0;
  ${selectVariation}
  ${space} ${typography}
  ::-ms-expand {
    display: none;
  }
  &:disabled {
    opacity: 0.25;
  }
`;

const StyledBox = styled(Box)`
  display: flex;
  align-items: center;
`;

const ClickableIcon = styled(BlendIcon).attrs(props => ({
  color: props.theme.colors.black,
}))`
  pointer-events: none;
  margin-left: -32px;
`;

const Select = forwardRef((props, ref) => {
  return (
    <StyledBox width={"100%"}>
      <SelectElement {...props} ref={ref} />
      <ClickableIcon iconify={ChevronDown} />
    </StyledBox>
  );
});

Select.propTypes = {
  ...styledProps.space,
  ...styledProps.typography,
};
Select.displayName = "Select";
Select.isField = true;

export default Select;
