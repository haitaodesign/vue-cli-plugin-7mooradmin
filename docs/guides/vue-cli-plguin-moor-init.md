# 创建项目——vue-cli-plugin-moor-init

此模版插件依赖于vue-cli3.0插件系统，需要了解如何开发第三方插件，移步[插件开发指南](https://cli.vuejs.org/zh/dev-guide/plugin-dev.html#%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5)
> 请确保开发环境以及[安装](install.html)说明的操作正确，此安装操作在Mac上使用正常，Window上有待验证

## 创建一个项目

### vue create

第一步，运行以下命令来创建一个项目

```
vue create moor
```

运行上面命令之后，会被提示选取一个preset，选择如下：

![项目创建第一步](/create-project/create-project-one.png)

第二步，选择项目需要的功能，目前我们项目需要的功能截图如下：

![项目创建第二步](/create-project/create-project-two.png)

第三步，选择路由模式，这里我们不需要history模式，选择n：

![项目创建第三步](/create-project/create-project-three.png)

第四步，选择CSS预处理器，Stylus:

![项目创建第四步](/create-project/create-project-four.png)

第五步，选择ESLint标准规范，ESlint + Standard config

![项目创建第五步](/create-project/create-project-five.png)

第六步，选择lint触发检查的时机，这里选择保存文件触发lint检查

![项目创建第六步](/create-project/create-project-six.png)

第七步，选择讲配置文件放到单独的文件，选择`In dedicated config files`，不放在 `package.json`

![项目创建第七步](/create-project/create-project-seven.png)

第八步，是否讲以上选择保存为一个预置选项，这里选择`N`；如果选择`y`，将会保存之前做的项目选择，在下次创建的时候可一键生成。

![项目创建第八步](/create-project/create-project-eight.png)

第九步，选择功能完成，开始自动安装依赖

![项目创建第九步](/create-project/create-project-nine.png)

第十步，根据提示启动项目

![项目创建第十步](/create-project/create-project-ten.png)

## 安装模板初始化插件——vue-cli-plugin-moor-init
  插件根据业务进行的模板改造，安装此插件，可以快速启动符合业务的项目结构

  插件开发请查看仓库[vue-cli-plugin-moor-init](http://git.7moor.com/private-FE/vue-cli-plugin-moor-init)

  ```
  vue add moor-init
  ```

## 编译主题
element-ui的自定义主题需要全局安装主题工具进行编译，此步骤在创建项目时使用，开发业务时很少使用，详细使用步骤请[参考](http://element.eleme.io/#/zh-CN/component/custom-theme)

> 当前主题编译流程没有自动化编译，这里需要进一步讨论

```
et
```