import './App.css';
import { useState} from 'react';
import Leftpannel from './components/Leftpannel';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Open from './components/Open';
import Play from './components/Play';
import { Routes, Route } from "react-router-dom";
import Showtracks from './components/Showtracks';
import Searchpage from './components/Searchpage';
import Library from './components/Library';


function App() {
  const[trackslist,setTrackslist]=useState(['']);
  const[actvstate,setActivestate]=useState(0);
  const [current_track,setCurrent_track]=useState({});
  const [searchvalue,setSearchvalue]=useState('');

  return (
    <>
    <Routes>
      <Route exact path='*' element={
      <div className='top'>
      <Leftpannel state={'home'}/>
      <div>
      <Navbar bgcolor='rgba(28,14,67,255)' display={'none'}/>
      <Main className='main' trackfn={setTrackslist} />
      </div>
      </div>
      }/>
      <Route path='/search' element={
        <div className='top'>
        <Leftpannel state={'search'}/>
        <div>
        <Navbar bgcolor='rgba(18,19,19,255)' display={'block'} setSearchvalue={setSearchvalue}/>
        <Searchpage search={searchvalue} current_track={current_track} trackfn={setTrackslist} track={trackslist} actvfn={setActivestate} setSearchvalue={setSearchvalue} />
        </div>
        </div>
      }/>
      <Route path='/library' element={
        <div className='top'>
        <Leftpannel state={'library'}/>
        <div>
        <Navbar bgcolor='rgba(18,19,19,255)' display={'none'}/>
        <Library/>
        </div>
        </div>
      }/>
      <Route path='/info' element={
        <div className='top'>
        <Leftpannel state={'none'}/>
        <div>
        <Navbar display={'none'}/>
        <Open current_track={current_track} trackfn={setTrackslist} track={trackslist} actvfn={setActivestate}/>
        </div>
        </div>
      }/>
      <Route path='/currenttrack' element={
        <div className='top'>
        <Leftpannel state={'none'}/>
        <div>
        <Navbar bgcolor='rgba(19,18,19,255)' display={'none'}/>
        <Showtracks current_track={current_track} trackfn={setTrackslist} track={trackslist} actvfn={setActivestate}/>
        </div>
        </div>
      }/>
    </Routes>
    <Play tracklist={trackslist} actv={actvstate} current_track={current_track} setCurrent_track={setCurrent_track} />
    </>
  );
}


export default App;
