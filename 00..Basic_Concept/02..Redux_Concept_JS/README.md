# [Redux](https://ko.redux.js.org/introduction/getting-started/)

- Redux는 자바스크립트 앱을 위한 예측 가능한 상태 컨테이너입니다.

## [발행-구독 모델 (Publish–subscribe pattern)](https://ko.wikipedia.org/wiki/%EB%B0%9C%ED%96%89-%EA%B5%AC%EB%8F%85_%EB%AA%A8%EB%8D%B8)

## Currying

- [코어 자바스크립트](https://ko.javascript.info/currying-partials)
- [함수형 프로그래밍-Curry와 Partial Application](https://medium.com/%EC%98%A4%EB%8A%98%EC%9D%98-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-curry-%EC%99%80-partial-application-a7f83472cf53)

  > const add = (x, y) => x + y;
  > // 수학적 표기
  > f(x,y) = x + y
  > //
  > f(x,y) = h(x)(y) = x + y

  ```jsx
  // Arrow function
  const add = (x) => (y) => x + y;
  // Normal function
  function add(x) {
    return function (y) {
      return x + y;
    };
  }

  const addFive = add(5);
  addFive(7); // 12
  ```
