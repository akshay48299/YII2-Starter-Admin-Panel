!function (i) {
    function t(t, o) {
        var e;
        return i.Notification ? e = new i.Notification(t, {
            icon: w(o.icon) ? o.icon : o.icon.x32,
            body: o.body || N,
            tag: o.tag || N
        }) : i.webkitNotifications ? (e = i.webkitNotifications.createNotification(o.icon, t, o.body), e.show()) : navigator.mozNotification ? (e = navigator.mozNotification.createNotification(t, o.body, o.icon), e.show()) : i.external && i.external.msIsSiteMode() && (i.external.msSiteModeClearIconOverlay(), i.external.msSiteModeSetIconOverlay(w(o.icon) ? o.icon : o.icon.x16, t), i.external.msSiteModeActivate(), e = {ieVerification: b + 1}), e
    }

    function o(t) {
        return {
            close: function () {
                t && (t.close ? t.close() : i.external && i.external.msIsSiteMode() && t.ieVerification === b && i.external.msSiteModeClearIconOverlay())
            }
        }
    }

    function e(t) {
        if (v) {
            var o = S(t) ? t : M;
            i.webkitNotifications && i.webkitNotifications.checkPermission ? i.webkitNotifications.requestPermission(o) : i.Notification && i.Notification.requestPermission && i.Notification.requestPermission(o)
        }
    }

    function n() {
        var t;
        if (v)return i.Notification && i.Notification.permissionLevel ? t = i.Notification.permissionLevel() : i.webkitNotifications && i.webkitNotifications.checkPermission ? t = d[i.webkitNotifications.checkPermission()] : i.Notification && i.Notification.permission ? t = i.Notification.permission : navigator.mozNotification ? t = f : i.external && void 0 !== i.external.msIsSiteMode() && (t = i.external.msIsSiteMode() ? f : s), t
    }

    function c(i) {
        return i && x(i) && I(k, i), k
    }

    function r() {
        return k.pageVisibility ? document.hidden || document.msHidden || document.mozHidden || document.webkitHidden : !0
    }

    function a(e, c) {
        var a, s;
        return v && r() && w(e) && c && (w(c.icon) || x(c.icon)) && n() === f && (a = t(e, c)), s = o(a), k.autoClose && a && !a.ieVerification && a.addEventListener && a.addEventListener("show", function () {
            var t = s;
            i.setTimeout(function () {
                t.close()
            }, k.autoClose)
        }), s
    }

    var s = "default", f = "granted", u = "denied", d = [f, s, u], l = {
        pageVisibility: !1,
        autoClose: 0
    }, m = {}, N = "", v = function () {
        var t = !1;
        try {
            t = !!(i.Notification || i.webkitNotifications || navigator.mozNotification || i.external && void 0 !== i.external.msIsSiteMode())
        } catch (o) {
        }
        return t
    }(), b = Math.floor(10 * Math.random() + 1), S = function (i) {
        return i && i.constructor === Function
    }, w = function (i) {
        return i && i.constructor === String
    }, x = function (i) {
        return i && i.constructor === Object
    }, I = function (i, t) {
        var o, e;
        for (o in t)e = t[o], o in i && (i[o] === e || o in m && m[o] === e) || (i[o] = e);
        return i
    }, M = function () {
    }, k = l;
    i.notify = {
        PERMISSION_DEFAULT: s,
        PERMISSION_GRANTED: f,
        PERMISSION_DENIED: u,
        isSupported: v,
        config: c,
        createNotification: a,
        permissionLevel: n,
        requestPermission: e
    }, S(Object.seal) && Object.seal(i.notify)
}(window);