import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
     <div className="content">
       <Header/>
       <Navbar/>
       <Profile/>
     </div>
  );
}

export default App;
