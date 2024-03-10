import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Navbar from "./Navbar"
import Popular from "./Popular"
import Story from "./Story"
import Homepage from "./Homepage"

function App(){
  return (
    
      <Router>
        <Routes>
          <Route exact path="/" element= {<Homepage/>}/>
          <Route path ="/:categoryValue" element={<Homepage/>} />
        </Routes>
      </Router>
    
  )
}

export default App



