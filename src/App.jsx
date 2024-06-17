
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'
import { useState } from 'react';

function App() {
  const [students, setStudents]=useState([]);
  const [name,setName]=useState('');
  const [age, setAge]=useState('');
  const handleSubmit=(event)=>{
    event.preventDefault();
    setStudents([...students,{name,age}])
    console.log(students)
    setName('')
    setAge('')
  }


  return (
    <>
    <Form onSubmit={handleSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='text' placeholder="Ingrese nombre" value={name} onChange={(e)=>setName(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control type='number' placeholder="Ingrese edad"value={age} onChange={(e)=>setAge(e.target.value)}/>
        </Form.Group>
        <Button type="submit">Submit</Button>
        
    </Form>
    </>
  )
}

export default App
