var addEvent = null;

if(window.addEventListener) {
    addEvent = function(elem, type, handler) {
        elem.addEventListener(type, handler, false);
    };
} else {
    addEvent = function(elem, type, handler) {
        elem.attachEvent("on"+type, handler);
    };
}

function stopDefault(e) {
    var e = e || window.event;
    (e.preventDefault)? e.preventDefault() : e.returnValue = false;
}