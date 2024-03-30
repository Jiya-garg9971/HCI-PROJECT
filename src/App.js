import React from 'react';
import { createBrowserRouter,Link,RouterProvider } from 'react-router-dom';
import './App.css';
import Attendence from './components/attend/Attendence';
import TodoList from './components/todo/TodoList';
import Expense from './components/Expense/Expense';

function App() {
  const Layout = () => {
    return (
      <div className="App">
        <h1>Student Organiser</h1>
       <Link to="/result"><button>RESULT TRACKER</button></Link> 
       <Link to="/attendence"> <button>ATTENDENCE TRACKER</button></Link> 
        <Link to="/expense"><button>EXPENSE TRACKER</button></Link> 
       <Link to="/todo"> <button>TASK SCHEDULE</button></Link> 
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path:"/attendence",
      element:<Attendence/>
    },
     {
      path:"/todo",
      element:<div className='todopage'><TodoList/></div>
    },
    {
      path:"/result",
      element:<div>REsult</div>
    },
    {
      path:"/expense",
      element:<Expense/>
    }
  ])
 return <RouterProvider router={router} />;
}

export default App;
