axios :
    JavaScript나 React에서 HTTP 요청을 수행하기 위한 라이브러리 중 하나
    주로 웹 서버와 통신, API 호출, 데이터 가져오기 작업에 사용.
        사용법 : npm install axios
                 yarn install axios


 // Axios를 활용하여 API에 GET을 요청 (이런 식으로 Back-end에서 데이터정보를 받아옴)
axios.get('https://jsonplaceholder.typicode.com/todos') // axios.get으로 데이터를 가져오는 데 성공한다면 then을 사용하여 응답받을 데이터를 처리한다. 응답을 
        
// 만약 데이터를 가져오는 데 성공했을 때 데이터 처리
.then(response => { // 데이터를 가져오는 데 성공한다면 then을 사용하여 응답받을 데이터를 처리한다. 응답을 받을 때는 response로 서버에서 받은 응답을 표시
    setData(response.data); // response가 실제로 요청에 관한 정보와 서버에서 실제로 반환된 데이터를 보여주는데, response를 활용하여 전달받은 데이터를
                               업데이트 해서 화면에 보여주기 위해 setData를 활용.
    
})

// 만약 데이터를 가져오는 데 실패했을 때 데이터 처리
.catch(error => {("", error)});
// 데이터를 가져오는데 실패시 catch문을 활용하여 에러를 표시
// 에러를 표기할 때는 console.log 를 활용하여 개발자들 간에 보여질 수 있도록 표기. error는 변수명일 뿐 error가 아닌 err, aaa 이런 변수명으로 받고 싶다면 변수명을 변경해서 표기해도 좋음