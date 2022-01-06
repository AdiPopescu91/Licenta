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
import Firebase from './views/Firebase';
import Products from './views/Products';
import Game from"./views/Game";
import GlobalWrapper from "./views/GlobalWrapper";
import { Provider } from "react-redux";
import { store } from './store/store';
import StartGame from "./views/StartGame";
import PrivateOutlet from "./views/PrivateOutlet";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalWrapper>
                    <Routes>
                        <Route path="firebase" element={<Firebase />} />
                        <Route exact path="/home" element={<Homepage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="create-account" element={<CreateAccount />} />
                        <Route path="forgot-password" element={<ForgotPassword/>} />

                        <Route exact path="/" element={<PrivateOutlet />} >
                            <Route path="game" element={<Game/>} />
                            <Route path="start-game" element={<StartGame/>} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </GlobalWrapper>
            </BrowserRouter>
        </Provider >
    );
}

export default App;
