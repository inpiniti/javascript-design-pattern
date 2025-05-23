# 메멘토 패턴

메멘토 패턴은 객체가 자신의 내부 상태를 캡처하여 외부에 저장할 수 있게 하여 캡슐화를 위반하지 않으면서 나중에 복원할 수 있도록 하는 행동 디자인 패턴입니다. 이는 애플리케이션에서 실행 취소/다시 실행 기능과 같은 기능을 구현하는 데 특히 유용합니다.

## 목적

메멘토 패턴의 주요 목적은 내부 구조를 노출하지 않고 객체를 이전 상태로 복원하는 방법을 제공하는 것입니다. 이를 통해 특정 시점의 객체 상태를 보존할 수 있습니다.

## 사용

메멘토 패턴은 실행 취소 기능, 버전 관리 또는 시간이 지남에 따라 객체의 상태를 추적해야 하는 모든 상황에서 일반적으로 사용됩니다.

## 예제 코드

```javascript
// 메멘토 클래스
class 메멘토 {
  constructor(상태) {
    this.상태 = 상태;
  }
}

// 원조자 클래스
class 원조자 {
  constructor() {
    this.상태 = '';
  }

  상태설정(상태) {
    this.상태 = 상태;
    console.log(`상태가 설정됨: ${this.상태}`);
  }

  메멘토에상태저장() {
    return new 메멘토(this.상태);
  }

  메멘토에서상태가져오기(메멘토) {
    this.상태 = 메멘토.상태;
    console.log(`상태가 복원됨: ${this.상태}`);
  }
}

// 관리자 클래스
class 관리자 {
  constructor() {
    this.메멘토목록 = [];
  }

  추가(메멘토) {
    this.메멘토목록.push(메멘토);
  }

  가져오기(인덱스) {
    return this.메멘토목록[인덱스];
  }
}

// 사용 예시
const 원조자객체 = new 원조자();
const 관리자객체 = new 관리자();

원조자객체.상태설정('상태 1');
관리자객체.추가(원조자객체.메멘토에상태저장());

원조자객체.상태설정('상태 2');
관리자객체.추가(원조자객체.메멘토에상태저장());

원조자객체.상태설정('상태 3');
console.log('현재 상태:', 원조자객체.상태);

// 이전 상태로 복원
원조자객체.메멘토에서상태가져오기(관리자객체.가져오기(1));
```

이 예제에서 `원조자` 클래스는 `메멘토` 클래스를 사용하여 자신의 상태를 생성하고 복원하는 역할을 합니다. `관리자` 클래스는 메멘토들을 관리하며 원조자가 상태를 저장하고 복원할 수 있도록 합니다.
