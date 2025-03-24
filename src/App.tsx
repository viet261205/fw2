import './App.css';
import { useRoutes } from 'react-router-dom';
import List from './page/list';
import Add from './page/add';
import Edit from './page/edit';
import Home from './page/home';
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';
// import Layout from './components/layout/Layout';

const routes = [
  {
    path: '/',
    element: <List />,
  },
  {
    path: '/home',
    element: <Home />,
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
    <div className="">
      <main className="flex-grow">{element}</main>
    </div>
  );
}

export default App;
