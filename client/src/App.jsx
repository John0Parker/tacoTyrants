import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hub from './views/Hub';
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/TacoTyrant/*" element={<Hub/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )//end return section
}//end app function
export default App
