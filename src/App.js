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


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route path="CreateAccount" element={<CreateAccount />} />
                <Route path="ForgotPassword" element={<ForgotPassword/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;