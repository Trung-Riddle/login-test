/* eslint-disable react/jsx-no-comment-textnodes */
import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import InputForm from '../../components/InputForm'
import { path } from 'src/utils/routesPath'
import { login } from 'src/store/actions/authAction'
import { useDispatch } from 'react-redux'
import { Dispatch } from 'redux'
import styles from './Login.module.scss'
import icons from 'src/utils/icons'
const { FaRegEyeSlash, BiShowAlt } = icons
const Login = () => {
  const initialState = { email: '', password: '' }
  const [userData, setUserData] = useState(initialState)
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const { email, password } = userData

  const dispatch = useDispatch<Dispatch<any>>()
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login(userData))
  }
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev)
  }
  return (
    <div className={styles.formlogin}>
      <form onSubmit={handleSubmit} className='flex w-[400px] flex-col rounded-md border p-3'>
        <h1 className='text-center text-2xl text-red-500'>Login Account</h1>
        <InputForm label='email' type='text' name='email' value={email} onChange={(e) => handleChangeInput(e)} />
        <div className={styles['input-pass']}>
          <InputForm
            label='password'
            name='password'
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => handleChangeInput(e)}
          />
          <small onClick={handleShowPassword} className={styles['btn-show-hide']}>
            {showPassword ? <BiShowAlt size='20' /> : <FaRegEyeSlash size='20' />}
          </small>
        </div>
        <button
          className={`btn-submit mt-6 rounded border border-blue-500 bg-transparent px-4 py-2 font-semibold text-blue-700 ${
            email && password
              ? 'cursor-pointer transition-all duration-300 hover:border-transparent hover:bg-blue-500 hover:text-white'
              : ''
          }`}
          disabled={email && password ? false : true}
          type='submit'
        >
          Submit
        </button>
        <p className='my-4 mt-6'>
          Bạn chưa có tài khoản?{' '}
          <Link className='text-blue-700' to={path.REGISTER}>
            Đăng Ký Ngay
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Login
