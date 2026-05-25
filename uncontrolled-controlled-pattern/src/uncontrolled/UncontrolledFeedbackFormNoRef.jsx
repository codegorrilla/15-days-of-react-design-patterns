import { useState } from "react";
export default function UncontrolledFeedbackFormNoRef() {
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const form = e.target.closest("form");
    setIsFormValid(form.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      alert("Please fill in all fields");
      return;
    }

    // Use FormData API to grab values directly
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    console.log("Form data:", data);
    alert(
      `Hello ${data.name}, your email is ${data.mail} and your message is: ${data.message}`,
    );
  };

  return (
    <>
      <h2 className="font-bold mt-20">
        Feedback form with Un-controlled pattern using formData API (preferred
        way of handling smaller forms)
      </h2>
      <form
        className="flex flex-col"
        onSubmit={handleSubmit}
        onChange={handleChange}
      >
        <input
          type="text"
          name="name"
          className="border rounded-2xl p-2 my-3"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="mail"
          className="border rounded-2xl p-2 my-3"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="border rounded-2xl p-2 my-3"
          placeholder="Your message..."
          required
        ></textarea>
        <button
          type="submit"
          className="bg-purple-500 text-white rounded p-1 disabled:opacity-70"
          disabled={!isFormValid}
        >
          Submit Feedback
        </button>
      </form>
    </>
  );
}
