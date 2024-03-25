import {Routes, Route} from 'react-router-dom';
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import Profile from "./components/pages/Profile/Profile";
import Editingtask from "./components/pages/Editingtask/Editingtask";
import "./App.css";
import AddTask from "./components/pages/addTask/addTask";

function App() {
    return (
        <div id="app">

            <Routes>
                <Route exact path='/register' element={<Register text={"Регистрация"}/>}/>
                <Route exact path='/login' element={<Login text={"Вход"}/>}/>
                <Route exact path='/profile' element={<Profile />}/>
                <Route exact path='/edit' element={<Editingtask />}/>
                <Route exact path='/add_task' element={<AddTask/>}/>
                {/*<Route exact path='/tasks' element={<Ta text={"Регистрация"}/>}/>*/}
            </Routes>

        </div>
    );
}

export default App;
