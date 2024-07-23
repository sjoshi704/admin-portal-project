import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Paper from '@mui/material/Paper';



function App() {
  return (
    <div className="App">
      <div className='app-component mt-5'>
        <Paper elevation={3} className="bg-danger text-white">
          MUI PAper
        </Paper>
      </div>
    </div>
  );
}


export default App;
