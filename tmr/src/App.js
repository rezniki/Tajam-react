import './App.css';
import React, { lazy, Suspence } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Suspence fallback={'load'}>
        <Routes>
          <Route path='' element={''}/>
          <Route path='' element={''}/>
          <Route path='' element={''}/>
          <Route path='' element={''}/>
          <Route path='' element={''}/>
          <Route path='' element={''}/>
          <Route path='' element={''}/>
        </Routes>
      </Suspence>
    </BrowserRouter>
  );
}

export default App;
