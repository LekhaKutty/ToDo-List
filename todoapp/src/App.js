import React from 'react';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="mb-5">To Do App</h1>
        <div className="row">
          < Todo />
          < TodoList />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
