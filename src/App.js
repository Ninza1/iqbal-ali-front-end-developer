// import logo from './logo.svg';
import './App.css';
import { AllData } from './components/AllData';
import { Banner } from './components/Banner';
import { DataGrid } from './components/DataGrid';
import { Header } from './components/Header';
import { Search } from './components/Search';
function App() {
  return (
    <div className="App">
      <Header/>
      <Banner />
      <Search />
      {/* <AllData/> */}
      <DataGrid/>
      
      
    </div>
  );
}

export default App;
