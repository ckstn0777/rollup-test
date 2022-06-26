### 테스트 목적

- 브라우저에서 쉽게 사용할 수 있도록 (.min).js 파일을 만들어보는 것
- 그 과정에서 얻게 된 지식을 정리해보는 것

### 테스트 진행과정

1. 간단한 함수 두개를 만들어서 rollup으로 묶어서 하나의 (.min).js 파일로 사용한지 여부 체크 - ok

- iife 방식으로 하면 즉시적용함수로 만들어서 rollup에서 지정한 name으로 변수형태로 반환됨
- 이걸 가지고 접근해서 사용할 수 있는 거네
- 물론 es방식(esm)으로도 사용할 수 있으며 이때는 type="module"을 추가해줘야 함

2. 외부 라이브러리(ex. date-fns)를 사용하는 모듈을 만들어서 하나의 (.min).js 파일로 사용한지 여부 체크

- date-fns를 그냥 사용하려고 하면 (!) Unresolved dependencies 이라고 뜨면서 의존성 모듈을 찾지 못함
- @rollup/plugin-node-resolve 을 설치한 후에 plugins에 적용하면 된다.
