const roll = function () {
    a = Math.floor(Math.random() * 6) + 1;
    b = Math.floor(Math.random() * 6) + 1;
    return "Diced rolled are " + a + " and " + b + ".";
}
console.log(roll())
