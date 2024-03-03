import { Js5ConfigGroup } from 'Class131.js';
import { VarDomainType } from 'Class465.js';
import { Class95 } from 'Class95.js';
import { ConfigTypeList } from 'Class796.js';
import { ParamType } from 'Class670.js';
import { EnumTypeList } from 'Class785.js';
import { InvType } from 'Class735.js';
import { ObjTypeList } from 'Class706.js';
import { QuickChatCatTypeList } from 'Class731.js';
import { QuickChatPhraseTypeList } from 'Class686.js';
import { VarBitTypeList } from 'Class787.js';
import { Class794 } from 'Class794.js';
import { StructType } from 'Class793.js';
import { BASTypeList } from 'Class799.js';
import { EffectAnimTypeList } from 'Class786.js';
import { FloorUnderlayType } from 'Class728.js';
import { FloorOverlayType } from 'Class762.js';
import { HitmarkTypeList } from 'Class788.js';
import { HeadbarTypeList } from 'Class711.js';
import { LightType } from 'Class736.js';
import { IDKType } from 'Class479.js';
import { LocTypeList } from 'Class798.js';
import { MapElementTypeList } from 'Class761.js';
import { MSITypeList } from 'Class552.js';
import { NPCTypeList } from 'Class544.js';
import { QuestTypeList } from 'Class797.js';
import { SeqGroupTypeList } from 'Class792.js';
import { SeqTypeList } from 'Class760.js';
import { SkyBoxType } from 'Class791.js';
import { WaterType } from 'Class759.js';
import { CursorType } from 'Class795.js';
export var Class800 = function () {
    var S = {};
    var V;
    var ae;
    var a;
    var ac = false;
    S.member8695 = function (ag) {
        ac = ag;
        if (true) {
            locTypeList.member8695(ac);
            npcTypeList.member8695(ac);
            objTypeList.member8695(ac);
        } else {
        }
    };
    var Y = null;
    var o;
    var g = false;
    var x;
    var Z = false;
    var m = 0;
    var U = 1;
    var d = 2;
    var af = m;
    var configTypeLists = new Array(Js5ConfigGroup.member1261 + 1);
    var basTypeList;
    var enumTypeList;
    var effectAnimTypeList;
    var floorUnderlayTypeList;
    var floorOverlayTypeList;
    var hitmarkTypeList;
    var headbarTypeList;
    var idkTypeList;
    var invTypeList;
    var lightTypeList;
    var locTypeList;
    var mapElementTypeList;
    var msiTypeList;
    var npcTypeList;
    var objTypeList;
    S.member9592 = function () {
        return objTypeList;
    };
    var paramTypeList;
    var questTypeList;
    S.member2974 = function () {
        return questTypeList;
    };
    var chatCatTypeList;
    var chatPhraseTypeList;
    S.member9744 = function () {
        return chatPhraseTypeList;
    };
    var seqGroupTypeList;
    var seqTypeList;
    var skyBoxTypeList;
    var structTypeList;
    var waterTypeList;
    var Q;
    var varBitTypeList;
    S.getVarBitTypeList = function () {
        return varBitTypeList;
    };
    var varClanTypeList;
    S.getVarClanTypeList = function () {
        return varClanTypeList;
    };
    var varClanSettingTypeList;
    var varClientTypeList;
    S.getVarClientTypeList = function () {
        return varClientTypeList;
    };
    var varNPCTypeList;
    var varPlayerTypeList;
    S.getVarPlayerTypeList = function () {
        return varPlayerTypeList;
    };
    var varPlayerGroupTypeList;
    S.getVarPlayerGroupTypeList = function () {
        return varPlayerGroupTypeList;
    };
    var X = function (ag, aj, al, ao, ah, am, ai, ak, an) {
        V = ag;
        ae = aj;
        a = al;
        ac = ao;
        Y = ah;
        o = am;
        g = ai;
        Z = an;
        x = ak;
    };
    S.member25 = X;
    var getConfigType = function (ah, ag) {
        if (af !== d) {
            return NULL;
        }
        if (configTypeLists[ah] !== undefined) {
            return configTypeLists[ah].list(ag);
        } else {
            throw new Error('1722 ' + ah);
        }
    };
    S.getConfigType = getConfigType;
    var getVarType = function (ag, ah) {
        if (af !== d) {
            return NULL;
        }
        if (ag === VarDomainType.PLAYER) {
            return varPlayerTypeList.list(ah);
        } else if (ag === VarDomainType.PLAYER_GROUP) {
            return varPlayerGroupTypeList.list(ah);
        } else if (ag === VarDomainType.NPC) {
            return varNPCTypeList.list(ah);
        } else if (ag === VarDomainType.CLIENT) {
            return varClientTypeList.list(ah);
        } else if (ag === VarDomainType.CLAN) {
            return varClanTypeList.list(ah);
        } else if (ag === VarDomainType.CLAN_SETTING) {
            return varClanSettingTypeList.list(ah);
        } else {
            throw new Error('1723 ' + VarDomainType.serialID);
        }
    };
    S.getVarType = getVarType;
    var getVarBitType = function (ag) {
        if (af !== d) {
            return NULL;
        }
        return varBitTypeList.list(ag);
    };
    S.getVarBitType = getVarBitType;
    var v = function () {
        if (af === m) {
            if (V.member1437(Class95.member807) && V.member1437(Class95.member816) && V.member1437(Class95.member817) && V.member1437(Class95.member818) && V.member1437(Class95.member819) && V.member1437(Class95.member820) && V.member1437(Class95.member821) && V.member1437(Class95.member822) && V.member1437(Class95.JS5_CONFIG_AUDIOGROUPS) && V.member1437(Class95.JS5_CONFIG_AUDIOBUSS)) {
                if (x !== undefined) {
                    if (V.member1437(Class95.member824) && V.member1437(Class95.member825)) {
                        af = U;
                    }
                } else {
                    af = U;
                }
            }
        } else if (af === U) {
            if (o === undefined || o[Js5ConfigGroup.PARAMTYPE.member1204]) {
                paramTypeList = ConfigTypeList({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.PARAMTYPE,
                    configTypeConstructor: ParamType
                });
                configTypeLists[Js5ConfigGroup.PARAMTYPE.member1204] = paramTypeList;
            }
            if (o === undefined || o[Js5ConfigGroup.ENUMTYPE.member1204]) {
                enumTypeList = EnumTypeList({
                    member2739: a,
                    member3992: ae,
                    member995: V
                });
                configTypeLists[Js5ConfigGroup.ENUMTYPE.member1204] = enumTypeList;
            }
            if (o === undefined || o[Js5ConfigGroup.INVTYPE.member1204]) {
                invTypeList = ConfigTypeList({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.INVTYPE,
                    configTypeConstructor: InvType
                });
                configTypeLists[Js5ConfigGroup.INVTYPE.member1204] = invTypeList;
            }
            if (o === undefined || o[Js5ConfigGroup.OBJTYPE.member1204]) {
                objTypeList = ObjTypeList({
                    member2739: a,
                    member3992: ae,
                    member9984: ac,
                    member995: V,
                    member2970: S
                });
                configTypeLists[Js5ConfigGroup.OBJTYPE.member1204] = objTypeList;
            }
            if (x !== undefined) {
                if (o === undefined || o[Js5ConfigGroup.CHATCATTYPE.member1204]) {
                    chatCatTypeList = QuickChatCatTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V
                    });
                    configTypeLists[Js5ConfigGroup.CHATCATTYPE.member1204] = chatCatTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.CHATPHRASETYPE.member1204]) {
                    chatPhraseTypeList = QuickChatPhraseTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member9746: x
                    });
                    configTypeLists[Js5ConfigGroup.CHATPHRASETYPE.member1204] = chatPhraseTypeList;
                }
            }
            if (o === undefined || o[Js5ConfigGroup.VAR_BIT.member1204]) {
                varBitTypeList = VarBitTypeList({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2970: S
                });
            }
            if (o === undefined || o[Js5ConfigGroup.VAR_CLAN.member1204]) {
                varClanTypeList = Class794({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.VAR_CLAN,
                    member10511: VarDomainType.CLAN
                });
            }
            if (o === undefined || o[Js5ConfigGroup.VAR_CLAN_SETTING.member1204]) {
                varClanSettingTypeList = Class794({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.VAR_CLAN_SETTING,
                    member10511: VarDomainType.CLAN_SETTING
                });
            }
            if (o === undefined || o[Js5ConfigGroup.VAR_CLIENT.member1204]) {
                varClientTypeList = Class794({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.VAR_CLIENT,
                    member10511: VarDomainType.CLIENT
                });
            }
            if (o === undefined || o[Js5ConfigGroup.VAR_NPC.member1204]) {
                varNPCTypeList = Class794({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.VAR_NPC,
                    member10511: VarDomainType.NPC
                });
            }
            if (o === undefined || o[Js5ConfigGroup.VAR_PLAYER.member1204]) {
                varPlayerTypeList = Class794({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.VAR_PLAYER,
                    member10511: VarDomainType.PLAYER
                });
            }
            if (o === undefined || o[Js5ConfigGroup.STRUCTTYPE.member1204]) {
                structTypeList = ConfigTypeList({
                    member2739: a,
                    member3992: ae,
                    member995: V,
                    member2385: Js5ConfigGroup.STRUCTTYPE,
                    configTypeConstructor: StructType,
                    member10513: Class95.member822
                });
                configTypeLists[Js5ConfigGroup.STRUCTTYPE.member1204] = structTypeList;
            }
            if (true) {
                if (o === undefined || o[Js5ConfigGroup.VAR_PLAYER_GROUP.member1204]) {
                    varPlayerGroupTypeList = Class794({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.VAR_PLAYER_GROUP,
                        member10511: VarDomainType.PLAYER_GROUP
                    });
                }
                if (o === undefined || o[Js5ConfigGroup.BASTYPE.member1204]) {
                    basTypeList = BASTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V
                    });
                    configTypeLists[Js5ConfigGroup.BASTYPE.member1204] = basTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.SPOTTYPE.member1204]) {
                    effectAnimTypeList = EffectAnimTypeList({ member995: V });
                    configTypeLists[Js5ConfigGroup.SPOTTYPE.member1204] = effectAnimTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.FLUTYPE.member1204]) {
                    floorUnderlayTypeList = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.FLUTYPE,
                        configTypeConstructor: FloorUnderlayType
                    });
                    configTypeLists[Js5ConfigGroup.FLUTYPE.member1204] = floorUnderlayTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.FLOTYPE.member1204]) {
                    floorOverlayTypeList = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.FLOTYPE,
                        configTypeConstructor: FloorOverlayType
                    });
                    configTypeLists[Js5ConfigGroup.FLOTYPE.member1204] = floorOverlayTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.HITMARKTYPE.member1204]) {
                    hitmarkTypeList = HitmarkTypeList({
                        member995: V,
                        member2970: S,
                        member8694: Y
                    });
                    configTypeLists[Js5ConfigGroup.HITMARKTYPE.member1204] = hitmarkTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.HEADBARTYPE.member1204]) {
                    headbarTypeList = HeadbarTypeList({ member995: V });
                    configTypeLists[Js5ConfigGroup.HEADBARTYPE.member1204] = headbarTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.LIGHTTYPE.member1204]) {
                    lightTypeList = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.LIGHTTYPE,
                        configTypeConstructor: LightType
                    });
                    configTypeLists[Js5ConfigGroup.LIGHTTYPE.member1204] = lightTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.IDKTYPE.member1204]) {
                    idkTypeList = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.IDKTYPE,
                        configTypeConstructor: IDKType
                    });
                    configTypeLists[Js5ConfigGroup.IDKTYPE.member1204] = idkTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.LOCTYPE.member1204]) {
                    locTypeList = LocTypeList({
                        member2739: a,
                        member3992: ae,
                        member8693: ac,
                        member995: V,
                        member2970: S,
                        member8694: Y
                    });
                    configTypeLists[Js5ConfigGroup.LOCTYPE.member1204] = locTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.MELTYPE.member1204]) {
                    mapElementTypeList = MapElementTypeList({
                        member995: V,
                        member2970: S,
                        member8694: Y
                    });
                    configTypeLists[Js5ConfigGroup.MELTYPE.member1204] = mapElementTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.MSITYPE.member1204]) {
                    msiTypeList = MSITypeList({ member995: V });
                    configTypeLists[Js5ConfigGroup.MSITYPE.member1204] = msiTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.NPCTYPE.member1204]) {
                    npcTypeList = NPCTypeList({
                        member2739: a,
                        member3992: ae,
                        member8693: ac,
                        member995: V,
                        member2970: S,
                        member8694: Y
                    });
                    configTypeLists[Js5ConfigGroup.NPCTYPE.member1204] = npcTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.QUESTTYPE.member1204]) {
                    questTypeList = QuestTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2970: S
                    });
                    configTypeLists[Js5ConfigGroup.QUESTTYPE.member1204] = questTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.SEQGROUPTYPE.member1204]) {
                    seqGroupTypeList = SeqGroupTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V
                    });
                    configTypeLists[Js5ConfigGroup.SEQGROUPTYPE.member1204] = seqGroupTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.SEQTYPE.member1204]) {
                    seqTypeList = SeqTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        seqGroupTypeList: seqGroupTypeList
                    });
                    configTypeLists[Js5ConfigGroup.SEQTYPE.member1204] = seqTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.SKYBOXTYPE.member1204]) {
                    skyBoxTypeList = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.SKYBOXTYPE,
                        configTypeConstructor: SkyBoxType
                    });
                    configTypeLists[Js5ConfigGroup.SKYBOXTYPE.member1204] = skyBoxTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.WATERTYPE.member1204]) {
                    waterTypeList = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.WATERTYPE,
                        configTypeConstructor: WaterType
                    });
                    configTypeLists[Js5ConfigGroup.WATERTYPE.member1204] = waterTypeList;
                }
                if (o === undefined || o[Js5ConfigGroup.CURSORTYPE.member1204]) {
                    Q = ConfigTypeList({
                        member2739: a,
                        member3992: ae,
                        member995: V,
                        member2385: Js5ConfigGroup.CURSORTYPE,
                        configTypeConstructor: CursorType
                    });
                    configTypeLists[Js5ConfigGroup.CURSORTYPE.member1204] = Q;
                }
            } else {
            }
            af = d;
        } else if (af === d) {
            for (var ag = 0; ag < configTypeLists.length; ag++) {
                if (configTypeLists[ag] !== undefined) {
                    configTypeLists[ag].member8697(2000);
                }
            }
            if (g && !objTypeList.member9593()) {
                objTypeList.member9983();
            }
            if (Z && !chatPhraseTypeList.member9745()) {
                chatPhraseTypeList.member9883();
            }
        }
    };
    S.member78 = v;
    S.member8696 = function () {
        for (var ag = 0; ag < configTypeLists.length; ag++) {
            if (configTypeLists[ag] !== undefined) {
                configTypeLists[ag].member8696();
            }
        }
    };
    var N = S.member8696;
    S.member2975 = function (ag) {
        return configTypeLists[ag].member2975();
    };
    var e = S.member2975;
    return S;
}();