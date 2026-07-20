function Birthday({ birthdate, loggerHandler}) {
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthdate.getFullYear();


const doSomething=()=>{
    loggerHandler(age);
}

  return (
    <div>
      <p>Birthday:{birthdate.toLocaleDateString()}</p>
      <p>Age:{age}</p>
      <button  onClick={doSomething}>Do something</button>
      <p>ceva</p>
    </div>
  );
}

export default Birthday;
