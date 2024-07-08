import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateUser from './comp/UpdateUser';
import CreateUser from './comp/CreateUSer';
import User from './comp/User';

function App() {

  return (
    <div >
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<User/>}></Route>
      <Route path='/create' element={<CreateUser/>}></Route>
      <Route path='/update/:id' element={<UpdateUser/>}></Route>

     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;