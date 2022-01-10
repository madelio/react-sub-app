import './App.css';
import ResultList from './components/ResultList';
import {sanDiegoLocations, temeculaLocations} from './TestData/locations'

function App() {
  return (
    <div className="App">
      <ResultList locations={temeculaLocations}/>
    </div>
  );
}

export default App;
