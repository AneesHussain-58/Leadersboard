import React from 'react';
import './styles.css';
import Student from './components/Student';

export default function App() {
  return (
    <div className="App">
      <h1 className="leadersboardHeading">Leadersboard</h1>
      <Student name="Anees Hussain" university="MUET Jamshoro" score={400} />
      <Student name="Sarwan Hussain" university="MUET Jamshoro" score={408} />
      <Student name="Usama Shaikh" university="MUET Jamshoro" score={413} />
      <Student name="Ahmed Ali" university="MUET Jamshoro" score={420} />
      <Student name="Saeed Hassan" university="MUET Jamshoro" score={430} />
      <Student name="Yameen Lund" university="MUET Jamshoro" score={445} />
    </div>
  );
}