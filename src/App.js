import './App.css';
import { Navbar, Banner } from './component';
import { Ourmenu, Ourlocations } from './containers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <Banner/ >
        <Ourmenu/ >
        <Ourlocations/ >
        <br />
      </div>
    </div>
  );
}

export default App;