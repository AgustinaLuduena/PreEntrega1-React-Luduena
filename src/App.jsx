import './App.css';
import "./components/Header/Header";
import "./components/NavBar/NavBar";
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListConteiner from './components/itemListConteiner/itemListConteiner';

const App = () => {

  return (
    <div>
      <NavBar/>
      <Header/>
      <ItemListConteiner/>
    </div>
  )
}

export default App
