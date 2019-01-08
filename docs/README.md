# 前端基础设施建设

从下五个方面讨论：
- 基础项目模板
- 业务组件
- cli工具
- 规范
- 技术调研

## 基础设施支撑
1. npm私有库建设方案（目前公司有，没有人使用）
2. Github组织创建

## 基础模板架构
1. 构建工具：webpack, vue-cli3.0
2. 前端框架：Vue,Vue-Router,Vuex
3. CSS预处理：stylus,stylus-loader,stylus-resources-loader
4. 组件库：element-ui,element-theme,elment-theme-chalk,babel-plugin-component(按需引入组件)
5. 第三方库：axios,normalize.css,echarts,v-charts,qs,lodash,mockjs
6. 代码规范检测：eslint,eslint-plugin-vue
7. markdown文档静态站点生成：vuepress
8. 集成docker,gitlab-ci(未集成)
9. 多npm包管理解决方案（未集成）——lerna
10. Git工作流规范(未完成)
11. 单元测试，e2e测试

> 基础项目的模板完善（通过Vue-cli3.0插件开发，一键初始化模板，减少重复）
> 整理基础设置架构图

### vue-cli3.0插件
1. @vue/cli-plugin-babel
2. @vue/cli-plugin-eslint
3. @vue/cli-service
4. @vue/eslint-config-standard
5. vue-cli-plugin-element
6. vue-cli-plugin-style-resources-loader

> 1～4是vue-cli3.0内置插件，5，6是第三方插件

## 业务组件
1. 登录
2. 布局方案（已完成一个方案）
3. 权限管理 
4. 消息通知
5. 异常页面
6. 其他......陆续集成常用的

> 根据业务进行提炼总结

## cli工具
1. 模板初始化
2. 创建页面(如何快速开始一个页面的开发)
3. 创建组件（业务组件依赖与可发布npm包的独立组件）
4. 部署（基于docker）

> 通过工具自动化工作流，提供交付效率

## 规范
1. HTML,CSS,JS（Vue代码风格）
2. 命名
3. 注释
4. git工作流
5. 文档规范（markdown中文文档书写规范）
6. 开发，部署流程

> 规范方面的东西比较多，刚开始可能会很不习惯，熟悉了之后会觉得很爽的
## 技术调研
关注新技术发展，以及实际应用落地，扩展团队的技术栈
1. 团队周刊（weekly）
2. 博客

> 这个事情是需要长期实践，沉淀，大家共同参与，分工合作

## 目前的进度
1. 前端技术栈基本选型确定
2. 基础开发模板完成