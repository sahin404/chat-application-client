import { useChatStore } from "../store/useChatStore"
import MessageSkeleton from '../components/skeletons/MessageSkeleton';
import { useEffect } from "react";
import ChatHeader from '../components/ChatHeader';
import MessageInput from '../components/MessageInput';

const ChatContainer = () => {
  const {messages, getSelectedUserMessages, isMessagesLoading, selectedUser} = useChatStore();
  
  useEffect(()=>{
    getSelectedUserMessages(selectedUser._id);
  },[selectedUser._id, getSelectedUserMessages]);

  if(isMessagesLoading){
    return <MessageSkeleton></MessageSkeleton> 
  }
  return (
    <div className="w-full">
        <ChatHeader></ChatHeader>
        <p>Messages....</p>
        <MessageInput></MessageInput>
    </div>
  )
}

export default ChatContainer