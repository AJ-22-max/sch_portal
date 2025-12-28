import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Authentication Pages/Login';
import SignUp from '../pages/Authentication Pages/SignUp';
import ForgotPassword from '../pages/Authentication Pages/ForgotPassword';

function AuthRoutes() {
    return (
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
        </Routes>
    );
}

export default AuthRoutes;
