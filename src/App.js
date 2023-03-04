/**
 * Here is the application file.
 * This is the website application index page.
 * below we import the header, footer and main application componenets.
 */
import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Footer from './components/footer.js';


/**
 * Below is the App page render function
 * It consists of a javascript function, that has a return method.
 * It consist also of the header, main and footer dynamic pages
 * @returns 
 */

function App() {
  return (
    <div className="App">

      <Header /> {/** Dynamic Header */}

      <Main />    {/** Dynamic Main */}

      <Footer />  {/** Dynamic Footer */}

    </div>
  );
}

export default App;
