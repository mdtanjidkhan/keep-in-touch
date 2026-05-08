"use client";
import { createContext, useState } from "react";
import toast from "react-hot-toast";


export const FriendContext = createContext();

const FriendsProvider = ({ children }) => {
   const [friends, setFriends] = useState([]);
   const [callCount, setCallCount] = useState(0);
   const [textCount, setTextcount] = useState(0);
   const [videoCount, setVideoCount]= useState(0);
   const handleCall = (currentCall, action) => {
      console.log(currentCall, "currentcall data")
      const newData = {
         ...currentCall,
         action:action
      }
      
         setFriends([...friends, newData])
         setCallCount((prev)=> prev + 1)
     toast.success(`Call with ${currentCall.name}`)
      
   }
   

// 
  const handleText = (currentCall, action)=>{
    console.log(currentCall, action ,'yes ')

  const newData = {
        ...currentCall,
         action:action
      }
        setFriends([...friends, newData])
         setTextcount((prev)=> prev + 1)
         toast.success(`Text with ${currentCall.name}`);

  }

  const handleVideo= (currentCall, action)=>{
   console.log(currentCall, action, 'no')
    const newData = {
        ...currentCall,
         action:action
      }
        setFriends([...friends, newData])
         setVideoCount((prev)=> prev + 1)
         toast.success(`Video Call with ${currentCall.name}`);
  }



   const data = {
      handleCall,
      friends,
      setFriends,
      handleText,
      handleVideo,
      callCount,
      textCount,
      videoCount,
     
      
   }

   return (
      <FriendContext.Provider value={data}>
         {children}
      </FriendContext.Provider>
   );
};

export default FriendsProvider;