import { useRef, useState } from "react";
import { nanoid } from "nanoid";

const FeaturesForm = ({ updateFeatures }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const titleInputRef = useRef();
  const stateInputRef = useRef();
  const actionInputRef = useRef();
  const descriptionInputRef = useRef();

  const checkValid = () => {
    if (
      titleInputRef.current.value === "" ||
      actionInputRef.current.value === "" ||
      stateInputRef.current.value === "" ||
      descriptionInputRef.current.value === ""
    ) {
      setIsFormValid(false);
      return false;
    } else {
      setIsFormValid(true);
      return true;
    }
  };

  const resetFields = () => {
    titleInputRef.current.value = "";
    actionInputRef.current.value = "";
    stateInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const checkValidForm = checkValid();

    if (!checkValidForm) return;

    const nameValue = titleInputRef.current.value;
    const actionValue = actionInputRef.current.value;
    const stateValue = stateInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const newFeature = {
      name: nameValue,
      action: actionValue,
      state: stateValue,
      id: nanoid(),
      //   id: Math.random() * 100,
    };

    updateFeatures(newFeature);
    resetFields();
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate
      onSubmit={submitHandler}
    >
      <div className="control">
        <label htmlFor="title">Feature title</label>
        <input type="text" id="title" required ref={titleInputRef} />
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input type="text" id="action" required ref={actionInputRef} />
      </div>

      <div className="control">
        <label htmlFor="state">Feature state</label>
        <input type="text" id="state" required ref={stateInputRef} />
      </div>

      <div className="control">
        <label htmlFor="description">Feature description</label>
        <textarea
          id="description"
          rows={5}
          required
          ref={descriptionInputRef}
        ></textarea>
      </div>

      <div className="actions">
        <button>Add feature</button>
      </div>
    </form>
  );
};

export default FeaturesForm;
