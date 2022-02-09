import './App.css';
import { Navbar, Banner } from './component';
import { Ourmenu } from './containers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <Banner/ >
        <Ourmenu/ >
      </div>
    </div>
  );
}

export default App;