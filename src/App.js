import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

function App() {
  const profiles =[
    { name: "Taro", age: 10 },
    { name: "ayako", age: 5 },
    { name: "stringName", age: 5 }
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
} 
export default App;
