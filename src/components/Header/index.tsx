import * as S from "./styles";
import logoImg from '../../assets/logo.svg'
import * as Dialog from "@radix-ui/react-dialog";

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <S.NewTransactionButton>New Transaction</S.NewTransactionButton>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay />
            <Dialog.Content>
              <Dialog.Title>New Transaction</Dialog.Title>
              <Dialog.Close />
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
