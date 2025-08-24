import { useEffect, useState } from "react";
import { Loader } from "../Loader/Loader";
import { Messages } from "../Messages/Messages";
import { Controls } from "../Controls/Controls";
import styles from "./Chat.module.css";

export function Chat({ assistant, chatId, chatMessages, onChatMessagesUpdate }) {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMessages(chatMessages);
  }, [chatId]);

  useEffect(() => {
    onChatMessagesUpdate(messages);
  }, [messages]);

  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }

  async function handleContentSend(content) {
    addMessage({ content, role: "user" });
    setIsLoading(true);
    try {
      const result = await assistant.chat(
        content,
        messages.filter(({ role }) => role !== "system")
      );

      let fullResponse = "";
      for await (const chunk of result) {
        fullResponse += chunk;
      }
      addMessage({ content: fullResponse, role: "assistant" });
    } catch (error) {
      addMessage({
        content:
          error?.message ??
          "Sorry, I couldn't process your request. Please try again!",
        role: "system",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && <Loader />}

      <div className={styles.Chat}>
        <Messages messages={messages} />
      </div>

      <Controls
        isDisabled={isLoading}
        onSend={handleContentSend}
      />
    </>
  );
}