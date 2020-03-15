import React, { useState} from 'react';
import './App.css';
import Student from'./Student'; 
function App() {
  const [students, setStudents] = useState([
    {name:"azimbai", age: 30 },
    {name:"azim", age: 20 },
    {name:"azimbek", age: 18 },
  ]);
  function ChangeMyName() {
    const newStudent = [...students];
newStudent[0].name = "Joldosh";
setStudents[0].name = [...students];
  };
return (
    <div className="App">
    <h1>Hello World</h1> 
    <button>Change my name</button>
     <Student name ={students[0].name} age={students[0].age}>
       I love fishing..
     </Student>
     <Student name ={students[1].name} age={students[1].age}>
       I love fishing..
     </Student>
     <Student name ={students[2].name} age={students[2].age}>
       I love fishing..
     </Student>
    </div>
  );
}

export default App;
