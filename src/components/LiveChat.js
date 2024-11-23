import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomNames } from '../utils/helper';

const LiveChat = () => {
    const [liveMessage,setLiveMesage]=useState("");
    const dispatch=useDispatch();
    const ChatMessags=useSelector((store)=>store.chat.messages)
    useEffect(()=>{
        const i=setInterval(()=>{
            //API POLLIG FETCH AN API AND CONVERT INTO JSON
            console.log("API polling");
            dispatch(addMessage({
                name:generateRandomNames(),
                message:"I love samantha"
            }))
        },1500)
        return ()=>clearInterval(i);
    },[])
  return (
   <div>
     <div className='w-full h-[600px] p-2 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
            {ChatMessags.map((c,index)=>(<ChatMessage key={index} name={c.name} message={c.message}/>))}
            </div>
    </div>
    <form className='w-full p-2 ml-2 border border-black' 
    onSubmit={(e)=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Vaishnavi",
            message:liveMessage
        }));
        setLiveMesage("");
    }}>
        <input value={liveMessage} onChange={(e)=>{setLiveMesage(e.target.value)}}className='w-96 px-2' type="text"/>
        <button className='px-2 mx-2 bg-green-300'>send</button>
    </form>
   </div>
  )
}

export default LiveChat