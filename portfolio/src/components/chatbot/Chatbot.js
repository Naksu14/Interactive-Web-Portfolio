// import React, { useState, useEffect } from "react";
// import { sendToGemini } from "./chatbotService";
// import { MessageCircle } from "lucide-react";
// import chatbotLogo from '../../assets/commonIcons/brown-logo.png';
// import send from "../../assets/commonIcons/sendm.png";

// const portfolioContext = `
//   You are a helpful assistant on a developer portfolio website. Here is the portfolio information:
//   - Beki: lance at Fred
//   - Name: Loel Campaña
//   - Role: Full-stack Developer
//   - Projects:
//     1. Cowork Central: Web-based reservation system with contract monitoring and SMS/email notifications.
//     2. Uniform Queue System: Arduino-powered queue management system for school uniforms.
//     3. SAAD Capstone: Workspace and virtual office management platform.
//   - Skills: React, Tailwind, Node.js, Firebase, MySQL, Arduino
//   - Contact: ic.loel.campana@cvsu.edu.ph
//   When asked about the developer, use this information in your answers.

// `;

// const Chatbot = () => {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   const handleSend = async () => {
//     if (!input.trim()) return;

//     const userMessage = { role: "user", content: input };
//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const fullPrompt = `${portfolioContext}\n\nUser: ${input}`;
//       const reply = await sendToGemini(fullPrompt);
//       const botMessage = { role: "assistant", content: reply };
//       setMessages((prev) => [...prev, botMessage]);
//     } catch (err) {
//       console.error("Gemini API Error:", err);
//     }
//   };

//   useEffect(() => {
//     // Default system message
//     setMessages([{ role: "system", content: "Hi! How can I help you today?" }]);
//   }, []);

//   return (
//     <div className="fixed bottom-[50px] right-20 z-50 ">
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="bg-[#646464] text-white px-6 py-3 rounded-t-3xl rounded-bl-3xl rounded-br-none shadow-md flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity duration-300"
//         >
//           <MessageCircle className="w-8 h-8" />
//           Let’s Talk
//         </button>
//       )}

//       {isOpen && (
//         <div className="w-80 bg-[#000000]/70 p-4 rounded-lg shadow-xl z-100 w-[400px] h-[500px] ">
//           <div className="flex justify-between items-start mb-2">
//             <div className="flex items-center gap-2 mb-2">
//               <img
//                 src={chatbotLogo}
//                 alt="Chatbot Icon"
//                 className="w-10 h-10 rounded-full bg-white"
//               />
//               <div className="text-left text-white">
//                 <h2 className="text-lg font-semibold">Chat with Us</h2>
//                 <p className="text-sm font-extralight">Powered by Google Gemini</p>
//               </div>
//             </div>

//             <div className="flex flex-col items-end">
//               <button
//                 onClick={() => setIsOpen(false)}
//                 className="text-sm text-white hover:text-red-500"
//               >
//                 ✕
//               </button>
//               <div className="flex items-center gap-1 mt-1">
//                 <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
//                 <span className="text-xs text-white">Online</span>
//               </div>
//             </div>
//           </div>

//           <div className="h-[360px] overflow-y-scroll scrollbar-hide mb-2 border-t border-b border-white/30 p-2">
//             {messages.map((msg, i) => {
//               const isUser = msg.role === "user";
//               return (
//                 <div
//                   key={i}
//                   className={`
//                     mb-2 p-2 w-auto rounded break-words
//                     ${isUser 
//                       ? "text-right ml-auto bg-[#FFFFFF] text-black rounded-t-xl rounded-bl-xl rounded-br-none" 
//                       : "text-left mr-auto bg-[#878787] text-white rounded-b-xl rounded-tr-xl rounded-tl-none"}
//                     max-w-[75%]
//                   `}
//                 >
//                   {msg.content}
//                 </div>
//               );
//             })}
//           </div>

//           <div className="flex bottom-0 text-black">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               className="flex-1 p-2 mr-2 border rounded-l "
//               placeholder="Type a message..."
//             />
//             <button onClick={handleSend} className="bg-[#868686] text-white px-3 rounded-r">
//               <img
//                 src={send}
//                 alt="Send"
//                 className="w-5 h-5 transition filter invert group-hover:invert-0"
//               />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;



import React, { useState, useEffect } from "react";
import { sendToGemini } from "./chatbotService";
import { MessageCircle } from "lucide-react";
import chatbotLogo from '../../assets/commonIcons/brown-logo.png';
import send from "../../assets/commonIcons/sendm.png";

const portfolioContext = `
  You are a helpful assistant on a developer portfolio website. Here is the portfolio information:
  - Name: Loel Campaña
  - Role: Full-stack Developer
  - Projects:
    1. Cowork Central: Web-based reservation system with contract monitoring and SMS/email notifications.
    2. Uniform Queue System: Arduino-powered queue management system for school uniforms.
    3. SAAD Capstone: Workspace and virtual office management platform.
  - Skills: React, Tailwind, Node.js, Firebase, MySQL, Arduino
  - Contact: ic.loel.campana@cvsu.edu.com
  When asked about the developer, use this information in your answers.
`;

const SESSION_KEY = "chatbot_messages";
const SESSION_EXPIRY_KEY = "chatbot_messages_expiry";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date().getTime();
    const expiry = localStorage.getItem(SESSION_EXPIRY_KEY);
    const storedMessages = localStorage.getItem(SESSION_KEY);

    if (storedMessages && expiry && now < parseInt(expiry)) {
      setMessages(JSON.parse(storedMessages));
    } else {
      const defaultMessage = [{ role: "system", content: "Hi! How can we assist you today? Ask about our projects, skills, or services! " }];
      setMessages(defaultMessage);
      localStorage.removeItem(SESSION_KEY);
      localStorage.removeItem(SESSION_EXPIRY_KEY);
    }
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(messages));
      localStorage.setItem(SESSION_EXPIRY_KEY, (new Date().getTime() + 36000000).toString());
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const fullPrompt = `${portfolioContext}\n\nUser: ${input}`;
      const reply = await sendToGemini(fullPrompt);
      const botMessage = { role: "assistant", content: reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error("Gemini API Error:", err);
    }
  };

  return (
    <div className="fixed bottom-[50px] right-20 z-50 ">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#646464] text-white px-6 py-3 rounded-t-3xl rounded-bl-3xl rounded-br-none shadow-md flex items-center gap-2 opacity-50 hover:opacity-90 transition-opacity duration-300"
        >
          <MessageCircle className="w-8 h-8" />
          Let’s Talk
        </button>
      )}

      {isOpen && (
        <div className="w-80 bg-[#000000]/70 p-4 rounded-lg shadow-xl z-100 w-[400px] h-[500px] ">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2 mb-2">
              <img
                src={chatbotLogo}
                alt="Chatbot Icon"
                className="w-10 h-10 rounded-full bg-white"
              />
              <div className="text-left text-white">
                <h2 className="text-lg font-semibold">Chat with Us</h2>
                <p className="text-sm font-extralight">Powered by Google Gemini</p>
              </div>
            </div>

            <div className="flex flex-col items-end">
              <button
                onClick={() => setIsOpen(false)}
                className="text-sm text-white hover:text-red-500"
              >
                ✕
              </button>
              <div className="flex items-center gap-1 mt-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-xs text-white">Online</span>
              </div>
            </div>
          </div>

          <div className="h-[360px] overflow-y-scroll scrollbar-hide mb-2 border-t border-b border-white/30 p-2">
            {messages.map((msg, i) => {
              const isUser = msg.role === "user";
              return (
                <div
                  key={i}
                  className={`
                    mb-2 p-2 w-auto rounded break-words
                    ${isUser 
                      ? "text-right ml-auto bg-[#FFFFFF] text-black rounded-t-xl rounded-bl-xl rounded-br-none" 
                      : "text-left mr-auto bg-[#878787] text-white rounded-b-xl rounded-tr-xl rounded-tl-none"}
                    max-w-[75%]
                  `}
                >
                  {msg.content}
                </div>
              );
            })}
          </div>

          <div className="flex bottom-0 text-black">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 p-2 mr-2 border rounded-xl "
              placeholder="Type a message..."
            />
            <button onClick={handleSend} className="bg-[#868686] text-white px-3 rounded-xl">
              <img
                src={send}
                alt="Send"
                className="w-5 h-5 transition filter invert group-hover:invert-0"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
