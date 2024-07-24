import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { LoginComponent } from './Auth/LoginComponent';
import { PagesComponent } from './Pages/PagesComponent';
import { Navigate, Route, Routes } from 'react-router-dom';
import useAuth from './CustomHooks/UseAuth';

function App() {
  const isAuthenticated =useAuth()
  console.log(isAuthenticated)
  return (
    <div className="App">
      <div className='app-component mt-2'>
        <Routes>
        <Route path="/" element={ <Navigate to={"/login"} replace={true}/> }>  </Route>

          <Route path="login" element={ <LoginComponent> </LoginComponent>}>  </Route>
          <Route path="pages/*" element={  <PagesComponent> </PagesComponent>}>  </Route>
       
        </Routes>
     
     
      </div>
    </div>
  );
}


export default App;
