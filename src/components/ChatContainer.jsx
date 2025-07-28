import { useChatStore } from "../store/useChatStore";
import MessageSkeleton from "../components/skeletons/MessageSkeleton";
import { useEffect } from "react";
import ChatHeader from "../components/ChatHeader";
import MessageInput from "../components/MessageInput";

const ChatContainer = () => {
  const { messages, getSelectedUserMessages, isMessagesLoading, selectedUser } =
    useChatStore();

  useEffect(() => {
    getSelectedUserMessages(selectedUser._id);
  }, [selectedUser._id, getSelectedUserMessages]);

  if (isMessagesLoading) {
    return (
      <div className="flex flex-1 flex-col overflow-auto">
        <ChatHeader></ChatHeader>
        <MessageSkeleton></MessageSkeleton>
        <MessageInput></MessageInput>
      </div>
    );
  }
  return (
    <div className="flex flex-1 flex-col overflow-auto">
      <ChatHeader></ChatHeader>
      <p>Messages....</p>
      <MessageInput></MessageInput>
    </div>
  );
};

export default ChatContainer;
