import styled from "styled-components";

type ButtonVariant = "primary" | "secondary" | "warning" | "success" | "error" | "gray";
type ButtonSize = "sm" | "md" | "lg" | "icon";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  $variant?: ButtonVariant;
  $size?: ButtonSize;
  $fullWidth?: boolean;
};

const Button = styled.button<ButtonProps>`
  outline: none;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  ${({ $fullWidth }) => $fullWidth && "width: 100%;"}
  ${({ theme }) => theme.typography.variants.button};

  ${({ $size = "md", theme }) => {
    return {
      sm: `
        padding: 5px 10px;
        font-size: ${theme.typography.fontSizes.sm};
      `,
      md: `
        padding: 10px 20px;
        font-size: ${theme.typography.fontSizes.md};
      `,
      lg: `
        padding: 15px 30px;
        font-size: ${theme.typography.fontSizes.lg};
      `,
      icon: `
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
      `,
    }[$size];
  }}

  transition: background-color 0.2s ease, transform 0.2s ease;
  ${({ $variant = "secondary", theme }) => `
    background-color: ${theme.colors[$variant].default};
    color: ${theme.colors[$variant].foreground};

    &:hover {
      background-color: ${theme.colors[$variant].hover};
    }
  `}
`;

export default Button;
