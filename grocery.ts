
let Grocery = class {
    constructor(public num : string, public name: string) {
      this.name = name;
      this.num = num;
    }
  };


var items  = [
            new Grocery("5",'apple'),
            new Grocery("2","milk"),
            new Grocery("4","oranges")
        ]



function printStatement(list){
    return "here is my grocery list: " + "<br>" +  list;
}

var i;
var text = "";

for (i = 0; i < items.length; i++) {
    text += items[i].num + " " + items[i].name + "<br>";
    document.body.innerHTML = printStatement(text);

}









