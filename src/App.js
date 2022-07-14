import React from "react";
import RoutesApp from "./routes";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer autoClose={1000} />
            <RoutesApp />
        </div>
    );
};

export default App;
