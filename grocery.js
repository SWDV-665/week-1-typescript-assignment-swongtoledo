var Grocery = /** @class */ (function () {
    function class_1(num, name) {
        this.num = num;
        this.name = name;
        this.name = name;
        this.num = num;
    }
    return class_1;
}());
var items = [
    new Grocery("5", 'apple'),
    new Grocery("2", "milk"),
    new Grocery("4", "oranges")
];
function printStatement(list) {
    return "here is my grocery list: " + "<br>" + list;
}
var i;
var text = "";
for (i = 0; i < items.length; i++) {
    text += items[i].num + " " + items[i].name + "<br>";
    document.body.innerHTML = printStatement(text);
}
