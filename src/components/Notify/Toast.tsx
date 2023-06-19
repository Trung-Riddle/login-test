import { FC } from 'react'
import styles from './Notify.module.scss'
import icons from 'src/utils/icons'
const { VscClose } = icons

interface toastProp {
  msg?: {
    title: string
    body: string
  }
  handleShow?: () => void
  bgColor?: string
}
const Toast: FC<toastProp> = ({ msg, handleShow, bgColor }) => {
  return (
    <div className={`fixed right-5 top-5 z-50 min-w-[200px] ${bgColor}`}>
      <div className='toast-header text-white'>
        <strong className='text-xl'>{msg?.title}</strong>
        <button onClick={handleShow} data-dismiss='toast' className='close border border-slate-500'>
          <VscClose size={24} />
        </button>
      </div>
      <div className='toast-body'>{msg?.body}</div>
    </div>
  )
}

export default Toast
