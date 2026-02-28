import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChat = () => {
    window.open(
      "https://web.whatsapp.com/send?phone=14024138592&text=Hello%2C%20I%27d%20like%20to%20chat%20with%20Venus%20Solutions%20USA%20about%20your%20services.",
      "whatsapp-chat",
      "width=900,height=600,scrollbars=yes,resizable=yes"
    );
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chat with us"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 rounded-xl shadow-2xl overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-[#075E54] px-5 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <p className="font-semibold text-sm">Venus Solutions</p>
                  <p className="text-xs text-white/70">Typically replies within an hour</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="bg-[#ECE5DD] p-4 min-h-[140px]">
              <div className="bg-white rounded-lg p-3 shadow-sm max-w-[85%]">
                <p className="text-sm text-gray-800">
                  👋 Hello! Welcome to Venus Solutions USA. How can we help you today?
                </p>
                <p className="text-[10px] text-gray-400 mt-1 text-right">Now</p>
              </div>
            </div>

            {/* Action */}
            <div className="bg-card p-3">
              <button
                onClick={handleChat}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20BD5A] transition-colors"
              >
                <Send size={16} />
                Start Chat on WhatsApp Web
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;
