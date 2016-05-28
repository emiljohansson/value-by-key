import test from 'ava';
import valueByKey from './';

test('exist', t => {
    const actual = typeof valueByKey;
    const expected = 'function';
    t.is(actual, expected);
});

test('returns a function', t => {
    const actual = typeof valueByKey();
    const expected = 'function';
    t.is(actual, expected);
});

test('find value from key', t => {
    var key = 'abc';
    var expected = 'cde';
    var findByKey = valueByKey({
        'abc': expected
    });
    const actual = findByKey(key);
    t.is(actual, expected);
});
