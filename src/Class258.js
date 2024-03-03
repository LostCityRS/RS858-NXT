export var Class258 = function () {
    var a = {
        member2996: { id: 0 },
        member2997: { id: 1 }
    };
    a.getByID = function (c) {
        for (var d in a) {
            var b = a[d];
            if (b.id === c) {
                return b;
            }
        }
        return undefined;
    };
    return a;
}();