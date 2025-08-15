import React, { useState } from 'react';
import { Chat } from './components/Chat/Chat';
import styles from './App.module.css';
import { Controls } from './components/Controls/Controls';

function App() {
  const [messages, setMessages] = useState([]);

  function handleContentSend(content) {
    setMessages((prevMessages) => [
      ...prevMessages,
      {content, role: 'user'}
    ])
  }

  return (
    <div>
      <header className={styles.Header}>
      <img className={styles.Logo} src="/chatbot_logo.png" />
      <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls onSend={handleContentSend} />
    </div>

  )
}

export default App
