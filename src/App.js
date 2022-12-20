
import './App.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main>
        <ItemListContainer />
      </main>

    </>

  );
}

export default App;

