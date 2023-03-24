import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import axios from 'axios';
function Form1() {

    const [email,setEmail]=useState('ask@offerplant.com')
    const [pass,setPass]=useState('')
    const [data,setData]=useState([])

    const formsubmit  = async ()=>{
       // alert(email)
       const response = await  axios.get('https://jsonplaceholder.typicode.com/todos')
       setData(response.data)
    }

    console.log(data);
  return (
    <>
    <div className="m-3">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>{setPass(e.target.value)}} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" onClick={formsubmit}>
        Submit
      </Button>
      <div>
       
        { data.map((e)=>{return(<><p> {e.title} </p></>)})}
        
      </div>
    </Form>
    </div>
    </>
  );
}

export default Form1;