const task = {
    "id": "632095dc-073c-48a8-b4e1-f3901c5cd80f",
    "createdAt": 1514549233,
    "status": "COMPLETED",
    "criterias": [
        {
            "title": "say_goodbye",
            "rule": {"ops": "NOP", "attributes": [{"NOP": null}]},
            "scope": "CONVERSATION",
            "type": "KEYWORD",
            "score": 0
        }, {
            "title": "emotion",
            "rule": {"ops": "NOP", "attributes": [{"NOP": null}]},
            "scope": "EPISODE",
            "type": "EMOTION",
            "score": 0
        }, {
            "title": "namerequest",
            "rule": {"ops": "NOP", "attributes": [{"NOP": null}]},
            "scope": "CONVERSATION",
            "type": "KEYWORD",
            "score": 0
        }, {
            "title": "greeting",
            "rule": {"ops": "NOP", "attributes": [{"NOP": null}]},
            "scope": "CONVERSATION",
            "type": "KEYWORD",
            "score": 0
        }, {
            "title": "stoplist",
            "rule": {"ops": "NOP", "attributes": [{"NOP": null}]},
            "scope": "CONVERSATION",
            "type": "KEYWORD",
            "score": 0
        }
    ],
    "profile": {
        "callInfo": {
            "filename": "5.1175158068.1489744318.mp3",
            "callLength": 254161,
            "callQualityMeasures": {
                "signal_level": "MEDIUM",
                "noise_level": "HIGH",
                "snr": "HIGH",
                "saturation": "HIGH",
                "clipping": "HIGH",
                "white_noise": "HIGH",
                "quality": "HIGH"
            }
        },
        "conversations": [{
            "speakers": {
                "0": {
                    "identification": {
                        "speaker": "SPK0",
                        "probability": 1.4E-45,
                        "role": "UNKNOWN"
                    },
                    "gender": {"gender": "male", "probability": 1.0},
                    "emotion": {"emotion": "boredom", "probability": 0.4},
                    "criteriaCompliance": [{
                        "criterion": "Positive emotional coloring on all the episodes of the speaker",
                        "result": false
                    }, {
                        "criterion": "Negative emotional coloring on all the episodes of the speaker",
                        "result": true
                    }, {
                        "criterion": "Presence of words from a script",
                        "result": false
                    }, {
                        "criterion": "Presence of words from a stop list",
                        "result": false
                    }, {"criterion": "Greeting in the first 30 seconds", "result": false}],
                    "totalEstimation": -10
                },
                "1": {
                    "identification": {"speaker": "SPK1", "probability": 1.4E-45, "role": "UNKNOWN"},
                    "gender": {"gender": "male", "probability": 1.0},
                    "emotion": {"emotion": "boredom", "probability": 0.42},
                    "criteriaCompliance": [{
                        "criterion": "Positive emotional coloring on all the episodes of the speaker",
                        "result": false
                    }, {
                        "criterion": "Negative emotional coloring on all the episodes of the speaker",
                        "result": true
                    }, {
                        "criterion": "Presence of words from a script",
                        "result": false
                    }, {
                        "criterion": "Presence of words from a stop list",
                        "result": false
                    }, {"criterion": "Greeting in the first 30 seconds", "result": false}],
                    "totalEstimation": -10
                },
                "2": {
                    "identification": {"speaker": "SPK2", "probability": 1.4E-45, "role": "UNKNOWN"},
                    "gender": {"gender": "male", "probability": 1.0},
                    "emotion": {"emotion": "boredom", "probability": 0.42},
                    "criteriaCompliance": [{
                        "criterion": "Positive emotional coloring on all the episodes of the speaker",
                        "result": false
                    }, {
                        "criterion": "Negative emotional coloring on all the episodes of the speaker",
                        "result": true
                    }, {
                        "criterion": "Presence of words from a script",
                        "result": false
                    }, {
                        "criterion": "Presence of words from a stop list",
                        "result": false
                    }, {"criterion": "Greeting in the first 30 seconds", "result": false}],
                    "totalEstimation": -10
                },
                "3": {
                    "identification": {"speaker": "SPK3", "probability": 1.4E-45, "role": "UNKNOWN"},
                    "gender": {"gender": "female", "probability": 1.0},
                    "emotion": {"emotion": "boredom", "probability": 0.42},
                    "criteriaCompliance": [{
                        "criterion": "Positive emotional coloring on all the episodes of the speaker",
                        "result": false
                    }, {
                        "criterion": "Negative emotional coloring on all the episodes of the speaker",
                        "result": true
                    }, {
                        "criterion": "Presence of words from a script",
                        "result": false
                    }, {"criterion": "Presence of words from a stop list", "result": false}],
                    "totalEstimation": -10
                }
            },
            "episodes": [{
                "bound": {"left": 0, "right": 15720},
                "speaker": "SPK0",
                "attributes": {
                    "EMOTION": [{"name": "excited", "probability": 0.07, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.28, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.01, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.13,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.2, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.28,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 15720, "right": 17850},
                "speaker": "SPK1",
                "attributes": {
                    "KEYWORD": [{
                        "name": "greeting",
                        "probability": 0.7,
                        "extra": {"phrase": "ПРИВЕТСТВИЕ", "bound": {"left": 16590, "right": 17480}}
                    }],
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anger", "probability": 0.1, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.27, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.4, "extra": null}]
                }
            }, {
                "bound": {"left": 17850, "right": 20560},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.01, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.1, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 20560, "right": 22410},
                "speaker": "SPK0",
                "attributes": {
                    "KEYWORD": [{
                        "name": "namerequest",
                        "probability": 0.61,
                        "extra": {"phrase": "ЗАПРОС-ИМЕНИ", "bound": {"left": 20870, "right": 22120}}
                    }],
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.1, "extra": null}, {
                        "name": "anger",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.41, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}]
                }
            }, {
                "bound": {"left": 22410, "right": 25060},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.1, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anger", "probability": 0.1, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.28, "extra": null}, {
                        "name": "excited",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "labile", "probability": 0.06, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 25060, "right": 26810},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.01, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.26, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 26810, "right": 29419},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "anger",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.29, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}]
                }
            }, {
                "bound": {"left": 29420, "right": 33050},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.01, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.18, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}]
                }
            }, {
                "bound": {"left": 33050, "right": 46480},
                "speaker": "SPK0",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "painful", "probability": 0.01, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.19, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.12, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.03, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.19, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.38,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 46480, "right": 49699},
                "speaker": "SPK3",
                "attributes": {
                    "KEYWORD": [{
                        "name": "greeting",
                        "probability": 0.35,
                        "extra": {"phrase": "ПРИВЕТСТВИЕ", "bound": {"left": 48950, "right": 49840}}
                    }],
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.01, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}]
                }
            }, {
                "bound": {"left": 49700, "right": 52520},
                "speaker": "SPK2",
                "attributes": {
                    "KEYWORD": [{
                        "name": "greeting",
                        "probability": 0.35,
                        "extra": {"phrase": "ПРИВЕТСТВИЕ", "bound": {"left": 48950, "right": 49840}}
                    }],
                    "EMOTION": [{"name": "unstable", "probability": 0.35, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.05, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.41,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.18, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}]
                }
            }, {
                "bound": {"left": 52520, "right": 55110},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.05,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 55110, "right": 57040},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "anger",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.29, "extra": null}]
                }
            }, {
                "bound": {"left": 57040, "right": 58490},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "excited",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.41,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.29, "extra": null}, {
                        "name": "painful",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.07,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 58490, "right": 63240},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "unstable", "probability": 0.35, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.1, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.26, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 63240, "right": 65450},
                "speaker": "SPK1",
                "attributes": {
                    "KEYWORD": [{
                        "name": "namerequest",
                        "probability": 0.21,
                        "extra": {"phrase": "ЗАПРОС-ИМЕНИ", "bound": {"left": 64000, "right": 65250}}
                    }],
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anger", "probability": 0.05, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.19,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.05, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.3,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.3, "extra": null}]
                }
            }, {
                "bound": {"left": 65450, "right": 67900},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.03, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "labile", "probability": 0.18, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "excited",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.42, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.12,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.19, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.03, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.19,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 67900, "right": 71100},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "disgust", "probability": 0.3, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.3,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.11, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.19,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}]
                }
            }, {
                "bound": {"left": 71100, "right": 74270},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "sadness", "probability": 0.4, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.18, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 74270, "right": 77039},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.19, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.42,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.05, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.19,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 77040, "right": 79920},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 79920, "right": 81500},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.18, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.18, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "anger",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 81500, "right": 94020},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "labile",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.03, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.3,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.07, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "excited", "probability": 0.18, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.3, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.26, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.19,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.11,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 94020, "right": 96710},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "unstable", "probability": 0.35, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.4, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.1, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "painful", "probability": 0.26, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.04, "extra": null}]
                }
            }, {
                "bound": {"left": 96710, "right": 99960},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.1, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 99960, "right": 101970},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "excited",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.28, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.04, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "painful", "probability": 0.36, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.07, "extra": null}]
                }
            }, {
                "bound": {"left": 101970, "right": 105440},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.27, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.18, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.04, "extra": null}]
                }
            }, {
                "bound": {"left": 105440, "right": 109610},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.1, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 109610, "right": 112920},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "anger", "probability": 0.05, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.41,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.1, "extra": null}]
                }
            }, {
                "bound": {"left": 112920, "right": 118480},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "anger", "probability": 0.05, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.03, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "excited", "probability": 0.13, "extra": null}, {
                        "name": "labile",
                        "probability": 0.13,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.01, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.05, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "painful", "probability": 0.2, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.38,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 118480, "right": 122420},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "disgust", "probability": 0.41, "extra": null}, {
                        "name": "excited",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.03, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.29, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.07, "extra": null}, {
                        "name": "anger",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 122420, "right": 129870},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "excited",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "painful", "probability": 0.19, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.41,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.18, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.37, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.27, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.1, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.03,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 129870, "right": 137170},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.3,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.36, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.3, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.05, "extra": null}, {
                        "name": "painful",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.19, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.12, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.11, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 137170, "right": 138899},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "excited", "probability": 0.07, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.26, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.41,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.26, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.12,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 138900, "right": 155530},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "painful",
                        "probability": 0.12,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.1, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "excited", "probability": 0.18, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.1, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.03, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.26, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.28,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 155530, "right": 158280},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.26, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 158280, "right": 159930},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.42,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.29, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.11, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 159930, "right": 162460},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.26, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "excited", "probability": 0.11, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "labile", "probability": 0.06, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.01, "extra": null}, {
                        "name": "anger",
                        "probability": 0.04,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 162460, "right": 165950},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "anger",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.11, "extra": null}, {
                        "name": "excited",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.35, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.29, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.06, "extra": null}, {
                        "name": "painful",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.01, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.19,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 165950, "right": 168049},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "upbeat", "probability": 0.37, "extra": null}, {
                        "name": "anger",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "labile", "probability": 0.19, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.4, "extra": null}, {
                        "name": "painful",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.18, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "excited", "probability": 0.27, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 168050, "right": 170490},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.18, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "excited", "probability": 0.11, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.35, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.1, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 170490, "right": 173350},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "excited",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.01, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.1, "extra": null}, {
                        "name": "painful",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.11,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 173350, "right": 175690},
                "speaker": "SPK2",
                "attributes": {
                    "KEYWORD": [{
                        "name": "say_goodbye",
                        "probability": 0.23,
                        "extra": {"phrase": "ДО-СВИДАНИЯ", "bound": {"left": 173708, "right": 174198}}
                    }],
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.18, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 175690, "right": 178620},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "unstable", "probability": 0.35, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.26, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "excited", "probability": 0.11, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.1, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 178620, "right": 182970},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.29, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "excited", "probability": 0.11, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "labile", "probability": 0.06, "extra": null}, {
                        "name": "painful",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.42, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 182970, "right": 184810},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.41, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.05,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 184810, "right": 187260},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.11, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.42,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.19, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.19,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 187260, "right": 190880},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.1, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.1, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.28,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 190880, "right": 194740},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.04, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}, {
                        "name": "anger",
                        "probability": 0.04,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 194740, "right": 197740},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.1, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 197740, "right": 199930},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.42,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.19,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.11, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.19,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 199930, "right": 204040},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.26, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.18, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.1, "extra": null}, {
                        "name": "painful",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "anger", "probability": 0.04, "extra": null}]
                }
            }, {
                "bound": {"left": 204040, "right": 210489},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.26, "extra": null}, {
                        "name": "excited",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.42, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.05, "extra": null}, {
                        "name": "painful",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.12, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.19,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.03, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.19,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 210490, "right": 215220},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "suppressed", "probability": 0.03, "extra": null}, {
                        "name": "anger",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.4, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "excited", "probability": 0.11, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.18, "extra": null}, {
                        "name": "labile",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.27, "extra": null}, {
                        "name": "painful",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 215220, "right": 217230},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{"name": "unstable", "probability": 0.35, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.1, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.04, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.01, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}]
                }
            }, {
                "bound": {"left": 217230, "right": 220220},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.1, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.01, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 220220, "right": 221820},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "excited",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.29, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "painful",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.42, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.07,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 221820, "right": 223840},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "excited", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.4, "extra": null}, {
                        "name": "painful",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.04, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.04, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.36, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 223840, "right": 226010},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "painful",
                        "probability": 0.12,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.36, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.03, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "labile", "probability": 0.01, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "excited", "probability": 0.12, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.28,
                        "extra": null
                    }, {"name": "anger", "probability": 0.04, "extra": null}]
                }
            }, {
                "bound": {"left": 226010, "right": 227780},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "upbeat", "probability": 0.11, "extra": null}, {
                        "name": "sadness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.26, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.41,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.29, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.05, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.05, "extra": null}]
                }
            }, {
                "bound": {"left": 227780, "right": 231330},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{"name": "upbeat", "probability": 0.18, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.11, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.28,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.28, "extra": null}, {
                        "name": "anger",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 231330, "right": 233340},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "disgust", "probability": 0.41, "extra": null}, {
                        "name": "anger",
                        "probability": 0.05,
                        "extra": null
                    }, {"name": "painful", "probability": 0.03, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.29,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.36, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.12,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.05, "extra": null}, {
                        "name": "excited",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.03, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.1, "extra": null}]
                }
            }, {
                "bound": {"left": 233340, "right": 235350},
                "speaker": "SPK2",
                "attributes": {
                    "KEYWORD": [{
                        "name": "greeting",
                        "probability": 0.14,
                        "extra": {"phrase": "ПРИВЕТСТВИЕ", "bound": {"left": 234158, "right": 234688}}
                    }],
                    "EMOTION": [{"name": "labile", "probability": 0.07, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.26, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "painful", "probability": 0.07, "extra": null}, {
                        "name": "excited",
                        "probability": 0.36,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.18, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.18, "extra": null}, {
                        "name": "suppressed",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "anger", "probability": 0.01, "extra": null}]
                }
            }, {
                "bound": {"left": 235350, "right": 237460},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{"name": "sadness", "probability": 0.1, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "painful", "probability": 0.01, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "upbeat", "probability": 0.35, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "excited", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "labile", "probability": 0.06, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.18, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.28, "extra": null}]
                }
            }, {
                "bound": {"left": 237460, "right": 239470},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "labile",
                        "probability": 0.07,
                        "extra": null
                    }, {"name": "suppressed", "probability": 0.03, "extra": null}, {
                        "name": "anger",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "painful", "probability": 0.37, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.1, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.27, "extra": null}, {
                        "name": "disgust",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.12, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.27,
                        "extra": null
                    }, {"name": "excited", "probability": 0.12, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.4,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 239470, "right": 241480},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "unstable", "probability": 0.26, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.18, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "anger",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 241480, "right": 243579},
                "speaker": "SPK3",
                "attributes": {
                    "EMOTION": [{
                        "name": "suppressed",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "boredom", "probability": 0.4, "extra": null}, {
                        "name": "excited",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.04, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.18, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.28, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.04, "extra": null}, {
                        "name": "labile",
                        "probability": 0.06,
                        "extra": null
                    }, {"name": "painful", "probability": 0.26, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 243580, "right": 245990},
                "speaker": "SPK1",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.27, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.04,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.18, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "sadness", "probability": 0.01, "extra": null}, {
                        "name": "labile",
                        "probability": 0.03,
                        "extra": null
                    }, {"name": "anxiety/fear", "probability": 0.1, "extra": null}, {
                        "name": "painful",
                        "probability": 0.35,
                        "extra": null
                    }, {"name": "lowered", "probability": 0.01, "extra": null}, {
                        "name": "excited",
                        "probability": 0.06,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 245990, "right": 248410},
                "speaker": "SPK2",
                "attributes": {
                    "EMOTION": [{
                        "name": "upbeat",
                        "probability": 0.11,
                        "extra": null
                    }, {"name": "depressive", "probability": 0.18, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.27, "extra": null}, {
                        "name": "neutral",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "happiness", "probability": 0.18, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "labile", "probability": 0.03, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "lowered",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "excited", "probability": 0.06, "extra": null}, {
                        "name": "anger",
                        "probability": 0.04,
                        "extra": null
                    }]
                }
            }, {
                "bound": {"left": 248410, "right": 254140},
                "speaker": "SPK1",
                "attributes": {
                    "KEYWORD": [{
                        "name": "say_goodbye",
                        "probability": 0.5,
                        "extra": {"phrase": "ДО-СВИДАНИЯ", "bound": {"left": 252124, "right": 252614}}
                    }],
                    "EMOTION": [{"name": "suppressed", "probability": 0.03, "extra": null}, {
                        "name": "boredom",
                        "probability": 0.4,
                        "extra": null
                    }, {"name": "disgust", "probability": 0.27, "extra": null}, {
                        "name": "upbeat",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "neutral", "probability": 0.01, "extra": null}, {
                        "name": "happiness",
                        "probability": 0.18,
                        "extra": null
                    }, {"name": "excited", "probability": 0.11, "extra": null}, {
                        "name": "unstable",
                        "probability": 0.26,
                        "extra": null
                    }, {"name": "labile", "probability": 0.06, "extra": null}, {
                        "name": "anxiety/fear",
                        "probability": 0.1,
                        "extra": null
                    }, {"name": "painful", "probability": 0.35, "extra": null}, {
                        "name": "depressive",
                        "probability": 0.01,
                        "extra": null
                    }, {"name": "anger", "probability": 0.04, "extra": null}]
                }
            }]
        }]
    }
};

export default task;
