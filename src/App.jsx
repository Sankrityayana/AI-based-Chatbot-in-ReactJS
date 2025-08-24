import { useEffect, useMemo, useState } from "react";
import {v4 as uuidv4} from "uuid";
import { Assistant } from "./assistants/googleai";
import { Chat } from "./components/Chat/Chat";
import styles from "./App.module.css";
import { Theme } from "./components/Theme/Theme";
import { Sidebar } from "./components/Sidebar/Sidebar";

function App() {
  const assistant = new Assistant();
  const[chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(2);

  const activeChatMessages = useMemo(
    () => chats.find(({ id }) => id === activeChatId)?.messages ?? [],
    [chats, activeChatId]
  );

  useEffect(() => {
    handleNewChatCreate();
  }, []);

  function handleChatMessagesUpdate(messages) {
    const title = messages[0]?.content.split(" ").slice(0, 7).join(" ");
    
    setChats((prevChats) =>
        prevChats.map((chat) =>
            chat.id === activeChatId 
                ? { ...chat, title: chat.title ?? title, messages } 
                : chat
        )
    );
  }

  function handleNewChatCreate() {
    const id = uuidv4();

    setActiveChatId(id);
    setChats((prevChats) => [...prevChats, { id, messages: [] }]);
  }

  function handleActiveChatIdChange(id) {
    setActiveChatId(id);
    setChats((prevChats) =>
      prevChats.filter(({messages}) => messages.length > 0)
    );
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chatbot_logo.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>

      <div className={styles.Content}>
      <Sidebar
      chats={chats}
      activeChatId={activeChatId}
      activeChatMessages={activeChatMessages}
      onActiveChatIdChange={handleActiveChatIdChange}
      onNewChatCreate={handleNewChatCreate}
      />
      <main className={styles.Main}>
      <Chat 
      assistant={assistant}
      chatId={activeChatId}
      chatMessages={activeChatMessages}
      onChatMessagesUpdate={handleChatMessagesUpdate}
      />
      <div className={styles.Configuration}>
        <Theme />
      </div>
      </main>
      </div>
    </div>
  );
}

export default App;