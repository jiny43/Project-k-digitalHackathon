import math

def haversine(lat1, lon1, lat2, lon2):
    # 위도와 경도를 라디안 단위로 변환
    lat1_rad = math.radians(lat1)
    lon1_rad = math.radians(lon1)
    lat2_rad = math.radians(lat2)
    lon2_rad = math.radians(lon2)

    # 두 지점의 차이를 계산
    dlon = lon2_rad - lon1_rad
    dlat = lat2_rad - lat1_rad

    # 허법 공식 적용
    a = math.sin(dlat / 2) ** 2 + math.cos(lat1_rad) * math.cos(lat2_rad) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))

    # 지구의 반경 (단위: 미터)
    radius = 6371 * 1000

    # 두 지점 사이의 거리 계산
    distance = radius * c

    return distance

# 두 지점 사이의 거리 계산 예시
lat1 = 36.3522963
lon1 = 127.3784013
lat2 = 36.3522347
lon2 = 127.3783647

distance = haversine(lat1, lon1, lat2, lon2)
print(distance)