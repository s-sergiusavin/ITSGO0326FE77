import { useState } from "react";
import { nanoid } from "nanoid";

const featuresForm = ({ updateFeatures }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [stateField, setStateField] = useState("");
  const [actionField, setActionField] = useState("");
  const [descriptionField, setdDescriptionField] = useState("");

  const checkValid = () => {
    if (
      nameField === "" ||
      stateField === "" ||
      actionField === "" ||
      descriptionField === ""
    ) {
      setIsFormValid(false);
      return false;
    } else {
      setIsFormValid(true);
      return true;
    }
  };
  const resetfields = () => {
    setNameField("");
    setActionField("");
    setStateField("");
    setdDescriptionField("");
  };

  //   checkValid()
  //   if(!isFormValid) return;

  const Submithandler = (event) => {
    event.preventDefault();

    const checkValidForm = checkValid();
    if (!checkValidForm) return;

    const nameValue = nameField;
    const actionValue = actionField;
    const stateValue = stateField;
    const description = descriptionField;

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

  const nameChangeHandler = (e) => {
    console.log(e);
    setNameField(e.target.value);
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate
      onSubmit={Submithandler}
    >
      <div className="control">
        <label htmlFor="title">Feature Title</label>
        <input
          type="text"
          id="title"
          required
          value={nameField}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="control">
        <label htmlFor="action">Feature Action</label>
        <input
          type="text"
          id="action"
          required
          value={actionField}
          onChange={(e) => setActionField(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="state">Feature State</label>
        <input
          type="text"
          id="state"
          required
          value={stateField}
          onChange={(e) => setStateField(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="description">Feature Description</label>
        <textarea
          id="description"
          rows={5}
          cols={21}
          required
          value={descriptionField}
          onChange={(e) => setdDescriptionField(e.target.value)}
        ></textarea>
      </div>
      <div className="actions">
        <button>add feature</button>
      </div>
    </form>
  );
};

export default featuresForm;
