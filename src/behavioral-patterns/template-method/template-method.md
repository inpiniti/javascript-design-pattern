# 템플릿 메소드 패턴

템플릿 메소드 패턴은 메소드에서 알고리즘의 뼈대를 정의하고, 일부 단계를 서브클래스로 미루는 행동 디자인 패턴입니다. 이 패턴은 서브클래스가 알고리즘의 구조를 변경하지 않고도 특정 단계를 재정의할 수 있게 합니다.

## 목적

템플릿 메소드 패턴은 알고리즘의 프레임워크를 정의하여 서브클래스가 특정 단계에 대한 구체적인 구현을 제공할 수 있도록 하는 데 사용됩니다. 이는 코드 재사용을 촉진하고 DRY(Don't Repeat Yourself) 원칙을 준수하는 데 도움이 됩니다.

## 사용

1. **템플릿 메소드 정의**: 알고리즘의 단계를 개략적으로 설명하는 메소드를 생성합니다.
2. **서브클래스에서 단계 구현**: 서브클래스는 알고리즘의 전체 구조를 변경하지 않고 특정 단계를 재정의할 수 있습니다.

## 예제 코드

```javascript
// template-method.js

class 추상클래스 {
  템플릿메소드() {
    this.단계1();
    this.단계2();
    this.단계3();
  }

  단계1() {
    console.log('단계 1: 기본 구현');
  }

  단계2() {
    console.log('단계 2: 기본 구현');
  }

  단계3() {
    console.log('단계 3: 기본 구현');
  }
}

class 구체클래스A extends 추상클래스 {
  단계1() {
    console.log('구체클래스A: 단계 1 구현');
  }
}

class 구체클래스B extends 추상클래스 {
  단계3() {
    console.log('구체클래스B: 단계 3 구현');
  }
}

// 사용 예시
const 인스턴스A = new 구체클래스A();
인스턴스A.템플릿메소드();

const 인스턴스B = new 구체클래스B();
인스턴스B.템플릿메소드();
```

이 예제에서 `추상클래스`는 알고리즘의 단계를 호출하는 `템플릿메소드`를 정의합니다. `구체클래스A`와 `구체클래스B`는 일부 단계에 대한 구체적인 구현을 제공하여, 템플릿 메소드 패턴이 일관된 알고리즘 구조를 유지하면서도 유연성을 제공하는 방법을 보여줍니다.
