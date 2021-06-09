import './App.css';
import NavBar from './Components/NavBar';
import Countries from './Components/Countries';
import CountriesCard from './Components/CountriesCard'
import { useState } from 'react'

function App() {

const [Search, setSearch] = useState("")


  return (
    <div className="App">
      <NavBar className="sticky" />
      <Countries changeHandler={e => setSearch(e.target.value)} />
      <CountriesCard Search={Search} />
    </div>
  );
}

export default App;
