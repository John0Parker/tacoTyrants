import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Home from './views/Home';
import MenuView from './views/MenuView';
import Hub from './views/Hub';
import ReviewsDisplay from './views/ReviewsDisplays'


import './App.css'

function App() {


  return (
    <>
      <BrowserRouter basename='/tacotyrants'>
      {/* Include your views file as a component in the array of elements */}
        <Routes>
{/*           <Route path="/HomePage/*" element={<Hub/>,<ReviewsDisplay/>}/>  commented out since other option works better, change if needed*/}

          <Route path='/*' element={[<Home/>, <MenuView/>, <Hub/>,<ReviewsDisplay/> ]}/>
        </Routes>
      </BrowserRouter>
    </>
  )//end return section
}//end app function
export default App
