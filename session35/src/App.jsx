import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import './App.css'
import CopilotPrompt from './components/CopilotPrompt.jsx'

function App() {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Stack spacing={4}>
        <CopilotPrompt />
      </Stack>
    </Container>
  )
}

export default App;
