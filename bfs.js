/* Graphs: Breadth-first search */

function bfs(graph, root) {
    
    // store the distances to the root node
    var result = {};

    // set all distances to infinity
    for (var i = 0; i < graph.length; i++) {
        result[i] = Infinity;
    }

    // distance of root to root is 0
    result[root] = 0;

    // create a simple queue to keep track of the nodes to visit
    var queue = [root];
    var current;

    // traverse nodes until there are no more nodes in the queue to traverse
    while (queue.length != 0) {

        current = queue.shift();
        console.log("current: " + current);

        // we get all the nodes connected to the current node example [0, 0, 1, 0, 0] and so on 
        // each index of the graph is an array
        var currentSubGraph = graph[current];
        console.log("currentSubGraph: " + currentSubGraph);
        // this will keep track of a list of nodes connected to the current node
        var neighborIndexes = [];
        // finds the 1st node connected to the current node
        var idx = currentSubGraph.indexOf(1);
        while (idx != -1) {
            // push the index into our list of neighbor
            neighborIndexes.push(idx);
            // we look for the next index of 1, starting from the previous one we found
            idx = currentSubGraph.indexOf(1, idx + 1);
        }
        console.log("neighborIndexes: " + neighborIndexes);

        for (var j = 0; j < neighborIndexes.length; j++) {
            if (result[neighborIndexes[j]] == Infinity) {
                result[neighborIndexes[j]] = result[current] + 1;
                queue.push(neighborIndexes[j]);
                console.log(result);
                console.log("queue: " + queue);
                console.log("------------------");
            }
        }
    }
    return result;
};

var exBFSGraph = [
    [0, 1, 1, 1, 0], 
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0]
];
console.log(bfs(exBFSGraph, 1));