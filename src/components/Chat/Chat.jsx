import styles from "./Chat.module.css";

const WELCOME_MESSAGE = {
    role: "assistant",
    content: "Welcome to the AI Chatbot! How can I assist you today?"
};

export function Chat({ messages = [] }) {
    return (
        <div className={styles.Chat}>
        {[WELCOME_MESSAGE, ...messages].map(({ role, content }, index) => {
            return (
            <div key={index} className={styles.Message} data-role={role}>
                {content}
            </div>
            );
        })}
        </div>
    )
}