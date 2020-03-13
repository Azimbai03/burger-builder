import React from 'react';


function Student(props) {
    return (
        <div>
           <h1> Hello i'm {props.name}   {}I'm {props.age}</h1>
    <p>{props.children}</p>
            </div>
    );
};



export default Student;