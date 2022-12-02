import './App.css';
import { Link, Outlet } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link className='App-link' to={"/"}>Forum Assessment</Link>
        </h1>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
