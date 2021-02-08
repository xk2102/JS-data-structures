function linkedList() {
    var length = 0;
    var head = null;

    var Node = function (element) {
        this.element = element;
        this.next = null;
    };

    this.size = function () {
        return length;
    };

    this.add = function (element) {
        var node = new Node(element);

        if (head === null) {
            head = node;
            console.log("added (1st): " + element)
        } else {

            var currentNode = head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            console.log("added: " + element)
        }
        length++;

    };

    this.remove = function (element) {
        var currentNode = head;
        var previousNode;
        if (currentNode.element === element) {
            head = currentNode.next;
        } else {
            while (currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.isEmpty = function () {
        return length === 0;
    };

    this.indexOf = function (element) {
        var currentNode = head;
        var index = -1;

        while (currentNode) {
            index++;
            if (currentNode.element === element) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };

    this.elementAt = function (index) {
        var currentNode = head;
        var count = 0;
        while (count < index) {
            count++;
            currentNode = currentNode.next;
        }
        return currentNode.element;
    };

    this.addAt = function (index, element) {
        var node = new Node(element);

        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index > length) {
            return false;
        }

        if (index === 0) {
            node.next = currentNode;
            head = node;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            node.next = currentNode;
            previousNode.next = node;
        }
        length++;
    }//addAt

    this.removeAt = function (index) {
        var currentNode = head;
        var previousNode;
        var currentIndex = 0;

        if (index < 0 || index >= length) {
            return console.log("error");
        }
        if (index === 0) {
            head = currentNode.next;
        } else {
            while (currentIndex < index) {
                currentIndex++;
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        length--;
    };

    this.print = function () {
        var currentNode = head;
        var currentIndex = 0;
        console.log("----- THE LIST IS: -----");
        while (currentIndex < length) {
            if (currentNode === head) {
                console.log('headNode: ' + currentNode.element + ' nextNode: ' + currentNode.next.element);
            }
            else if (currentNode.next !== null) {
                console.log('currentNode: ' + currentNode.element + ' nextNode: ' + currentNode.next.element);
            } else {
                console.log('lastNode: ' + currentNode.element + ' nextNode: NULL');
            }
            console.log();
            currentIndex++;
            currentNode = currentNode.next;
        }

    };
}//linkedList

var conga = new linkedList();
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
// console.log(conga.size());
// console.log(conga.removeAt(2));
// console.log(conga.elementAt(3));
// console.log(conga.indexOf('Puppy'));
// console.log(conga.size());
conga.print();