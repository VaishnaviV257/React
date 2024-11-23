import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center pt-4'>
        <img className="h-7"
                  alt="user"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJryFTSQUV8Zuu_EGw2iUCpMbIIKWHBl2eQ&s"
                  />
        <span className='font-bold px-2 shadow-md'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage