import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import Login from './views/Login';
import Homepage from './views/Homepage';
import NotFound from './views/NotFound';
import CreateAccount from "./views/CreateAccount";
import ForgotPassword from "./views/ForgotPassword";
import Game from"./views/Game";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="create-account" element={<CreateAccount />} />
                <Route path="forgot-password" element={<ForgotPassword/>} />
                <Route path="game" element={<Game/>} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;