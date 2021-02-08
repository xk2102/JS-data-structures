function mySet() {

    var collection = [];

    this.has = (element) => {
        return (collection.indexOf(element) !== -1);
    };
    this.values = () => { return collection };

    this.add = (element) => {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = (element) => {
        if (this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };

    this.size = () => { return collection.length };

    this.union = (otherSet) => {
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach((item) => {
            unionSet.add(item);
        });
        secondSet.forEach((item) => {
            unionSet.add(item);
        });
        return unionSet;
    };

    this.intersection = (otherSet) => {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach((item) => {
            if (otherSet.has(item)) {
                intersectionSet.add(item);
            }
        });
        return intersectionSet;
    };

    this.difference = (otherSet) => {
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach((item) => {
            if (!otherSet.has(item)) {
                differenceSet.add(item);
            }
        });
        return differenceSet;
    };

    this.subset = (otherSet) => {
        var firstSet = this.values();
        return firstSet.every((value) => {
            return otherSet.has(value);
        });
    };

}

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.values());
console.log(setB.values());
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

// var setC = new Set();  
// var setD = new Set();  
// setC.add("a");  
// setD.add("b");  
// setD.add("c");  
// setD.add("a");  
// setD.add("d");  
// console.log(setD.values());
// setD.delete("a");
// console.log(setD.has("a"));
// console.log(setD.add("d"));