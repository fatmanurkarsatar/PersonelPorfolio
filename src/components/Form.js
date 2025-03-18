"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !message) {
      setStatus("Lütfen tüm alanları doldurunuz.");
      return;
    }

    // form gönderimi
    setStatus("Mesajınız için teşekkür ederim kısa sürede dönüş yapacağım.");

    // form gönderildikten sonra inputları temizle
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto mt-8 p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">
        Bana Ulaşın
      </h2>

      <div className="mb-4 text-gray-500">
        <label className="block text-sm font-bold mb-2" htmlFor="name">
          İsim ve Soyisim
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="İsminiz ve soyisminizi giriniz"
        />
      </div>

      {/* Email Field */}
      <div className="mb-4 text-gray-500">
        <label className="block text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email adresinizi giriniz"
        />
      </div>

      {/* Message Field */}
      <div className="mb-4 text-gray-500">
        <label className="block text-sm font-bold mb-2" htmlFor="message">
          Mesaj
        </label>
        <textarea
          id="message"
          className="w-full px-4 py-2 border rounded-md"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı buraya yazınız"
        />
      </div>

      {/* Status Message */}
      {status && <p className="text-center text-green-500 mb-4">{status}</p>}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-pink-500 text-white py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
