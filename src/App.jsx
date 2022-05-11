import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from "little-state-machine-devtools";
import './App.css'

import Home from './components/Home/Home.jsx';

function App() {
    createStore({
        yourDetails: {
            sede: "",
            location: "",
            documentType: "",
            nDocument: "",
            firstName: "",
            secondName: "",
            lastName: "",
            secondLastName: "",
        }
    });

    return (
        <div className="App">
            <StateMachineProvider>
                <DevTool />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </StateMachineProvider>
        </div>
    )
}

export default App
