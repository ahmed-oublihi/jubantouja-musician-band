import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './index.css'

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer'

const App = () =>(
  <Router>
    <Navbar />
      <main>
    <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
    </Switch>
      </main>
    <Footer />
  </Router>
)

export default App;