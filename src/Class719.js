export var Class719 = function () {
    var a = {
        member778: {
            serialID: 0,
            member10037: -1,
            member10038: false,
            member10039: true
        },
        member10040: {
            serialID: 1,
            member10037: 0,
            member10038: true,
            member10039: true
        },
        member10041: {
            serialID: 2,
            member10037: 1,
            member10038: true,
            member10039: false
        },
        member10042: {
            serialID: 3,
            member10037: 8,
            member10038: true,
            member10039: true
        },
        member10043: {
            serialID: 4,
            member10037: 9,
            member10038: false,
            member10039: true
        },
        member10044: {
            serialID: 5,
            member10037: 10,
            member10038: true,
            member10039: true
        },
        member10045: {
            serialID: 6,
            member10037: 11,
            member10038: false,
            member10039: true
        },
        member10046: {
            serialID: 7,
            member10037: 12,
            member10038: false,
            member10039: true
        },
        member10047: {
            serialID: 8,
            member10037: 13,
            member10038: false,
            member10039: true
        }
    };
    var b = function (e) {
        for (var c in a) {
            var d = a[c];
            if (d.serialID === e) {
                return d;
            }
        }
        return null;
    };
    a.getByID = b;
    return a;
}();