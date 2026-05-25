import { useState, useRef } from "react";

const FeedbackForm = () => {
  const [name, setName] = useState(""); //controlled component
  const [mail, setMail] = useState(""); //controlled component
  const messageRef = useRef(); //using ref for message

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      alert("Name required");
      return;
    }

    if (!mail.includes("@")) {
      alert("Valid Email required");
    }

    if (!messageRef.current.value) {
      messageRef.current.focus();
      return;
    }

    console.log("Form Submitted:", {
      name,
      mail,
      message: messageRef.current.value,
    });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        className="border rounded-2xl p-2 my-3"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        value={mail}
        className="border rounded-2xl p-2 my-3"
        placeholder="Email"
        onChange={(e) => setMail(e.target.value)}
      />
      <textarea
        ref={messageRef}
        className="border rounded-2xl p-2 my-3"
        placeholder="Your message..."
      ></textarea>
      <button type="submit" className="bg-purple-500 text-white rounded p-1">
        Submit Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
