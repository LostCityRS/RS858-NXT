import { BaseVarType } from 'Class462.js';
export var ScriptVarType = function () {
    var ScriptVarType = {
        INT: {
            serialID: 0,
            legacyChar: 'i',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: 0
        },
        BOOLEAN: {
            serialID: 1,
            legacyChar: '1',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: 0
        },
        QUEST: {
            serialID: 3,
            legacyChar: ':',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        QUESTHELP: {
            serialID: 4,
            legacyChar: ';',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CURSOR: {
            serialID: 5,
            legacyChar: '@',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        SEQ: {
            serialID: 6,
            legacyChar: 'A',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        COLOUR: {
            serialID: 7,
            legacyChar: 'C',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        LOC_SHAPE: {
            serialID: 8,
            legacyChar: 'H',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        COMPONENT: {
            serialID: 9,
            legacyChar: 'I',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        IDKIT: {
            serialID: 10,
            legacyChar: 'K',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MIDI: {
            serialID: 11,
            legacyChar: 'M',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        NPC_MODE: {
            serialID: 12,
            legacyChar: 'N',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        SYNTH: {
            serialID: 14,
            legacyChar: 'P',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        AREA: {
            serialID: 16,
            legacyChar: 'R',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        STAT: {
            serialID: 17,
            legacyChar: 'S',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        NPC_STAT: {
            serialID: 18,
            legacyChar: 'T',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        WRITEINV: {
            serialID: 19,
            legacyChar: 'V',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MESH: {
            serialID: 20,
            legacyChar: '^',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MAPAREA: {
            serialID: 21,
            legacyChar: '`',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        COORDGRID: {
            serialID: 22,
            legacyChar: 'c',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        GRAPHIC: {
            serialID: 23,
            legacyChar: 'd',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CHATPHRASE: {
            serialID: 24,
            legacyChar: 'e',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        FONTMETRICS: {
            serialID: 25,
            legacyChar: 'f',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        ENUM: {
            serialID: 26,
            legacyChar: 'g',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        JINGLE: {
            serialID: 28,
            legacyChar: 'j',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CHATCAT: {
            serialID: 29,
            legacyChar: 'k',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        LOC: {
            serialID: 30,
            legacyChar: 'l',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MODEL: {
            serialID: 31,
            legacyChar: 'm',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        NPC: {
            serialID: 32,
            legacyChar: 'n',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        OBJ: {
            serialID: 33,
            legacyChar: 'o',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_UID: {
            serialID: 34,
            legacyChar: 'p',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        STRING: {
            serialID: 36,
            legacyChar: 's',
            baseVarType: BaseVarType.STRING,
            defaultValue: ''
        },
        SPOTANIM: {
            serialID: 37,
            legacyChar: 't',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        NPC_UID: {
            serialID: 38,
            legacyChar: 'u',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        INV: {
            serialID: 39,
            legacyChar: 'v',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TEXTURE: {
            serialID: 40,
            legacyChar: 'x',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CATEGORY: {
            serialID: 41,
            legacyChar: 'y',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CHAR: {
            serialID: 42,
            legacyChar: 'z',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        LASER: {
            serialID: 43,
            legacyChar: '|',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        BAS: {
            serialID: 44,
            legacyChar: '\x80',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        COLLISION_GEOMETRY: {
            serialID: 46,
            legacyChar: '\x87',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PHYSICS_MODEL: {
            serialID: 47,
            legacyChar: '\x89',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PHYSICS_CONTROL_MODIFIER: {
            serialID: 48,
            legacyChar: '\x8A',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CLANHASH: {
            serialID: 49,
            legacyChar: '\x8C',
            baseVarType: BaseVarType.LONG,
            defaultValue: {
                high: 4294967295,
                low: 4294967295
            }
        },
        COORDFINE: {
            serialID: 50,
            legacyChar: '\x8E',
            baseVarType: BaseVarType.COORDFINE,
            defaultValue: undefined
        },
        CUTSCENE: {
            serialID: 51,
            legacyChar: '\x9A',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        ITEMCODE: {
            serialID: 53,
            legacyChar: '\xA1',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MAPSCENEICON: {
            serialID: 55,
            legacyChar: '\xA3',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CLANFORUMQFC: {
            serialID: 56,
            legacyChar: '\xA7',
            baseVarType: BaseVarType.LONG,
            defaultValue: {
                high: 4294967295,
                low: 4294967295
            }
        },
        VORBIS: {
            serialID: 57,
            legacyChar: '\xAB',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        VERIFY_OBJECT: {
            serialID: 58,
            legacyChar: '\xAE',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MAPELEMENT: {
            serialID: 59,
            legacyChar: 'µ',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CATEGORYTYPE: {
            serialID: 60,
            legacyChar: '\xB6',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        SOCIAL_NETWORK: {
            serialID: 61,
            legacyChar: 'Æ',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        HITMARK: {
            serialID: 62,
            legacyChar: '\xD7',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PACKAGE: {
            serialID: 63,
            legacyChar: 'Þ',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PARTICLE_EFFECTOR: {
            serialID: 64,
            legacyChar: 'á',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PARTICLE_EMITTER: {
            serialID: 66,
            legacyChar: 'é',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLOGTYPE: {
            serialID: 67,
            legacyChar: 'í',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        UNSIGNED_INT: {
            serialID: 68,
            legacyChar: 'î',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        SKYBOX: {
            serialID: 69,
            legacyChar: 'ó',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        SKYDECOR: {
            serialID: 70,
            legacyChar: 'ú',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        HASH64: {
            serialID: 71,
            legacyChar: 'û',
            baseVarType: BaseVarType.LONG,
            defaultValue: {
                high: 4294967295,
                low: 4294967295
            }
        },
        INPUTTYPE: {
            serialID: 72,
            legacyChar: 'Î',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        STRUCT: {
            serialID: 73,
            legacyChar: 'J',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        GWC_PLATFORM: {
            serialID: 89,
            legacyChar: 'ò',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        BUG_TEMPLATE: {
            serialID: 94,
            legacyChar: 'ê',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        BILLING_AUTH_FLAG: {
            serialID: 95,
            legacyChar: 'ð',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        ACCOUNT_FEATURE_FLAG: {
            serialID: 96,
            legacyChar: 'å',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        INTERFACE: {
            serialID: 97,
            legacyChar: 'a',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TOPLEVELINTERFACE: {
            serialID: 98,
            legacyChar: 'F',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        OVERLAYINTERFACE: {
            serialID: 99,
            legacyChar: 'L',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CLIENTINTERFACE: {
            serialID: 100,
            legacyChar: '\xA9',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MOVESPEED: {
            serialID: 101,
            legacyChar: 'Ý',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        MATERIAL: {
            serialID: 102,
            legacyChar: '\xAC',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        SEQGROUP: {
            serialID: 103,
            legacyChar: 'ø',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TEMP_HISCORE: {
            serialID: 104,
            legacyChar: 'ä',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TEMP_HISCORE_LENGTH_TYPE: {
            serialID: 105,
            legacyChar: 'ã',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TEMP_HISCORE_DISPLAY_TYPE: {
            serialID: 106,
            legacyChar: 'â',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TEMP_HISCORE_CONTRIBUTE_RESULT: {
            serialID: 107,
            legacyChar: 'à',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        AUDIOGROUP: {
            serialID: 108,
            legacyChar: 'À',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        AUDIOMIXBUSS: {
            serialID: 109,
            legacyChar: 'Ò',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        LONG: {
            serialID: 110,
            legacyChar: 'Ï',
            baseVarType: BaseVarType.LONG,
            defaultValue: {
                high: 0,
                low: 0
            }
        },
        CRM_CHANNEL: {
            serialID: 111,
            legacyChar: 'Ì',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        HTTP_IMAGE: {
            serialID: 112,
            legacyChar: 'É',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        POP_UP_DISPLAY_BEHAVIOUR: {
            serialID: 113,
            legacyChar: 'Ê',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        POLL: {
            serialID: 114,
            legacyChar: '\xF7',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        POINTLIGHT: {
            serialID: 117,
            legacyChar: '\x95',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_GROUP: {
            serialID: 118,
            legacyChar: 'Â',
            baseVarType: BaseVarType.LONG,
            defaultValue: {
                high: 4294967295,
                low: 4294967295
            }
        },
        PLAYER_GROUP_STATUS: {
            serialID: 119,
            legacyChar: 'Ã',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_GROUP_INVITE_RESULT: {
            serialID: 120,
            legacyChar: 'Å',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_GROUP_MODIFY_RESULT: {
            serialID: 121,
            legacyChar: 'Ë',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_GROUP_JOIN_OR_CREATE_RESULT: {
            serialID: 122,
            legacyChar: 'Í',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_GROUP_AFFINITY_MODIFY_RESULT: {
            serialID: 123,
            legacyChar: 'Õ',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        PLAYER_GROUP_DELTA_TYPE: {
            serialID: 124,
            legacyChar: '\xB2',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        CLIENT_TYPE: {
            serialID: 125,
            legacyChar: 'ª',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: -1
        },
        TELEMETRY_INTERVAL: {
            serialID: 126,
            legacyChar: '?',
            baseVarType: BaseVarType.INTEGER,
            defaultValue: 0
        }
    };
    var getByID = function (e) {
        for (var c in ScriptVarType) {
            var d = ScriptVarType[c];
            if (d.serialID === e) {
                return d;
            }
        }
        return null;
    };
    ScriptVarType.getByID = getByID;
    return ScriptVarType;
}();