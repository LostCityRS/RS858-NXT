export var Class343 = function () {
    var b = false;
    var a = function (m, n) {
        var i = {};
        var c;
        var k;
        var o = NULL;
        var e = 13;
        var r = false;
        var d = 'DB';
        i.member3266 = function () {
            return d;
        };
        i.member3589 = undefined;
        var j = function (t, s) {
            if (member55(navigator, 'temporaryStorage') !== undefined) {
                member55(navigator, 'temporaryStorage').queryUsageAndQuota(t, s);
            } else if (member55(window, 'storageInfo') !== undefined) {
                member55(window, 'storageInfo').queryUsageAndQuota(member55(window, 'storageInfo').TEMPORARY, t, s);
            }
        };
        i.member3587 = function () {
            j(function (t, s) {
                var u = Math.floor(t / (1024 * 1024));
                d = 'Disk:' + u + 'M';
            });
        };
        if (m === undefined || n === undefined) {
            throw new Error('953 ');
        }
        k = m;
        c = n;
        if (false) {
        }
        var h = member55(window, 'indexedDB').open(k, e);
        h.onsuccess = function (s) {
            if (false) {
            }
            o = h.result;
            r = true;
            if (i.member3589 !== undefined) {
                i.member3589();
            }
        };
        h.onerror = function (s) {
            if (false) {
            }
        };
        h.onupgradeneeded = function (s) {
            if (false) {
            }
            o = s.currentTarget.result;
            o.createObjectStore(c);
            o.transaction.oncomplete = function (t) {
                if (false) {
                }
                r = true;
                if (i.member3589 !== undefined) {
                    i.member3589();
                }
            };
            o.transaction.onerror = function (t) {
                if (false) {
                }
            };
        };
        i.readyanim = function () {
            return r;
        };
        var g = function (s) {
            return o.transaction(c, s);
        };
        var q = function (s) {
            return s.objectStore(c);
        };
        i.writeFile = function (s, z, v, C, A) {
            if (!r) {
                throw new Error('954 ');
            }
            var x = g('readwrite');
            var D = q(x);
            var B = function () {
                if (C !== undefined) {
                    C(s);
                }
            };
            var u = function () {
                if (A !== undefined) {
                    A(s, false ? {} : '');
                }
            };
            if (v) {
                var t = D.get(s);
                t.onsuccess = function (I) {
                    var F;
                    var G = I.target.result;
                    if (G === undefined) {
                        F = z;
                    } else {
                        var H = new Uint8Array(G.byteLength + z.byteLength);
                        H.set(new Uint8Array(G));
                        H.set(new Uint8Array(z), G.byteLength);
                        F = H.buffer;
                    }
                    var E = D.put(F, s);
                    x.oncomplete = B;
                    x.onerror = u;
                };
                t.onerror = function (E) {
                    if (A !== undefined) {
                        A(s, false ? {} : '');
                    }
                };
            } else {
                var y = D.put(z, s);
                x.oncomplete = B;
                x.onerror = u;
            }
        };
        i.readFile = function (s, z, v) {
            if (!r) {
                throw new Error('955 ');
            }
            var y = g('readonly');
            var x = q(y);
            var u = x.get(s);
            var t = function () {
                if (v !== undefined) {
                    v(s, false ? {} : '');
                }
            };
            y.oncomplete = function () {
                var A = u.result;
                if (A === undefined) {
                    t();
                } else if (z !== undefined) {
                    z(s, A);
                }
            };
            y.onerror = t;
        };
        i.deleteFile = function (s, y, u) {
            if (!r) {
                throw new Error('956 ');
            }
            var x = g('readwrite');
            var v = q(x);
            var t = v['delete'](s);
            x.oncomplete = function () {
                if (y !== undefined) {
                    y(s);
                }
            };
            x.onerror = function () {
                if (u !== undefined) {
                    u(s, false ? {} : '');
                }
            };
        };
        i.member301 = function (x, t) {
            if (!r) {
                throw new Error('957 ');
            }
            r = false;
            var v = g('readwrite');
            var u = q(v);
            var s = u.clear();
            v.oncomplete = function () {
                r = true;
                if (i.member3589 !== undefined) {
                    i.member3589();
                }
                if (x !== undefined) {
                    x();
                }
            };
            v.onerror = t;
        };
        i.member3586 = function (t, s) {
            if (!r) {
                throw new Error('958 ');
            }
            console.log('IndexedDBFileAPI: We don\'t support listFiles yet!');
            s();
        };
        return i;
    };
    return a;
}();