# javascript

* html - 表现
* css - 样式
* 学习UI框架 - bootstrap或者layui或者elementui
* js编程 - jquery框架[淘汰] - vue框架 - nodejs[前端的服务器端语言] - 行为



# js代码写在哪里

* 放在body的底部
* ***内部js代码***
  * ***js代码和html代码在同一个文件中,都是在.html文件中***

* js代码的执行顺序是从上到下去执行的
* 原则 - 优先显示网页中的内容,其次才是执行js代码.



## 引入外部js

***软件的开发的原则思想 -  高内聚,低耦合.***

html和css以及js三个文件不要彼此耦合,进行外部的分离.

外部js文件或者外部css文件的命名推荐和当前的html文件的名称应该是要保持一致的.



# js基础语法

js是属于解释型语言 - 直接在浏览器端[客户端]的浏览器中的js的解析引擎直接对js的代码直接进行解释,得到响应的结果.

js是属于弱类型的语言,在编写代码的时候,它是那没有确定数据的类型,直到在js解析引擎[运行期间]才会确定某个变量的数据类型

~~~java
//java
int age = 20;//ok
int age2 = "20";//error
~~~



## 三种输出方式

* alert("弹出框");

  ~~~js
  window.alert("==");//window是js中一个高级的对象 - 可以省略
  ~~~

* console.log("控制台日志输出")
* document.write("输出内容到网页");//才能够识别出html标签



前俩个通常是由程序进行普通的一个js程序的debug操作 - 调试我们的代码.

原因:如果js部分的代码如果某一行出现任何问题,下面的代码都不会执行.



## 数据类型

~~~js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据类型</title>
</head>
<body>
    <script>
        //js是基于对象的语言
        //java是面向对象的语言 - 多态 - 封装性

        //如何定义一个变量
        //在es6语法之前,使用var来定义一个变量
        //在es6语法开始,推荐使用let关键字来定义变量
        //关键字 - 这个单词已经被这个语言赋予了一定的含义
        //变量的命名不能使用js中的关键字.
        
        //js是一门弱类型的语言
        //变量的命名是有规则的
        //1. 不能使用关键字
        //2. 见名知意
        //3. 如果变量涉及到多个单词的话,推荐使用匈牙利的命名方式
        //   student_age - java->小驼峰命名规则 -> studentAge
        //4. 中文拼音

        //变量是什么??? - 内存中某块具体区域的别名
        //当js文件被浏览器加载到内存的时候,每个内容都是需要占用内存中的空间
        //17这个数字就乖乖在内存中躺着 - 位置
        //位置取了个名字 - age

        //let 变量 [=初始值];

        let age = 17;
        console.log(age);

        //使用一个js中内置的函数 - 封装好了的,直接调用
        //typeof(变量)
        console.log(typeof(age));//查看变量的数据类型 - number
        //java - 数字 - byte short int long

        //定义一个字符串
        //js字符串可以使用单引号,也可以使用双引号.
        let name = 'tom';
        console.log(name);
        console.log(typeof(name));//string

        //定义一个布尔类型 - 只能赋予俩个值 - true/false
        let flag = true;
        console.log(flag);
        console.log(typeof(flag));//boolean

        //此处仅仅是定义了一个变量,没有初始化(没有赋值,没有定义)
        let weight;
        console.log(weight);
        console.log(typeof(weight));//undefined - 未定义

        //从变量到数组 - 业务的发展
        //数组
        let arr = [1,2,3];
        console.log(arr);
        console.log(typeof(arr));//object - 对象类型

        //null
        //内存模型
        // s -> ''
        //let s = '';

        // s并没有指向任何的空间
        //let s = null;

        //mockjs语法
        //easymock平台

        //整个对象类型中 - 最重要的对象 - json对象
        //前端程序员和后端程序开发中需要共同遵守的格式.
        let json_obj = {"id":100,"name":"tom"};
        //{key:value,key2:value2}
        //通过json对象的key来获取json对象的值
        //json对象的变量.key获取值
        console.log(json_obj.id);
        console.log(json_obj.name);

    </script>
</body>
</html>
~~~



## 条件分支

~~~js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>条件分支语句</title>
</head>
<body>
    <script>
        let age = 17;
        //if语句可以单独使用
        // if(age>=18){//条件是成立的.那么才会执行{}
        //     console.log("啥都不能干!");
        // }

        //如果if块中的代码只有一行,块{}可以省略不写
        
        //if语句和else语句一起使用
        //cv大法...

        //码畜 - 码农 - 码头 - 码云...

        if(age>=18){//条件是成立的.那么才会执行{}
            console.log("啥都不能干!");
        }else{
            console.log("啥都可以干!");
        }

        //条件分支的语法
        //if...else if...else if .. else
        //注意条件要互斥..
        
        // let score = 98;
        // if(score>=90){

        // }else if(score>=80){

        // }else if(score>=70){
            
        // }else{

        // }

        //买奶茶 - 单价 - 杯数
        let price = 10;
        let cup = 5;
        //活动 - 每第二杯半价,算出总价

        //4 - 10 5 10 5 = 30
        //5 - 10 5 10 5 10

    </script>
</body>
</html>
~~~

## 函数和循环语句

~~~js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>循环语句</title>
</head>
<body>
    <script>
        //for while 

        //break语句和continue语句

        // function 函数名{
        //     //函数体
        // }
        
        //闭包...
        //js对象 - js设计原则...
        
        //函数是为了用来封装代码的 - 为了提高代码的复用性 - 可维护性

        //没有返回值的函数
        function add(a,b){//形参 - 告诉函数的调用者调用函数需要传入的参数...
            //在函数体中直接处理我们的业务
            //直接输出..bundleRenderer.renderToStream
            console.log(a+b);
        }

        add(10,20);

        //带有返回值的函数
        //函数体中存在return 结果;
        //注意:只要函数执行到return语句,那么这个函数体中的代码将不会继续向下执行了..
        function test(a,b){
            return a+b;//1. 给函数返回一个结果出去
                        //2. 用来结束整个函数
        
        }

        //因为函数带有返回值,所以在调用函数的时候,应该使用一个变量去存在这个函数调用完的结果
        let result = test(100,200);
        console.log(result);

        //es6 - > 箭头函数...

        //在页面上输出九九乘法表 -> 前提是不允许使用俩个for
        //定义一个函数
        function nine(n){//n代表行数
            //定义一个变量
            let str = "";
            
            //for循环 - for循环的复合形态.
            //i代表行,j代表列...
            for(let i=1,j=1;i<=n;j++){
                //循环体
                str+=(i+"*"+j+"="+i*j+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
                if(i==j){
                    str+="<br>";
                    i++;
                    j=0;
                }
            }
            //输出到页面
            document.write(str);
        }
        nine(9);
    </script>
</body>
</html>
~~~



# 作业

* if..else..

  ~~~js
  //买奶茶 - 单价 - 杯数
  let price = 10;
  let cup = 5;
  //活动 - 每第二杯半价,算出总价
  
  //4 - 10 5 10 5 = 30
  //5 - 10 5 10 5 10
  ~~~



# js操作dom

dom - document object model - 文档对象模型.

这是一个后台程序员必须要掌握的知识.

# js创建dom对象

~~~html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table,td{
            border: 1px solid red;
        }

        td{
            height: 25px;
            width: 100px;
        }
    </style>
</head>
<body>
    <button type="button" onclick="test()">添加一行</button>

    <div id="outer">
        <table>
            <tbody id="content">
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
         </tbody>
        </table>
    </div>

    <script>
        function test(){//单击按钮触发的单击事件
            //1. 获取tbody对象
            let tbody = document.getElementById("content");

            //2. 创建tr标签 - 返回出刚刚创建出来的标签
            let tr = document.createElement("tr");

            //3. 创建俩个td对象
            for(let i=0;i<2;i++){
                let td = document.createElement("td");
                 //单元格td是要绑定到tr上
                 tr.appendChild(td);
            }
            //3. 将刚刚创建出来的tr绑定到tbody中
            tbody.appendChild(tr);
        }
    </script>
</body>
</html>
~~~



## js获取dom对象

* ***可以根据标签的id来获取 - id是唯一的.根据id来获取的对象肯定是一个单个对象***.
* 可以根据标签的name属性的值来获取 - 由于name属性的值可能是重复的,所以返回的是一个数组对象
* 可以根据标签的class属性的值来获取 - 由于class属性的值可能也是重复的,所以返回的也是一个数组对象
* 可以根据标签的名称来获取 - 由于html文件中可能存在多个标签 - 返回的也是一个数组对象.

~~~js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 如果出现了id属性 - 这个值必须要保证唯一的 -->
    <input type="text" name="uname" id="username" value="admin">

    <!-- name属性值是允许重复的 -->
    <input type="text" class="c1" name="uname" id="username2" value="jack">

    <input type="text" class="c1" name="uname" id="username3" value="tom">

    <hr></hr>

    <a href="http://www.baidu1.com">百度一下</a>
    <a href="http://www.baidu2.com">百度二下</a>
    <a href="http://www.baidu3.com">百度三下</a>

    <script>
        //1 - 根据id获取单个对象
        let username_input = document.getElementById("username");
        console.log(username_input);

        //通过对象.属性进行获取
        console.log(username_input.value);

        //js重新设置对象的属性
        username_input.value = "james";

        console.log("----华丽丽的分割线---");


        //2 -  根据标签的name属性的值来返回一个数组对象
        let uname_arr = document.getElementsByName("uname");
        //数组拥有属性 - 获取数组的长度
        console.log(uname_arr.length);

        //数组中的具体的元素是可以通过下标进行获取的
        //数组的下标的范围是从[0,数组长度-1]
        //数组对象[下标]
        //比如:从数组uname_arr中获取第二个input
        let uname_arr_second = uname_arr[1];
        //只有单个对象才能调用单个对象中的属性
        console.log(uname_arr_second.value);

        //3 - 通过class属性的值去获取数组对象
        let c1_arr = document.getElementsByClassName("c1");//数组对象
        console.log(c1_arr.length);//2

        //比如取出第一个input
        //支持链式写法
        console.log(c1_arr[0].value);

        //直接根据标签的名称来获取 - 返回的也是一个数组对象
        let a_arr = document.getElementsByTagName("a");
        console.log(a_arr.length);//3

        //获取第三个a标签中的href属性
        console.log(a_arr[2].href)

    </script>
</body>
</html>
~~~



## js操作对象的属性

* js可以获取对象的属性
* js可以设置对象的属性



# innerText和innerHTML

这是俩个比较重要的属性.可以通过js代码来获取来设置这俩个属性.

~~~js
<div id="outer">
        <h3>三级标题</h3>
    </div>
    <script>
        //获取div对象
        let div = document.getElementById("outer");

        //对象.属性
        console.log(div.innerText);//获取的是内部的纯文本的内容

        console.log(div.innerHTML);//获取的就是内部的所有的内容

        //设置
        div.innerHTML = "<h1>一级标题</h1>"
    </script>
~~~

## 获取dom元素位置

* 上一个previousElementSibling
* 下一个nextElementSibling
* 父节点pareElement



# 复习题

切换图片

# 综合题















