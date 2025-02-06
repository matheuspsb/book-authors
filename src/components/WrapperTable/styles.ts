import { Text } from "@radix-ui/themes"
import styled from "styled-components"

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  max-width: 1366px;
  padding: 0 24px;

  @media (max-width: 410px) {
    padding: 0 0px;
  }
`

export const ContainerActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 44px 0;

  @media (max-width: 410px) {
    flex-direction: column;
  }
`

export const StyledText = styled(Text)`
  @media (max-width: 525px) {
    font-size: 16px;
    text-align: center;
  }
`