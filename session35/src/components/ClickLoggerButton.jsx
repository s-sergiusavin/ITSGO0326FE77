import { useState } from "react";
import Button from "@mui/material/Button";

const ClickLoggerButton = ({
  label = "Log this",
  ariaLabel = "Log this action",
}) => {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    const nextCount = clickCount + 1;
    setClickCount(nextCount);
    console.log(`Userul a dat click ${nextCount} ori`);
  };

  return (
    <Button
      variant="contained"
      type="button"
      onClick={handleClick}
      aria-label={ariaLabel}
      sx={{ alignSelf: "center" }}
    >
      {label}
    </Button>
  );
};

export default ClickLoggerButton;
