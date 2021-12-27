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
import Product from './views/Product';
import Game from"./views/Game";
import GlobalWrapper from "./views/GlobalWrapper";
import { Provider } from "react-redux";
import { store } from './Store/store';
import Redux from "./views/Redux";
import ReduxTest from "./views/ReduxTest";


function App() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <GlobalWrapper>
            <Routes>
                <Route path="firebase" element={<Firebase />} />
                <Route exact path="/" element={<Homepage />} />
                <Route path="login" element={<Login />} />
                <Route path="create-account" element={<CreateAccount />} />
                <Route path="forgot-password" element={<ForgotPassword/>} />
                <Route path="products" element={<Products />} />
                <Route path="game" element={<Game/>} />
                <Route path="redux" element={<Redux/>}/>
                <Route path="redux-test" element={<ReduxTest/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </GlobalWrapper>
        </BrowserRouter>
</Provider >
    );
}

export default App;