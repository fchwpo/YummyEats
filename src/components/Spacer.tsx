import React from "react";
import { View, ViewProps } from "react-native";
import styled from "styled-components/native";

const sizesMap = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
} as any;

interface SpacerProps extends ViewProps {
  position?: string;
  size?: string;
}

const SpacerViewFC: React.FC<SpacerProps> = (props) => {
  return <View {...props} />;
};

export const Spacer = styled(SpacerViewFC)`
  ${({
    position,
    size,
    theme,
  }: {
    position: string;
    size: string;
    theme: any;
  }) =>
    `margin${position === "all" ? "" : `-${position}`}: ${
      theme.space[sizesMap[size]]
    }`}
`;
Spacer.defaultProps = {
  position: "top",
  size: "sm",
};
