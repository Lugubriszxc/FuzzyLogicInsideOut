import React from 'react'
import ReactDOM from 'react-dom/client'

import Survey from './Survey.tsx'
import HomePage from './Homepage.tsx'
import PredictionPage from './PredictionPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <HomePage/> */}
    <PredictionPage/>
  </React.StrictMode>,
)
