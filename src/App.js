import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting="Productos"/>
    </div>
  );
}

export default App;
