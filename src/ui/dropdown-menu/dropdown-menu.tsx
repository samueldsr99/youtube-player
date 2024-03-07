import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { css, styled } from "styled-components";

const contentStyles = css`
  min-width: 220px;
  background-color: white;
  border-radius: 6px;
  padding: 5px;
  box-shadow:
    0px 10px 38px -10px rgba(22, 23, 24, 0.35),
    0px 10px 20px -15px rgba(22, 23, 24, 0.2);
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

  &[data-side="top"] {
    animation-name: ${({ theme }) => theme.animations.slideUpAndFade};
  }
  &[data-side="right"] {
    animation-name: ${({ theme }) => theme.animations.slideRightAndFade};
  }
  &[data-side="bottom"] {
    animation-name: ${({ theme }) => theme.animations.slideDownAndFade};
  }
  &[data-side="left"] {
    animation-name: ${({ theme }) => theme.animations.slideLeftAndFade};
  }
`;

const itemStyles = css`
  ${({ theme }) => theme.typography.variants.body1};
  height: ${({ theme }) => theme.spacing(9)};
  color: ${({ theme }) => theme.colors.gray[700]};
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(1, 3)};
  position: relative;
  user-select: none;
  outline: none;

  &[data-disabled] {
    color: ${({ theme }) => theme.colors.gray[500]};
    pointer-events: none;
  }
  &[data-highlighted] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

const Content = styled(DropdownMenu.Content)`
  ${contentStyles}
`;

const SubContent = styled(DropdownMenu.SubContent)`
  ${contentStyles}
`;

const Item = styled(DropdownMenu.Item)`
  ${itemStyles}
`;

const CheckboxItem = styled(DropdownMenu.CheckboxItem)`
  ${itemStyles}
`;

const RadioItem = styled(DropdownMenu.RadioItem)`
  ${itemStyles}
`;

const SubTrigger = styled(DropdownMenu.SubTrigger)`
  ${itemStyles}

  &[data-state="open"] {
    background-color: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[900]};
  }
`;

const Root = styled(DropdownMenu.Root)``;

const Trigger = styled(DropdownMenu.Trigger)``;

const Portal = styled(DropdownMenu.Portal)``;

export { CheckboxItem, Content, DropdownMenu, Item, Portal, RadioItem, Root, SubContent, SubTrigger, Trigger };
