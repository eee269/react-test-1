// 다운로드 해 놓은 모듈 가져오기
const express = require(`express`)
// express를 사용하는 변수
const app = express()
// 백서버 (아무 번호나 상관 없음)
const port = 5000

// 루트 디렉토리에 출력
app.get('/', (req, res) => res.send(`Hello World!`))
// app이 지정한 백서버 포트번호에서 실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

