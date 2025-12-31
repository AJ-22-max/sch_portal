import { Routes, Route } from 'react-router-dom';
import SignUp from '../pages/Authentication Pages/SignUp';

function AuthRoutes() {
    return (
        <Routes>
            <Route path='signup' element={<SignUp />} />
        </Routes>
    );
}

export default AuthRoutes;
