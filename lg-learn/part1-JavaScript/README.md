## 函数式编程(FP) - 把运算过程抽象成函数
### 什么事函数式编程
用来描述数据之间的映射；对运算过程进行抽象
### 函数是一等公民（函数就是一个普通对象）
- 函数可以存储在变量中
- 函数可以作为返回值
- 函数可以作为返回值
### 高阶函数
- 可以把函数作为参数传递给另一个函数
- 可以把函数作为另一个函数的返回结果
### 高阶函数的意义
- 抽象通用的问题
### 闭包

函数和其周围的状态的引用捆绑在一起形成闭包
闭包的本质：函数在执行的时候会放到一个执行栈上当函数执行完毕之后会从栈上移出，
但是堆上的作用域成员因为被外部引用不能释放，因此内部函数依然可以访问外部函数成员。

### 纯函数：相同的输入始终得到相同的输出
函数式编程不会保留中间的结果，所以变量是不可变的（细粒度的函数）；
把一个值映射成另一个值

#### 纯函数的好处
- 可缓存
- 可测试
- 并行处理

#### 纯函数的副作用
如果函数依赖外部

### 柯里化
- 当一个函数有多个参数的时候先传递一部分参数调用它
- 然后返回一个新的函数接收剩余的参数，返回结果
#### 柯里化总结
- 传递参数更加灵活
- 对函数参数的’缓存‘
- 让函数变得更加灵活，让函数的粒度更小
- 可以把多元函数转化成一元函数，可以组合使用函数产生强大的功能

### 函数组合(compose)

如果一个函数要经过多个函数处理才能得到最终值，这个时候可以报中间过程的函数合并成一个函数。
- 函数就像数据的管道，函数组合就是把这些管道连接，让数据穿过多个管道形成最终结果。
- 函数组合默认是从右到左执行
 函数组合可以把细粒度的函数重新组合成一个新的函数

### Point Free
 我们可以把数据处理的过程定义成与数据无关的合成运算，
 不需要用到代表数据的那个参数，只要把简单的运算步骤合成到一起
 - 不需要指明处理的数据
 - 只需要合成运算过程
 - 需要定义一些辅助的基本运算函数

### 函子（Functor）
- 容器：包含值和值的变形关系
- 函子：是一个特殊的容器，通过一个普通的对象来实现
#### MayBe函子
 处理空值的情况
#### Either函子
 处理异常
#### IO函子
  内部value存储一个方法，延迟执行
#### Task - folktale

#### Monad
  解决函子嵌套问题

## JavaScript异步编程
采用单线程模式工作的原因:为了避免线程同步问题
回调函数、事件监听、发布/订阅、promise对象
### 同步模式
### 异步模式
回调函数：由调用者定义，交给执行者执行的函数
### Promise对象
- Promise对象的then方法返回的是一个全新的Promise对象
- 后面的then方法就是为上一个then返回的Promise注册回调
- 前面then方法中回调函数的返回值作为后面then方法回调的参数
- 如果回调中返回的是promise，那后面then方法的回调会等待它的结束
then里面的实参应该是函数。如果不是函数就无视。
### Promise异常处理
reject
### Promise静态方法
resolve | reject 返回promise对象
### Promise并行执行
all()全部完成  race()只会等待第一个完成
### Generator
Generator函数的返回值一个Generator对象

### 手动实现Promise

