import './App.css';
import { Navbar, Banner } from './component';
import { Ourmenu, Ourlocations, Taconews } from './containers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <Banner />
        <Ourmenu />
        <Ourlocations />
        <Taconews />
      </div>
    </div>
  );
}

export default App;