import React from 'react';
import wheel from './wheel.png';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {Rooms} from "./components/Rooms";


export function App() {
    return (
        <div className="App">
            <NavBar/>
            {/*<Header/>*/}
            <header className="App-header">
                {/*<img src={wheel} className="App-logo" alt="logo"/>*/}
                <p><br/></p>
                <p>
                    <Rooms/>
                </p>
            </header>
        </div>
    );
}
