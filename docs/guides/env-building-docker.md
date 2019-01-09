# 开发环境搭建（docker）

## 在Window和Mac中使用Docker

Docker官方对两个系统提供了强有力的支持，因此我们可以非常容易的在这两个系统中允许Docker

## 安装Docker Desktop

对于系统以及硬件还是有一定的要求，由于开发者的机器都是比较新的，所以可以忽略，这里简要说明一下：

1. Windows系统：

* 必须使用 Windows 10 Pro ( 专业版 )
* 必须使用 64 bit 版本的 Windows

下载地址：[Docker fro Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)

2. macOS系统：

* Mac 硬件必须为 2010 年以后的型号
* 必须使用 macOS El Capitan 10.11 及以后的版本

下载地址：[Docker fro Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac)

> 具体的安装方式跟一般的软件安装流程一样，这里不再赘述
> 安装成功之后启动时，会有一只大鲸鱼的集装箱闪动

输入以下命令查看Docker客户端信息：

```js
docker version
```

## Dockerfile构建开发环境镜像

第一步，克隆前端开发环境Dockerfile仓库：[Dockerfile](https://git.7moor.com/private-FE/docker)

第二步，当前仓库目录输入一下命令构建docker镜像

```js
docker build -t fedevdocker .
```
> fedevdocker是镜像的名称，可以改其他的，这里不做限制

第三步，启动容器

```js
docker run -it -p 8081:8081 -v /Users/lihaitao/Desktop/vue-cli3.0:/workspace fedevdocker sh
```
-it：`-t`让docker分配一个伪终端并绑定到容器的标准输入上, `-i`则让容器的标准输入保持打开

-v：-v 映射宿主环境目录到容器工作目录，`/Users/lihaitao/Desktop/vue-cli3.0`是本地宿主环境目录，`/workspace`为容器工作目录

`fedevdocker`为镜像名称

`sh`是1以shell命令行的形式打开

## 基础学习资料

[Docker 从入门到实践](https://yeasy.gitbooks.io/docker_practice/content/)

[Docker 入门教程——阮一峰](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)