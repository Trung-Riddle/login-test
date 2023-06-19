import { Outlet, Link } from 'react-router-dom'
import { path } from 'src/utils/routesPath'
const Public = () => {
  return (
    <div>
      {/* <nav className='text-red-500'>
        <ul>
          <li>
            <Link to={path.HOME}>Home</Link>
          </li>
          <li>
            <Link to={path.LOGIN}>Login</Link>
          </li>
          <li>
            <Link to={path.REGISTER}>Register</Link>
          </li>
        </ul>
      </nav> */}
      <Outlet />
    </div>
  )
}

export default Public
