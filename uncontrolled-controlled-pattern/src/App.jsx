import React from "react";
import Counter from "./state-ref/components/Counter";
import AutoFocusInput from "./state-ref/components/AutoFocusInput";
import CounterwithRef from "./state-ref/components/CounterwithRef";
import FeedbackForm from "./messy/FeedbackForm";
import ControlledFeedbackForm from "./controlled/ControlledFeedbackForm";
import UnControlledFeedbackForm from "./uncontrolled/UncontrolledFeedbackForm";
import UncontrolledFeedbackFormNoRef from "./uncontrolled/UncontrolledFeedbackFormNoref";

const App = () => {
  return (
    <div className="w-full flex-col justify-center items-center p-10">
      <ControlledFeedbackForm />
      <UnControlledFeedbackForm />
      <UncontrolledFeedbackFormNoRef />
    </div>
  );
};

export default App;
