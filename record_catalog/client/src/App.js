import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RecordForm from "./components/RecordForm.js";
import RecordList from "./components/RecordList"
import OneRecord from "./components/OneRecord";
import NavBar from "./components/NavBar";
import EditForm from "./components/EditForm";
// import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<RecordForm />} />
          <Route path="/recordList" element={<RecordList />} />
          <Route path="/oneRecord/:id" element={<OneRecord />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;