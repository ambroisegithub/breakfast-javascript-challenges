const removeDuplicate = (str) => {
    var lhs = new Set();
    for (var i = 0; i < str.length; i++)
        lhs.add(str[i]);
    for (var ch of lhs)
        console.log(ch);
}
var str = "ddiane";
removeDuplicate(str);