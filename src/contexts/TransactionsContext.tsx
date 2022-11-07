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
}

export const TransactionsContext = createContext({} as TransactionsContext)

interface TransactionsProviderProps {
  children: ReactNode
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    async function loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json()
      setTransactions(data)
    }
    loadTransactions()
  }, [])

  const value = {
    transactions
  }

  return <TransactionsContext.Provider value={value}>
    {children}
  </TransactionsContext.Provider>
}