import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalProvider from './utils/GlobalContext';
import Homepage from './pages/Homepage';
import ViewProjects from "./pages/ViewProjects";
import Contact from "./pages/Contact";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Navbar />

        <div className="App">
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/projects' component={ViewProjects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </div>
      </GlobalProvider>
      <Footer />
    </Router>
  );
}


export default App;
