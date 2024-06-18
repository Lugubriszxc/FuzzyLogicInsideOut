import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Survey from './Survey';
import HomePage from './Homepage.tsx'
import SurveyFinished from './SurveyFinished.tsx'
import PredictionPage from './PredictionPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Survey />} />
        <Route path="/SurveyFinished" element={<SurveyFinished />} />
        <Route path="/PredictionPage" element={<PredictionPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
)
