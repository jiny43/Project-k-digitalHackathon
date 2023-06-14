const http = require('http');
const { type } = require('os');
const port = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    <title>지도</title>
    <script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=id"></script>
</head>
<body>
<div id="map" style="width:100%;height:700px;"></div>


<script id="code">
        var map = new naver.maps.Map('map', {
            center: new naver.maps.LatLng(36.349289, 127.377632), //지도의 초기 중심 좌표
            zoom: 17, //지도의 초기 줌 레벨
            minZoom: 8, //지도의 최소 줌 레벨
            zoomControl: true, //줌 컨트롤의 표시 여부
            zoomControlOptions: { //줌 컨트롤의 옵션
                position: naver.maps.Position.TOP_RIGHT
        }});
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(36.349289, 127.377632),
            map: map
        });

</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'html' });
  res.end(html);
});

server.listen(port, () => console.log('서버 작동됨'));