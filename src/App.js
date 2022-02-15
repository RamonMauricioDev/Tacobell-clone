import './App.css';
import { Navbar, Banner } from './component';
import { Ourmenu, Ourlocations, Taconews, Ordernow, Instagram } from './containers'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <Banner />
        <Ourmenu />
        <Ourlocations />
        <Taconews />
        <Ordernow />
        <Instagram />
      </div>
    </div>
  );
}
export default App;