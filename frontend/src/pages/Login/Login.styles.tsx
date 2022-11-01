import styled from 'styled-components';

export const SLogin = styled.section`
  min-height: calc(
    100vh - ${({ theme }) => theme.sizes.headerHeight} - ${({ theme }) => theme.sizes.footerHeight}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 1;
`;