import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Loading from './Loading'
import Toast from './Toast'
import { TYPES } from 'src/store/actions/actionTypes'

const Notify = () => {
  const { notify } = useSelector((state: any) => state)
  // const [showLoading, setShowLoading] = useState<boolean>(false)
  const dispatch = useDispatch()
  // useEffect(() => {
  //   const loadingTimer = setTimeout(() => {
  //     setShowLoading(false)
  //   }, 1000)

  //   if (notify.loading) {
  //     setShowLoading(true)
  //   }

  //   return () => {
  //     clearTimeout(loadingTimer)
  //   }
  // }, [notify.loading])
  return (
    <div>
      {notify.loading && <Loading />}

      {notify.error && (
        <Toast
          handleShow={() => dispatch({ type: TYPES.NOTIFY, payload: {} })}
          msg={{ title: 'Error Notification', body: notify.error }}
          bgColor='bg-rose-400'
        />
      )}

      {notify.success && (
        <Toast
          handleShow={() => dispatch({ type: TYPES.NOTIFY, payload: {} })}
          msg={{ title: 'Success Notification', body: notify.success }}
          bgColor='bg-lime-600'
        />
      )}
    </div>
  )
}

export default Notify
