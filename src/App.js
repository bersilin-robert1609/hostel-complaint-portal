import React from 'react';
import "./App.css";
import Portal from './modules/Portal';
// import Home from './modules/Home';
import Navbar from "./modules/Navbar";

export default function App() {
  return (
    <div>
      <Navbar page="Home"/>
      <Portal />
    </div>
  );
}
