import React from 'react'
import ReactDOM from 'react-dom/client'

import Survey from './Survey.tsx'
import HomePage from './Homepage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Survey/>
  </React.StrictMode>,
)
