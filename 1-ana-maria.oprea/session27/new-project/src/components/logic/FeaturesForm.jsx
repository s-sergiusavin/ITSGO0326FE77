import { useState } from "react";
import { nanoid } from "nanoid";

const FeaturesForm = ({ updateFeatures }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const checkValid = () => {
    if (
      nameField === "" ||
      actionField === "" ||
      stateField === "" ||
      descriptionField === ""
    ) {
      setIsFormValid(false);
      return false;
    } else {
      setIsFormValid(true);
      return true;
    }
  };

  const resetFields = () => {
    setNameField("");
    setActionField("");
    setStateField("");
    setDescriptionField("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const checkValidForm = checkValid();

    if (!checkValidForm) return;

    const nameValue = nameField;
    const actionValue = actionField;
    const stateValue = stateField;
    // eslint-disable-next-line no-unused-vars
    const description = descriptionField;

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

  const nameChangeHandler = (e) => {
    console.log(e);
    setNameField(e.target.value);
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate
      onSubmit={submitHandler}
    >
      <div className="control">
        <label htmlFor="title">Feature title</label>
        <input
          type="text"
          id="title"
          required
          value={nameField}
          onChange={nameChangeHandler}
        />
      </div>

      <div className="control">
        <label htmlFor="action">Feature action</label>
        <input
          type="text"
          id="action"
          required
          value={actionField}
          onChange={(e) => setActionField(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="state">Feature state</label>
        <input
          type="text"
          id="state"
          required
          value={stateField}
          onChange={(e) => setStateField(e.target.value)}
        />
      </div>

      <div className="control">
        <label htmlFor="description">Feature description</label>
        <textarea
          id="description"
          rows={5}
          cols={16}
          required
          value={descriptionField}
          onChange={(e) => setDescriptionField(e.target.value)}
        ></textarea>
      </div>

      <div className="actions">
        <button>Add feature</button>
      </div>
    </form>
  );
};

export default FeaturesForm;
