import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappUrl =
    "https://wa.me/14024138592?text=Hello%2C%20I%27d%20like%20to%20chat%20with%20Venus%20Solutions%20USA%20about%20your%20services.";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
