//App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Attendence from './components/attend/Attendence';
import TodoList from './components/todo/TodoList';
import Expense from './components/Expense/Expense';
import Res from './components/Result/Res';
import Header from './components/Header';
import AppBody from './components/AppBody';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Student Organiser</h1>
        <Header/>
        
        
      </div>
      <Routes>
        <Route path="/" element={<AppBody/>}/>
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/result/*" element={<Res />} /> {/* Adjust the route path */}
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;
