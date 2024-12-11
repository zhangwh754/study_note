## 高级

### Head

- 除了分支，`checkout` 命令可以直接切换到指定的提交 hash 值。
  - 某些 Git 版本支持使用 `switch` 切换到提交，但主要用法是切换分支。  

- 如果手动切换到提交，`HEAD` 会指向该提交，而不是分支，此时会进入“HEAD 分离”状态。  
- 比起直接使用 hash 值，`^` 可以表示上一次提交，`~num` 可以表示前多少次提交，不写数字 `~` 等价于 `^` 。例如：`^` 等价于 `~1`，`^^` 等价于 `~2`。  

```git
# 使用 checkout 切换到提交，HEAD 会指向 hash
git checkout [hash]

# 回退一次
git checkout HEAD^

# 回退 4 次
git checkout HEAD~4
```

### 强制切换分支

```git
# 强制移动main分支到指定提交
git branch -f main [hash]
```

### reset和revert

- `reset` 和 `revert` 的使用场景有所不同：
  - `reset` 通常用于本地提交的回退和修改，适合在推送前清理提交记录。
  - `revert` 用于在协作场景中撤销已经推送的提交，同时不会修改提交历史。

- `reset` 的行为依赖于模式：
  - `--soft` 模式会将提交的内容保留在暂存区。
  - `--mixed` 模式（默认）会将提交的内容移到工作区。
  - `--hard` 模式会丢弃提交的内容和历史。

- `revert` 则会生成一个新的提交，用于撤销指定的提交。

```git
# 重置到前两次提交，默认行为（--mixed）会保留工作区修改
git reset --mixed main~2

# 撤销 main~2 提交的更改，生成一个新的提交
git revert main~2
```
