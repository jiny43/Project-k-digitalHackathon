import http from 'http';
import { type } from 'os';
import html from './html.js';
const port = process.env.PORT || 3030

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-type':'html'})
  res.end(html)
})
server.listen(port,() => console.log('서버 작동됨'))