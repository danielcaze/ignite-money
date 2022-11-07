import { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { TransactionsContext, TransactionsProvider } from "./contexts/TransactionsContext";
import { TransactionsPage } from "./pages/Transactions";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";

export function App() {
  const { transactions } = useContext(TransactionsContext)
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <TransactionsPage />
      </TransactionsProvider>
    </ThemeProvider>
  )
}