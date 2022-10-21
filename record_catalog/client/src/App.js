import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecordForm from "./components/RecordForm.js";
import RecordList from "./components/RecordList"
import OneRecord from "./components/OneRecord";
import OneArtist from './components/OneArtist.js';
import OneGenre from './components/OneGenre';
import OneYear from './components/OneYear.js';
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
import ReleaseYearList from './components/ReleaseYearList.js';
// import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<RecordForm />} />
          <Route path="/recordList" element={<RecordList />} />
          <Route path="/releaseYearList" element={<ReleaseYearList />} />
          <Route path="/oneRecord/:id" element={<OneRecord />} />
          <Route path="/oneArtist/:artist" element={<OneArtist />} />
          <Route path="/oneGenre/:genre" element={<OneGenre />} />
          <Route path="/oneYear/:releaseYear" element={<OneYear />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;