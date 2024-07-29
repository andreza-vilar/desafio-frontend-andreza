import { Route, Routes } from 'react-router';
import './App.css';
import Home from './components/Home';
import HistoryBattles from './components/HistoryBattles';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/history" element={ <HistoryBattles /> } />
      </Routes>
    </div>
  );
}

export default App;
