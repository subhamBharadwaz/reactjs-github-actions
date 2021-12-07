import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

function DashboardPage() {
  return (
    <div>
      <h1>DashboardPage</h1>
    </div>
  );
}

export default App;
