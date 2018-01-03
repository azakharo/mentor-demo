// IMPORTANT!
// Color names MUST be specified as HEX
const emotions = {
    "excited": {
        name: "оживлённость",
        color: "#FADB84"
    },
    "anxiety/fear": {
        name: "тревога",
        color: "#FA9E84"
    },
    "boredom": {
        name: "скука",
        color: "#C9C9C9"
    },
    "neutral": {
        name: "безразличность",
        color: "#D9D9D9"
    },
    "painful": {
        name: "болезненность",
        color: "#41A4AB"
    },
    "disgust": {
        name: "отвращение",
        color: "#CDAFE0"
    },
    "labile": {
        name: "изменчивость",
        color: "#07DEED"
    },
    "upbeat": {
        name: "жизнерадостность",
        color: "#F2F1C4"
    },
    "unstable": {
        name: "нестабильность",
        color: "#07DEED"
    },
    "sadness": {
        name: "грусть",
        color: "#ABABB3"
    },
    "anger": {
        name: "злость",
        color: "#FF0000"
    },
    "suppressed": {
        name: "подавленность",
        color: "#B9B9C4"
    },
    "lowered": {
        name: "унижение",
        color: "#C98398"
    },
    "happiness": {
        name: "счастье",
        color: "#C4F2DA"
    },
    "depressive": {
        name: "депрессия",
        color: "#4D495C"
    }

};

export const UNKNOWN_EMOTION_COLOR = "#dddddd";

export function getEmotionAttrs(name) {
 return emotions[name] || {name, color: UNKNOWN_EMOTION_COLOR};
}
