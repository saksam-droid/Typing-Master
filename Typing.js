window.addEventListener('load', initiate);

const levels = {
    easy: 5,
    medium: 3,
    hard: 1
  };
  const currentLevel = levels.easy;

let time = 5;
let score = 0;
let isPlaying = 0;
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'angular',
    'magic',
    'brew',
    'while',
    'throw',
    'css',
    'break',
    'swing',
    'echo',
    'let',
    'wall',
    'laughter',
    'hash',
    'spinner',
    'beer',
    'ninja',
    'javascript',
    'master',
    'program',
    'coding',
    'hero',
    'learning',
    'work',
    'case',
    'react',
    'dragon',
    'rush',
    'api',
    'init',
    'motion',
    'google',
    'float',
    'damn',
    'block',
    'ranking',
    'nice',
    'machine',
    'perfect',
    'deploy',
    'terminal',
    'array',
    'vue',
    'node',
    'html',
    'front',
    'grid',
    'stack',
    'mac',
    'console',
    'ajax',
    'heroku',
    'loop',
    'sql',
    'php',
    'data',
    'npm',
    'server',
    'bash',
    'sanjam',
    'saksshi',
    'thapar',
    'internship',
    'Computer',
    'Physics',
    'Maths',
    'Java script',
    'NIT Kurukshetra',
    'Chandigarh',
    'Rajasthan',
    'Amritsar'
];

const setlevel=(e)=> {
    if (e.target === easyBtn) {
        currentLevel = levels.easy;
    } else if (e.target === mediumBtn) {
        currentLevel = levels.medium;
    } else if (e.target === hardBtn) {
        currentLevel = levels.hard;
    }
    console.log(currentLevel);
    initiate();
}

function initiate() {
    seconds.innerHTML = currentLevel;
    showWord(words);
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}

const startMatch=()=> {
    wordInput.value = wordInput.value.toLowerCase();
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

const matchWords=()=> {

    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Great';
        return true;
    } else {
        message.innerHTML = 'try again';
        return false;
    }
}
const showWord=(word)=> {
    const randIndex = Math.floor(Math.random() * words.length);
    currentWord.innerHTML = words[randIndex];
}

const countdown=()=> {
    if (time > 0) {
        time--;
    } else if (time === 0) {
        isPlaying = false;
    }
    timeDisplay.innerHTML = time;
}

const checkStatus=()=> {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over';
        score = -1;
    }
}
