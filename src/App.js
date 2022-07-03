import './App.css';
import {Home} from "./component/Home"
import {Navbar} from "./component/Navbar"
import {Routes,Route} from "react-router-dom"
import {ProductPage} from "./component/ProductPage"


function App() {
  
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/:id" element={<ProductPage></ProductPage>} ></Route> 
      </Routes>

    </div>
  );
}

export default App;
