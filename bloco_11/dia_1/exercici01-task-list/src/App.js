import logo from './logo.svg';
import './App.css';


const task = (values) => {
  return (
    <li>{values}</li>
  );
}

const taskList = [
  'JavaScript', 'HTML', 'CSS'
]

function App() {
  return (
    <div>
      {taskList.map((item) => task(item))}
    </div>
  ) 
}

export default App;
