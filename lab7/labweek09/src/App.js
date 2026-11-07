import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [name] = useState('Alfred Ranz Navarro');
  const [school] = useState('George Brown College, Toronto');
  const [id] = useState('101571963');
  const greeting = ["Maligayang bati!", "Welcome!", "Bonjour!"]
  const [index] = useState(() => Math.floor(Math.random() * greeting.length));

  return (
    <div className="App w-full h-screen flex items-center justify-center ">
      <header className="App-header w-1/2 h-3/4 border-[#61dafb] rounded-lg mx-auto shadow-[0_0_15px_3px_#61dafb]">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="text-3xl font-bold underline">
          <Message message={greeting[index]}/> This is FullStack Development - I
        </p>
        <p>React JS Programming Week09 Lab exercise</p>
        <p>{id}</p>
        <p>{name}</p>
        <p>{school}</p>
      </header>
    </div>
  );
}

function Message(props){
  return <p>{props.message}</p>
}

export default App;
