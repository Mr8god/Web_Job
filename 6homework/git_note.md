# 作业

码云的提交记录..每个账号的

1 - 团队名单

2 - 提交记录



# Git

分布式的版本控制系统

~~~cmd
git --version
git version 2.20.1 (Apple Git-117)
~~~



# 本地操作

* 假设你在D盘根目录下新建的git_repo

  > 1. ctrl+r - 打开终端
  > 2. d:      - 在终端进入到d盘
  > 3. cd git_repo - 进入到git_repo中

* 推荐在桌面新建一个目录git_repo

  [该文件夹作为**本地git仓库**]

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git init
  Initialized empty Git repository in /Users/admin/Desktop/git_repo/.git/
  ~~~

  敲完命令之后,那么这个git_repo目录就成了本地仓库了.如何判断一个目录是否为git的本地仓库的目录呢

  判断的原则:就是观察这个目录中是否存在一个***隐藏的文件夹.git***

  普及 - 因为在linux或者mac - unix中凡是文件或者目录以.开头的都属于隐藏的.

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ ls -al
  total 0
  drwxr-xr-x   3 admin  staff   96 10 31 13:20 .
  drwx------+ 28 admin  staff  896 10 31 13:22 ..
  drwxr-xr-x   9 admin  staff  288 10 31 13:20 .git
  ~~~

* 在git_repo目录中新建一个文件hello.txt

  ***本地仓库状态改变 - 本地仓库发生了更新***

* **查看一下git的当前的本地仓库的状态** - 建议初学者多多使用

  当你不知道下一步该干嘛的时候,那么就多试试这个命令.

  ~~~java
  admindeMacBook-Pro:git_repo admin$ git status
  
  当前的改动是在master分支上改动的
  On branch master
  
  尚未有任何的提交
  No commits yet
  
  Untracked files:
    (use "git add <file>..." to include in what will be committed)
  
  	hello.txt
  
  nothing added to commit but untracked files present (use "git add" to track)
  ~~~

* 将工作区中的改变添加到暂存区中

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git add .
  ~~~

  想要知道add之后的结果.

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git status
  On branch master
  
  No commits yet
  
  Changes to be committed:
    (use "git rm --cached <file>..." to unstage)
  
  	new file:   hello.txt
  ~~~

* 将暂存区中的改变提交到版本库中

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git commit -m "新增了一个hello.txt文件"
  [master (root-commit) ec8fecb] 新增了一个hello.txt文件
   1 file changed, 0 insertions(+), 0 deletions(-)
   create mode 100644 hello.txt
  ~~~

  想要知道commit之后的效果

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git status
  On branch master
  nothing to commit, working tree clean
  ~~~

**[总结: 工作区的改变 -> add暂存区 -> commit到版本库]()**



# 分支

* 查看所有的分支 - 默认会分配一个分支master

  ~~~cmds
  admindeMacBook-Pro:git_repo admin$ git branch
  * master
  ~~~

  *对应的分支代表所有的改动都仅仅是在当前分支下进行的,**各个分支之间的内容是隔离的.**

  在远程的时候,任何普通的开发人员都不会直接在master分支下进行开发的.只有项目的管理员才有资格对master进行操作 - master分支下的内容应该是所有分支合并的最终的大结果.

* 创建分支

  git branch 分支名

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git branch
  * master
    test01
  ~~~

* 切换分支

  ~~~cmd
  admindeMacBook-Pro:git_repo admin$ git checkout test01
  Switched to branch 'test01'
  admindeMacBook-Pro:git_repo admin$ git branch
    master
  * test01
  ~~~

  操作 - 在test01分支下进行开发 - 修改了hello.txt - add - commit

  ~~~java
  admindeMacBook-Pro:git_repo admin$ git add .
  admindeMacBook-Pro:git_repo admin$ git commit -m "hello.txt update"
  [test01 f171499] hello.txt update
   1 file changed, 1 insertion(+), 1 deletion(-)
  ~~~

  来回切换test01和master - 观察文件的内容是否不一样.

  

## 分支的继承性

在哪个分支下新建另外一个新的分支,那么默认的新的分支会保留当前这个分支下所有的东西.



## 本地分支合并和分支冲突解决



# 远程仓库

* 组长操作 - 在码云上新建一个仓库
* all - 设置 - 公开邮箱
* 组长 - 管理 - 仓库成员管理 - 开发者 
  * 链接邀请
  * 直接添加

* 组员 - 查看邮箱 - 同意加入

* 组长创建远程分支 ss1 ss2 ss3

  > 在开发中 - 一个任务对应一个分支
  >
  > 学习中 - 一个人对应一个分支

* 组长将每个分支分配对应的组员

* 组长将远程仓库的链接给组员

* all - 终端定位d:

  克隆远程仓库到本地

  ~~~java
  git clone 仓库地址
  ~~~

  ~~~java
  cd gits_hello
  观察是否存在.git目录
  ~~~

* all - git branch

  只有master分支**,远程的分支和本地分支没有任何关系的.**

* all - 本地新建一个分支用于开发,分支的名称是随意的,推荐和远程的分支名一样

  ~~~java
  git branch ss1
  git checkout ss1
  ~~~

* 比如在属于自己的分支下进行开发,ss1

  success.txt

  ~~~java
  admindeMacBook-Pro:gits_hello admin$ git checkout ss1
  Switched to branch 'ss1'
  admindeMacBook-Pro:gits_hello admin$ git branch
    master
  * ss1
  admindeMacBook-Pro:gits_hello admin$ touch hello.txt
  admindeMacBook-Pro:gits_hello admin$ git add .
  admindeMacBook-Pro:gits_hello admin$ git commit -m "success"
  [ss1 6369672] success
   1 file changed, 0 insertions(+), 0 deletions(-)
   create mode 100644 hello.txt
  
  ~~~

* 将本地分支的开发推送到远程开发的对应的分支上;

  git push origin 本地分支名:远程分支名

  ~~~java
  admindeMacBook-Pro:gits_hello admin$ git push origin ss1:ss1
  Enumerating objects: 4, done.
  Counting objects: 100% (4/4), done.
  Delta compression using up to 8 threads
  Compressing objects: 100% (2/2), done.
  Writing objects: 100% (3/3), 298 bytes | 298.00 KiB/s, done.
  Total 3 (delta 0), reused 0 (delta 0)
  remote: Powered by GITEE.COM [GNK-5.0]
  To https://gitee.com/guancg/gits_hello.git
     c8451ae..6369672  ss1 -> ss1
  ~~~

  第一次push输入邮箱的.

  * 找到用户主目录 - .gitconfig - 换成码云注册的email

  * 通过命令的方式

    ~~~java
    git config --global user.name "bryan sun"
    git config --global user.email "hitsjt@gmail.com"
    ~~~

* all - 查看远程仓库中属于自己的分支中是否能够看到刚刚提交的内容

* 组员如果有任务提交 - 需要拉取pr

* 组长 - 观察pull requests 消息

* 第二天 - 拉取master分支中的所有内容到本地

  ~~~java
  admindeMacBook-Pro:gits_hello admin$ git branch
    master
  * ss1
  admindeMacBook-Pro:gits_hello admin$ git pull origin master
  remote: Enumerating objects: 1, done.
  remote: Counting objects: 100% (1/1), done.
  remote: Total 1 (delta 0), reused 0 (delta 0), pack-reused 
  Unpacking objects: 100% (1/1), done.
  From https://gitee.com/guancg/gits_hello
   * branch            master     -> FETCH_HEAD
     c8451ae..9862035  master     -> origin/master
  Updating 6369672..9862035
  Fast-forward
  ~~~

  



































