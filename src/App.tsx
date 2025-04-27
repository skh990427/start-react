import React from 'react';
import './App.css';
import MyApp from "./MyButton";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import Board from "./tictacto/Board";

function App() {
  return (
      <div>
        <MyApp/>
        <br/>
        <Profile/>
        <br/>
          <ShoppingList/>
          <Board/>
      </div>
  );
}

export default App;
