import React from 'react';
import './App.css';
import MyApp from "./MyButton";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";
import Sqaure from "./tictacto/Square";

function App() {
  return (
      <div>
        <MyApp/>
        <br/>
        <Profile/>
        <br/>
          <ShoppingList/>
          <Sqaure/>
      </div>
  );
}

export default App;
