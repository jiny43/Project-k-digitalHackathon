function dijkstra(graph, start) {
  var distances = {};
  var previous = {};
  var queue = new PriorityQueue();

  for (var node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  queue.enqueue(0, start);

  while (!queue.isEmpty()) {
    var current = queue.dequeue();
    var currentDistance = current.priority;
    var currentNode = current.element;

    if (currentDistance > distances[currentNode]) {
      continue;
    }

    for (var adjacentNode in graph[currentNode]) {
      var weight = graph[currentNode][adjacentNode];
      var distance = currentDistance + weight;

      if (distance < distances[adjacentNode]) {
        distances[adjacentNode] = distance;
        previous[adjacentNode] = currentNode;
        queue.enqueue(distance, adjacentNode);
      }
    }
  }

  return { distances: distances, previous: previous };
}

function PriorityQueue() {
  this.elements = [];

  this.enqueue = function (priority, element) {
    var item = { priority: priority, element: element };
    var added = false;

    for (var i = 0; i < this.elements.length; i++) {
      if (item.priority < this.elements[i].priority) {
        this.elements.splice(i, 0, item);
        added = true;
        break;
      }
    }

    if (!added) {
      this.elements.push(item);
    }
  };

  this.dequeue = function () {
    if (this.isEmpty()) {
      return null;
    }
    return this.elements.shift();
  };

  this.isEmpty = function () {
    return this.elements.length === 0;
  };
}

var graph = {
  E1: { lat: 36.3522963, lng: 127.3784013, E2: 7.593453563872656, F1: 23.4, R2: 13.7, D1: 29.1 },
  E2: { lat: 36.3522347, lng: 127.3783647, E1: 7.7, E3: 12.9, F1: 24.4, R2: 18.4, D1: 32.6 },
  E3: { lat: 36.3519499, lng: 127.3783192, E2: 12.9, E4: 5.5, E19: 6.8, R2: 18.7, D1: 24.3 },
  E4: { E3: 5.5, E5: 14.7, E12: 19.2, E19: 10.1, F3: 7.1 },
  E5: { E4: 14.7, E6: 17.5, E18: 20 },
  E6: { E5: 17.5, E7: 28.3, E13: 17.9, E18: 7.3 },
  E7: { E6: 28.3, E9: 2.1 },
  E8: { E9: 10.0, E20: 4.5, F2: 11.1, D2: 11.6 },
  E9: { E7: 2.1, E8: 10.0, E10: 24.7, E20: 6.0 },
  E10: { E9: 24.7, E11: 14.6 },
  E11: { E10: 14.6, E15: 15.6, E16: 13.6 },
  E12: { E4: 19.2, E13: 6.1, E18: 9.7, F3: 14.7 },
  E13: { E6: 17.9, E12: 6.1, E14: 18.0 },
  E14: { E13: 18.0, E15: 9.4, E17: 4.7 },
  E15: { E11: 15.6, E14: 9.4, E16: 4.8, E17: 11.6 },
  E16: { E11: 13.6, E15: 4.8, D3: 18.6 },
  E17: { E14: 4.7, E15: 11.6, E19: 55.2, F3: 41.2, D3: 9.5 },
  E18: { E5: 20, E12: 9.7, E13: 12.0 },
  E19: { E3: 6.8, E4: 10.1, F1: 10.0, F3: 14.2, R2: 17.2, D1: 19.6 },
  E20: { E8: 4.5, E9: 6.0, F2: 8.1 },
  F1: { E1: 23.4, E2: 24.4, E19: 10.0, R2: 14.8, D1: 9.8 },
  F2: { E8: 11.1, E20: 8.1, D2: 8.2 },
  F3: { E4: 7.1, E12: 14.2, E17: 41.2, E19: 14.2 },
  R1: { E8: 8.6, D2: 18.2 },
  R2: { E1: 13.7, E2: 18.4, E3: 18.7, E19: 17.2, F1: 14.8, D1: 16.6 },
  D1: { E1: 29.1, E2: 32.6, E3: 24.3, E19: 19.6, R2: 16.6, F1: 9.8 },
  D2: { E8: 11.6, E20: 12.2, R1: 18.2, F2: 8.2 },
  D3: { E16: 18.6, E17: 9.5 },
};




var startNode = 'E1';
var result = dijkstra(graph, startNode);
var distances = result.distances;
var previous = result.previous;

var exitNodes = ['D1', 'D2', 'D3'];
var fastestPathWithAllExits = Infinity;
var pathWithAllExits = null;

for (var i = 0; i < exitNodes.length; i++) {
  var exitNode = exitNodes[i];
  if (distances.hasOwnProperty(exitNode)) {
    var distanceToExit = distances[exitNode];
    if (distanceToExit < fastestPathWithAllExits) {
      fastestPathWithAllExits = distanceToExit;
      pathWithAllExits = [exitNode];

      var currentNode = exitNode;
      while (currentNode !== startNode) {
        currentNode = previous[currentNode];
        pathWithAllExits.unshift(currentNode);
      }
    }
  }
}

console.log('최단 경로(모든 출구 포함): ' + fastestPathWithAllExits.toFixed(1));
console.log('경로: ' + pathWithAllExits.join(' -> '));

var fireExtinguisherNodes = ['F1', 'F2', 'F3'];
var fastestPathWithFireExtinguishers = Infinity;
var pathWithFireExtinguishers = null;

for (var i = 0; i < fireExtinguisherNodes.length; i++) {
  var node = fireExtinguisherNodes[i];
  if (distances.hasOwnProperty(node)) {
    var distanceToNode = distances[node];
    var distanceThroughNode = distanceToNode + distances[startNode];
    if (distanceThroughNode < fastestPathWithFireExtinguishers) {
      fastestPathWithFireExtinguishers = distanceThroughNode;
      pathWithFireExtinguishers = [node];

      var currentNode = node;
      while (currentNode !== startNode) {
        currentNode = previous[currentNode];
        pathWithFireExtinguishers.unshift(currentNode);
      }
    }
  }
}

console.log(
  '최단 경로(소화기 포함): ' + fastestPathWithFireExtinguishers.toFixed(1)
);
console.log('경로: ' + pathWithFireExtinguishers.join(' -> '));
