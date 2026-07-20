import { useRef, useState } from "react";
import { nanoid } from "nanoid";

const featuresForm = ({ updateFeatures }) => {
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
  const resetfields = () => {
    titleInputRef.current.value = "";
    actionInputRef.current.value = "";
    stateInputRef.current.value = "";
    descriptionInputRef.current.value = "";
  };

  //   checkValid()
  //   if(!isFormValid) return;

  const Submithandler = (event) => {
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
      // id: Math.random() *100
      id: nanoid(),
    };
    updateFeatures(newFeature);
    resetfields();
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate
      onSubmit={Submithandler}
    >
      <div className="control">
        <label htmlFor="title">Feature Title</label>
        <input type="text" id="title" required ref={titleInputRef} />
      </div>
      <div className="control">
        <label htmlFor="action">Feature Action</label>
        <input type="text" id="action" required ref={actionInputRef} />
      </div>

      <div className="control">
        <label htmlFor="state">Feature State</label>
        <input type="text" id="state" required ref={stateInputRef} />
      </div>

      <div className="control">
        <label htmlFor="description">Feature Description</label>
        <textarea
          id="description"
          rows={5}
          required
          ref={descriptionInputRef}
        ></textarea>
      </div>
      <div className="actions">
        <button>add feature</button>
      </div>
    </form>
  );
};

export default featuresForm;
