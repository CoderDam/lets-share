/* Npm import */
import React from 'react';


/* Local import */
import Core from 'src/containers/Core';


/* Code */
const App = () => (
  <main id="app">
    <h1 id="app-title">Les bons comptes font les bons amis !</h1>
    <div id="app-how">
      <h2 id="app-how-title">Comment ça marche ?</h2>
      <p id="app-how-text">
        <span className="english">Easy buddy!</span> D'un côté on saisit les gens, de l'autre les trucs à se partager. Chaque <span className="english">buddy</span> indique alors le montant <em>maximum</em> qu'il est prêt à dépenser pour obtenir chaque bidule (oui oui, on parle de sous-sous !). Et je m'occupe de tout le reste ;)
      </p>
    </div>
    <Core />
  </main>
);


/* Export */
export default App;
