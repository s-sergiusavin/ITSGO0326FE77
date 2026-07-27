import Birthday from "./Birthday";
import "./DemoComponents.scss";

function DemoComponent({name, birthday}) {

    const testDestructuring = {
        first: 'first',
        second: 'second'
    };

    const {first, second} = testDestructuring;
    console.log(first);
    console.log(second);

    // console.log(props)

    const logInDemoComponent = (age) => {
        console.log('Log in demo component', age);
    }

  return (
    <div className="demo-component">
      <h2>{name}</h2>
      <div>{birthday.toLocaleDateString()}</div>
      <Birthday birthdate={birthday} loggerHandler={logInDemoComponent}/>
    </div>
  );
}

export default DemoComponent;