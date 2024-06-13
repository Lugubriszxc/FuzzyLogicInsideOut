import React from 'react'
import ReactDOM from 'react-dom/client'
import Survey from './Survey.tsx'
import PredictionPage from './PredictionPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Survey/> */}
    <PredictionPage/>
  </React.StrictMode>,
)
