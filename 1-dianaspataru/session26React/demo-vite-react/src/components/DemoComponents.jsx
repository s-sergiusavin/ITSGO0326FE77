import "./DemoComponents.scss";
import Birthday from "./Birthday";

function DemoComponent({ name, birthday }) {
  const testDestructuring = {
    first: "first",
    second: "second",
  };

  const { first, second } = testDestructuring;

const LogInDemoConsole=  (age) =>{
    console.log('Log in my age', age)
}


  return (
    <div className="demo-component">
      <h2>{name}</h2>
      <div>{birthday.toLocaleDateString()}</div>
      <Birthday birthdate={birthday} loggerHandler={LogInDemoConsole}/>
    </div>
  );
}

export default DemoComponent;
