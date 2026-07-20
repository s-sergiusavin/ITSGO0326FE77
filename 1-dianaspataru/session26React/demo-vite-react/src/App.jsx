
import './App.css'
import DemoComponent from './components/DemoComponents'

function App() {
  
  const persons=[
    {fullName:'Diana Ioana',
      birthday:new Date(1990, 5,29),
      address: {
         city:'Brasov'
      }
    },
    {fullName:'Diana Ioana 2',
      birthday:new Date(1994, 4, 30),
      address: {
         city:'Bucuresti'
      }
    }
  ];

  return (
   <div>
      <h1>Demo React</h1>
      <DemoComponent name={persons[1].fullName} birthday={persons[1].birthday}/>
      <DemoComponent name={persons[0].fullName} birthday={persons[0].birthday}/>
   </div>
  )
}

export default App
