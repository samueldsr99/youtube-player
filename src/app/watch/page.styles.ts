import styled from "styled-components";

export const Title = styled.h1`
  ${({ theme }) => theme.typography.variants.h1};
`;

export const ActionsContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: end;
`;

export const SaveButton = styled.button`
  ${({ theme }) => theme.typography.variants.button};
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(2, 3)};
  border: none;
  border-radius: ${({ theme }) => theme.spacing(6)};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};

  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;
