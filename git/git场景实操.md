## git 场景实操

根据实际场景，操作 git

### 快速修改上次的提交

A 提交提交了文件 A，此时发现少提交了文件 B

```
# 把文件B添加到暂存区
git add B

# 使用amend
git commit --amend

# 修改vscode弹出的修改message的文件
# 此时编辑器会新生成一次提交，覆盖掉上一次提交，内容是提交的A和B，信息是刚才弹出的窗口中填写message
```

### 只取修复的提交

main 分支发生了 bug，从 main 分支拉取了一条 bugFix 分支，依次提交了 a、b、c 三次提交

a 提交是打断点、b 提交是修改环境、c 提交是实际修复问题

此时我不希望合并分支是不要把 a、b 合入主分支

```git
git switch main

git cherry-pick c
```

### 如何通过 Git 调整提交历史并修改早期提交？

场景：

1. 从 main 分支新建 feature/images 分支
2. 现在 feature/images 分支下做了 A、B 两次提交，A 的修改是图片大小、分辨率，B 是图片操作功能，但两者的逻辑顺序存在关联，因此直接修改 A 会影响到 B。
3. 现在需要修改 A 的大小、分辨率，但是 A 分支在 B 分支之前
4. 可以通过 rebase -i 交换，并用 amend 修改后，重新交换回去即可实现需求

```
# 在可视界面交换要修改的历史提交到最下方
git rebase -i HEAD~2

# 用amend修改当前最近一次提交
git commit --amend

# 交换回来
git rebase -i HEAD~2

# 主分支合并修改后的当前分支
git checkout main
git merge feature/images
```

缺点：如果 feature/images 分支已经推送远程，这样做会和远程冲突，不合适。

### 使用cherry-pick而不是rebase来调整提交历史

场景同上

commit hash: a1 => a2 => a3(*)

```git
# 回到前2次提交
git checkout a1

# 把下一次a2提交进行cherry-pick
git cherry-pick a2

# 修改a2提交的内容
git commit --amend

# 再把a3提交进行cherry-pick
git cherry-pick a3
```

