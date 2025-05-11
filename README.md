# README

이 레포지토리는 `Tanstack Query` 공식문서를 톺아보고 알게된 점을 기록합니다.

## 예제 데모 링크

[TanStack Query Playground](https://tanstack-query-study.vercel.app/)

- 단순히 문서를 읽는 것을 넘어서 직접 구현하고 눈으로 비교하며 **체감하는 학습**을 목표로 합니다.
- 문서에서 읽은 개념이 실제 코드에서 어떻게 적용되는지, 어떤 차이를 만드는지를 빠르게 이해할 수 있도록 구성했습니다.

## 느낀점 & 새로 알게된 점

7
`+` 보경, 두환님과 이야기 나누면서 알게된 점도 추가 기록합니다

### `병렬 처리`

그냥 다 `useQueries` 쓰면 안되나? 하는 생각이 들었는데

1. 구조가 복잡해지고 코드 가독성이 떨어짐

- `useQueries`는 항상 **배열**을 리턴한다.
- 각각 쿼리 결과가 배열 안에 들어있어서
  - 데이터를 사용할 때마다 인덱싱(`queries[0]`, `queries[1]` 이런 식)하거나
  - 이름을 따로 맵핑해야 한다.

→ `useQuery`처럼 깔끔하게 `const { data } = useQuery(...)` 이렇게 쓰는 것보다

→ **읽고 쓰기 복잡하고 가독성 나빠진다.**

2. 쓸데없는 동적처리를 강요하게 됨

- 쿼리 갯수가 변하지 않는 경우에도 쿼리즈를 쓰면
- 훅이 무거워지고 복잡해진다고 함.

<br/>

### 🙇‍♀️ REF

- [Tanstack Query 공식문서](https://tanstack.com/query/latest)
- [탄스택 쿼리 공식문서 톺아보기 스터디 노션](https://tanstackquery.notion.site/?v=1ce2522077a080279f6f000c4afae6c6&pvs=74)
