import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div>
     
      <Router>
       <Header></Header>
        <Routes>
       
          <Route exact path="/" element={<Shop/>}/>
         
          <Route path="/shop"
          element={<Shop></Shop>}>
          </Route>

          <Route path="/review" element={<OrderReview/>}/>

          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
