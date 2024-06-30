# 한채

<a href="https://outgoing-gravity-13d.notion.site/11-f49499388b444edcb115ceb9929ee8ea?pvs=4"><img src="https://img.shields.io/badge/Project Notion-000000?style=flat&logo=Notion&logoColor=ffffff"/></a>

[사이트 바로가기](https://hanche.store/main)

## 👬 팀 소개

<table>
  <tr>
		<td>
        <a href="https://github.com/JaeHyunGround">
            <img src="https://avatars.githubusercontent.com/u/97944429?v=4" width="100px" />
        </a>
    </td>
    <td>    
        <a href="https://github.com/chaeyeon41">
            <img src="https://avatars.githubusercontent.com/u/116044780?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/guswlsdl0121">
            <img src="https://avatars.githubusercontent.com/u/102999062?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/Seol-JY">
            <img src="https://avatars.githubusercontent.com/u/70826982?v=4" width="100px" />
        </a>
    </td>
    <td>
        <a href="https://github.com/lhetl">
            <img src="https://avatars.githubusercontent.com/u/93638355?v=4" width="100px" />
        </a>
    </td>
    <td>
    </td>

  </tr>
  <tr>
    <td><b>안재현</b></td>
    <td><b>정채연</b></td>
    <td><b>안현진</b></td>
    <td><b>설진영</b></td>
    <td><b>김민규</b></td>
    <td><b>권승진</b></td>
  </tr>
  <tr>
    <td><b>FE Owner</b></td>
    <td><b>FE Developer</b></td>
    <td><b>BE Owner</b></td>
    <td><b>BE & FE Developer</b></td>
    <td><b>BE Developer</b></td>
    <td><b>Designer</b></td>
  </tr>
</table>

<br/>

## 📒 프로젝트 소개

온라인 플랫폼을 사용하는데에 있어 어려움을 겪는 농어민들에 대한 디지털 격차 해소<br/>
소비자들에겐 해당 플랫폼을 통해 합리적인 식료품 소비를 할 수 있는 창구로써의 역할

1. 농어민들과 고객 간 직거래 플랫폼 → 유통비, 수수료 최소화
2. 농수산물 뿐만 아니라 못난이 농산물도 판매, 이로 인해 가성비 있는 소비 가능
3. 가족 간 계정 공유를 통한 고령층들의 구매 간편화 (디지털 격차 최소화)
   <br/><br/>

## 🖼 Screenshots

<img width="1746" alt="nanum" src="https://github.com/Team-Algebra/boonbae-backend/assets/70826982/012a16e0-74c9-4630-95ac-5c126b98b25e">

<br/>

## 📐 Architecture

<img width="873" alt="image" src="https://github.com/Team-Algebra/boonbae-backend/assets/70826982/0e720d28-25c7-4086-ab84-930942415f6d">

<br/>
<br/>

## 📖 E-R Diagram

![nanum_db](https://github.com/Team-Algebra/boonbae-backend/assets/70826982/60f3630f-ee25-4c09-9b76-ac996d15e9b5)

# Nanum FE

### ⚠️ 주의사항
1. 작업 시작 전 develop에서 풀(pull) 당기고 시작.
2. 풀리퀘 보내기 전 develop 브랜치에서 풀 당기고 보내기.
3. main 브랜치는 배포용. develop 브랜치는 작업물이 합쳐지는 공간.
4. git 협업 flow, Branch 네이밍은 노션 페이지 Frontend 개발문서 - Convention 참고

---

### 💬 commit 메세지

**commit 타입 지정 :** 타입은 태그와 제목으로 구성. 태그는 영어로 쓰되 첫 문자는 대문자로 한다. 제목은 서술형 문장이 아닌 간결하고 요점적인 서술을 한다.

태그 : 제목의 형태

| commit 타입 | 의미 |
| --- | --- |
| Feat | 새로운 기능 추가 |
| Fix | 버그 수정 |
| Docs | 문서 수정 |
| Style | 코드 포맷팅(formatting), 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| Design | CSS 등 사용자 UI 디자인 변경 |
| Refactor | 코드 리팩토링 |
| Test | 테스트 코드, 리팩토링 테스트 코드 추가 |
| Chore | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore |
| Comment | 필요한 주석 추가 및 변경 |
| Rename | 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우 |
| Remove | 파일을 삭제하는 작업만 수행한 경우 |
| !HOTFIX | 급하게 치명적인 버그를 고쳐야 하는 경우 |

**Body**

커밋의 본문은 다음의 규칙을 지킨다.
1. 본문 내용은 양에 구애받지 않고 최대한 상세히 작성한다.
2. 본문 내용은 어떻게 변경했는지 보다 무엇을 변경했는지 or 왜 변경했는지를 설명한다.
3. 타입 : 제목과 한 줄을 띄워 분리한다

**footer**

꼬리말 (footer)은 옵션.

**commit 예시**
```xml
- 파일을 생성(추가)했을 때
Feat : MainPage.jsx 파일 생성

MainPage 구현을 위해 MainPage.jsx 파일 생성

- 디자인(css) 변경했을 때
Design : MainPage.css 수정

MainPage width를 모바일 환경에 맞게 미디어 쿼리 (@media) 적용
```
