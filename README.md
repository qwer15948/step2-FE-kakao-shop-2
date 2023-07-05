<details>
<summary>Step-2.-Week-1 [과제설명]</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제

</br>

## **과제명**

```
1. 쇼핑몰 웹사이트 탐색을 통한 페이지 구성
2. UI 컴포넌트의 명칭과 사용법 익히기
```

</br>

## **과제 설명**

✅**과제 1.**

```
쇼핑몰 웹사이트를 탐색해 어떠한 페이지 구성을 가지고 있는지 체크합니다.
대부분의 쇼핑몰은 다음의 페이지 구성을 가지고 있습니다.

- 메인 페이지
- 상품 검색 결과 페이지
- 개별 상품 상세 페이지
- 주문 목록 페이지
- 결제 페이지
- 결제 완료 페이지
- 장바구니 페이지
- ...

이와 같이 위의 서비스가 동작하는데 필수적인 페이지가 무엇이 있고, 해당 페이지에서 어떠한 기능이 구현되어야 하는지 작성하세요.
그리고 어떠한 디렉터리 구조로 프로젝트를 진행할지 작성해주세요. (README.md 파일에 작성)
```

```
README.md의 예시 형식입니다. 아래를 참고해 작성해주세요.
각 페이지마다 핵심 기능, 기능 상세 설명, 인터페이스 요구사항이 어떤 것이 있을지 고민해서 작성해주세요.

###예시

#페이지별 구성
1. 로그인 페이지
- 핵심 기능: 로그인 요청 및 사용자 로그인 정보 저장
- 기능 상세 설명: 이메일과 비밀번호를 이용해 로그인을 진행하고, 이에 대한 상태 처리를 합니다.
- 인터페이스 요구사항: 이메일 또는 비밀번호에 들어온 값이 적합하지 않은 경우 적절한 알림을 보냅니다.
-- ...

#디렉터리 구조
- public
- src
- components
- hooks
- routes
- styles
- dto
- ...
```

</br>

✅**과제 2.**

```
프론트 개발자가 다른 프론트 개발자와 소통 및 UI 디자이너와 소통하는데 필수적인 UI 컴포넌트의 명칭과 사용법을 익힙니다.
수업시간에 배운 컴포넌트의 명칭과 사용법 이외에 대표적인 UI 라이브러리 홈페이지를 조사해보면 수많은 컴포넌트가 어떤식으로 동작하는지 확인할 수 있습니다.
리액트 프로젝트를 생성하고, 토스트, 브래드크럼, 캐러셀, 라디오버튼, 토글버튼, 체크리스트를 UI 라이브러리가 아닌 자신만의 방식으로 스타일링하고 상태 관리를 적용해 코드를 작성하세요.
작성된 코드는 레퍼지토리에 업로드하여 멘토님에게 전달해주세요.
```

</br>

✅**과제 3.**

```
각 컴포넌트를 시현해 볼 수 있는 페이지를 만드세요.
하나의 페이지에 모든 컴포넌트를 둬도 좋고, 각 페이지별로 분리해도 괜찮습니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. README.md 파일은 동료 개발자에게 프로젝트에 쉽게 랜딩하도록 돕는 중요한 소통 수단입니다.
해당 프로젝트에 대해 아무런 지식이 없는 동료들에게 설명하는 것처럼 쉽고, 간결하게 작성해주세요.

2. 좋은 개발자는 디자이너, 기획자, 마케터 등 여러 포지션에 있는 분들과 소통을 잘합니다.
UI 컴포넌트의 명칭과 이를 구현하는 능력은 필수적인 커뮤니케이션 스킬이자 필요사항이니 어떤 상황에서 해당 컴포넌트를 사용하면 좋을지 고민하며 코드를 작성해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_1주차 과제

</br>

</div>
</details>

---

<details>
<summary>Step-2.-Week-1 [과제수행]</summary>
<div>
# Step-2.-Week-1

카카오 테크 캠퍼스 2단계 - FE - 1주차 클론 과제
</br>
</br>

## **과제 1**

- i. 각 페이지 명세 작성하기

- ii. 디렉토리 구조 작성하기

  <br>
  </br>

### i. 각 페이지 명세 작성하기

| 작업명                                      | 핵심 기능                         | 프레임                                                                                                                         | 기능 상세설명                                                                                                                                                                                                                                                                                                        | 인터페이스 요구사항                                                                                                                                                                                                                         |
| ------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| (기능1)<br>회원가입                         | 서비스 이용을 위한 회원가입       | <img width="774" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/4e1f870b-5b01-414f-a89f-7c491a306086">  | 1. 이름 입력<br/>2. 사용할 **이메일 주소** 입력(인증은 생략) <br> 2. 이메일 유효성 검사(영문+숫자@영문+숫자.영문+숫자) 및 에러 출력<br>3. **비밀번호** 입력 <br>4. 비밀번호 유효성 검사 (영문,숫자,특수문자 포함,8-20자,공백없음) 및 에러 출력<br/>5. 유효성 검사에 통과 한다면 HTTP Request Body에 담아 서버로 전송 | -**입력** : 이름, 이메일 비밀번호,비밀번호 확인 입력 후 '회원가입' 클릭<br> -**출력**: 로그인 페이지 <br/>-**에러시 출력**: 어떤 유효성 검사에 통과하지 못하는 지 입력창 하단에 출력<br/>-**비고**: 이름, 이메일, 비밀번호 한 페이지로 통합 |
| (기능2)<br>로그인                           | 회원정보를 통한 로그인            | <img width="466" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/e30c2639-3fc7-4374-aff1-4632e23fe549">  | 1. **이메일/비밀번호 입력** 후 '로그인 버튼'을 클릭 시 HTTP Request Body에 담아 서버로 요청<br/>2. 비어있는 항목이나 정확하지 않은 항목에 대한 에러 메세지 출력                                                                                                                                                      | -입력: 로그인 페이지에서 이메일, 비밀번호 입력 후 로그인 버튼 클릭<br/>-**출력**: 메인 페이지(상단의 로그인 버튼이 회원 이름으로 대체)<br/>-**에러시 출력**: 입력창 하단에 에러메세지 출력                                                  |
| (기능3)<br/>메인 페이지 상단                | 로그인 상태에 따른 화면 상단 구성 | <img width="512" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/df9afc24-5531-4dbc-9295-8cdc23fb7ebf">  | 1. 비로그인시 메인 페이지에는 **로그인 버튼 출력**<br/>2. 로그인 완료 후 로그인 버튼을 **사용자 이름으로 대체**<br/>3. 이름 클릭 시, 드롭다운 메뉴 출력                                                                                                                                                              | -**입력**: 로그인<br/>-**출력**: 로그인 버튼 메뉴 출력 가능한 이름으로 대체 및 이름 클릭 시 드롭다운 메뉴 출력                                                                                                                              |
| (기능4)<br>로그아웃                         | 로그아웃                          | <img width="438" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/fc842c61-64e4-48cb-833d-b03cf718dacb">  | 1. '로그아웃' 버튼 클릭 시 **로그아웃**<br/>                                                                                                                                                                                                                                                                         | -**입력**: 이름 클릭 후, 로그아웃 버튼 클릭<br/>-**출력**: 메인 페이지<br/>                                                                                                                                                                 |
| (기능5)<br>전세 상품 목록 조회(메인 페이지) | 전체 상품 조회                    | <img width="919" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/ce4afdb7-f309-4c25-9655-1396a8fc626e">  | 1. 주문이 가능한 **전체 상품 목록**을 서버로 부터 받아옴<br/>2. 상품 이미지, 상품명, 상품 가격 **출력**<br/>3. 상품에 마우스 hover시, 상품 이미지 확대                                                                                                                                                               | -**입력**: -<br/>-**출력**: 전체 상품 출력(상품 이미지, 상품명, 상품 가격)                                                                                                                                                                  |
| (기능6)<br>개별 상품 상세 조회              | 상품 상세 조회                    | <img width="1301" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/8e38bf68-b30b-4c1c-85f7-65c9cd64f243"> | 1. 특정 상품 클릭 시, **상세 조회 페이지**로 이동<br/>2. 'id'를 통해 상품 식별, **상세 정보와 옵션 등**을 화면에 출력                                                                                                                                                                                                | -**입력**: 메인 페이지에서 특정 상품 클릭<br/>-**출력**: 상품 정보 출력                                                                                                                                                                     |
| (기능7)<br>상품 옵션 선택                   | 상품 옵션 선택                    | <img width="361" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/5f82762f-be89-4e86-92a7-28f566ef3b19">  | 1. **상품 옵션** 선택<br/>2. 한번 선택된 옵션은 다시 선택x (뒤의 수량을 통해 다룰 예정)<br/>3. 여러 옵션 선택 가능<br/>4. **총 금액 출력**                                                                                                                                                                           | -**입력**: 상품 옵션 리스트에서 옵션 선택<br/>-**출력**: 옵션창이 닫히고, 선택한 옵션 박스 하단에 출력                                                                                                                                      |
| (기능8)<br>상품 옵션 확인                   | 상품 옵션 수정 및 확인            | <img width="348" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/d9a27d88-119c-4747-ae4e-86e6952abffa">  | 1. 선택한 모든 옵션 확인<br/>2. **수량 선택** 가능<br/>3. **삭제** 가능<br/>4. **총 금액 출력**                                                                                                                                                                                                                      | -**입력**: -/+ 버튼을 통해 수량 조절, x 버튼을 통해 삭제<br/>-**출력**: 총 금액 출력                                                                                                                                                        |
| (기능9)<br>장바구니 담기                    | 장바구니 담기                     | <img width="587" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/92aac0e1-28db-4bb8-ac99-0d50ff70516a">  | 1. 옵션 선택 후, '**장바구니 버튼**' 클릭<br/>2. 해당 상품들이 HTTP Request Body에 담겨 서버로 전달<br/>3. 해당 회원의 **장바구니에 저장**                                                                                                                                                                           | -**입력**: 장바구니 버튼 클릭<br/>-**출력**: 장바구니에 담겼다는 메세지 출력(토스트, 팝업)                                                                                                                                                  |
| (기능10)<br>장바구니 확인                   | 장바구니 확인                     | <img width="874" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/89b50dbd-ae1f-4b75-a5ba-ce2bfb108801">  | 1. 서버로부터 해당 회원의 장바구니 받아와서 **장바구니에 담긴 상품 데이터** 출력<br/>2. 상품 삭제, 옵션 변경 가능<br/>3. 선택한 상품에 따라서 **총 금액, 건수 출력**                                                                                                                                                 | -**입력**: 화면 상단 장바구니 버튼 클릭 및 옵션 수정<br/>-**출력**: 장바구니 상품 목록 출력, 총액, 총 개수 출력                                                                                                                             |
| (기능11)<br>주문하기                        | 주문 확인 및 결제                 | <img width="499" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/6361dbab-2eda-4223-93ea-6c2f940f1056">  | 1. 장바구니에서 **체크한 상품** 또는 상세 페이지의 **상품 목록** 출력<br/>2. **배송지** 입력 및 수정, **요청사항** 입력<br/>3. **총액** 출력<br/>4. **개인정보 제공 동의** 체크박스를 통한 입력<br/>                                                                                                                 | -**입력**: 장바구니 화면에서 주문하기 클릭 또는 상품 상세 페이지에서 구매하기 클릭<br/>-**출력**: 주문 상품 정보,배송지 정보 입력 화면, 총액 및 결제 버튼                                                                                   |
| (기능12)<br>결제하기                        | 결제                              | <img width="873" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/f78efedd-2fcd-4612-bed1-09c4fe15e0f4">  | 1. 결제하기 버튼 클릭 식 **결제 완료**(실제 결제 과정 생략)                                                                                                                                                                                                                                                          | -**입력**: 결제하기 버튼 클릭<br/>-**출력**: 주문 완료 및 확인 페이지                                                                                                                                                                       |
| (기능13)<br>주문 결과 확인                  | 주문 결과 확인                    | <img width="585" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/2287ffe4-5ffb-4a2c-8e94-3353fd9f10e3">  | 1. **주문한 상품들**에 대한 결과 출력<br/>2. 주문 완료된 상품들 서버에 전송 및 해당 회원의 **장바구니에서 상품 삭제**<br/>3. 주문 완료된 상품들 서버에 전송 및 해당 회원의 **주문 목록에 추가**                                                                                                                      | -**입력**: 결제하기 버튼 클<br/>-**출력**: 주문 결과 출력                                                                                                                                                                                   |
| (기능14)<br/>주문 목록 확인                 | 주문 목록 확인                    | <img width="606" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/5c0ae6a2-16f8-420d-8b68-8b1c3a35684a">  | 1. 서버로부터 해당 회원의 **주문 목록**을 받아와서 출력                                                                                                                                                                                                                                                              | -**입력**: 이름 클릭 후, MY쇼핑 클릭<br/>-**출력**: 주문 내역 페이지                                                                                                                                                                        |

### ii. 디렉토리 구조 작성하기

디렉토리 구조를 아래와 같이 구성해봤습니다.
파일의 유형별로 디렉토리를 그룹화 하였습니다.

<img width="245" alt="image" src="https://github.com/monsta-zo/PNU-CSE/assets/83194164/15550b5d-f5cb-4bc6-81a2-1bb01a1b9ddf">

각 폴더의 역할은 아래와 같습니다.

| 폴더명     | 역할                                                     |
| ---------- | -------------------------------------------------------- |
| public     | 컴파일이 필요없는 정적인 파일들을 모아 놓는다.           |
| apis       | API관련 파일이 위치한다.                                 |
| assets     | 컴파일시에 필요한 이미지, 폰트와 같은 파일들을 저장한다. |
| components | 컴포넌트들이 위치한다.                                   |
| config     | config 파일들이 위치한다.                                |
| constants  | 공통적으로 사용되는 상수들을 정의한 파일들이 위치한다.   |
| hooks      | 커스텀 훅이 위치한다.                                    |
| pages      | 라우팅을 적용하는 커스텀 페이지들이 위치한다.            |
| styles     | css (scss) 파일들이 위치한다.                            |
| utils      | 유틸리티 함수(파일)들이 위치한다.                        |

  <br>
  </br>

## 과제 2

- i. UI 컴포넌트 명칭, 사용법, 용도 정리
- ii. UI 컴포넌트 코드 작성 해보기

### i. UI 컴포넌트 명칭, 사용법, 용도

| 명칭        | 예시                                                                                                | 설명                                                                                 | 용도                                             |
| ----------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------------ |
| 토스트      | ![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/6dd4fa65-1b79-4a73-a938-53f902cdcca4) | 일시적인 메시지를 표시하기 위해 사용, 화면의 하단이나 상단에 작은 팝업 형태로 나타남 | 알림, 경고, 작업 완료 피드백, 상태 표시 등       |
| 브레드크럼  | ![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/5b224288-a1bd-43f9-82bb-d6fe530f59b8) | 웹 사이트 내에서 사용자가 어떤 경로를 따라 현재 페이지에 도달했는지를 표시해줌       | 경로 표시, 계층 구조 표시, 사용자 경로 추척 등   |
| 캐러셀      | ![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/6493cd04-b305-4b1e-be77-3910d33bf6cc) | 이미지, 동영상, 콘텐츠 등을 순환적으로 표시하는 슬라이드 쇼 형태의 요소              | 이미지 갤러리, 광고 배너, 이미지 슬라이더 등     |
| 라디오 버튼 | ![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/a4cd34cd-1566-4e68-8621-9cf2b32b3220) | 여러개의 선택 사항 중 하나만을 고를 수 있는 요소이다.                                | 양자 택일 선택, 옵션 선택, 필터링 옵션 선택 등   |
| 토글 버튼   | ![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/ef6d7dfa-c013-4cbc-9b4c-2672a72e0933) | 두 가지 상태 중 하나를 선택하거나 전환하는데 사용 형태는 다양할 수 있다.             | 스위치 설정, 다크 모드 전환, 필터링 적용/해제 등 |
| 체크리스트  | ![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/31c90435-aa3d-47b5-9b22-1820dbeca749) | 여러개의 선택 사항 중 여러 개를 고를 수 있는 요소이다. 다중선택이 가능하다.          | to-do, 양식 작성, 옵션 선택 등                   |

### ii. UI 컴포넌트 코드 작성 해보기

> `src/components` 아래의 폴더들에 각각 작성해봤습니다.

  <br>
  </br>

## 과제 3

### i. 각 컴포넌트를 테스트할 페이지 만들기

[실행방법]

```
npm start
```

[👏결과]
![image](https://github.com/monsta-zo/PNU-CSE/assets/83194164/48a7c131-c0d3-47a9-bb94-62cf4def7a75)

!!

</div>
</details>

---

<details>
<summary>Step-2.-Week-2</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 2주차 클론 과제

</br>

## **과제명**

```
1. 코드 디자인 패턴과 상태 관리
```

</br>

## **과제 설명**

✅**과제 1. 아토믹 컴포넌트 디자인 패턴 사용**

```
- 회원가입, 로그인 페이지 개발에 필요한 컴포넌트를 아토믹 디자인 패턴을 사용해 작성하세요.
- 작성한 컴포넌트는 사용의 편의성을 위해 Props에 적절한 주석을 달아주세요.
```

</br>

✅**과제 2. 회원 가입, 로그인 페이지 개발**

```
- 백엔드 API 문서를 참고하여 회원가입, 로그인 페이지를 개발하세요.
- 각 페이지에는 적합한 값이 입력되도록 하고, 적절하지 않은 값이 들어온 경우 API 요청을 보내기 전에 프론트에서 에러 캐칭을 해주세요.
- 회원가입, 로그인 후에는 메인 페이지로 리다이렉트하세요.
- API 응답 과정에서 로그인이 실패하는 경우, 회원가입이 실패한 경우에 대해서 에러 캐칭도 적용해야 합니다.
```

</br>

✅**과제 3. 상태관리 모듈 적용**

```
- 로그인 후에 사용자의 정보를 상태관리 모듈을 하나 선정해 저장하고 불러올 수 있도록 코드를 작성하세요.
- 사용자가 로그인 상태일 때는 GNB 영역에 로그인 버튼이 보이면 안됩니다.
- 로그아웃시 상태를 초기화하세요.
- 새로고침 시에도 상태를 잃지 않고 유지해야 합니다.
- 일정한 시간이 지나면 로그인 유지가 끝나도록 설정하세요.(예: 1일)
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 아토믹 컴포넌트를 작성할 때 Atoms, Molecules에 반드시 특정한 컴포넌트가 들어갈 필요는 없습니다. 개발자의 주관이 들어갈 수 있는 부분이니 적절한 뎁스로 나누어보세요.

2. API 요청을 보내고, 응답 받을 때 성공 케이스만 생각해 코드를 작성하는 경우가 많습니다. 숨은 에러 케이스는 없을지 한 번 더 고민해보세요.

3. 상태 관리 모듈은 자신이 써보고 싶은 어떤 모듈이던 상관 없습니다. 모듈을 사용해보면서 모듈에 들어가는 미들웨어나 툴도 사용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_2주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-3</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 3주차 클론 과제

</br>

## **과제명**

```
1. 비동기 통신 활용과 레이아웃
```

</br>

## **과제 설명**

✅**과제 1. 상품 목록 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 목록 페이지를 개발하세요.
- 페이지네이션을 이용해 페이지 값을 증가시켜가며 조회될 수 있도록 코드를 작성해주세요.
- 데이터 로딩 과정에 로더를 구현하세요.
- 데이터 불러오기를 할 때 react-query를 사용해보세요.
```

</br>

✅**과제 2. 스켈레톤과 로더**

```
- 컴포넌트에 props를 전달해 데이터 로딩 중 스켈레톤 또는 로더가 적용될 수 있도록 코드를 작성해보세요.
- 상품 목록 카드에 스켈레톤을 적용하세요.
- 페이지 전체에 대한 로딩이 진행될 때는 글로벌 로더를 적용해보세요.(적절한 모듈을 찾아 적용해도 좋습니다.)
```

</br>

✅**과제 3. 백엔드 상태 코드 반응**

```
- API 응답에 대해 전처리 하는 코드를 작성해보세요.
- 200, 300, 400, 500번 대의 상태 코드별 에러 캐칭이 필요한 경우라면 해당 함수에서 먼저 실행되도록 코드를 작성합니다.
- react-query에서 전처리하는 방식이 있다면 해당 방식을 적용하거나 또는 별도의 함수나 클래스를 만들어 관리를 시도해보면 됩니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 스켈레톤과 로더를 바텀부터 만들기보단 Codepen 등을 참고해 구현하고, Props를 통한 실제 적용에 집중해주세요.
2. 과제 3번을 해결할 때 Facade pattern을 참고해보세요.
3. 과제 1번을 해결할 때 react-query를 사용해보되 전체 프로젝트에 react-query를 적용할 필요는 없습니다. 하나 이상의 API 요청에 적용해보세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_3주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-4</summary>
<div>
  
## 카카오 테크 캠퍼스 2단계 - FE - 4주차 클론 과제
</br>

## **과제명**

```
상세 페이지 개발과 라이브러리
```

</br>

## **과제 설명**

✅**과제 1. 상품 상세 페이지 개발**

```
- 백엔드 API 문서를 참고하여 상품 상세 페이지를 개발하세요.
- 한 개의 UI 라이브러리를 선정해 사용해보세요.
- 적절하지 않은 상품 ID 값이 들어오거나 찾을 수 없는 상품일 때 404 페이지 또는 "상품을 찾을 수 없습니다."라는 메시지가 있는 페이지로 이동될 수 있도록 코드를 작성하세요.
- 데이터 로딩이 완료될 때까지 로더를 적용하세요.
- '장바구니 담기' 버튼과 '구매' 버튼을 나누어 배치하세요.
```

</br>

✅**과제 2. 장바구니 페이지 개발**

```
- 백엔드 API 문서를 참고하여 장바구니 페이지를 개발하세요.
- 담아둔 상품에 대해 조회, 수량 변경, 항목 삭제가 구현되어야 합니다.
- '결제하기' 버튼을 만들고, 클릭시 결제 페이지로 이동될 수 있도록 개발하세요.
- 다른 모든 페이지와 마찬가지로 비동기 데이터 요청이 발생하니 로더 또는 스켈레톤을 통해 장바구니 목록을 불러올 때 로딩 상태를 표시하세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. UI 라이브러리를 사용할 때 모든 구성요소에 UI 라이브러리의 규칙을 적용할 필요는 없습니다. UI 라이브러리의 사용법을 익히고, 하나 이상의 컴포넌트에 적용해봅니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_4주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-5</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 5주차 클론 과제

</br>

## **과제명**

```
주문 결제 개발
```

</br>

## **과제 설명**

✅**과제 1. 주문 결제 페이지 개발**

```
- 백엔드 API 문서를 참고하여 주문 결제 페이지를 개발하세요.
- 결제 페이지에서는 결제 전 결제 상세 정보에 대한 데이터를 조회하고, 결제를 확정하는 기능 2가지에 중점을 둡니다.
```

</br>

✅**과제 2. 테스트 결제**

```
- 한 개의 PG 서비스 또는 PG 서비스를 돕는 서드파티 앱을 사용해 개발합니다.
- 테스트 환경에서 결제를 성공해야 합니다.
- 결제가 실패하는 경우(잔고 부족, 결제 정보 불일치 등)에 대해 에러 캐칭을 적용하세요.
- 다양한 에러 상황에 대해 주석으로 에러 상황과 대응 방식을 설명해주세요.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 결제를 구현할 때 새로운 모듈을 학습하는데 있어서 생각보다 시간 소요가 클 것입니다. 또한 몇몇의 PG사에서 제공하는 SDK의 경우 리액트와 호환성이 나쁜 경우도 있습니다.
2. 테스트 결제시에 실제 비용이 나가는 것처럼 보이는 경우도 있습니다. PG사마다 정책이 다르지만 대부분 테스트 금액은 1일 이내로 환급받는 구조입니다.
3. 결제시에는 생각보다 많은 데이터를 하나의 페이로드에 담아 전달해야 합니다. 이 과정에서 데이터가 적절하지 않은 값이 들어갈 가능성이 높고, 코드가 복잡해질 수 있습니다. 기능 단위를 나누어 함수형 프로그래밍을 시도해보는게 도움이 될 수 있습니다.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_5주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>

---

<details>
<summary>Step-2.-Week-6</summary>
<div>

## 카카오 테크 캠퍼스 2단계 - FE - 6주차 클론 과제

</br>

## **과제명**

```
프로젝트 마무리
```

</br>

## **과제 설명**

✅**과제 1. 배포**

```
- Netlify를 통해 배포를 진행합니다.
- 계정을 생성하고 자신의 레포지토리를 연결해 배포합니다.
- 배포 레벨에서 사용될 환경 변수는 인스턴스에 적용되도록 직접 설정해줍니다.
- 배포에 사용될 브랜치는 개발 브랜치와 꼭 분리합니다.
```

</br>

✅**과제 2. 프로젝트 마무리**

```
- 모든 핵심 기능이 정상 작동되도록 숨은 버그와 기능을 점검합니다.
- 특정한 파일이 너무 크다면, 코드 내의 함수를 다른 파일로 옮겨 import / export 하는 등 코드 리펙터링을 진행합니다.
- 개발 환경과 배포 환경 모두 버그가 없는지 체크합니다.
```

</br>

✅**과제 3. README.md 정리**

```
- 배포한 환경에 대해 구체적인 설명을 남겨주세요.
- 포함될 내용은 배포 순서, 배포에 영향 받는 브랜치, 배포시 주의 사항, 배포 환경 등 다른 개발자가 해당 프로젝트를 인수인계 받았을 때 문제가 없도록 꼼꼼히 작성합니다.
```

</br>

## **과제 상세 : 수강생들이 과제를 진행할 때, 유념해야할 것**

```
1. 많은 서비스가 개발 레벨에서는 잘 작동하다가도 배포 단계에서 에러를 만나는 경우가 많습니다. 배포 후에 기능을 하나하나 점검해보고, 여러 환경에서 시도해보세요.

2. 배포된 환경을 하나의 브라우저에서만 테스트하지 말고, 최대한 다양한 디바이스와 브라우저에서 테스트해보세요. 삼성 브라우저, 아이폰 사파리, 데스크탑이라면 크롬, 사파리, 파이어폭스 등으로 테스트해보세요.

3. 코드를 시간이 지나서 보면 어떤 목적으로, 왜 만들었는지 알아보기 힘든 경우가 많습니다. 기본적인 내용이라 생각한 부분도 주석을 달아주세요.
```

</br>

## **코드리뷰 관련: PR시, 아래 내용을 포함하여 코멘트 남겨주세요.**

**1. PR 제목과 내용을 아래와 같이 작성 해주세요.**

> - PR 제목 : 부산대FE\_라이언\_6주차 과제

</br>

**2. PR 내용 :**

> - 코드 작성하면서 어려웠던 점
> - 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분

</div>
</details>
