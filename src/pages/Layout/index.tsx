import { Outlet } from 'react-router-dom';
import './styles.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Outlet />
    </div>
  )
}

export default Layout;
