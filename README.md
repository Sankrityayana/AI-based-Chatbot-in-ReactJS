# AI-based Chatbot in ReactJS

An advanced, modern, and extensible chatbot web application built with ReactJS, leveraging Google Gemini AI. This project provides a beautiful, multi-chat conversational interface suitable for embedding in web products, learning about AI chat UIs, or extending for your own needs.

---

## ✨ Features

- **Conversational AI**: Interact with an AI assistant powered by Google Gemini (Gemini 2.5 Flash).
- **Multi-Chat Support**: Manage multiple chat sessions with sidebar navigation.
- **Modern Responsive UI**: Built with React 19+, Vite, and CSS Modules. Fully responsive for desktop and mobile.
- **Markdown Rendering**: Supports formatted responses with code blocks, lists, and more.
- **Theming**: Switch between Light, Dark, or System theme.
- **Streaming Loader**: Responsive loader while waiting for AI replies.
- **Google Gemini Integration**: Out-of-the-box support for Google Generative AI via API key.
- **Easy Extensibility**: Modular component structure for rapid feature additions.

---

## 🏗️ Project Structure

```
sankrityayana-ai-based-chatbot-in-reactjs/
├── README.md
├── package.json
├── vite.config.js
├── .env.example
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assistants/
│   │   └── googleai.js
│   └── components/
│       ├── Chat/
│       │   ├── Chat.jsx
│       │   └── Chat.module.css
│       ├── Controls/
│       │   ├── Controls.jsx
│       │   └── Controls.module.css
│       ├── Loader/
│       │   ├── Loader.jsx
│       │   └── Loader.module.css
│       ├── Messages/
│       │   ├── Messages.jsx
│       │   └── Messages.module.css
│       ├── Sidebar/
│       │   ├── Sidebar.jsx
│       │   └── Sidebar.module.css
│       └── Theme/
│           ├── Theme.jsx
│           └── Theme.module.css
├── index.html
└── eslint.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or above recommended
- **npm** or **yarn**

### 1. Clone the Repository

```bash
git clone https://github.com/Sankrityayana/AI-based-Chatbot-in-ReactJS.git
cd AI-based-Chatbot-in-ReactJS
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. API Key Setup

This project uses Google Gemini AI. You must provide your API key.

- Copy `.env.example` to `.env`:
  ```bash
  cp .env.example .env
  ```
- Edit `.env` and set your API key:
  ```
  VITE_GOOGLE_AI_API_KEY=your-google-ai-api-key
  ```

### 4. Start Development Server

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:5173](http://localhost:5173) (or as shown in console).

---

## 🧩 How It Works

1. **Chat Interface**: Users type messages in the chat input. Pressing Enter sends a message.
2. **Assistant Integration**: Messages are sent to the Google Gemini model via the Assistant class (`src/assistants/googleai.js`), using your API key.
3. **Streaming Response**: While the AI processes your request, a loader is shown. Once the AI replies, the response appears in the chat window.
4. **Chats Sidebar**: Create new chats or switch between existing ones. Each chat maintains its own message history and title.
5. **Theming**: Use the theme switcher at the bottom to toggle between system, light, or dark themes.

---

## 🛠️ Customization & Extending

- **Change Assistant Model**: Edit the `model` argument in `src/assistants/googleai.js`'s `Assistant` constructor.
- **Add More Providers**: Implement new assistants in `src/assistants/` and swap in `App.jsx`.
- **Style Customization**: All component CSS is in `src/components/*/*.module.css` and `src/App.module.css`.
- **UI Components**: You can easily add new features by extending the components in `src/components/`.

---

## 📦 Deployment

Build the app for production:

```bash
npm run build
# or
yarn build
```

You can then deploy the contents of the `dist/` folder to any static hosting provider (Vercel, Netlify, GitHub Pages, etc.).

---

## 📝 Example Environment File

```
VITE_GOOGLE_AI_API_KEY=your-google-ai-api-key
```
> Never commit your real API key to a public repository.

---

## 🧪 Tech Stack

- **React 19**
- **Vite**
- **CSS Modules**
- **Google Generative AI SDK**
- **ESLint** (with recommended React config)

---

## 🤝 Contributing

Contributions, bug reports, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source; see the repository for license details or add a license of your choice.

---

## 🙋 FAQ

**Q: Do I need a backend?**  
A: No backend is required; all API calls are made directly from the browser to Google Gemini.

**Q: Can I use another AI provider?**  
A: Yes! Add another assistant class in `src/assistants/` and update the app.

**Q: How do I change the theme?**  
A: Use the dropdown in the bottom right to switch between system, light, or dark.

---

## 👤 Author

- GitHub: [Sankrityayana](https://github.com/Sankrityayana)

---

If you found this project useful, please ⭐ star the repo and share your feedback!
