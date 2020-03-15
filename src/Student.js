import React from 'react';

function Student(props) {
    return (
        <div>
           <h1> Hello i'm {props.name}</h1>
    <h3>I'm {props.age}year old</h3>
    <p>{props.children}</p>
            </div>
    );
};

export default Student;