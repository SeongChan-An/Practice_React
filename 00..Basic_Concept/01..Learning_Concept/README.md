# React를 JS와 webpack을 통해 이해해보기

- npm install webpack-cli --save-dev
- npm install webpack-dev-server --save-dev
- npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
- npm install html-webpack-plugin --save-dev

## webpack 기본 설정법 [(공식)](https://webpack.js.org/concepts/)

- module
  : 추가적인 동작이 필요한 것들 ex) babel을 통해 es6문법을 es5로 transpile
- plugin
  : 출력결과물을 만들어 낼 때 추가적으로 처리가 필요한 일들에 대해 처리

- 참고 : https://www.daleseo.com/webpack-config/
  - Entry 설정
    > 웹팩은 기본적으로 여러 개의 자바스크립트 모듈을 하나의 파일로 묶어내는 번들러입니다. 따라서 웹팩은 다른 모듈을 사용하고 있는 최상위 자바스크립트 파일이 어디에 있는지 알아야 하며, 설정 파일에서 이를 Entry 속성으로 명시합니다. 웹팩은 이 Entry 속성에 명시된 파일을 기준으로 의존성 트리를 만들어 하나의 번들 파일을 만들어 내게 됩니다. Entry 설정의 기본값은 ./src/index.js이다..
  - Output 설정
    > Loader를 이용하여 CSS나 이미지, 웹폰트, JSX, VUE 등 다양한 종류의 파일을 함께 번들링할 수 있다.
  - Loader 설정
    > Loader를 이용하여 CSS나 이미지, 웹폰트, JSX, VUE 등 다양한 종류의 파일을 함께 번들링할 수 있다.
  - Plugin 설정

### 설정을 위한 추가 작업

- babel 설정
  - babel 을 설정하기 위해 babel.config.json 파일을 생성하여 설정
- dev serer 설정
