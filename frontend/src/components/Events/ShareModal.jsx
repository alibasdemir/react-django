import React from "react";
import { FaWhatsapp, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const ShareModal = ({ isOpen, onClose, event }) => {
  const eventUrl = "URL of the event"; // Etkinliğin URL'sini buraya ekleyin

  const shareOnWhatsApp = () => {
    const whatsappMessage = `Check out this event: ${event.name}\n${eventUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappUrl);
  };

  const shareOnTwitter = () => {
    const twitterMessage = `Check out this event: ${event.name}\n${eventUrl}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      twitterMessage
    )}`;
    window.open(twitterUrl);
  };

  const shareOnLinkedIn = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      eventUrl
    )}`;
    window.open(linkedinUrl);
  };

  const shareOnInstagram = () => {
    // Instagram'da paylaşım için resmi bir API olmadığı için
    // genellikle paylaşımı kullanıcıların kendileri yapar
    alert(
      "To share on Instagram, open the Instagram app and upload the event image along with the event URL."
    );
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white w-96 p-4 rounded-lg shadow-lg z-10 h-44 flex items-center justify-center flex-col">
        <h3 className="text-base font-semibold mb-4">Share with friends...</h3>
        <div className="flex space-x-4">
          <button onClick={shareOnWhatsApp}>
            <FaWhatsapp className="text-green-400 text-2xl cursor-pointer" />
          </button>
          <button onClick={shareOnTwitter}>
            <FaTwitter className="text-blue-400 text-2xl cursor-pointer" />
          </button>
          <button onClick={shareOnLinkedIn}>
            <FaLinkedin className="text-blue-800 text-2xl cursor-pointer" />
          </button>
          <button onClick={shareOnInstagram}>
            <FaInstagram className="text-pink-600 text-2xl cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareModal;
