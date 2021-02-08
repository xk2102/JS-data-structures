function priorityQueue() {

    var collection = [];

    this.print = function () {
        console.log(collection);
    };

    this.enqueue = function (element) {
        if (this.isEmpty()) {
            collection.push(element);
        } else {
            var inserted = false;
            for (var i = 0; i < collection.length; i++) {
                if (element[1] < collection[i][1]) {
                    collection.splice(i, 0, element);
                    inserted = true;
                    break;
                }
            }
            if (!inserted) {
                collection.push(element);
            }
        }
    };

    this.isEmpty = function () {
        return (collection.length === 0);
    };
    this.dequeue = function () {
        collection.shift();
    };
    this.front = function () {
        return collection[0];
    };
    this.size = function () {
        return collection.length;
    };

}

var pq = new priorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();


// array.splice(index, howmany, item1, ....., itemX)
// Parameter 	Description
// index 	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
// howmany 	Optional. The number of items to be removed. If set to 0, no items will be removed
// item1, ..., itemX 	Optional. The new item(s) to be added to the array