// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Attendence from './components/attend/Attendence';
import TodoList from './components/todo/TodoList';
import Expense from './components/Expense/Expense';
import Res from './components/Result/Res';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Student Organiser</h1>
        <Link to="/result"><button>RESULT TRACKER</button></Link> 
        <Link to="/attendence"><button>ATTENDENCE TRACKER</button></Link> 
        <Link to="/expense"><button>EXPENSE TRACKER</button></Link> 
        <Link to="/todo"><button>TASK SCHEDULE</button></Link> 
      </div>
      <Routes>
        <Route path="/attendence" element={<Attendence />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/result/*" element={<Res />} /> {/* Adjust the route path */}
        <Route path="/expense" element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;
