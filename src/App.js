import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/homepage/homepage';
import Profile from './components/profile-page/profile';
import Content from './content';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route index element={<Profile name={Content.name} icon={Content.profile_icon} />} />
          <Route path="/browse" element={<Home content={Content}/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
