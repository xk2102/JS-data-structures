function queue() {

    collection = [];
    // this.print = function () {
    //     console.log(collection);
    // };
    // this.enqueue = function (element) {
    //     collection.push(element);
    // };
    // this.dequeue = function () {
    //     return collection.shift();
    // };
    // this.front = function () {
    //     return collection[0];
    // };
    // this.size = function () {
    //     return collection.length;
    // };
    // this.isEmpty = function () {
    //     return (collection.length === 0);
    // };
    this.print = () => { console.log(collection); };
    this.enqueue = (element) => { collection.push(element); };
    this.dequeue = () => { collection.shift(); };
    this.front = () => { return collection[0]; };
    this.size = () => { return collection.length };
    this.isEmpty = () => { return collection.length === 0; };
}

var q = new queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

