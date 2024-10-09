import ToDoList from "./components/ToDoList";
import bgImage from "./assets/bg-img.png";


function App() {
  return (
    <div className="app-container" >
      <h1 className="app-title">To Do List</h1>
      <ToDoList />
      <img src={bgImage} alt="background-image" className="app-img" />
    </div>
  );
}

export default App;