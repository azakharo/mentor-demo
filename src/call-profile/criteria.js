const criteria = {
    "Positive emotional coloring on all the episodes of the speaker": {
        name: "Позитивная эмоциональная окраска",
        expected: true
    },
    "Negative emotional coloring on all the episodes of the speaker": {
        name: "Негативная эмоциональная окраска",
        expected: false
    },
    "Presence of words from a script": {
        name: "Соответствие скрипту",
        expected: true
    },
    "Presence of words from a stop list": {
        name: "Наличие слов из стоп-листа",
        expected: false
    },
    "Greeting in the first 30 seconds": {
        name: "Приветствие в первые 30 секунд",
        expected: true
    }
};

export default name => criteria[name] || {name};
