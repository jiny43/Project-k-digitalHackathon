#최단거리와 소화기까지 가는 최단거리
import heapq

def dijkstra(graph, start):
    distances = {node: float('inf') for node in graph}
    distances[start] = 0
    queue = [(0, start)]
    previous = {}

    while queue:
        current_distance, current_node = heapq.heappop(queue)

        if current_distance > distances[current_node]:
            continue

        for adjacent_node, weight in graph[current_node].items():
            distance = current_distance + weight

            if distance < distances[adjacent_node]:
                distances[adjacent_node] = distance
                previous[adjacent_node] = current_node
                heapq.heappush(queue, (distance, adjacent_node))

    return distances, previous

graph = {
    # E 경로
    'E1': {'E2': 7.7, 'F1': 23.4, 'R2': 13.7,'D1': 29.1},
    'E2': {'E1': 7.7, 'E3': 12.9, 'F1': 24.4,'R2': 18.4, 'D1': 32.6},
    'E3': {'E2': 12.9, 'E4': 5.5, 'E19': 6.8, 'R2': 18.7,'D1': 24.3},
    'E4': {'E3': 5.5, 'E5': 14.7, 'E12': 19.2, 'E19': 10.1, 'F3': 7.1},
    'E5': {'E4': 14.7, 'E6': 17.5, 'E18': 20},
    'E6': {'E5': 17.5, 'E7': 28.3, 'E13': 17.9, 'E18': 7.3},
    'E7': {'E6': 28.3, 'E9': 2.1},
    'E8': {'E9': 10.0, 'E20': 4.5, 'F2': 11.1, 'D2': 11.6},
    'E9': {'E7': 2.1, 'E8': 10.0,'E10':24.7,'E20':6.0},
    'E10': {'E9': 24.7, 'E11': 14.6},
    'E11': {'E10': 14.6, 'E15': 15.6, 'E16': 13.6},
    'E12': {'E4': 19.2, 'E13': 6.1, 'E18': 9.7, 'F3': 14.7},
    'E13': {'E6': 17.9, 'E12': 6.1, 'E14': 18.0},
    'E14': {'E13': 18.0, 'E15': 9.4, 'E17': 4.7},
    'E15': {'E11': 15.6, 'E14': 9.4, 'E16': 4.8, 'E17': 11.6},
    'E16': {'E11': 13.6, 'E15': 4.8, 'D3': 18.6},
    'E17': {'E14': 4.7, 'E15': 11.6, 'E19': 55.2, 'F3': 41.2, 'D3': 9.5},
    'E18': {'E5': 20, 'E12': 9.7, 'E13': 12.0},
    'E19': {'E3': 6.8, 'E4': 10.1, 'F1': 10.0, 'F3': 14.2,'R2': 17.2, 'D1': 19.6},
    'E20': {'E8': 4.5, 'E9': 6.0, 'F2': 8.1},
    # F 소화기
    'F1': {'E1': 23.4, 'E2': 24.4, 'E19': 10.0, 'R2': 14.8,'D1': 9.8},
    'F2': {'E8': 11.1, 'E20': 8.1, 'D2': 8.2},
    'F3': {'E4': 7.1, 'E12': 14.2, 'E17': 41.2, 'E19': 14.2},
    # R 화장실
    'R1': {'E8': 8.6, 'D2': 18.2},
    'R2': {'E1': 13.7, 'E2': 18.4,'E3': 18.7,'E19': 17.2,'F1': 14.8,'D1': 16.6},
    # D 출구
    'D1': {'E1': 29.1, 'E2': 32.6, 'E3': 24.3, 'E19': 19.6,'R2': 16.6, 'F1': 9.8},
    'D2': {'E8': 11.6, 'E20': 12.2, 'R1': 18.2, 'F2': 8.2},
    'D3': {'E16': 18.6, 'E17': 9.5}
}

start_node = 'E1'  # 사용자 위치라고 가정
distances, previous = dijkstra(graph, start_node)

# 모든 출구(D1, D2, D3)를 포함한 최단 경로 구하기
exit_nodes = ['D1', 'D2', 'D3']
fastest_path_with_all_exits = float('inf')
path_with_all_exits = None

for exit_node in exit_nodes:
    if exit_node in distances:
        distance_to_exit = distances[exit_node]

        if distance_to_exit < fastest_path_with_all_exits:
            fastest_path_with_all_exits = distance_to_exit
            path_with_all_exits = [exit_node]

            current_node = exit_node
            while current_node != start_node:
                current_node = previous[current_node]
                path_with_all_exits.insert(0, current_node)

print(f"최단 경로(모든 출구 포함): {fastest_path_with_all_exits:.1f}")
print("경로:", " -> ".join(path_with_all_exits))

# 소화기(F1, F2, F3)를 거쳐가는 최단 경로 구하기
fire_extinguisher_nodes = ['F1', 'F2', 'F3']
fastest_path_with_fire_extinguishers = float('inf')
path_with_fire_extinguishers = None
# nearest_exit_node = None

for node in fire_extinguisher_nodes:
    if node in distances:
        distance_to_node = distances[node]
        distance_through_node = distance_to_node + distances[start_node]

        if distance_through_node < fastest_path_with_fire_extinguishers:
            fastest_path_with_fire_extinguishers = distance_through_node
            path_with_fire_extinguishers = [node]
            # nearest_exit_node = previous[node]

            current_node = node
            while current_node != start_node:
                current_node = previous[current_node]
                path_with_fire_extinguishers.insert(0, current_node)

print(f"최단 경로(소화기 포함): {fastest_path_with_fire_extinguishers:.1f}")
print("경로:", " -> ".join(path_with_fire_extinguishers))
# print("가장 가까운 소화기 노드:", nearest_exit_node)