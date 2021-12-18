import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Matrikulasi from './pages/Matrikulasi';
import Perpustakaan from './pages/Perpustakaan';
import Kantin from './pages/Kantin';
import Sejarah from './pages/Sejarah';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/matrikulasi">
            <Matrikulasi />
          </Route>
          <Route path="/perpustakaan">
            <Perpustakaan />
          </Route>
          <Route path="/kantin">
            <Kantin />
          </Route>
          <Route path="/">
            <Sejarah />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
