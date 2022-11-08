import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "outcome" | "income";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContext {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext({} as TransactionsContext)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const value = {
    transactions,
    fetchTransactions
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions')

    if (query) {
      url.searchParams.append('q', query)
    }

    const response = await fetch(url)
    const data = await response.json()
    setTransactions(data)
  }

  return <TransactionsContext.Provider value={value}>
    {children}
  </TransactionsContext.Provider>
}