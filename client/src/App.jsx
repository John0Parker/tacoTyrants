import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Hub from './views/Hub';
import ReviewsDisplay from './views/ReviewsDisplays'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/TacoTyrant/*" element={<Hub/>,<ReviewsDisplay/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )//end return section
}//end app function
export default App
