import { useState, useRef } from "react";

export default function ControlledFeedbackForm() {
  const [form, setForm] = useState({ name: "", mail: "", message: "" });

  const nameRef = useRef();
  const mailRef = useRef();
  const messageRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name) {
      alert("Name required");
      nameRef.current.focus();
      return;
    }

    if (!form.mail.includes("@")) {
      alert("Valid Email required");
      mailRef.current.focus();
      return;
    }

    if (!form.message) {
      messageRef.current.focus();
      alert("Message can not be blank");
      return;
    }
    console.log("Form subbmitted: ", form);

    setForm({ name: "", mail: "", message: "" });
  };

  return (
    <>
      <h2 className="font-bold">
        Feedback form with Controlled pattern using useState() hook
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          ref={nameRef}
          value={form.name}
          className="border rounded-2xl p-2 my-3"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="email"
          name="mail"
          ref={mailRef}
          value={form.mail}
          className="border rounded-2xl p-2 my-3"
          placeholder="Email"
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={form.message}
          ref={messageRef}
          className="border rounded-2xl p-2 my-3"
          placeholder="Your message..."
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="bg-purple-500 text-white rounded p-1">
          Submit Feedback
        </button>
      </form>
    </>
  );
}
