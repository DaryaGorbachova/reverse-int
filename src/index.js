module.exports = function reverse (n) {
    num = num.toString();
    let i = num.length - 1;
    let result = '';
        while (i >= 0) {
        result = result + num[i];
        i = i - 1;
        }
        result = Number.parseInt(result);
        return result;
}
