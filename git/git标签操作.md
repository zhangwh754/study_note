## git其他操作

### git tag

标签对比分支

- **标签（Tag）**：通常用于标记版本，不参与日常开发流程，适合用来记录发布版本。 

- **分支（Branch）**：用于并行开发，适合多人协作和功能开发，支持更复杂的工作流。

```git
git tag [tagName] [commitHash]
```

### git describe

git describe 是配合tag使用的git命令，用于获取最近的一次tag的标记，距离这次tag的提交次数，指定describe的hash值

`git describe` 的语法是：

```
git describe <ref>
```

`<ref>` 可以是任何能被 Git 识别成提交记录的引用，如果你没有指定的话，Git 会使用你目前所在的位置（`HEAD`）。

它输出的结果是这样的：

```
<tag>_<numCommits>_g<hash>
```

`tag` 表示的是离 `ref` 最近的标签， `numCommits` 是表示这个 `ref` 与 `tag` 相差有多少个提交记录， `hash` 表示的是你所给定的 `ref` 所表示的提交记录哈希值的前几位。

当 `ref` 提交记录上有某个标签时，则只输出标签名称