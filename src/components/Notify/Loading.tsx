import styles from './Notify.module.scss'

const Loading = () => {
  return (
    <div className={`${styles.loading} fixed left-0 top-0 h-screen w-screen bg-[#0005] text-center text-white`}>
      <svg width='205' height='250' viewBox='0 0 40 50'>
        <polygon stroke='#fff' strokeWidth='1' fill='none' points='20,1 40,40 1,40' />
        <text fill='#fff' x='5' y='47'>
          Loading
        </text>
      </svg>
    </div>
  )
}

export default Loading
