# 通过在线游戏学 git

## 前言

本人对 git 的了解不深，对于 rebese 和 cherry pick 等操作比较摸不着头脑，所以决心重学 git

## 基础

commit、branch、merge 是 git 的基础

### commit

commit 即提交

1. 提交一次代码即一次对项目的快照
2. 一次提交会把当前版本和上一个版本进行对比，并把所有差异打包在一起作为一次提交记录
3. 每次提交的上一次即本次提交的 parent 父级，父级是提交变更的基础

```bash
git commit -m "some message want record"
```

### branch

branch 分支比 commit 更简单，branch 只做了一件事-指向某个提交记录。

创建一个分支及代表，我想基于这个提交以及所有他的 parent 来进行新的工作。

```bash
# 创建分支
git branch "branchName"

# 切换分支1
git switch "branchName"

# 创建并切换1
git switch -c "branchName"# 切换分支1

# 切换分支2
git checkout "branchName"

# 创建并切换2
git checkout -b "branchName"
```

### merge

merge 是`把两个 branch 合并`的指令，因为 2 个 branch 有两个 parent（和他们的全部 parent 节点），所以合并时会额外产生一条记录

![](http://116.198.244.73:9000/images/20241203230909.png)

### rebease-变基

- rebease实际是取出一个分支一系列的提交记录，复制这些记录，并在另一个分支逐个放下
- rebease可以让提交历史成为一条线

使用变基不同于merge,不会新创建一条记录。

1. 在A分支使用rebease B，会把A的提交复制到B
2. rebase后不会修改B分支，需要在B分支上再merge A
3. rebase新创建的c2' c6' c7'是新的提交，和原始的分支的提交的hash值不同
4. 变基后，test分支的变基前历史会被隐藏，其提交不再有分支指向，需要用reflog创建一个新分支指向回去

![](http://116.198.244.73:9000/images/20241210221916.png)

