import React from "react";
import { View, ViewProps } from "react-native";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  sm: 1,
  md: 2,
  lg: 3,
  xl: 4,
  xxl: 5,
} as any;

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
} as any;

const getVariant = (position: any, size: any, theme: any) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

interface SpacerViewProps extends ViewProps {
  variant: string;
}

const SpacerView: React.FC<SpacerViewProps> = (props) => {
  return <View {...props} />;
};

const StyledSpacerView: React.FC<SpacerViewProps> = styled(SpacerView)`
  ${({ variant }) => variant};
`;

export const Spacer = ({
  position,
  size,
  children,
}: {
  position: string;
  size: string;
  children: any;
}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <StyledSpacerView variant={variant}>{children}</StyledSpacerView>;
};

Spacer.defaultProps = {
  position: "top",
  size: "sm",
};
