const http = require('http');
const port = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>지도</title>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vvgbajtb3h"></script>
</head>
<body>
<div id="map" style="width:100%;height:700px;"></div>
<div id="indoorInfo"></div>

<script>
    var mapOptions = {
        center: new naver.maps.LatLng(36.352272, 127.38441), // 수정: 위도와 경도를 수정하여 사용하세요.
        zoom: 17, // 지도의 초기 줌 레벨
        minZoom: 8, // 지도의 최소 줌 레벨
        zoomControl: true, // 줌 컨트롤의 표시 여부
        zoomControlOptions: { // 줌 컨트롤의 옵션
            position: naver.maps.Position.TOP_RIGHT
        }
    };

    var map = new naver.maps.Map('map', mapOptions);

    // 실내지도 활성화
    naver.maps.IndoorService.enableIndoorMap(map, true);

    // 마커 생성
    var marker = new naver.maps.Marker({
        position: new naver.maps.LatLng(36.352272, 127.38441), // 수정: 위도와 경도를 수정하여 사용하세요.
        map: map
    });

    // 실내지도 구역 및 층 정보 표시
    var indoorInfoElement = document.getElementById('indoorInfo');
    var indoorSelection = null;

    naver.maps.Event.addListener(map, 'idle', function() {
        var activeLayer = map.getLayer(naver.maps.LayerTypeId.INDOOR);
        if (activeLayer) {
            indoorSelection = {
                name: activeLayer.getName(),
                level: activeLayer.getCurrentLevel()
            };
        } else {
            indoorSelection = null;
        }
        if (indoorSelection) {
            indoorInfoElement.textContent = '선택된 실내지도 구역: ' + indoorSelection.name + ', 층: ' + indoorSelection.level;
        } else {
            indoorInfoElement.textContent = '선택된 실내지도 구역: 없음';
        }
    });
</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'text/html' });
    res.end(html);
});

server.listen(port, () => console.log('서버 작동됨'));
