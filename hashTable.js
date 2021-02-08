console.log("This is a hash table example.");

var hash = (string1, integer1) => {
    var temp = 0;
    for (var i = 0; i < string1.length; i++) {
        temp = temp + string1.charCodeAt(i);
    }
    return temp % integer1;
};

var hashTable = function () {

    var storage = [];
    const storageLimit = 5;

    this.print = () => console.log(storage);

    this.add = (key, value) => {
        var index = hash(key, storageLimit);

        if (storage[index] === undefined) {
            storage[index] = [[key, value]];
        } else {
            var inserted = false;
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    storage[index][i][1] = value;
                    inserted = true;
                }
            }
            if (inserted === false) {
                storage[index].push([key, value]);
            }
        }//else
    };//add

    this.remove = (key) => {
        var index = hash(key, storageLimit);

        if (storage[index].length === 1 && storage[index][0][0] === key) {
            delete storage[index];
        } else {
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key) {
                    delete storage[index][i];
                }//if
            }//for
        }//else
    };//remove

    this.lookup = (key) => {
        var index = hash(key, storageLimit);

        if (storage[index] === undefined){
            return undefined;
        }else{
            for (var i = 0; i < storage[index].length; i++) {
                if (storage[index][i][0] === key){
                    return storage[index][i][1];
                }//if
            }//for
        }//else
    };//lookup

}//hashTable

var ht = new hashTable();
ht.add('christos', 'chr123');
ht.add('george', 'geo123');
ht.add('kostas', 'kos123');
ht.print();
ht.remove('christos');
ht.print();
console.log(ht.lookup('christos'));
console.log(ht.lookup('kostas'));