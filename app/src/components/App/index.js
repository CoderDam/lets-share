/* Npm import */
import React from 'react';


/* Local import */
import Core from 'src/containers/Core';
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';


/* Code */
const App = () => (
  <main id="app">
    <h1 id="app-title">Les bons comptes font les bons amis !</h1>

    <Header />
    <Core />
    <Footer />
  </main>
);


/* Export */
export default App;
