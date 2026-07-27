import './App.css'
import DemoComponent from './components/DemoComponents'

function App() {
  const persons = [
    {
      fullName: 'Sergiu Savin',
      birthday: new Date(1990, 5, 30),
      address: {
        city: 'Brasov'
      }
    },
     {
      fullName: 'Sergiu Savin 2',
      birthday: new Date(1981, 0, 30),
      address: {
        city: 'Sofia'
      }
    }
  ];

  return (
    <div>
      <h1>Demo React</h1>
      
      <DemoComponent name={persons[0].fullName} birthday={persons[0].birthday}/>
      <DemoComponent name={persons[1].fullName} birthday={persons[1].birthday}/>
    </div>
  )
}

export default App