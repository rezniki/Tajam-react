import './App.css';
import React, { lazy, Suspence } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header.jsx';

const HomePage = lazy(() => import('./components/pages/HomePage'));
const AboutPage = lazy(() => import('./components/pages/AboutPage'));
const ExpertisePage = lazy(() => import('./components/pages/ExpertisePage'));
const TeamsPage = lazy(() => import('./components/pages/TeamsPage'));
const WorksPage = lazy(() => import('./components/pages/WorksPage'));
const PeoplePage = lazy(() => import('./components/pages/PeoplePage'));
const ContactPage = lazy(() => import('./components/pages/ContactPage'));

function App() {
  return (
    <BrowserRouter>
      <Header home='home' about='about' expertise='expertise' teams='teams' works='works' people='people say' contact='contact'/>
        <Suspence fallback={'load'}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/expertise' element={<ExpertisePage />} />
            <Route path='/teams' element={<TeamsPage />} />
            <Route path='/works' element={<WorksPage />} />
            <Route path='/people' element={<PeoplePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes>
        </Suspence>
    </BrowserRouter>
  );
}

export default App;
