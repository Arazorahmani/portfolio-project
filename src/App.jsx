import style from './App.module.css';
import { Navbar1 } from './components/Navbar1/Navbar1.jsx';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skill';
import { Projects } from './components/Project/Projects';
import { Contact } from './components/Contact/Contact';

import { Map } from './components/Map/Map';





function App() {
  
  return (
    <div className={style.App}>
      <Navbar1></Navbar1>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>
     
      <Map></Map>
      
    </div>
  )
}
export default App
