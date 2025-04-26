import React from 'react';
import './App.css';
import MyApp from "./MyButton";
import Profile from "./Profile";
import ShoppingList from "./ShoppingList";

function App() {
  return (
      <div>
        <MyApp/>
        <br/>
        <Profile/>
        <br/>
          <ShoppingList/>
      </div>
  );
}

export default App;
