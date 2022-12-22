import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QuestionContextProvider } from './context/QuestionContext'

ReactDOM.createRoot(document.getElementById('root')).render(

  <QuestionContextProvider>
      <App />
  </QuestionContextProvider>
)
