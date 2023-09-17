import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/common/Header/Header.jsx';
import Main from './components/common/Main/Main.jsx';
import About from './components/pages/AboutPage/AboutPage.jsx';
import Watch from './components/pages/WatchPage/WatchPage.jsx';
import Expertise from './components/pages/ExpertisePage/ExpertisePage.jsx';
import Teams from './components/pages/TeamsPage/TeamsPage.jsx';
import Works from './components/pages/WorksPage/WorksPage.jsx';
import People from './components/pages/PeoplePage/PeoplePage.jsx';
import Brand from './components/pages/BrandPage/BrandPage.jsx';
import Footer from './components/common/Footer/Footer.jsx';

// const AboutPage = lazy(() => import('./components/pages/AboutPage'));
// const ExpertisePage = lazy(() => import('./components/pages/ExpertisePage'));
// const TeamsPage = lazy(() => import('./components/pages/TeamsPage'));
// const WorksPage = lazy(() => import('./components/pages/WorksPage'));
// const PeoplePage = lazy(() => import('./components/pages/PeoplePage'));
// const ContactPage = lazy(() => import('./components/pages/ContactPage'));

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className='main'>
        <Main/>
        <About/>
        <Watch/>
        <Expertise/>
        <Teams/>
        <Works/>
        <People/>
        <Brand/>
      </main>
      <Footer/>
        <Suspense fallback={'load'}>
          {/* <Routes>
            <Route path='/about' element={<AboutPage />} />
            <Route path='/expertise' element={<ExpertisePage />} />
            <Route path='/teams' element={<TeamsPage />} />
            <Route path='/works' element={<WorksPage />} />
            <Route path='/people' element={<PeoplePage />} />
            <Route path='/contact' element={<ContactPage />} />
          </Routes> */}
        </Suspense>
    </BrowserRouter>
  );
}

export default App;
