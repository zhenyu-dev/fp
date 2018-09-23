# Pure Function

1. return value is the same for the same argument

-   Predicatability
-   Testability
-   Memoization

2. no side effects

-   static variables
-   non-local variables
-   mutate reference arguments
-   io

3. Immutability

-   Objects don't change state

```javascript
var result = [1, 2, 3].map(x => x + 1).filter(x => x > 2) // [3, 4]
```

# First class functions

-   Highter order function
-   Useful to avoid state and abstract solutions

# Functional

-   通过管道把数据在一系列纯函数间传递的程序
-   control flow
-   error handling
-   asynchronous actions
-   state
-   effects

# Libraries

-   sanctuary
    -   [Official](https://sanctuary.js.org/)
    -   [Github](https://github.com/sanctuary-js/sanctuary)
-   folktale
    -   [Official](https://folktale.origamitower.com/)
    -   [Github](https://github.com/origamitower/folktale)
-   daggy
    -   [Github](https://github.com/fantasyland/daggy)

# References

-   [JavaScript 函数式编程 - 佯真愚](https://juejin.im/post/5b7014d5518825612d6441f8)
-   [JS 函数式编程指南](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/)
-   [Mostly adequate guide to FP (in javascript)](https://github.com/MostlyAdequate/mostly-adequate-guide)
-   [awesome-functional-programming](https://github.com/xgrommx/awesome-functional-programming)
-   [Fantasy Land](https://github.com/fantasyland/fantasy-land)
