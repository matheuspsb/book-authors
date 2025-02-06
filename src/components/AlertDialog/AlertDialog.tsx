import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import * as S from "./styles";

interface AlertDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  onConfirm: VoidFunction;
}

const AlertDialog = ({ open, setOpen, onConfirm }: AlertDialogProps) => (
  <AlertDialogPrimitive.Root open={open} onOpenChange={setOpen}>
    <AlertDialogPrimitive.Portal>
      <AlertDialogPrimitive.Overlay
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <S.AlertDialogContent>
        <AlertDialogPrimitive.Title>Atenção!</AlertDialogPrimitive.Title>
        <AlertDialogPrimitive.Description>
          Você tem certeza que deseja realizar essa ação ?
        </AlertDialogPrimitive.Description>

        <S.ButtonContainer>
          <AlertDialogPrimitive.Cancel asChild>
            <S.StyledButton variant="classic" color="gray">
              Cancelar
            </S.StyledButton>
          </AlertDialogPrimitive.Cancel>
          <AlertDialogPrimitive.Action asChild>
            <S.StyledButton
              variant="solid"
              color="red"
              onClick={() => {
                onConfirm();
                setOpen(false);
              }}
            >
              Deletar
            </S.StyledButton>
          </AlertDialogPrimitive.Action>
        </S.ButtonContainer>
      </S.AlertDialogContent>
    </AlertDialogPrimitive.Portal>
  </AlertDialogPrimitive.Root>
);

export default AlertDialog;
