import { ScriptVarType } from 'Class463.js';
export var Class654 = function () {
    var a = {};
    a.member25 = function (h, g, d, e, b, c) {
        a.member9667 = {
            id: 1,
            member867: d.requestProfanityFilterResult,
            params: [ScriptVarType.BOOLEAN]
        };
        a.member9668 = {
            id: 2,
            member867: g.setLastJoinedChatReply,
            params: [ScriptVarType.STRING]
        };
        a.member9669 = {
            id: 3,
            member867: h.isMutedReply,
            params: [ScriptVarType.BOOLEAN]
        };
        a.member9670 = {
            id: 4,
            member867: d.friendChatNameReply,
            params: [ScriptVarType.STRING]
        };
        a.member9671 = {
            id: 5,
            member867: d.friendMinEnterRankReply,
            params: [ScriptVarType.INT]
        };
        a.member9672 = {
            id: 6,
            member867: d.friendMinTalkRankReply,
            params: [ScriptVarType.INT]
        };
        a.member9673 = {
            id: 7,
            member867: d.friendMinKickRankReply,
            params: [ScriptVarType.INT]
        };
        a.member9674 = {
            id: 8,
            member867: h.getClanStatus,
            params: [
                ScriptVarType.BOOLEAN,
                ScriptVarType.BOOLEAN
            ]
        };
        a.member9675 = {
            id: 9,
            member867: d.requestAllChatFiltersReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT
            ]
        };
        a.member9676 = {
            id: 10,
            member867: d.requestPrivateChatFilterReply,
            params: [ScriptVarType.INT]
        };
        a.member9677 = {
            id: 11,
            member867: d.requestFriendChatFilterReply,
            params: [ScriptVarType.INT]
        };
        a.member9678 = {
            id: 12,
            member867: d.requestClanChatFilterReply,
            params: [ScriptVarType.INT]
        };
        a.member9679 = {
            id: 13,
            member867: h.getChatCrownImageIdReply,
            params: [ScriptVarType.INT]
        };
        a.member9680 = {
            id: 14,
            member867: e.requestGESingleSlotReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.OBJ,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.OBJ,
                ScriptVarType.INT
            ]
        };
        a.member9681 = {
            id: 15,
            member867: e.geUpdateNotification,
            params: [
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT
            ]
        };
        a.member9682 = {
            id: 16,
            member867: h.isTradeRestrictedReply,
            params: [ScriptVarType.BOOLEAN]
        };
        a.member9683 = {
            id: 17,
            member867: b.requestDDsListItemReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT
            ]
        };
        a.member9684 = {
            id: 18,
            member867: b.requestDDInfoReply,
            params: [
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING
            ]
        };
        a.member9685 = {
            id: 19,
            member867: c.requestBankTabsReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.INT
            ]
        };
        a.member9686 = {
            id: 20,
            member867: c.requestBankSlotReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.OBJ,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT
            ]
        };
        a.member9687 = {
            id: 21,
            member867: c.setBankDetails,
            params: [
                ScriptVarType.INV,
                ScriptVarType.INT,
                ScriptVarType.INV
            ]
        };
        a.member9688 = {
            id: 22,
            member867: c.requestBankSearchReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.INT
            ]
        };
        a.member9689 = {
            id: 23,
            member867: e.getItemDetailsReply,
            params: [
                ScriptVarType.OBJ,
                ScriptVarType.STRING,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN
            ]
        };
        a.member9690 = {
            id: 24,
            member867: e.makeBuyOfferReply,
            params: [
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT
            ]
        };
        a.member9691 = {
            id: 25,
            member867: e.makeSellOfferReply,
            params: [
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT
            ]
        };
        a.member9692 = {
            id: 26,
            member867: e.messageReply,
            params: [
                ScriptVarType.INT,
                ScriptVarType.STRING
            ]
        };
        a.member9693 = {
            id: 27,
            member867: e.abortOfferReply,
            params: [ScriptVarType.BOOLEAN]
        };
        a.member9694 = {
            id: 28,
            member867: e.collectSlotReply,
            params: []
        };
        a.member9695 = {
            id: 29,
            member867: c.pinEnteredReply,
            params: [
                ScriptVarType.BOOLEAN,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT
            ]
        };
        a.member9696 = {
            id: 30,
            member867: c.pinStatusReply,
            params: [
                ScriptVarType.BOOLEAN,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.INT
            ]
        };
        a.member9697 = {
            id: 31,
            member867: e.requestGEHistoryReply,
            params: [
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN,
                ScriptVarType.OBJ,
                ScriptVarType.INT,
                ScriptVarType.INT,
                ScriptVarType.STRING,
                ScriptVarType.INT,
                ScriptVarType.BOOLEAN
            ]
        };
        a.member9698 = {
            id: 32,
            member867: e.requestGECompletedTransactionCountReply,
            params: [ScriptVarType.INT]
        };
        a.member9699 = {
            id: 33,
            member867: h.is2FactorAuthEnabledReply,
            params: [ScriptVarType.BOOLEAN]
        };
        a.member9700 = {
            id: 34,
            member867: h.isComappTradingEnabledReply,
            params: [ScriptVarType.BOOLEAN]
        };
        a.member9701 = {
            id: 35,
            member867: h.canAccessGEBuySellReply,
            params: [ScriptVarType.BOOLEAN]
        };
    };
    return a;
}();