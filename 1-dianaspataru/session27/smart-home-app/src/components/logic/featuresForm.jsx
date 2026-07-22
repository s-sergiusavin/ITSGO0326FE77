import { useState } from "react";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const featuresForm = ({ updateFeatures }) => {
  const [isFormValid, setIsFormValid] = useState(true);

  const [nameField, setNameField] = useState("");
  const [stateField, setStateField] = useState("");
  const [actionField, setActionField] = useState("");
  const [descriptionField, setdDescriptionField] = useState("");

  const navigate = useNavigate();

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
    navigate('/smart-home')
  };

  const nameChangeHandler = (e) => {
    console.log(e);
    setNameField(e.target.value);
  };

  return (
    <form
      className={`form ${isFormValid ? "valid" : "invalid"}`}
      noValidate>
      <div className="control">
        <TextField
          id="nameField"
          fullWidth
          label="Feature Title"
          value={nameField}
          helperText="Some important text"
          onChange={nameChangeHandler}
        />
      </div>
      <div className="control">
        <TextField
          id="actionField"
          fullWidth
          label="Feature Action"
          value={actionField}
          helperText="Action description"
          onChange={(e) => setActionField(e.target.value)}
        />
        
      </div>

      <div className="control">
        <TextField
          id="stateField"
          fullWidth
          label="Feature State"
          value={stateField}
          defaultValue="Default Value"
          helperText="State description"
          onChange={(e) => setStateField(e.target.value)}
        />
        
      </div>

      <div className="control">
          <TextField
          id="descriptionField"
          fullWidth
          label="Feature Description"
          value={descriptionField}
          helperText="Description"
          onChange={(e) => setdDescriptionField(e.target.value)}
        />
        
      </div>
      <div className="actions">
        <Button variant="contained" onClick={Submithandler}>Add feature</Button>
       
      </div>
    </form>
  );
};

export default featuresForm;
