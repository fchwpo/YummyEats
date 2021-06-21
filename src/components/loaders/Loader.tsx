import React from "react";
import { View } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import styled from "styled-components";

const StyledLoader = styled(ActivityIndicator)`
  margin-left: -25px;
`;

const Container = styled(View)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loader = (props: any) => {
  return (
    <Container>
      <StyledLoader {...props} />
    </Container>
  );
};
