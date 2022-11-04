import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import RecordForm from "./components/RecordForm.js";
import RecordList from "./components/RecordList"
import ArtistList from './components/ArtistList.js';
import GenreList from './components/GenreList.js';
import OneRecord from "./components/OneRecord";
import OneArtist from './components/OneArtist.js';
import OneGenre from './components/OneGenre';
import OneYear from './components/OneYear.js';
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
import ReleaseYearList from './components/ReleaseYearList.js';
import Vinyl from './components/Vinyl.js';
import Stat from './components/Stat.js';
import CoverFlow from './components/CoverFlow.js';
// import Main from './views/Main';
function App() {
  const [ record, setRecord ] = useState({})
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Stat/> */}
      {/* <CoverFlow/> */}
      <NavBar />
        <Routes>
          <Route path="/" element={<RecordForm  />} />
          <Route path="/recordList" element={<RecordList record={record} setRecord={setRecord} />} />
          <Route path="/releaseYearList" element={<ReleaseYearList record={record} setRecord={setRecord} />} />
          <Route path="/artistList" element={<ArtistList record={record} setRecord={setRecord} />} />
          <Route path="/genreList" element={<GenreList record={record} setRecord={setRecord} />} />
          <Route path="/oneRecord/:id" element={<OneRecord />} />
          <Route path="/oneArtist/:artist" element={<OneArtist />} />
          <Route path="/oneGenre/:genre" element={<OneGenre />} />
          <Route path="/oneYear/:releaseYear" element={<OneYear />} />
          <Route path="/edit/:id" element={<EditForm record={record} setRecord={setRecord} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;