<details>
<summary>Step-2.-Week-1</summary>
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

>- PR 제목 : 부산대FE_라이언_1주차 과제

</br>

</div>
</details>

<br>

<details>
<summary>부산대FE_김성현_1주차 과제</summary>
<div>
<br>

## ✅**과제 1.**

<br>

### 페이지별 구성

---

1. **메인 페이지**

    홍보 페이지, 타 페이지와 연결 제공

    <br>

    핵심 기능: 브랜드의 핵심 가치 전달, 알리고 싶은 정보 노출

    기능 상세 설명: 각각의 페이지로 이동하도록 유도하고, 타 페이지와 연결.

    인터페이스 요구사항: 적절한 권한을 가진 사용자에게 적절한 콘텐츠 제공.

---

2. **종류 분류 페이지**

    상품의 전체 종류 표시

    <br>

    핵심 기능: 카테고리명 표시

    기능 상세 설명: 상품이 가지고 있는 분류군을 표시.

    인터페이스 요구사항: 검색 결과 페이지로 연결.

---

3. **상품 검색 페이지**

    상품을 검색할 수 있는 시스템

    <br>

    핵심 기능: 상품을 검색하는 기능

    기능 상세 설명: 상품명이나 속성을 통해 검색하면, 일치하는 상품을 검색 결과로 표시.

    인터페이스 요구사항: 빈 값이나, 적절하지 않은 값이 입력될 때, 알림 전송.

---

4. **검색 결과 페이지**

    상품 검색 후 해당 상품과 연결해주는 페이지

    <br>

    핵심 기능: 옵션에 해당되는 상품들만 표시.

    기능 상세 설명: 입력된 옵션에 맞는 상품 리스트 표시.

    인터페이스 요구사항: 정량적 수치로 정렬

---

5. **개별 상품 설명 페이지**

    상품의 정보, 가격 등을 제공

    <br>

    핵심 기능: 상품의 정보를 제공.

    기능 상세 설명: 판매자, 정보, 가격, 리뷰 등을 제공.

    인터페이스 요구사항: 상품 선택 페이지로 이동할 수 있어야함.

---

6. **상품 선택 페이지**

    상품의 옵션, 개수를 선택. 즉시 구매/장바구니 제공.

    <br>

    핵심 기능: 구매할 상품을 결정.

    기능 상세 설명: 구매할 상품의 옵션과 개수를 선택.

    인터페이스 요구사항: 선택한 상품을 장바구니에 저장.

---

7. **로그인/회원가입 페이지**

    개별 사용자 확인.

    <br>

    핵심 기능: 로그인 요청과 사용자 로그인 정보 저장.

    기능 상세 설명: 이메일과 비밀번호를 저장하고, 이 정보를 통해 로그인 진행.

    인터페이스 요구사항: 적합한 정보를 입력받아 저장하고, 로그인 요청함.

---

8. **개인 정보 페이지**

    비밀번호 변경이나 주소지 등 개인 정보 수정 및 확인.

    <br>

    핵심 기능: 관리할 개인 정보 표시.

    기능 상세 설명: 성명, 주소, 이메일, 비밀번호 등을 표시하고 수정할 수 있도록함.

    인터페이스 요구사항: 현재 사용하는 비밀번호를 통해 접근할 수 있도록 설정.

---

9. **장바구니 페이지**

    선택한 상품 확인. 수량 선택 기능 추가.

    <br>

    핵심 기능: 상품을 구매하기 전, 선택한 상품을 표시.

    기능 상세 설명: 선택한 제품, 수량, 옵션을 표시.

    인터페이스 요구사항: 취사 선택을 위해 상품별로 라디오 버튼을 통해 선택.

---

10. **결제 페이지**

    전체 상품의 금액 표시. 결제 방식 제공.

    <br>

    핵심 기능: 상품을 구매하기 전 확인.

    기능 상세 설명: 구매 금액 표시, 결제 방식 확인.

    인터페이스 요구사항: 만약 외부 결제를 선택했다면 연결.

---

11. **결제 완료 페이지**

    결재 완료 알림.

    <br>

    핵심 기능: 상품 구매 확정 알림.

    기능 상세 설명: 결제 상품, 결제 금액, 결제 방식 표시.

    인터페이스 요구사항: 결제했던 정보를 사용자 DB에 기록.

---

<br> <br>
### 디렉터리 구조

<br>

![React Directory](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4308a774-bd4d-429c-9013-203dc1d853c6/Untitled.png)
![Components](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09a54539-0078-41c9-951f-daafc0347836/Untitled.png)
    
| apis | axios, API 요청 관련 폴더 |
| --- | --- |
| assets | 정적 자원 관련 폴더 |
| components | 커스텀 컴포넌트 관련 폴더 |
| hooks | 커스텀 훅 관련 폴더 |
| pages | 커스텀 페이지 관련 폴더 |
| states | 전역 상태 관리 관련 폴더 |
| styles | CSS 관리 관련 폴더 |
| utils | 유틸리티 함수 관련 폴더 |

<br>

✅**과제 2, 3.**

https://www.notion.so/9e21c53c52ea401fa0f72def74e94faf?pvs=4

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

>- PR 제목 : 부산대FE_라이언_2주차 과제

</br>

<<<<<<< HEAD
**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

>- PR 제목 : 부산대FE_라이언_3주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

>- PR 제목 : 부산대FE_라이언_4주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

>- PR 제목 : 부산대FE_라이언_5주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

✅**과제 3.  README.md 정리**

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

>- PR 제목 : 부산대FE_라이언_6주차 과제

</br>

=======
>>>>>>> parent of 6359e6f (Merge branch 'feat-KimSeonghyeon' of https://github.com/Kakao-tech-campus-FE/step2-FE-kakao-shop into feat-KimSeonghyeon)
**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

>- PR 제목 : 부산대FE_라이언_3주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

>- PR 제목 : 부산대FE_라이언_4주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

>- PR 제목 : 부산대FE_라이언_5주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


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

✅**과제 3.  README.md 정리**

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

>- PR 제목 : 부산대FE_라이언_6주차 과제

</br>

**2. PR 내용 :**

>- 코드 작성하면서 어려웠던 점
>- 코드 리뷰 시, 멘토님이 중점적으로 리뷰해줬으면 하는 부분


</div>
</details>

