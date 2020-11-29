import logo from './logo.svg';
import './App.css';


import BT3Header from './Component/BT3Header';
import BT3Welcome from './Component/BT3Welcome';
import BT3ProductList from './Component/BT3ProductList';
import BT3Footer from './Component/BT3Footer';
function App() {
  return (
   <div>
    <BT3Header/>
    <div className="container">
    <BT3Welcome/>
    <BT3ProductList/>
    
    </div>
    <BT3Footer/>
    
   </div>
  );
}

export default App;
