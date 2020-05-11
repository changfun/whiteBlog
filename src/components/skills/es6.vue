<template>
  <div class="es">
    <h2>ES6知识点汇总（全）</h2>
    <p>ES6官方中文教程：<a href="http://es6.ruanyifeng.com/" target="_blank">http://es6.ruanyifeng.com/</a></p>
    <h3>一、问：ES6是什么?</h3>
    <p>答： ES6是新一代的JS语言标准，对部分JS语言核心内容做了升级优化，规范了JS使用标准，新增了JS原生方法，使得JS使用更加规范，更加优雅，更适合大型应用的开发。</p>
    <h3>二、问：ES5、ES6和ES2015有什么区别?</h3>
    <p>答： ES2015特指在2015年发布的新一代JS语言标准，ES6泛指下一代JS语言标准，包含ES2015、ES2016、ES2017、ES2018等。现阶段在绝大部分场景下，ES2015默认等同ES6。ES5泛指上一代语言标准。ES2015可以理解为ES5和ES6的时间分界线。</p>
    <h3>三、问：babel是什么，有什么作用?</h3>
    <p>答：babel是一个 ES6 转码器，可以将 ES6 代码转为 ES5 代码，以便兼容那些还没支持ES6的平台。</p>
    <h3>四、问：let有什么用，有了var为什么还要用let及他们与const的区别？</h3>
    <p>
      答： 在ES6之前，声明变量只能用var，var方式声明变量其实是很不合理的，准确的说，是因为ES5里面没有块级作用域是很不合理的，甚至可以说是一个语言层面的bug。没有块级作用域回来带很多难以理解的问题，比如for循环var变量泄露，变量覆盖等问题。let 声明的变量拥有自己的块级作用域，且修复了var声明变量带来的变量提升问题。<br>
      
      <strong>区别:</strong><br>
      使用var声明的变量，其作用域为该语句所在的函数内，且存在变量提升现象；<br>
      使用let声明的变量，其作用域为该语句所在的代码块内，不存在变量提升；<br>
      使用const声明的是常量，在后面出现的代码中不能再修改该常量的值。
    </p>
    <h3>五、问：举一些ES6对String字符串类型做的常用升级优化?</h3>

    <h4>1、优化部分：</h4>
    <p>ES6新增了字符串模板，在拼接大段字符串时，用反斜杠(`)取代以往的字符串相加的形式，能保留所有空格和换行，使得字符串拼接看起来更加直观，更加优雅。</p>
    <h4>2、升级部分:</h4>
    <p>ES6在String原型上新增了<span class="keyword">includes()</span>方法，用于取代传统的只能用indexOf查找包含字符的方法(indexOf返回-1表示没查到不如includes方法返回false更明确，语义更清晰), 此外还新增了<span class="keyword">startsWith(), endsWith(), padStart(),padEnd(),repeat()</span>等方法，可方便的用于查找，补全字符串。</p>
    <h3>六、问：举一些ES6对Array数组类型做的常用升级优化?</h3>
    <h4>1、优化部分：</h4>
    <p>a. 数组解构赋值。ES6可以直接以<span class="keyword">let [a,b,c] = [1,2,3]</span>形式进行变量赋值，在声明较多变量时，不用再写很多let(var),且映射关系清晰，且支持赋默认值。</p>
    <p>b. 扩展运算符。ES6新增的扩展运算符(...)(重要),可以轻松的实现数组和松散序列的相互转化，可以取代arguments对象和apply方法，轻松获取未知参数个数情况下的参数集合。（尤其是在ES5中，arguments并不是一个真正的数组，而是一个类数组的对象，但是扩展运算符的逆运算却可以返回一个真正的数组）。扩展运算符还可以轻松方便的实现数组的复制和解构赋值（let a = [2,3,4]; let b = [...a]）。</p>
    <h4>2、升级部分:</h4>
    <p>ES6在Array原型上新增了<span class="keyword">find()</span>方法，用于取代传统的只能用indexOf查找包含数组项目的方法,且<span class="keyword">修复了indexOf查找不到NaN的bug([NaN].indexOf(NaN) === -1)</span>.此外还新增了<span class="keyword">copyWithin(), includes(), fill(),flat()</span>等方法，可方便的用于字符串的查找，补全,转换等。</p>
    <h3>七、问：举一些ES6对Number数字类型做的常用升级优化?</h3>
    <h4>1、优化部分：</h4>
    <p>ES6在Number原型上新增了isFinite(), isNaN()方法，用来取代传统的全局isFinite(), isNaN()方法检测数值是否有限、是否是NaN。ES5的isFinite(), isNaN()方法都会先将非数值类型的参数转化为Number类型再做判断，这其实是不合理的，最造成isNaN('NaN') === true的奇怪行为--'NaN'是一个字符串，但是isNaN却说这就是NaN。而Number.isFinite()和Number.isNaN()则不会有此类问题(Number.isNaN('NaN') === false)。（isFinite()同上）</p>
    <h4>2、升级部分:</h4>
    <p>ES6在Math对象上新增了Math.cbrt()，trunc()，hypot()等等较多的科学计数法运算方法，可以更加全面的进行立方根、求和立方根等等科学计算。</p>
    <h3>八、问：举一些ES6对Object类型做的常用升级优化?(重要)</h3>
    <h4>1、优化部分：</h4>

    <div>
      <p>a. 对象属性变量式声明。ES6可以直接<span class="keyword">以变量形式声明对象属性或者方法</span>，。比传统的键值对形式声明更加简洁，更加方便，语义更加清晰。</p>
      <div class="code">
        let [apple, orange] = ['red appe', 'yellow orange'];
        <br />
        let myFruits = {apple, orange};
        <span
          class="code-notes"
        >// let myFruits = {apple: 'red appe', orange: 'yellow orange'};</span>
        <br />
      </div>
      <p>尤其在对象解构赋值(见优化部分b.)或者模块输出变量时，这种写法的好处体现的最为明显:</p>
      <div class="code">
        let {keys, values, entries} = Object;
        <br />
        let MyOwnMethods = {keys, values, entries};
        <span
          class="code-notes"
        >// let MyOwnMethods = {keys: keys, values: values, entries: entries}</span>
        <br />
      </div>
      <p>可以看到属性变量式声明属性看起来更加简洁明了。方法也可以采用简洁写法：</p>
      <div class="code">
        let es5Fun = {
        <br />
        <div :style="{paddingLeft:spacesize*1+'px'}">method: function(){ }</div>
        <div :style="{paddingLeft:spacesize*0+'px'}">};</div>
        <div>let es6Fun = {</div>
        <div :style="{paddingLeft:spacesize*1+'px'}">method(){}</div>
        <div :style="{paddingLeft:spacesize*0+'px'}">}</div>
        <div :style="{paddingLeft:spacesize*1+'px'}"></div>
        <div :style="{paddingLeft:spacesize*1+'px'}"></div>
      </div>
    </div>

    <div>
      <p>b. 对象的解构赋值。 ES6对象也可以像数组解构赋值那样，进行变量的解构赋值：</p>
      <div class="code">
        let {apple, orange} = {apple: 'red appe', orange: 'yellow orange'};
        <br />
      </div>
      <p>c. 对象的扩展运算符(...)。 ES6对象的扩展运算符和数组扩展运算符用法本质上差别不大，毕竟数组也就是特殊的对象。对象的扩展运算符一个最常用也最好用的用处就在于可以轻松的取出一个目标对象内部全部或者部分的可遍历属性，从而进行对象的合并和分解。</p>
      <div class="code">
        let {apple, orange, ...otherFruits} = {apple: 'red apple', orange: 'yellow orange', grape: 'purple grape', peach: 'sweet peach'};
        <br />
        <div class="code-notes">
          // otherFruits {grape: 'purple grape', peach: 'sweet peach'}
          <br />// 注意: 对象的扩展运算符用在解构赋值时，扩展运算符只能用在最有一个参数(otherFruits后面不能再跟其他参数)
        </div>
        let moreFruits = {watermelon: 'nice watermelon'};
        <br />
        let allFruits = {apple, orange, ...otherFruits, ...moreFruits};
        <br />
      </div>
      <p>d. <span class="keyword">super</span> 关键字。ES6在Class类里新增了类似this的关键字super。同this总是指向当前函数所在的对象不同，super关键字总是指向当前函数所在对象的原型对象。</p>
    </div>
    <h4>2、升级部分:</h4>
    <p>a. ES6在Object原型上新增了is()方法，做两个目标对象的相等比较，用来完善'==='方法。'==='方法中NaN === NaN //false其实是不合理的，Object.is修复了这个小bug。(Object.is(NaN, NaN) // true)</p>

    <div>
      <p>b. ES6在Object原型上新增了assign()方法，用于对象新增属性或者多个对象合并。</p>
      <div class="code">
        const target = { a: 1 };
        <br />
        const source1 = { b: 2 };
        <br />
        const source2 = { c: 3 };
        <br />Object.assign(target, source1, source2);
        <br />target
        <span class="code-notes">// {a:1, b:2, c:3}</span>
        <br />
      </div>
    </div>
    <p>ES6在Object原型上新增了getOwnPropertyDescriptors()方法，此方法增强了ES5中getOwnPropertyDescriptor()方法，可以获取指定对象所有自身属性的描述对象。结合defineProperties()方法，可以完美复制对象，包括复制get和set属性。</p>
    <p>d. ES6在Object原型上新增了getPrototypeOf()和setPrototypeOf()方法，用来获取或设置当前对象的prototype对象。这个方法存在的意义在于，ES5中获取设置prototype对像是通过__proto__属性来实现的，然而__proto__属性并不是ES规范中的明文规定的属性，只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了，再非浏览器环境中并不一定就可以使用，所以为了稳妥起见，获取或设置当前对象的prototype对象时，都应该采用ES6新增的标准用法。</p>
    <p>d. ES6在Object原型上还新增了Object.keys()，Object.values()，Object.entries()方法，用来获取对象的所有键、所有值和所有键值对数组。</p>
    <h3>九、问：举一些ES6对Function函数类型做的常用升级优化?(重要)</h3>
    <h4>1、优化部分：</h4>
    <p>
      a. <span class="keyword">箭头函数(核心)</span>。箭头函数是ES6核心的升级项之一，箭头函数里没有自己的this,这改变了以往JS函数中最让人难以理解的this运行机制。主要优化点:<br>
      Ⅰ. 箭头函数内的this指向的是函数定义时所在的对象，而不是函数执行时所在的对象。ES5函数里的this总是指向函数执行时所在的对象，这使得在很多情况下this的指向变得很难理解，尤其是非严格模式情况下，this有时候会指向全局对象，这甚至也可以归结为语言层面的bug之一。ES6的箭头函数优化了这一点，它的内部没有自己的this,这也就导致了this总是指向上一层的this，如果上一层还是箭头函数，则继续向上指，直到指向到有自己this的函数为止，并作为自己的this。<br>
      Ⅱ. 箭头函数不能用作构造函数，因为它没有自己的this，无法实例化。<br>
      Ⅲ. 也是因为箭头函数没有自己的this,所以箭头函数 内也不存在arguments对象。（可以用扩展运算符代替）
    </p>

    <div>
      <p>b. 函数默认赋值。ES6之前，函数的形参是无法给默认值得，只能在函数内部通过变通方法实现。ES6以更简洁更明确的方式进行函数默认赋值</p>
      <div class="code">
        function es6Fuc (x, y = 'default') {
        <br />
        <div :style="{paddingLeft:spacesize*1+'px'}">console.log(x, y);</div>}
        <br />es6Fuc(4) // 4, default
        <br />
      </div>
    </div>

    <h4>2、升级部分:</h4>

    <div>
      <p>ES6新增了双冒号运算符，用来取代以往的bind，call,和apply。(浏览器暂不支持，Babel已经支持转码)</p>
      <div class="code">
        foo::bar;
        <br />
        <div class="code-notes">// 等同于</div>bar.bind(foo);
        <br />foo::bar(...arguments);
        <br />
        <div class="code-notes">// 等同于</div>bar.apply(foo, arguments);
        <br />
      </div>
    </div>

    <h3>十一、问：Set是什么，有什么作用？</h3>
    <p>答： Set是ES6引入的一种类似Array的新的数据结构，Set实例的成员类似于数组item成员，区别是Set实例的成员都是唯一，不重复的。这个特性可以轻松地实现<span class="keyword">数组去重</span>。</p>
    <h3>十二、问：Map是什么，有什么作用？</h3>
    <p>答： Map是ES6引入的一种类似Object的新的数据结构，Map可以理解为是Object的超集，打破了以传统键值对形式定义对象，对象的key不再局限于字符串，也可以是Object。可以更加全面的描述对象的属性。</p>
    <h3>十三、问：Proxy是什么，有什么作用？</h3>

    <div>
      <p>答： Proxy是ES6新增的一个构造函数，可以理解为JS语言的一个代理，用来改变JS默认的一些语言行为，包括拦截默认的get/set等底层方法，使得JS的使用自由度更高，可以最大限度的满足开发者的需求。比如通过拦截对象的get/set方法，可以轻松地定制自己想要的key或者value。下面的例子可以看到，随便定义一个myOwnObj的key,都可以变成自己想要的函数。</p>

      <div class="code">
       function createMyOwnObj() {
        <br />
        <div
          class="code-notes"
          :style="{paddingLeft:spacesize*1+'px'}"
        >//想把所有的key都变成函数，或者Promise,或者anything</div>
        <div :style="{paddingLeft:spacesize*1+'px'}">return new Proxy({}, {</div>
        <div :style="{paddingLeft:spacesize*2+'px'}">get(target, propKey, receiver) {</div>
        <div :style="{paddingLeft:spacesize*3+'px'}">return new Promise((resolve, reject) => {</div>
        <div :style="{paddingLeft:spacesize*4+'px'}">setTimeout(() => {</div>
        <div :style="{paddingLeft:spacesize*5+'px'}">let randomBoolean = Math.random() > 0.5;</div>
        <div :style="{paddingLeft:spacesize*5+'px'}">let Message;</div>
        <div :style="{paddingLeft:spacesize*5+'px'}">if (randomBoolean) {</div>
        <div :style="{paddingLeft:spacesize*6+'px'}">Message = &#x60;你的&#36;{propKey}运气不错，成功了&#x60;;</div>
        <div :style="{paddingLeft:spacesize*6+'px'}">resolve(Message);</div>
        <div :style="{paddingLeft:spacesize*5+'px'}">&#125; else &#123;</div>
        <div :style="{paddingLeft:spacesize*6+'px'}">Message = &#x60;你的&#36;{propKey}运气不行，失败了&#x60;;</div>
        <div :style="{paddingLeft:spacesize*6+'px'}">reject(Message);</div>
        <div :style="{paddingLeft:spacesize*5+'px'}">}</div>
        <div :style="{paddingLeft:spacesize*4+'px'}">&#125;, 1000);</div>
        <div :style="{paddingLeft:spacesize*3+'px'}">&#125;);</div>
        <div :style="{paddingLeft:spacesize*2+'px'}">&#125;</div>
        <div :style="{paddingLeft:spacesize*1+'px'}">&#125;);</div>
        <div :style="{paddingLeft:spacesize*0+'px'}">}</div>let myOwnObj = createMyOwnObj();
        <br />
        <br />myOwnObj.hahaha.then(result => {
        <br />
        <div :style="{paddingLeft:spacesize*1+'px'}">
          console.log(result)
          <span class="code-notes">//你的hahaha运气不错，成功了</span>
        </div>&#125;).catch(error => {
        <br />
        <div :style="{paddingLeft:spacesize*1+'px'}">
          console.log(error)
          <span class="code-notes">//你的hahaha运气不行，失败了</span>
        </div>&#125;)
        <br />
        <br />myOwnObj.wuwuwu.then(result => {
        <br />
        <div :style="{paddingLeft:spacesize*1+'px'}">
          console.log(result)
          <span class="code-notes">//你的wuwuwu运气不错，成功了</span>
        </div>&#125;).catch(error => {
        <br />
        <div :style="{paddingLeft:spacesize*1+'px'}">
          console.log(error)
          <span class="code-notes">//你的wuwuwu运气不行，失败了</span>
        </div>&#125;)
        <br />
        
      </div>
    </div>

    <h3>十四、问：Promise是什么，有什么作用？</h3>
    <p>答： Promise是ES6引入的一个新的对象，他的主要作用是用来解决JS异步机制里，回调机制产生的“回调地狱”。它并不是什么突破性的API，只是封装了异步回调形式，使得异步回调可以写的更加优雅，可读性更高，而且可以链式调用。</p>
    <h3>十五、问：for...in 和for...of有什么区别？</h3>
    <p>
      答： 如果看到问题十六，那么就很好回答。问题十六提到了ES6统一了遍历标准，制定了可遍历对象，那么用什么方法去遍历呢？答案就是用for...of。ES6规定，有所部署了载了Iterator接口的对象(可遍历对象)都可以通过for...of去遍历，而for..in仅仅可以遍历对象。
      这也就意味着，数组也可以用for...of遍历，这极大地方便了数组的取值，且避免了很多程序用for..in去遍历数组的恶习。
      上面提到的扩展运算符本质上也就是for..of循环的一种实现。
    </p>
    <h3>十六、async函数是什么，有什么作用？</h3>
    <p>答： async函数可以理解为内置自动执行器的Generator函数语法糖，它配合ES6的Promise近乎完美的实现了异步编程解决方案。</p>
    <h3>十七、module、export、import是什么，有什么作用？</h3>

    <p>
      答： module、export、import是ES6用来统一前端模块化方案的设计思路和实现方案。export、import的出现统一了前端模块化的实现方案，整合规范了浏览器/服务端的模块化方法，用来取代传统的AMD/CMD、requireJS、seaJS、commondJS等等一系列前端模块不同的实现方案，使前端模块化更加统一规范，JS也能更加能实现大型的应用程序开发。
      import引入的模块是静态加载（编译阶段加载）而不是动态加载（运行时加载）。
      import引入export导出的接口值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
    </p>

    <h3>十八、日常前端代码开发中，有哪些值得用ES6去改进的编程优化或者规范？</h3>

    <p>
      答：
      1、常用箭头函数来取代var self = this;的做法。
      2、常用let取代var命令。
      3、常用数组/对象的结构赋值来命名变量，结构更清晰，语义更明确，可读性更好。
      4、在长字符串多变量组合场合，用模板字符串来取代字符串累加，能取得更好地效果和阅读体验。
      5、用Class类取代传统的构造函数，来生成实例化对象。
      6、在大型应用开发中，要保持module模块化开发思维，分清模块之间的关系，常用import、export方法。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spacesize: 40,
      questionData:[
          {code13:``},
          {code13:""},
          {code13:""}
          ]
    };
  }
};
</script>

<style lang="less">
.es {
  h2,
  h3,
  h4 {
    color: #333;
  }

  div.code {
    color: #00a08a;
  }
}
</style>