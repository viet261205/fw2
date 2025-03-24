import './App.css';
import { useRoutes } from 'react-router-dom';
import List from './page/list';
import Add from './page/add';
import Edit from './page/edit';
import Home from './page/home';

const routes = [
  { path: '/', element: <List /> },
  { path: '/home', element: <Home /> },
  { path: '/add', element: <Add /> },
  { path: '/edit/:id', element: <Edit /> },
];

function App() {
  const element = useRoutes(routes);

  return (
    <div className="content">
      <main className="flex-grow">{element}</main>
    </div>
  );
}

export default App;
