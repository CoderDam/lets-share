/* Npm import */
import React from 'react';


/* Local import */
import Core from 'src/containers/Core';
import Header from 'src/containers/Header';
import Footer from 'src/containers/Footer';


/* Code */
const App = () => (
  <main id="app">
    <h1 id="app-title">
      <em>Let's share!</em>
      <span id="app-title--sub">
        <span>Les bons comptes font</span> <span>les bons amis !</span>
      </span>
    </h1>

    <Header />
    <Core />
    <Footer />
  </main>
);


/* Export */
export default App;
