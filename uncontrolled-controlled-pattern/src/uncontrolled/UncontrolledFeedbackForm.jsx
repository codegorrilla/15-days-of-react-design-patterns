import { useRef } from "react";
export default function UnControlledFeedbackForm() {
  const nameRef = useRef();
  const mailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const mail = mailRef.current.value;
    const message = messageRef.current.value;

    if (!name) {
      nameRef.current.focus();
      alert("Name required");
      return;
    }
    if (!mail) {
      mailRef.current.focus();
      alert("Valid Email required");
      return;
    }
    if (!message) {
      messageRef.current.focus();
      alert("Message can not be blank");
      return;
    }

    console.log("Form submitted:", { name, mail, message });

    nameRef.current.value = "";
    mailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <>
      <h2 className="font-bold mt-20">
        Feedback form with Un-controlled pattern using only useRef() hook
      </h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          ref={nameRef}
          className="border rounded-2xl p-2 my-3"
          placeholder="Name"
        />
        <input
          type="email"
          name="mail"
          ref={mailRef}
          className="border rounded-2xl p-2 my-3"
          placeholder="Email"
        />
        <textarea
          name="message"
          ref={messageRef}
          className="border rounded-2xl p-2 my-3"
          placeholder="Your message..."
        ></textarea>
        <button type="submit" className="bg-purple-500 text-white rounded p-1">
          Submit Feedback
        </button>
      </form>
    </>
  );
}
