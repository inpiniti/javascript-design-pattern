# 커스텀 훅 패턴

커스텀 훅은 리액트 함수형 컴포넌트에서 상태 관련 로직을 재사용 가능한 함수로 추출하는 패턴입니다. 이는 React 16.8에서 도입된 훅(Hooks) 시스템의 강력한 기능으로, 컴포넌트 간에 로직을 공유하는 더 깔끔한 방법을 제공합니다.

## 목적

커스텀 훅의 주요 목적은 다음과 같습니다:

- 컴포넌트 로직 재사용성 향상
- 관심사 분리
- 코드 중복 제거
- 가독성 향상

## 사용 사례

커스텀 훅은 다음과 같은 시나리오에서 특히 유용합니다:

- 여러 컴포넌트에서 동일한 상태 로직 재사용
- API 통신 로직 추상화
- 폼 관리
- 이벤트 리스너 관리

## 예제 코드

다음은 API에서 데이터를 가져오는 커스텀 훅의 예시입니다:

```javascript
// useDataFetching.js
import { useState, useEffect } from 'react';

function useDataFetching(url) {
  const [데이터, 데이터설정] = useState(null);
  const [로딩, 로딩설정] = useState(true);
  const [에러, 에러설정] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        로딩설정(true);
        const 응답 = await fetch(url);

        if (!응답.ok) {
          throw new Error('네트워크 응답이 올바르지 않습니다');
        }

        const 결과 = await 응답.json();
        데이터설정(결과);
        에러설정(null);
      } catch (error) {
        에러설정(error.message);
        데이터설정(null);
      } finally {
        로딩설정(false);
      }
    };

    fetchData();
  }, [url]);

  return { 데이터, 로딩, 에러 };
}

export default useDataFetching;
```

이 커스텀 훅을 사용하는 컴포넌트 예시:

```javascript
// UserList.js
import React from 'react';
import useDataFetching from './useDataFetching';

function 사용자목록() {
  const {
    데이터: 사용자들,
    로딩,
    에러,
  } = useDataFetching('https://api.example.com/users');

  if (로딩) return <div>로딩 중...</div>;
  if (에러) return <div>에러: {에러}</div>;

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
        {사용자들 &&
          사용자들.map((사용자) => <li key={사용자.id}>{사용자.이름}</li>)}
      </ul>
    </div>
  );
}

// 다른 컴포넌트에서도 동일한 훅 재사용
function 제품목록() {
  const {
    데이터: 제품들,
    로딩,
    에러,
  } = useDataFetching('https://api.example.com/products');

  // 비슷한 렌더링 로직...
}
```

커스텀 훅의 주요 이점:

1. 재사용성: 동일한 데이터 가져오기 로직을 여러 컴포넌트에서 재사용할 수 있습니다.
2. 관심사 분리: 데이터 가져오기 로직이 컴포넌트의 UI 로직과 분리됩니다.
3. 테스트 용이성: 비즈니스 로직을 분리하여 독립적으로 테스트할 수 있습니다.
4. 가독성: 컴포넌트 코드가 더 간결해지고 목적이 명확해집니다.
