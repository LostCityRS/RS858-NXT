export var Class254 = function () {
    var a = {
        member2979: { serialID: 1 },
        member2980: { serialID: 2 }
    };
    var b = function (d) {
        for (var c in a) {
            if (c.serialID === d) {
                return type;
            }
        }
        return null;
    };
    a.getByID = b;
    return a;
}();