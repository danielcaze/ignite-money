import * as Dialog from "@radix-ui/react-dialog";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";
import * as S from './styles'
import * as zod from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const newTransactionFormSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(["income", "outcome"]),
})

type newTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<newTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: newTransactionFormInputs) {
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>
        <Dialog.Title>New Transaction</Dialog.Title>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input type="text"
            placeholder="Description"
            required
            {...register('description')}
          />
          <input type="number"
            placeholder="Price"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input type="text"
            placeholder="Category"
            required
            {...register('category')}
          />

          <S.TransactionType>
            <S.TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Income
            </S.TransactionTypeButton>
            <S.TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Outcome
            </S.TransactionTypeButton>
          </S.TransactionType>

          <button type="submit" disabled={isSubmitting}>Cadastrar</button>
        </form>

        <S.CloseButton>
          <X size={24} />
        </S.CloseButton>
      </S.Content>
    </Dialog.Portal>
  )
}
