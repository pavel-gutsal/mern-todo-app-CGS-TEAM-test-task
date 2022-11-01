import styled from 'styled-components';

export const StyledDashboard = styled.footer`
  height: calc(
    100vh - ${({ theme }) => theme.sizes.headerHeight} - ${({ theme }) => theme.sizes.footerHeight}
  );
  padding-top: 50px;
  display: flex;
  justify-content: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: ${({ theme }) => theme.sizes.contentWidthMax};

  @media screen and (max-width: ${({ theme }) => theme.netbook}) {
    width: ${({ theme }) => theme.sizes.contentWidthNormal};
  }

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: ${({ theme }) => theme.sizes.contentWidthSmall};
  }
`;
