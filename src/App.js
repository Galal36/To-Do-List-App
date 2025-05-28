import { Routes, Route } from 'react-router-dom';
import LoginForm from './components/Log_In/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import TodoPage from './components/ToDo/TodoPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/todo" element={<TodoPage />} />
      </Routes>
    </div>
  );
}




export default App;