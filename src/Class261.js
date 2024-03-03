export var Class261 = function () {
    var a = {
        member3027: { serialID: 1 },
        member3028: { serialID: 2 },
        member3029: { serialID: 3 },
        member3030: { serialID: 4 },
        member3031: { serialID: 5 },
        member3032: { serialID: 7 },
        member3033: { serialID: 110 }
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