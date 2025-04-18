# 옵저버 패턴

옵저버 패턴은 객체 간에 일대다 의존성을 정의하는 행동 디자인 패턴입니다. 한 객체(주체)가 상태를 변경하면 모든 의존 객체(옵저버)에게 자동으로 알림이 가고 업데이트됩니다. 이 패턴은 분산 이벤트 처리 시스템을 구현하는 데 특히 유용합니다.

## 목적

옵저버 패턴의 주요 목적은 주체가 옵저버가 누구인지 또는 무엇인지 알 필요 없이 상태 변화를 여러 옵저버에게 알릴 수 있게 하는 것입니다. 이는 주체와 옵저버 간의 느슨한 결합을 촉진합니다.

## 사용

옵저버 패턴은 한 객체의 변경이 다른 객체의 업데이트를 필요로 하는 시나리오에서 일반적으로 사용됩니다. 예를 들어 이벤트 처리 시스템, UI 프레임워크의 데이터 바인딩, 발행-구독 메커니즘 구현 등에서 사용됩니다.

## 예제 코드

다음은 자바스크립트로 구현한 옵저버 패턴의 간단한 예제입니다:

```javascript
// 주체(Subject)
class 주체 {
  constructor() {
    this.옵저버들 = [];
  }

  옵저버추가(옵저버) {
    this.옵저버들.push(옵저버);
  }

  옵저버제거(옵저버) {
    this.옵저버들 = this.옵저버들.filter((옵) => 옵 !== 옵저버);
  }

  옵저버들에게알림(데이터) {
    this.옵저버들.forEach((옵저버) => 옵저버.업데이트(데이터));
  }
}

// 옵저버(Observer)
class 옵저버 {
  업데이트(데이터) {
    console.log(`옵저버가 데이터를 받았습니다: ${데이터}`);
  }
}

// 사용 예시
const 주체객체 = new 주체();
const 옵저버1 = new 옵저버();
const 옵저버2 = new 옵저버();

주체객체.옵저버추가(옵저버1);
주체객체.옵저버추가(옵저버2);

주체객체.옵저버들에게알림('안녕하세요, 옵저버들!'); // 두 옵저버 모두 이 메시지를 받습니다
```

이 예제에서 `주체` 클래스는 옵저버 목록을 관리하고 옵저버를 추가, 제거, 알림을 보내는 메소드를 제공합니다. `옵저버` 클래스는 주체가 옵저버에게 알릴 때 호출되는 `업데이트` 메소드를 정의합니다.
