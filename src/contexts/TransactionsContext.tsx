import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface Transaction {
  id: number
  description: string
  type: 'outcome' | 'income'
  price: number
  category: string
  createdAt: string
}

interface CreateTransaction {
  description: string
  type: 'outcome' | 'income'
  price: number
  category: string
}

interface TransactionsContextInterface {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransaction) => Promise<void>
}

export const TransactionsContext = createContext(
  {} as TransactionsContextInterface,
)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const value = {
    transactions,
    fetchTransactions,
    createTransaction,
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function createTransaction(data: CreateTransaction) {
    const { description, price, category, type } = data
    const response = await api.post('/transactions', {
      description,
      type,
      category,
      price,
      createdAt: new Date(),
    })
    setTransactions((prevState) => [response.data, ...prevState])
  }

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    setTransactions(response.data)
  }

  return (
    <TransactionsContext.Provider value={value}>
      {children}
    </TransactionsContext.Provider>
  )
}
