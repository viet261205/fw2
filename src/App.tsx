import './App.css';
import { useRoutes } from 'react-router-dom';
import List from './page/list';
import Add from './page/add';
import Edit from './page/edit';

const routes = [
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/add',
    element: <Add />,
  },
  {
    path: '/edit/:id',
    element: <Edit />,
  },
];

function App() {
  const element = useRoutes(routes);

  return (
    <div className="content">
    <div>{element}</div>
  </div>
  // 
  // 
  );
}

export default App;
