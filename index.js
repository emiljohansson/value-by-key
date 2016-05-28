'use strict';

function getStringByKey(source) {
    return function(key) {
        return source[key];
    };
}

module.exports = getStringByKey;
