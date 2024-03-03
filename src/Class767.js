import { Class66 } from 'Class66.js';
import { Class293 } from 'Class293.js';
import { Class766 } from 'Class766.js';
import { Class371 } from 'Class371.js';
import { Class633 } from 'Class633.js';
import { Class421 } from 'Class421.js';
export var Class767 = function () {
    var r = {};
    var z;
    var a;
    var j = false;
    r.isOpen = function () {
        return j;
    };
    var A = {
        member10359: {
            member10360: 'tab_profiling',
            member10361: 'topBarProfilingLink'
        },
        member10362: {
            member10360: 'tab_cs_errors',
            member10361: 'topbarCSErrorsLink'
        },
        member10363: {
            member10360: 'tab_cs_profiling',
            member10361: 'topbarCSProfilingLink'
        },
        member10364: {
            member10360: 'tab_cs_debug',
            member10361: 'topbarCSDebugLink'
        },
        member10365: {
            member10360: 'tab_audio_debug',
            member10361: 'topbarAudioDebugLink'
        },
        member10366: {
            member10360: 'tab_misc_debug',
            member10361: 'topbarMiscDebugLink'
        }
    };
    var v = A.member10359;
    r.member25 = function (E) {
        z = E;
        a = Class66.member432('debugwindow');
        if (true) {
            Class293.member3468({
                url: window.debugMonitorUsingHTML === true ? 'clientjsdebug.html' : Class766.member10346.value + '/html5gamedebug.ws',
                member3469: 'height=800,location=no,menubar=no,status=no,toolbar=no,width=600'
            });
            Class293.member3473(function () {
                if (Class293.isOpen()) {
                    j = true;
                    n();
                }
            });
            Class293.member3472(a);
        } else {
        }
    };
    r.member10108 = function () {
        j = true;
        Class293.open();
    };
    r.member10107 = function () {
        j = false;
        Class293.close();
    };
    var n = function () {
        for (var E in A) {
            e(A[E]);
        }
        Class293.document.getElementById('tab_cs_profiling_status').onclick = i;
        Class293.document.getElementById('tab_cs_profiling_recentbutton').onclick = function () {
            o('tab_cs_profiling_recentdiv');
        };
        Class293.document.getElementById('tab_cs_profiling_mostrunbutton').onclick = function () {
            c();
            o('tab_cs_profiling_mostrundiv');
        };
        Class293.document.getElementById('tab_cs_profiling_mostcostlybutton').onclick = function () {
            s();
            o('tab_cs_profiling_mostcostlydiv');
        };
        Class293.document.getElementById('tab_cs_profiling_mostopsbutton').onclick = function () {
            g();
            o('tab_cs_profiling_mostopsdiv');
        };
        Class293.document.getElementById('tab_audio_debug_status').onclick = function () {
            Class371.member4028();
        };
        Class293.document.getElementById('tab_audio_debug_locations_button').onclick = function () {
            Class371.member4031();
        };
        Class293.document.getElementById('tab_audio_debug_instances_freeze').onclick = function () {
            Class371.member4036();
        };
        Class293.document.getElementById('tab_misc_debug_status').onclick = y;
    };
    var e = function (E) {
        Class293.document.getElementById(E.member10361).onclick = function () {
            q(E);
        };
    };
    var q = function (E) {
        t();
        Class293.document.getElementById(E.member10360).style.display = 'block';
        v = E;
    };
    var t = function () {
        for (var F in A) {
            var E = A[F];
            Class293.document.getElementById(E.member10360).style.display = 'none';
        }
    };
    r.member487 = function () {
        if (!j) {
            return;
        }
    };
    r.member486 = function () {
    };
    r.member10367 = function () {
        if (a !== undefined) {
            Class293.member3471(a);
        }
        if (Class293.isOpen()) {
            Class293.close();
        }
    };
    var B = new Array(0);
    r.member10368 = function (I, H, G, F) {
        if (!j) {
            return;
        }
        B.push({
            member2790: Class633.member9463(Date.now()),
            member10369: I,
            member4871: H,
            member10370: G,
            member10371: F
        });
        if (B.length > 10) {
            B.shift();
        }
        var K = Class293.document.getElementById('tab_cs_error_table');
        if (K !== null) {
            var J = '<tr style=\'background-color:#555555;color:#FF8000;font-size:medium;\'><td>Time</td><td>Trigger</td><td>Op code</td><td>Error</td><td>JS Error</td></tr>';
            for (var E = B.length - 1; E >= 0; E--) {
                J += '<tr>';
                J += '<td style=\'padding-bottom:25px;\'>' + B[E].member2790 + '</td>';
                J += '<td style=\'padding-bottom:25px;\'>' + B[E].member10369 + '</td>';
                J += '<td style=\'padding-bottom:25px;\'>' + B[E].member4871 + '</td>';
                J += '<td style=\'padding-bottom:25px;\'>' + B[E].member10370 + '</td>';
                J += '<td style=\'padding-bottom:25px;\'>' + B[E].member10371 + '</td>';
                J += '</tr>';
            }
            K.innerHTML = J;
        }
    };
    var u = false;
    r.member9768 = function () {
        return u;
    };
    var m = undefined;
    var k = undefined;
    var b = new Array(0);
    var i = function () {
        if (u) {
            d();
        } else {
            C();
        }
    };
    var C = function () {
        m = new Array(5000);
        k = new Array(Class421.member6096 + 1);
        u = true;
        Class293.document.getElementById('tab_cs_profiling_status').textContent = 'ENABLED';
        Class293.document.getElementById('tab_cs_profiling_status').style.color = 'green';
    };
    var d = function () {
        m = undefined;
        k = undefined;
        u = false;
        Class293.document.getElementById('tab_cs_profiling_status').textContent = 'DISABLED';
        Class293.document.getElementById('tab_cs_profiling_status').style.color = 'red';
    };
    var o = function (E) {
        Class293.document.getElementById('tab_cs_profiling_recentdiv').style.display = 'none';
        Class293.document.getElementById('tab_cs_profiling_mostrundiv').style.display = 'none';
        Class293.document.getElementById('tab_cs_profiling_mostcostlydiv').style.display = 'none';
        Class293.document.getElementById('tab_cs_profiling_mostopsdiv').style.display = 'none';
        Class293.document.getElementById(E).style.display = 'block';
    };
    r.member9769 = function (F, E) {
        if (!j) {
            return;
        }
        if (m[F] === undefined) {
            m[F] = {
                member10369: E,
                member10372: F,
                member10373: 0,
                member10374: 0,
                member10375: 0,
                member0: 0
            };
        }
        m[F].member10373++;
    };
    r.member9773 = function (E) {
        if (!j) {
            return;
        }
        if (m[E] === undefined) {
            return;
        }
        m[E].member10374++;
    };
    r.member9771 = function (I, H) {
        if (!j) {
            return;
        }
        if (m[I] === undefined) {
            return;
        }
        m[I].member10375++;
        m[I].member0 += H;
        b.push({
            member2790: Class633.member9463(Date.now()),
            member10369: m[I].member10369,
            member10372: I,
            member10376: H
        });
        if (b.length > 50) {
            b.shift();
        }
        var F = Class293.document.getElementById('tab_cs_profiling_recenttable');
        if (F !== null) {
            var G = '<tr style=\'background-color:#555555;color:#FF8000;font-size:medium;\'><td>Time</td><td>Trigger</td><td>Execution Time</td></tr>';
            for (var E = b.length - 1; E >= 0; E--) {
                G += '<tr>';
                G += '<td style=\'padding-bottom:5px;\'>' + b[E].member2790 + '</td>';
                G += '<td style=\'padding-bottom:5px;\'>' + b[E].member10369 + '(' + b[E].member10372 + ')</td>';
                G += '<td style=\'padding-bottom:5px;\'>' + b[E].member10376 + 'ms</td>';
                G += '</tr>';
            }
            F.innerHTML = G;
        }
    };
    r.member9772 = function (E) {
        if (!j) {
            return;
        }
        if (k[E] === undefined) {
            k[E] = {
                member6706: Class421.member6098[E],
                member10377: 0
            };
        }
        k[E].member10377++;
    };
    var c = function () {
        if (!u) {
            return;
        }
        var G = m.slice(0);
        G.sort(function (J, I) {
            if (J === undefined && I === undefined) {
                return 0;
            } else if (J === undefined) {
                return 1;
            } else if (I === undefined) {
                return -1;
            }
            return I.member10375 - J.member10375;
        });
        var F = Class293.document.getElementById('tab_cs_profiling_mostruntable');
        if (F !== null) {
            var H = '<tr style=\'background-color:#555555;color:#FF8000;font-size:medium;\'><td>Trigger</td><td>Trigger starts</td><td>Trigger pauses</td><td>Trigger finishes</td><td>Total time</td><td>Average time</td></tr>';
            for (var E = 0; E < 100; E++) {
                if (G[E] === undefined) {
                    break;
                }
                H += '<tr>';
                H += '<td style=\'padding-bottom:5px;\'>' + G[E].member10369 + '(' + G[E].member10372 + ')</td>';
                H += '<td style=\'padding-bottom:5px;\'>' + G[E].member10373 + '</td>';
                H += '<td style=\'padding-bottom:5px;\'>' + G[E].member10374 + '</td>';
                H += '<td style=\'padding-bottom:5px;font-weight:bold;\'>' + G[E].member10375 + '</td>';
                H += '<td style=\'padding-bottom:5px;\'>' + G[E].member0 + 'ms</td>';
                H += '<td style=\'padding-bottom:5px;\'>' + Math.round(G[E].member0 / G[E].member10375) + 'ms</td>';
                H += '</tr>';
            }
            F.innerHTML = H;
        }
    };
    var s = function () {
        if (!u) {
            return;
        }
        var F = m.slice(0);
        F.sort(function (J, I) {
            if (J === undefined && I === undefined) {
                return 0;
            } else if (J === undefined) {
                return 1;
            } else if (I === undefined) {
                return -1;
            }
            return I.member0 - J.member0;
        });
        var H = Class293.document.getElementById('tab_cs_profiling_mostcostlytable');
        if (H !== null) {
            var G = '<tr style=\'background-color:#555555;color:#FF8000;font-size:medium;\'><td>Trigger</td><td>Trigger starts</td><td>Trigger pauses</td><td>Trigger finishes</td><td>Total time</td><td>Average time</td></tr>';
            for (var E = 0; E < 100; E++) {
                if (F[E] === undefined) {
                    break;
                }
                G += '<tr>';
                G += '<td style=\'padding-bottom:5px;\'>' + F[E].member10369 + '(' + F[E].member10372 + ')</td>';
                G += '<td style=\'padding-bottom:5px;\'>' + F[E].member10373 + '</td>';
                G += '<td style=\'padding-bottom:5px;\'>' + F[E].member10374 + '</td>';
                G += '<td style=\'padding-bottom:5px;\'>' + F[E].member10375 + '</td>';
                G += '<td style=\'padding-bottom:5px;font-weight:bold;\'>' + F[E].member0 + 'ms</td>';
                G += '<td style=\'padding-bottom:5px;\'>' + Math.round(F[E].member0 / F[E].member10375) + 'ms</td>';
                G += '</tr>';
            }
            H.innerHTML = G;
        }
    };
    var g = function () {
        if (!u) {
            return;
        }
        var F = k.slice(0);
        F.sort(function (J, I) {
            if (J === undefined && I === undefined) {
                return 0;
            } else if (J === undefined) {
                return 1;
            } else if (I === undefined) {
                return -1;
            }
            return I.member10377 - J.member10377;
        });
        var H = Class293.document.getElementById('tab_cs_profiling_mostopstable');
        var G = '<tr style=\'background-color:#555555;color:#FF8000;font-size:medium;\'><td>Op Name</td><td>Run count</td></tr>';
        for (var E = 0; E < 100; E++) {
            if (F[E] === undefined) {
                break;
            }
            G += '<tr>';
            G += '<td style=\'padding-bottom:5px;\'>' + F[E].member6706 + '</td>';
            G += '<td style=\'padding-bottom:5px;\'>' + F[E].member10377 + '</td>';
            G += '</tr>';
        }
        H.innerHTML = G;
    };
    var h = false;
    var y = function () {
        if (h) {
            D();
        } else {
            x();
        }
    };
    r.member10378 = function () {
        return h;
    };
    var x = function () {
        h = true;
        Class293.document.getElementById('tab_misc_debug_status').textContent = 'ENABLED';
        Class293.document.getElementById('tab_misc_debug_status').style.color = 'green';
    };
    var D = function () {
        h = false;
        Class293.document.getElementById('tab_misc_debug_status').textContent = 'DISABLED';
        Class293.document.getElementById('tab_misc_debug_status').style.color = 'red';
    };
    r.member10379 = function (G) {
        if (!j || !h) {
            return;
        }
        var F = Class293.document.getElementById('tab_misc_debug_table');
        var H = '';
        for (var E = 0; E < G.length; E++) {
            H += '<tr><td style=\'background-color:#333333;padding-bottom:5px;\'>' + G[E] + '</td></tr>';
        }
        F.innerHTML = H;
    };
    return r;
}();