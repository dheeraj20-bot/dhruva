// components/Chatbot.tsx
"use client"

import { useEffect } from 'react';

declare global {
    interface Window {
        $crisp: any[];
      CRISP_WEBSITE_ID?: string;
    }
  }

const Chatbot: React.FC = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "8f35bbec-94fc-4fd7-bb8c-b611e5e41528";
    (function () {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return null; // Chatbot doesn't render anything visible
};

export default Chatbot;
