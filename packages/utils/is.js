
const is = {};
is.existy = (value) => {
    return value != null;
};

is.object = function (value) {
    return Object(value) === value;
};

// is a given value Array?
// check native isArray first
is.array = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
};

// is a given value empty? Objects, arrays, strings
is.empty = function (value) {
    if(is.array(value)){
        return value.length == 0;
    } else if (is.object(value)) {
        var length = Object.keys(value).length;
        if (length === 0) {
            return true;
        }
        return false;
    }
    return value === '' || typeof value === 'undefined';
};

export default is;