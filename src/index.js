module.exports = function reverse (num) {
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
