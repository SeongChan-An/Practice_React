# React를 이용한 명함 만들기 프로젝트

- [React](https://reactjs.org/docs/getting-started.html)
- [Create React App](https://create-react-app.dev/docs/getting-started)
- [React Router](https://reactrouter.com/)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- [Firebase](https://firebase.google.com/)
- [Cloudinary](https://cloudinary.com/)

## Env Setup

- yarn create react-app my-app
- yarn add @fortawesome/fontawesome-free
- yarn add firebase
- yarn add react-router-dom

## 참고

- [Firebase 인증, 구글로그인](https://firebase.google.com/docs/auth/web/google-signin?authuser=0)

## 공부가 필요했던 부분

- React Router v6 use

  > You set location state in two ways: on <Link> or navigate:

  ```jsx
  <Link to="/pins/123" state={{ fromDashboard: true }} />;

  let navigate = useNavigate();
  navigate("/users/123", { state: partialUser });
  ```

  > If you need to replace the current location instead of push a new one onto the history stack, use navigate(to, { replace: true }). If you need state, use navigate(to, { state }). You can think of the first argument to navigate as your <Link to> and the other arguments as the replace and state props. The Link component in v6 accepts state as a separate prop instead of receiving it as part of the object passed to to so you'll need to update your Link components if they are using state:

  ```jsx
  <Link to={{ pathname: "/home", state: state }} />
  ```

## 주요기능에 대한 부분
- 값을 변경 시 preview에 바로 반영되는 부분
  : edit onchange 메서드 추가. 