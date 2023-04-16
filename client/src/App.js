import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserToken from './hooks/userToken';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {


  const [token] = UserToken()
  console.log(token?.token,'token')


 const {modal} = useSelector(state=>state.modal)


 //ben burada hata aldigimdan adolayi token yokmuisg gibi yaptom hatayi bulacam

  return (
    <div>
      
      <BrowserRouter>
    
      {!token?.token &&<Navbar/>}
      {modal && <Modal/>}
     
      <Routes>
      <Route path='/' element={!token?.token ? <Home/> : <Link to={'/auth'}/>}/>
        <Route path='/auth' element={<Auth/>}/>
        
      </Routes>
      
      </BrowserRouter>    
      <ToastContainer />  
    </div>
  );
}

export default App;
