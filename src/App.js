
import './App.css';

function Person(props){

  return(
<>
<h1>Name: {props.name} </h1>
<h1>lastName: {props.lastName} </h1>

</>
  )
}



function App() {
return (
    <>
   <Person name="john" 
   lastName ='master'/>
    </>
  );
}

export default App;
