import { Class93 } from 'Class93.js';
export var Js5ConfigGroup = {
    FLUTYPE: {
        member1204: 1,
        priority: Class93.member796
    },
    HUNTTYPE: {
        member1204: 2,
        priority: Class93.member796
    },
    IDKTYPE: {
        member1204: 3,
        priority: Class93.member796
    },
    FLOTYPE: {
        member1204: 4,
        priority: Class93.member796
    },
    INVTYPE: {
        member1204: 5,
        priority: Class93.member796
    },
    LOCTYPE: {
        member1204: 6,
        fileBits: 8,
        priority: Class93.member796
    },
    MESANIMTYPE: {
        member1204: 7,
        priority: Class93.member796
    },
    ENUMTYPE: {
        member1204: 8,
        fileBits: 8,
        priority: Class93.member795
    },
    NPCTYPE: {
        member1204: 9,
        fileBits: 7,
        priority: Class93.member796
    },
    OBJTYPE: {
        member1204: 10,
        fileBits: 8,
        priority: Class93.member795
    },
    PARAMTYPE: {
        member1204: 11,
        priority: Class93.member795
    },
    SEQTYPE: {
        member1204: 12,
        fileBits: 7,
        priority: Class93.member796
    },
    SPOTTYPE: {
        member1204: 13,
        fileBits: 8,
        priority: Class93.member796
    },
    CATEGORY: {
        member1204: 17,
        priority: Class93.member795
    },
    AREATYPE: {
        member1204: 18,
        priority: Class93.member796
    },
    STRUCTTYPE: {
        member1204: 26,
        fileBits: 5,
        priority: Class93.member795
    },
    CHATPHRASETYPE: {
        member1204: 27,
        priority: Class93.member795
    },
    CHATCATTYPE: {
        member1204: 28,
        priority: Class93.member795
    },
    SKYBOXTYPE: {
        member1204: 29,
        priority: Class93.member796
    },
    SKYDECORTYPE: {
        member1204: 30,
        priority: Class93.member796
    },
    LIGHTTYPE: {
        member1204: 31,
        priority: Class93.member796
    },
    BASTYPE: {
        member1204: 32,
        priority: Class93.member795
    },
    CURSORTYPE: {
        member1204: 33,
        priority: Class93.member795
    },
    MSITYPE: {
        member1204: 34,
        priority: Class93.member796
    },
    QUESTTYPE: {
        member1204: 35,
        priority: Class93.member795
    },
    MELTYPE: {
        member1204: 36,
        priority: Class93.member796
    },
    DBTABLETYPE: {
        member1204: 40,
        priority: Class93.member796
    },
    DBROWTYPE: {
        member1204: 41,
        priority: Class93.member796
    },
    CONTROLLERTYPE: {
        member1204: 42,
        priority: Class93.member796
    },
    HITMARKTYPE: {
        member1204: 46,
        priority: Class93.member796
    },
    VARCLAN: {
        member1204: 47,
        priority: Class93.member795
    },
    ITEMCODETYPE: {
        member1204: 48,
        priority: Class93.member796
    },
    CATEGORYTYPE: {
        member1204: 49,
        priority: Class93.member796
    },
    member1238: {
        member1204: 52,
        priority: Class93.member796
    },
    member1239: {
        member1204: 54,
        priority: Class93.member796
    },
    member1240: {
        member1204: 55,
        priority: Class93.member796
    },
    member1241: {
        member1204: 56,
        priority: Class93.member796
    },
    member1242: {
        member1204: 57,
        priority: Class93.member796
    },
    member1243: {
        member1204: 58,
        priority: Class93.member796
    },
    member1244: {
        member1204: 59,
        priority: Class93.member796
    },
    VAR_PLAYER: {
        member1204: 60,
        priority: Class93.member795
    },
    VAR_NPC: {
        member1204: 61,
        priority: Class93.member796
    },
    VAR_CLIENT: {
        member1204: 62,
        priority: Class93.member795
    },
    VAR_WORLD: {
        member1204: 63,
        priority: Class93.member796
    },
    VAR_REGION: {
        member1204: 64,
        priority: Class93.member796
    },
    VAR_OBJECT: {
        member1204: 65,
        priority: Class93.member796
    },
    VAR_CLAN: {
        member1204: 66,
        priority: Class93.member795
    },
    VAR_CLAN_SETTING: {
        member1204: 67,
        priority: Class93.member795
    },
    VAR_CONTROLLER: {
        member1204: 68,
        priority: Class93.member796
    },
    VAR_BIT: {
        member1204: 69,
        priority: Class93.member795
    },
    GAMELOGEVENT: {
        member1204: 70,
        priority: Class93.member796
    },
    HEADBARTYPE: {
        member1204: 72,
        priority: Class93.member796
    },
    VAR_SHARED: {
        member1204: 75,
        priority: Class93.member796
    },
    WATERTYPE: {
        member1204: 76,
        priority: Class93.member796
    },
    SEQGROUPTYPE: {
        member1204: 77,
        priority: Class93.member796
    },
    VAR_PLAYER_GROUP: {
        member1204: 80,
        priority: Class93.member795
    },
    member1261: 80,
    getFileBits: function (a) {
        return 1 << a;
    },
    getGroupID: function (b, a) {
        return b >>> a;
    },
    getFileID: function (a, b) {
        return a & (1 << b) - 1;
    }
};