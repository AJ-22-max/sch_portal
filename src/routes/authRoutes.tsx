import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication Pages/Login';
import SignUp from '../pages/Authentication Pages/SignUp';

function AuthRoutes() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
        </Routes>
    );
}

export default AuthRoutes;