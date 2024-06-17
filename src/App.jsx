
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './App.css'

function App() {

  return (
    <>
    <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type='text' placeholder="Ingrese nombre"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Edad</Form.Label>
          <Form.Control type='number' placeholder="Ingrese edad"/>
        </Form.Group>
        <Button type="submit">Submit</Button>
    </Form>
    </>
  )
}

export default App
