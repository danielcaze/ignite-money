import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import * as S from './styles'

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <form>
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <button type="submit">Cadastrar</button>
        </form>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
      </S.Content>
    </Dialog.Portal>
  )
}
