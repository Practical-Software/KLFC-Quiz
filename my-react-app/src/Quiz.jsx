import React, { useState } from 'react';
import Question from './Question';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Stack from '@mui/material/Stack';


function Quiz() {

    const stackStyles = {
        border: '1px solid rgba(255,255,255,0.8)',
        borderRadius: '10px',
        boxShadow: '0px 5px 5px 5px rgba(0, 0, 0, 0.14)',
        padding: '3em',
        margin: '2em',
        textAlign: 'center',
        display: 'inline-block',
      };


    const [questions, setQuestions] = useState([
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
                question:"Which food is not Korean traditional food?",
                options:["Teokguk","Taro Soup", "Song Pyeon", "Spicy Chicken Flavored Noodles"],
                answer:"d"
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
                question:"The invention of the world's first movable metal type came from Korea.",
                options:["True", "False"],
                answer:"a"
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
            {
                question:"What is the name of Korea's currency?",
                options:["Yen","Won", "Ruble", "Pound"],
                answer:"b"
            },
    ]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [showImmResult, setShowImmResult] = useState(false);

    const handleAnswer = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setScore(0);
        setCurrentQuestionIndex(0);
        setShowResult(false);
    };

    return (
        <div>
            
            {!showResult ? (
                <Question
                    question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options}
                    answer={questions[currentQuestionIndex].answer}
                    onAnswer={handleAnswer}
                    view={null}
                />
            ) : (
                <Stack style={stackStyles}>
                    <Typography padding={2} paddingBottom={0} variant="h3">Quiz Completed!</Typography>
                    <Typography padding={2} paddingTop={1} paddingBottom={4} variant="h5">Your Score: {score}/{questions.length}</Typography>
                    <Button variant='contained' size='large' color='primary' onClick={handleRestart}> Restart </Button>
                </Stack>
            )}
        </div>
    );
}

export default Quiz;
