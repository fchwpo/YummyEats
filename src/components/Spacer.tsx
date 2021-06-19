import PropTypes from "prop-types";
import { View } from "react-native";
import styled from "styled-components/native";

const sizesMap = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
} as any;

export const Spacer = styled(View)`
  ${({ position, size, theme }) =>
    `margin${position === "all" ? "" : `-${position}`}: ${
      theme.space[sizesMap[size]]
    }`}
`;
Spacer.defaultProps = {
  position: "top",
  size: "sm",
};
Spacer.propTypes = {
  position: PropTypes.oneOf(["top", "left", "bottom", "right", "all"]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "xxl"]),
  ...View.propTypes,
};
