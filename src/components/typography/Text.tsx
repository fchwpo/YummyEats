import { TextProps } from "react-native";
import styled from "styled-components/native";

const defaultTextStyles = (theme: any) => `
  font-family: ${theme.fonts.body};
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.text.primary};
  flex-wrap: wrap;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: any) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: any) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
} as any;

interface CustomTextProps extends TextProps {
  variant?: "body" | "label" | "caption" | "error" | "hint";
}

export const Text = styled.Text<CustomTextProps>`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant = "body", theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
