import styled from "styled-components";

export const Root = styled.div`
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(3)};
`;

export const PageTitle = styled.h1`
  ${({ theme }) => theme.typography.variants.h1}
`;

export const ErrorDescription = styled.p`
  ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme }) => theme.colors.error.default};
`;

export const FormFields = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const FormActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};

  display: flex;
  justify-content: flex-end;
`;
