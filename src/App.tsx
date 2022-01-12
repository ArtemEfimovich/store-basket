import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import RouteComponent from "./routes/RouteComponent";

function App() {
    return (
        <div className="App">
            <Header/>
            <RouteComponent/>
        </div>
    );
}

export default App;
