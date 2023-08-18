import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient.ts'

import TodoListProvider from './contexts/toDoListContext/index.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TodoListProvider>
        <App />
      </TodoListProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
