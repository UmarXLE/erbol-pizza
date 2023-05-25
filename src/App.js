import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Pizza from './pages/Pizza/Pizza';
import RollsPage from './pages/RollsPage/RollsPage';
import ShaurmaPage from './pages/ShaurmaPage/ShaurmaPage';
import DishesPage from './pages/DishesPage/DishesPage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import RamenPage from './pages/RamenPage/RamenPage';
import MenuPage from './pages/MenuPage/MenuPage';
import StocksPage from './pages/StocksPage/StocksPage';
import DeliveryPage from './pages/DeliveryPage/DeliveryPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = '/' element ={<HomePage />}></Route>
        <Route path = '/pizza' element ={<Pizza />}></Route>
        <Route path = '/rolls' element ={<RollsPage />}></Route>
        <Route path = '/shaurma' element ={<ShaurmaPage />}></Route>
        <Route path = '/dishes' element ={<DishesPage/>}></Route>
        <Route path = '/drinks' element ={<DrinksPage />}></Route>
        <Route path = '/ramen' element ={<RamenPage />}></Route>
        <Route path='/menu' element ={<MenuPage />}></Route>
        <Route path='/stocks' element ={<StocksPage />}></Route>
        <Route path='/delivery' element ={<DeliveryPage />}></Route>



      </Routes> 
    </div>
  );
}

export default App;
