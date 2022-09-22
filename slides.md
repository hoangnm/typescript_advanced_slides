---
# try also 'default' to start simple
theme: default
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
# class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: true
# some information about the slides, markdown enabled
info: |
  ## Advanced Typescript
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
---
# Advanced Typescript

---
---

# Benefits

<ul class="list-disc">
<li class="text-left">Type as a Documentation</li>
<li class="text-left">Reduce some common bugs in javascript</li>
<li class="text-left">More confident in refactoring</li>
</ul>

---

# Warning

<ul class="list-disc">
<li>Take more time from the beginning</li>
<li>Typescript couldn't help you much if the codebase has a bad architecture</li>
</ul>

--- 

# Basic
1. Structural type vs Nominal type
2. Problems with any and as
3. Narrowing type
4. Function overload
5. Unknown type

---

# Advanced
6. Generic
7. Conditional Type
8. Mapped Type
9. Template Literal Type
10. Decorator
11. This in class
12. Challenges


---

# Structural type vs Nominal type

---

# Structural type vs Nominal type


<div class="max-h-11/12 overflow-auto">

### Nominal type

```
class Foo {
  method(input: string): number { ... }
}
class Bar {
  method(input: string): number { ... }
}
let foo: Foo = new Bar(); // ERROR!!
```



### Structural type

```

interface ProductA {
  name: string;
}

interface ProductB {
  name: string;
  description: string;
}

function getProductName(product: ProductA) {
  return product.name;
}

const pA: ProductA = { name: 'a' };
getProductName(pA);

const pB: ProductB = { name: 'b', description: 'desc' };
getProductName(pB);

const pC = { name: 'c', other: 'test'}
getProductName(pC);
```

</div>


---

References
* https://www.typescriptlang.org/docs/handbook/2/basic-types.html
* https://www.typescriptlang.org/cheatsheets
* https://mariusschulz.com/blog/series/typescript-evolution
* https://learntypescript.dev/

---