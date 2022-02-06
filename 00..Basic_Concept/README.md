# React 학습 전 준비

- [00..Preview](./00..Preview/)
  - 리액트 사용이유를 어렴풋이 알기 위해 간단한 코드를 작성한 부분입니다.
    - DOM 조작의 불편함과 단점..

## 소프트웨어의 특징

- 소프트웨어는 진화한다.
  : 소프트웨어는 어떤 문제들을 해결하기 위한 솔루션

- 변경 범위와 테스트 범위를 고민해보자
  : 종속성을 생각해보면서 코딩해보자

  ```jsx
  // 코드 기술
  const creatorMap = {
    h1: createH1,
    div: createDiv,
  };

  // 종속성을 끊어내는 테크닉
  const coupler = (map) => (type, props) => map[type](props);
  const createElement = coupler(creatorMap);
  ```

## 복잡도와 종속성을 줄이기 위한 노력 (DOM API의 문제점)

- MVC 패턴
  : 서버의 모델, 종속성을 많이 갖고 있게 되면서
  : 서버 변경에 의한 클라이언트 사이드 변경이 많아지는 단점이 있음

- MVVM (Model View ViewModel) [참고](https://jhtop0419.tistory.com/m/21)  
  : 클라이언트에서 상태를 독립적으로 가지고 있어 유지 관리에 용이
  MVVM 패턴의 장단점

  - 장점
    View와 Model이 서로 전혀 알지 못하기에 독립성을 유지할 수 있습니다
    독립성을 유지하기 때문에 효율적인 유닛테스트가 가능합니다
    View와 ViewModel을 바인딩하기 때문에 코드의 양이 줄어듭니다
    View와 ViewModel의 관계는 N:1 관계입니다
    유닛테스트를 하기가 좋습니다. 그 이유는 ViewModel에는 UIKit 관련 코드가 없고 Controller와의 의존성도 없기 때문입니다
  - 단점
    간단한 UI에서 오히려 ViewModel을 설계하는 어려움이 있을 수 있습니다
    데이터 바인딩이 필수적으로 요구됩니다
    복잡해질수록 Controller처럼 ViewModel이 빠르게 비대해집니다
    표준화된 틀이 존재하지 않아 사람마다 이해가 다릅니다

## React의 가치 ?

- DOM이 문제가 있으니 DOM 을 쓰지 말자.
  - 다루기가 까다로운 어떤 가를 쉬운 포맷으로 만들고 그 쉬운 포맷을 다루는 개념

## React 철학 [참고 v0.3.0](https://github.com/facebook/react/tree/v0.3.0)

- Declarative
  :
- Efficient
  : DOM 사용 X
- Flexible
  : 유연성, 다른 라이브러리를 사용할 수 있음

## 플러그인과 미들웨어

- > [플러그인](https://ko.wikipedia.org/wiki/%ED%94%8C%EB%9F%AC%EA%B7%B8%EC%9D%B8)  
  > 플러그인(plugin) 또는 추가 기능(애드인;add-in, 애드온;add-on)은 호스트 응용 프로그램과 서로 응답하는 컴퓨터 프로그램  
  > ex) Google Chrome(Host Application)의 extension, webpack

- > [미들웨어](https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4)  
  > 중간에서 조정과 중개의 역할을 수행하는 소프트웨어
  > ex) Node Express Framework, middleware를 추가할 수 있는 구조를 제공함 [참고](https://expressjs.com/ko/guide/using-middleware.html)

## 컴포넌트

- [컴포넌트 기반 소프트웨어 공학](https://ko.wikipedia.org/wiki/%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8_%EA%B8%B0%EB%B0%98_%EC%86%8C%ED%94%84%ED%8A%B8%EC%9B%A8%EC%96%B4_%EA%B3%B5%ED%95%99)

## @JSX
- 

## 공부해야 할 키워드 목록

- Babel, webpack plugin
