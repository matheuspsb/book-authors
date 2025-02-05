import { Text } from "@radix-ui/themes";
import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  max-width: 1366px;
`

export const ContainerActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 44px 0;
`

export const StyledText = styled(Text)`
`