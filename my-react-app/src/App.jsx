import Quiz from './Quiz'
//import Test from './Test'
import { Container } from '@mui/material';

function App() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', // Center items horizontally
        minHeight: '100vh', // This ensures the container takes up the full height of the viewport
        paddingBottom: '25vh', // Adjust this value to move content up
      }}
    >
      <Quiz/>
    </Container>
  );
}

export default App;
