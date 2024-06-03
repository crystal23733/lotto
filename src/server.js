// todo DB연결 전까지 회원정보 스토리지나 POST처리로 json파일에 담아놓기
// todo express 대체하기
// todo 서버 모듈화 진행
import express from 'express';
import path from 'path';

const PORT = 8080;

const __dirname = path.resolve();

const app = express();

app.set(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  const {method, url} = req;
  console.log(method, url);
  res.sendFile(path.join(__dirname, './public/home.html'));
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
})

// const mimeType = {
//   '.html' : 'text/html',
//   '.css' : 'text/css',
//   '.js' : 'application/javascript',
//   '.json' : 'application/json',
//   '.ico' : 'image/x-icon'
// }

// const fileUtils = {
//   getFilePath : (fileUrl) => {
//     if(fileUrl === '/'){
//       fileUrl = './public/home.html';
//     } else if(fileUrl === '/join'){
//       fileUrl = './public/join.html';
//     } else {
//       fileUrl = `./public${fileUrl}`;
//     }
//     return fileUrl;
//   },
//   getFileExtention : (filePath) => {
//     let ext = path.extname(filePath);
//     return ext.toLowerCase();
//   },
//   getFileContent : (ext) => {
//     if(mimeType.hasOwnProperty(ext)){
//       return mimeType[ext];
//     } else {
//       return 'text/plain';
//     }
//   }
// }

// const server = http.createServer((req, res) => {
//   const { method, url } = req;
//   let filePath = fileUtils.getFilePath(url);
//   let fileExt = fileUtils.getFileExtention(filePath);
//   let fileContent = fileUtils.getFileContent(fileExt);
//   // console.log(filePath, fileExt, fileContent);
//   console.log(method, url);
//   if(method === 'GET'){
//     fs.readFile(filePath, (err, data) => {
//       if(err){
//         if(err.code === 'ENOENT'){
//           res.writeHead(404, {'Content-type' : 'text/plain; charset=utf-8'});
//           res.end('페이지를 찾을 수 없음');
//         } else {
//           res.writeHead(500, {'Content-type' : 'text/plain; charset=utf-8'});
//           res.end('서버에러');
//         }
//       } else {
//           res.writeHead(200, {'Content-type' : fileContent});
//           res.end(data);
//       }
//     })
//   } else if(method === 'POST'){
//     if(url === '/'){
//       let body = '';
//       req.on('data', (chunk) => {
//         body += chunk.toString();
//       });
//       req.on('end', () => {
//         const params = new URLSearchParams(body);
//         fs.readFile('./public/home.html', (err, data) => {
//           if(err){
//             if(err.code === 'ENOENT'){
//               res.writeHead(404, {'Content-type' : 'text/plain; charset=utf-8'});
//               res.end('페이지를 찾을 수 없음');
//             } else {
//               res.writeHead(500, {'Content-type' : 'text/plain; charset=utf-8'});
//               res.end('서버에러');
//             }
//           } else {
//             res.writeHead(200, {'Content-type' : 'text/html'});
//             res.end(data);
//           }
//         })
//       })
//     }
//   }
// })
