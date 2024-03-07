import styled from "styled-components";

type InputSize = "sm" | "md" | "lg";
type InputVariant = "gray" | "primary" | "secondary" | "warning" | "success" | "error";

export type InputProps = JSX.IntrinsicElements["input"] & {
  $size?: InputSize;
  $variant?: InputVariant;
  $fullWidth?: boolean;
};

const Input = styled.input<InputProps>`
  padding: ${({ $size = "md" }) => {
    switch ($size) {
      case "sm":
        return "4px";
      case "md":
        return "10px";
      case "lg":
        return "14px";
    }
  }};
  width: ${({ $fullWidth }) => ($fullWidth ? "100%" : "auto")};

  border: 1px solid ${({ theme, $variant = "gray" }) => theme.colors[$variant].default};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.typography.fontSizes.md};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ $variant = "gray", theme }) => theme.colors[$variant].default};
    /* box-shadow: 0 0 0 2px ${({ $variant = "gray", theme }) => theme.colors[$variant].hover}; */
  }
`;

export default Input;
