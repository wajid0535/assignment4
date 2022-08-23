//comparing two json objects with same properties in different order.
var obj1 = {"name":"person1","age":5};
var obj2 = {"age":5,"name":"person1"};

var display=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            display=false;
            break;
        }
    }
}
else {
  display=false;
}
console.log(`
"Is Object Equal":${display}`);


