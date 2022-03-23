import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List'

export interface PeopleInvited{ //interface defines certain type
  people:{ //people type with an array of objects
    name: string
    age: number
    img: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<PeopleInvited["people"]>([
    {
      name: "James",
      age: 36,
      img: "",
      note: "will arrive late"
    }
  ]) //pass the state to child component

  return (//in react we pass data for props
    <div className="App">
      <h1>People Invited</h1> 
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/> 
    </div>
  );
}
//we dont render data inside parent file instead create a child component pass data to it and render from it
export default App;
