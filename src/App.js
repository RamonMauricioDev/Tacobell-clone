import './App.css';
import { Navbar, Banner, Footer } from './component';
import { Ourmenu, Ourlocations, Taconews, Ordernow } from './containers'
import { BannerData } from './component/banner/BannerData'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <Banner slides={BannerData}/>
        <Ourmenu />
        <Ourlocations />
        <Taconews />
        <Ordernow />
        <Footer />
      </div>
    </div>
  );
}
export default App;