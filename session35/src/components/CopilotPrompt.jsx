const CopilotPrompt = () => {
  const handleClick = () => {
    console.log("Userul a dat click");
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Log this
      </button>
    </div>
  );
};

export default CopilotPrompt;
