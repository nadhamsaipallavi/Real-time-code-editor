import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './componets/Home';
import Editorpage from './componets/Editorpage';
import Home2 from './componets/Home2';
import Room from './componets/Room';

function App() {
  return (
   <>
       <BrowserRouter>
         <Routes>
         <Route path="/home" element={<Home />}/>
         <Route path="/editor/:roomId" element={<Editorpage />}></Route>
         <Route path="/home2" element={<Home2 />}></Route>
         <Route path="/room" element={<Room />}></Route>
         </Routes>

       </BrowserRouter>

   </>
  );
}

export default App;
