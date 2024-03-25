import {Routes, Route} from 'react-router-dom';
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import Editingtask from "./components/pages/Editingtask/Editingtask";
import "./App.css";
import AddTask from "./components/pages/addTask/addTask";
import Main from "./components/pages/Main/Main";
import Alltask from "./components/pages/Alltask/Alltask";
import Waitingwindow from "./components/pages/Waiting_window/Waiting_window";
import TaskLoad from "./components/pages/TaskLoad/TaskLoad";

function App() {
    return (
        <div id="app">
            <Routes>
                <Route exact path='/register' element={<Register text={"Регистрация"}/>}/>
                <Route exact path='/login' element={<Login text={"Вход"}/>}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route exact path='/edit' element={<Editingtask />}/>
                <Route exact path='/add_task' element={<AddTask/>}/>
                <Route exact path='/main' element={<Main/>}/>
                <Route exact path='/tasks' element={<Alltask/>}/>
                <Route exact path='/task/:id' element={<TaskLoad/>}/>
                <Route exact path='/wait' element={<Waitingwindow/>}/>
            </Routes>
        </div>
    );
}

export default App;
