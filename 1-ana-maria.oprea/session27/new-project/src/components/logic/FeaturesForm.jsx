import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const FeaturesForm = ({ updateFeatures }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [actionField, setActionField] = useState("");
  const [stateField, setStateField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");

  const [nameFieldError, setNameFieldError] = useState(true);

  const navigate = useNavigate();

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
    navigate("/smart-home");
  };

  const nameChangeHandler = (e) => {
    console.log(e);
    setNameField(e.target.value);
  };

  return (
    <form className={`form ${isFormValid ? "valid" : "invalid"}`} noValidate>
      <div className="control">
        <TextField
          id="nameField"
          label="Feature title"
          fullWidth
          value={nameField}
          helperText={nameFieldError && "Incorrect entry"}
          onChange={nameChangeHandler}
        />
      </div>

      <div className="control">
        <TextField
          id="actionField"
          fullWidth
          label="Feature action"
          value={actionField}
          helperText={"Action description"}
          onChange={(e) => setActionField(e.target.value)}
        />
      </div>

      <div className="control">
        <TextField
          id="stateField"
          fullWidth
          label="Feature state"
          value={stateField}
          helperText={"State description"}
          onChange={(e) => setStateField(e.target.value)}
        />
      </div>

      <div className="control">
        <TextField
          id="stateField"
          fullWidth
          label="Feature description"
          value={descriptionField}
          helperText={" description"}
          onChange={(e) => setDescriptionField(e.target.value)}
        />
      </div>

      <div className="actions">
        <Button variant="contained" onClick={submitHandler}>
          Add feature
        </Button>
      </div>
    </form>
  );
};

export default FeaturesForm;
