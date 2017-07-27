/* Npm import */
import React from 'react';


/* Local import */
import Core from 'src/containers/Core';


/* Code */
const App = () => (
  <main id="app">
    <h1 id="app-title">Les bons comptes font les bons amis !</h1>
    <header id="app-how">
      <h2 id="app-how-title">Comment ça marche ?</h2>
      <div id="app-how-text">
        <p className="text">
          <em className="english">Easy buddy!</em> D'un côté on saisit les trucs à se partager, de l'autre les <em className="english">buddies</em>.
        </p>
        <p className="text">
          Chaque <em className="english">buddy</em> indique alors le montant <strong>maximum</strong> qu'il est prêt à dépenser pour obtenir chaque truc. (oui oui, on parle de sous-sous !)
        </p>
        <p className="text">Et je m'occupe du reste <span role="img" aria-label="victory sign">✌</span></p>
      </div>
      <hr />
    </header>

    <Core />

    <footer id="app-footer">
      <hr />
      <p>
        Appli inspirée par <a href="https://www.youtube.com/watch?v=kefptSDi0Es&feature=youtu.be&t=7m53s">Science4All</a>
      </p>
      <a href="mailto:garnes.damien|AT|gmail.com">Contacte-moi</a>
    </footer>
  </main>
);


/* Export */
export default App;
