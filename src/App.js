import './App.css';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import NewsCompNew from './components/NewsCompNew';
import NewsCompSearch from './components/NewsCompSearch';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [progress, setProgress] = useState(0)

  const toggle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#3e4041';
      document.body.style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
    }

  return (
    <Router>
    <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
    />
    <NavBar mode={mode} toggle={toggle}/>
    <div className='container-fluid'>
      <Routes>
      <Route path="/" element={<NewsComp mode={mode} setProgress={setProgress} key="home" category="general"/>}/>
      <Route path="/new" element={<NewsCompNew mode={mode} setProgress={setProgress} key="business" category="business"/>}/>
      <Route path="/search" element={<NewsCompSearch mode={mode} setProgress={setProgress} key="entertainment" category="entertainment"/>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
