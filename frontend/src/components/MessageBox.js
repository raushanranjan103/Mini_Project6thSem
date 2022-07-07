import Alert from 'react-bootstrap/Alert';
//In React, we utilize props to send data from one component to another 
export default function MessageBox(props) {
  return <Alert variant={props.variant || 'info'}>{props.children}</Alert>;
}
