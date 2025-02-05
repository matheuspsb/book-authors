import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.dark};
  padding: 16px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.background.light};

  @media screen and (max-width: 784px) {
    height: 70px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1360px;
`

export const LogoContainer = styled.div`
  width: 200px;
`

export const Logo = styled.img`
`

