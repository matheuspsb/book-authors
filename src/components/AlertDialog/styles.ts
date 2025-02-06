import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { Button } from "@radix-ui/themes";
import styled from "styled-components";

export const AlertDialogContent = styled(AlertDialogPrimitive.Content)`
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: 8px;
  box-shadow: 0 10px 38px -10px rgba(22, 23, 24, 0.35), 0 10px 20px -15px rgba(22, 23, 24, 0.2);
  position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90vw;
	max-width: 500px;
	max-height: 85vh;
	padding: 25px;
`

export const StyledButton = styled(Button)`
  width: 76px;
  height: 32px;
  border-radius: 8px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 16px;
`