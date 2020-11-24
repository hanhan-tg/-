// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
var replaceSpace = function(s) {
    // 方法1  直接用正则表达式来替换
    return s.replace(/\s/g, '%20');

    // 方法2  遍历每一项，如果为空格就替换
    var arr= [];
    for (var i = 0 ; i < s.length; i++) {
        if(s[i] === ' '){
            arr.push('%','2','0');
        }else{
            arr.push(s[i]);
        }
    }
    return arr.join('');
    // 上下一个意思
    var arr = s.split('');
    for (var i = 0 ; i < arr.length; i++) {
        if(arr[i] === ' '){
            arr.splice(i, 1, '%20');
        }
    }
    return arr.join("");
};

const result  = replaceSpace("We are happy.");
console.log(result)