import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { path } from './utils/routesPath'
import Public from './pages/Public/Public'
import { Login, Register, Home } from 'src/pages'
import Notify from './components/Notify'
import { useAppDispatch, useAppSelector } from './store/reducers/hooks'
import { refreshToken } from './store/actions/authAction'
import { useEffect } from 'react'
import { Dispatch } from 'redux'
import { useDispatch } from 'react-redux'

function App() {
  const { auth } = useAppSelector((state) => state)
  const dispatch = useDispatch<Dispatch<any>>()
  useEffect(() => {
    dispatch(refreshToken())
  }, [])
  return (
    <BrowserRouter>
      <input type='checkbox' id='theme' hidden />
      <Notify />
      <div className='App'>
        <div className='main'>
          <Routes>
            <Route path={path.PUBLIC} element={<Public />}>
              <Route path={path.LOGIN_HOME} element={auth.token ? <Home /> : <Login />} />
              <Route path={path.REGISTER} element={<Register />} />

              <Route path={path.MORE} element={<Home />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
