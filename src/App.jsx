import React, { useState } from 'react';
import { Chat } from './components/Chat/Chat';
import { Assistant } from './assistants/googleai'; 
import styles from './App.module.css';
import { Controls } from './components/Controls/Controls';
import { Loader } from './components/Loader/loader';

function App() {
  const assistant = new Assistant();
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: 'user' });
    setIsLoading(true);
    try {
      const aireply  = await assistant.chat(content);
      addMessage({ content: aireply, role: 'assistant'});
    } catch (error) {
      console.error('Error generating content:', error);
      addMessage({ content: 'Sorry, I could not process your request. Please try again', role: 'system' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.App}>
      {isLoading && <Loader />}
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
