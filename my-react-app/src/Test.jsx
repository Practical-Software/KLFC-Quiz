import Question from "./Question"

function Quiz(){

    const klfcQuiz = 
        [
            {
            question:"The soup Koreans eat on birthdays is called?",
            options:["Teokguk","Miyeok soup", "Yukgaejang", "Taro soup"],
            answer:"b"
            },
            {
            question:"Does Korea have four distinct seasons?",
            options:["True","False"],
            answer:"a"
            },
            {
            question:"Kimchi is originally made to eat vegetables during the winter",
            options:["True","False"],
            answer:"a"
            },
            {
            question:"Traditional Korean paper is called...",
            options:["B4","Honji", "A4", "Hanji"],
            answer:"d"
            },
            {
            question:"What Korean traditional alcoholic drink is white and made with rice?",
            options:["Whiskey","Beer", "Makgeolli", "Wine"],
            answer:"c"
            },
            {
            question:"What does Hun-Min-Jeong-Eum mean?",
            options:["Teaching the people in righteous words",
                     "Teaching the people in fun words", 
                     "Teaching the people in wrong words", 
                     "Teaching the poeple in exciting words"],
            answer:"a"
            },
            {
            question:"What is side dish called in Korean?",
            options:["Kimchi","Danmuji", "Banchan", "Yeachan"],
            answer:"c"
            },
            {
            question:"Who was the first president of South Korea?",
            options:["Seung-Man Lee","Chung-hee Park", "Kyu-hah Choi", "Gojong"],
            answer:"a"
            },
            {
            question:"What is the capital city of South Korea?",
            options:["Moscow","Seoul", "Dejeon", "Tokyo"],
            answer:"b"
            },
            {
            question:"What is the name of the traditional Korean costume?",
            options:["Ao Dai","Kimono", "Cheongsam", "Hanbok"],
            answer:"d"
            },
            {
            question:"What is the national flower of South Korea",
            options:["Hibiscus","Rose", "Lily", "Daffodil"],
            answer:"a"
            },
            {
            question:"What is the name of Korean flag?",
            options:["Ingong gi","Seoungjo gi", "Taegeug gi", "Ja gi"],
            answer:"c"
            },
        ];

    
    return(
        <>
            <Question question = {klfcQuiz[0].question} options = {klfcQuiz[0].options} answer = {klfcQuiz[0].answer} />
        </>
    )
}

export default Quiz;


import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Fade from '@mui/material/Fade';
import TextField from '@mui/material/TextField';


import './styles.css';


export default function Question(props) {

    const question = props.question;
    const options = props.options;
    const answer = props.answer;
    
    
const [view, setView] = React.useState(null);
const handleChange = (event, newValue) => {
    console.log("New Value:" + newValue);
    setView(newValue); // Update the state with the new value of the toggle button
};

const [error, setError] = React.useState(null);
const handleError = (error) => {
    console.error("Error: " + error);
    setError(error);
}

const [questionStatus, setQuestionStatus] = React.useState(null);
const handleQuestionStatus = (error) => {
    console.error("Error: " + error);
    setError(error);
}

const handleSubmit = () => {
    if (view === null || view === undefined || view == null){
        setError("Please select an option");
    } else {
        setError(null);
        if (view == answer) {
            console.log("Correct!");
        } else {
            console.log("Wrong");
        }
    }
}

  const [isRedGlowing, setIsRedGlowing] = React.useState(false);
  const toggleRedGlow = () => {
    setIsRedGlowing(!isRedGlowing);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
  };

  const [isBlueGlowing, setIsBlueGlowing] = React.useState(false);
  const toggleBlueGlow = () => {
    setIsBlueGlowing(!isBlueGlowing);
    setIsRedGlowing(false);
    setIsGreenGlowing(false);
    setIsOrangeGlowing(false);
  };

  const [isGreenGlowing, setIsGreenGlowing] = React.useState(false);
  const toggleGreenGlow = () => {
    setIsGreenGlowing(!isGreenGlowing);
    setIsBlueGlowing(false);
    setIsRedGlowing(false);
    setIsOrangeGlowing(false);
  };
  
  const [isOrangeGlowing, setIsOrangeGlowing] = React.useState(false);
  const toggleOrangeGlow = () => {
    setIsOrangeGlowing(!isOrangeGlowing);
    setIsBlueGlowing(false);
    setIsGreenGlowing(false);
    setIsRedGlowing(false);
  };

  const stackStyles = {
    border: '1px solid rgba(255,255,255,0.8)',
    borderRadius: '10px',
    boxShadow: '0px 5px 5px 5px rgba(0, 0, 0, 0.14)',
    padding: '1.3em',
    margin: '1em',
    textAlign: 'center',
    display: 'inline-block',
  };

  return (
    <div>
        <Fade in={error !== null}>
            <Alert severity="error">{error}</Alert>
        </Fade>

        <Stack
        className='card'
        border={1}
        sx={stackStyles}
        >
        <Typography variant='h4' align='center' marginBottom={2}>
            {question}
        </Typography>
        <ToggleButtonGroup
            orientation="vertical"
            exclusive
            value={view}
            fullWidth={true}
            onChange={handleChange}
            sx={{ display: 'flex', justifyContent: 'center' }}
        >
            <ToggleButton
            value="a"
            className={`red-glow ${isRedGlowing ? 'glow' : ''}`}
            onClick={toggleRedGlow}
            sx={{
                backgroundColor: '#ff9b94',

                color: 'black',
                '&:hover': {
                  backgroundColor: '#ff9b94',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(255, 88, 88)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[0]}</Typography>
            </ToggleButton>
            <ToggleButton
            value="b"
            className={`blue-glow ${isBlueGlowing ? 'glow' : ''}`}
            onClick={toggleBlueGlow}
            sx={{
                color: 'black',
                backgroundColor: 'rgb(121, 169, 252)',
                '&:hover': {
                  backgroundColor: 'rgb(121, 169, 252)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(69, 137, 255)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[1]}</Typography>
            </ToggleButton>
            <ToggleButton
            value="c"
            className={`green-glow ${isGreenGlowing ? 'glow' : ''}`}
            onClick={toggleGreenGlow}
            sx={{
                backgroundColor: 'rgb(153, 255, 160)',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'rgb(153, 255, 160)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(28, 166, 23)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[2]}</Typography>
            </ToggleButton>
            <ToggleButton
            value="d"
            className={`orange-glow ${isOrangeGlowing ? 'glow' : ''}`}
            onClick={toggleOrangeGlow}
            sx={{
                color: 'black',
                backgroundColor: 'rgb(247, 203, 79)',
                '&:hover': {
                  backgroundColor: 'rgb(247, 203, 79)',
                },
                '&.Mui-selected': {
                    backgroundColor: 'rgb(255, 181, 33)', // Change background color when selected
                    color: '#fff', // Change text color when selected
                  },
              }}
            >
            <Typography variant='h5'>{options[3]}</Typography>
            </ToggleButton>
        </ToggleButtonGroup>
        <Button variant='contained' color='success' size='large' sx={{ marginTop:2, }} onClick={handleSubmit} disableElevation>
            Submit
        </Button>
        
        </Stack>
       
    </div>
  );
}
