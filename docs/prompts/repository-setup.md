# 此库建立提示词

- 基本都是使用cursor + claude 4 完成

## 提示语

```
我要打造一个一个用于 ai 开发学习分享平台的仓库，后续用来自行分享以及接受别人的pr以及issues。

目前有基础的目录结构，让我们继续工作吧。

需要完善figma.md的文档，你可以使用context7去帮忙完成。
其他的md也帮忙完善一下，比如排版

需要定制好github pr issues的格式

基于这些markdown做成一个可以基于vercel部署成可读性网站

如有必要的话，请使用pnpm管理包

让我们先完成这些吧
```

- 这里运行有一个错误

```
(选中错误提示cmd+l) 运行中的错误帮修复一下
```

```
网站上错误的github仓库链接你可以读取一下仓库里的远程地址然后替换。

其他缺失的页面需要完成，我们需要完成自动化，比如有新的文档，我们无需改动其他页面代码，直接重新打包后自动化能处理，类似于网站md阅读器？目前应该有成熟的方案，你帮安排一下

如果网站目录结构觉得可以优化的话你可以帮忙调整一下，比如md应该放在docs目录下？如果涉及到其他文档内容的话，记得同步更新
```

```
让我们完善about页面，如果没有必要也可以移除，网站tab上的icon也搞一个？
然后我们先push代码到origin
```

```
啊 我们竟然没有没有完善git忽略文件。
现在产生了新的问题在运行时，让我们修复完成再提交push
```

```
Previous build caches not available
Cloning completed: 353.000ms
Running "vercel build"
Vercel CLI 43.3.0
Error: Function Runtimes must have a valid version, for example `now-php@1.0.0`.
现在vercel部署时遇到一个错误，需要修复，如有必要你可以去context7查资料
对了，还有一个小问题，页脚的年份是错的（© 2024 AI 开发学习分享平台），我们换成动态完成？
```
