// IMPORTANT!
// Color names MUST be specified as HEX
const keywords = {
    "greeting": {
        name: "Приветствие",
        color: "#4ffa64"
    },
    "address_company": {
        name: "Адрес компании",
        color: "#fae1ef"
    },
    "maintenance": {
        name: "Техобслуживание",
        color: "#fadc99"
    },
    "discount_company": {
        name: "Спецпредложение",
        color: "#a9dffa"
    },
    "say_goodbye": {
        name: "До свидания",
        color: "#f4fac9"
    },
    "stoplist": {
        name: "Стоп-лист",
        color: "#fa6259"
    },
    "namerequest": {
        name: "Запрос имени",
        color: "#fa965c"
    }
};

export default name => keywords[name] || {name, color: "#dddddd"};
