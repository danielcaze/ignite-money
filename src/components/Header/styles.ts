import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme["gray-900"]};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-inline: auto;
  padding-inline: 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  padding-inline: 1.25rem;
  
  background: ${({ theme }) => theme["green-500"]};
  border-radius: 6px;
  
  color: ${({ theme }) => theme.white};
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme["green-700"]};
    transition: background-color 0.2s;
  }
`