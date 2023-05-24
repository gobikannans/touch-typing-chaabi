import Home from './components/Home';
import TypeContextProvider from './context/TypeContext';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <TypeContextProvider value={{}}>
      <Header/>
      <Home/>
    </TypeContextProvider>
  );
}

export default App;
