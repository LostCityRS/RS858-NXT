import { Js5ConfigGroup } from 'Class131.js';
import { ScriptVarType } from 'Class463.js';
export var VarDomainType = function () {
    var a = {
        PLAYER: {
            member2385: Js5ConfigGroup.VAR_PLAYER,
            serialID: 0,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                if (c.member7377 && c.member7378 === ScriptVarType.BOOLEAN) {
                    return -1;
                } else {
                    return c.member7378.defaultValue;
                }
            }
        },
        NPC: {
            member2385: Js5ConfigGroup.VAR_NPC,
            serialID: 1,
            member7375: false,
            member7376: true,
            member2944: function (c) {
                if (c.member7377 && c.member7378 === ScriptVarType.BOOLEAN) {
                    return -1;
                } else {
                    return c.member7378.defaultValue;
                }
            }
        },
        CLIENT: {
            member2385: Js5ConfigGroup.VAR_CLIENT,
            serialID: 2,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                if (c.member7377 && (c.member7378 === ScriptVarType.INT || c.member7378 === ScriptVarType.BOOLEAN)) {
                    return -1;
                } else {
                    return c.member7378.defaultValue;
                }
            }
        },
        CLAN: {
            member2385: Js5ConfigGroup.VAR_CLAN,
            serialID: 6,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                return c.member7378.defaultValue;
            }
        },
        CLAN_SETTING: {
            member2385: Js5ConfigGroup.VAR_CLAN_SETTING,
            serialID: 7,
            member7375: true,
            member7376: false,
            member2944: function (c) {
                return c.member7378.defaultValue;
            }
        },
        PLAYER_GROUP: {
            member2385: Js5ConfigGroup.VAR_PLAYER_GROUP,
            serialID: 9,
            member7375: true,
            member7376: true,
            member2944: function (c) {
                return c.member7378.defaultValue;
            }
        }
    };
    var b = function (e) {
        for (var d in a) {
            var c = a[d];
            if (c.serialID === e) {
                return c;
            }
        }
        return null;
    };
    a.getByID = b;
    return a;
}();