import React from 'react';
import './App.css';

function App() {
  const profiles =[
    { name: "Taro", age: 10 },
    { name: "ayako", age: 5 },
    { name: "noName" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) => {
return <div>Hi, I am {props.name}, and {props.age} years old</div>
}
User.defaultProps = {
  age: 1
}
export default App;
