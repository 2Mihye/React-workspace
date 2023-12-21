
        bg: background 의 줄임말
        -dark : 배경색을 검정색으로 설정.

        text : 글자색
        -light : 글자색을 흰색으로 설정.

        py : padding-y(위 아래)의 줄임말로 여백을 조절 (x : 좌 우)
        -5 : 5단위 만큼의 여백 부여
        px-1 py-1 : 하게되면 상하좌우 1만큼의 여백 부여
        bootStrap : 여백의 크기를 최소 1 ~ 최대 5까지 5단계로 조절함.

        container : 본문을 담을 컨테이너를 생성.
        mb : margin-bottom의 줄임말
        mt : margin-top의줄임말로 본문 위의 크기를 조절하는 것.
        -2 : 그 크기를 2단위(크기)로 조절한다는 것
        row : 컬럼을 나열하는 데 사용(한 row(줄)의 컬럼은 12개로 고정이 되어있음.)

        col : column의 약자
        md : medium 중간 크기 화면
        -3 : 3개의 컬럼을 차지하겠다는 의미이고 보통 1줄의 컬럼은 12개로 구성되어 있어서 4 덩어리로 나눈다는 의미. 

        text-center : 글자 가운데 정렬

        img-fluid : 이미지를 반응형으로 보여질 수 있도록 하고, 부모 요소 크기에 맞게 알아서 조절된다.
                    더 작은 화면에서도 이미지가 깨지지않고 적절히 표현될 수 있도록 유지해준다.
                    모바일과 태블릿에서 유용하게 사용하는 태그.
           -rounded : 이미지의 모서리를 둥글게 만듬
           -rounded-circle :  이미지를 원형으로 만듬
        img-thumnail : 이미지에 경계선과 그림자 효과를 추가해서 작은 썸네일 이미지를 만듬.
        
        float-left float-right : 왼쪽이나 오른쪽으로 정렬.
        mx-auto : 가로로 중앙 정렬

        card : 정보를 시각적으로 보여주는 데 사용
        card-body : 카드의 내용을 감싸는 부분으로 텍스트, 이미지와 같은 내용을 담는 공간
        card-text : 카드에서 일반적인 텍스트 내용을 나타내는 곳
        card-title : 카드에서 제목을 나타냄.

        form-label : 사용자에게 입력하는 공간에 어떤 정보를 입력해줘야 하는지 알려주는 텍스트 라벨용
        form-control : bootstrap 스타일에 맞게 스타일링 된 form.
                       주로 입력필드에서 많이 사용하는데 라벨 밑에있는 텍스트입력, 이메일입력, 패스워드 입력 등에 사용됨.

        aria-describedby : 웹에서 label과 input에 설명요소를 지정할 때 사용하고 따로 small이나 p와 같은 태그를 걸어서 id값으로 연결지어 사용한다.
        rows : 열의 크기값
        btn : button의 약자
        btn-primary : css 규격을 사용하는 곳은 대부분 primary라는 용어를 파란색 계열로 지정해서 사용하고 있음. = 파란색 버튼
           -secondary : 회색 계열
           -danger : 빨간색 계열
           -info : 밝은 파랑 계열
           -warning : 노란 계열