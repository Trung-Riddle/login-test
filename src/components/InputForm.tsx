import React, { ChangeEvent, memo } from 'react'

interface InputProps {
  label: string
  type?: string
  name?: string
  value: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  className?: string
  classParent?: string
}
const InputForm: React.FC<InputProps> = ({ label, type, name, value, onChange, className, classParent }) => {
  return (
    <div className={`mt-4 flex flex-col ${classParent}`}>
      <label className='capitalize text-gray-600'>{label}</label>
      <input
        className={`${className} mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default memo(InputForm)
