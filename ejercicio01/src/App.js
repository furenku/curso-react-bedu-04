import React from 'react';

import Home from './components/Home/Home';
import MainHeader from './components/general/MainHeader/MainHeader';

class App extends React.Component {

  render () {

    return (
      <div>
        
        <MainHeader/>

        <main className="MainContainer">
          
          <Home/>

        </main>

        <footer className="MainFooter">
          Pie de páigna
        </footer>

      </div>
    )
 
 
  }

    
}

export default App;
