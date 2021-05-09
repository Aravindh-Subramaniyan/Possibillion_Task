import './App.css';
import Home from './pages/Home'
import { Route} from 'react-router-dom'
import Result from './pages/search-result'

function App() {
  return (
    <div className="App">
       <Route path="/search-result" component={Result}/>
       <Home/>
    </div>
  );
}

export default App;
