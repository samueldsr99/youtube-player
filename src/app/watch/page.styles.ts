import { Link } from "react-router-dom";
import styled from "styled-components";

export const TitleLink = styled(Link)`
  display: block;
  ${({ theme }) => theme.typography.variants.h2};
  margin: ${({ theme }) => theme.spacing(2, 0)};
`;

export const ChannelNameLink = styled(Link)`
  display: block;
  ${({ theme }) => theme.typography.variants.body2};
  margin: ${({ theme }) => theme.spacing(2, 0)};
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Metadata = styled.p`
  ${({ theme }) => theme.typography.variants.caption};
  margin: 0;

  color: ${({ theme }) => theme.colors.gray[600]};
`;

export const RelatedVideosTitle = styled.h3`
  ${({ theme }) => theme.typography.variants.h3};

  margin-top: ${({ theme }) => theme.spacing(10)};
`;

export const MetadataContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  display: flex;
  align-items: center;
  justify-content: space-between;
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
