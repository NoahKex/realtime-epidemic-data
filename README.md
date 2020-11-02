# 基于Echarts的疫情实时数据可视化平台
+ 使用Vue.js完成对新型冠状病毒肺炎疫情实时数据平台的简单实践
+ 使用Echarts实现数据的可视化
+ 使用node.js进行疫情数据爬取

项目演示：[新冠疫情实时数据](http://47.100.36.240:8080/)

## 项目功能
(2020.11.02更新)
+ 展示疫情实时全球数据
+ 展示国内疫情数据
+ 国内疫情地图可视化
+ 各省市区数据详情
+ 展示国外疫情数据
+ 国外疫情各指标严重程度排行可视化
+ 疫情严重国家数据详情

## 目录结构
```
|-- node_modules                     // 项目所需依赖包
|   |-- ..........                   // 依赖文件
|-- public                           // 静态资源，打包不进行处理
|   |-- favicon.ico                  // 网页图标
|   |-- index.html                   // 入口页面
|-- src                              // 源码目录
|   |-- assets                       // 放置图片、文字等静态文件
|   |-- components                   // vue公共组件
|   |   |-- Aside.vue                // 侧边栏
|   |   |-- Footer.vue               // 页脚
|   |   |-- Header.vue               // 导航栏
|   |-- less                         // 公共less预处理文件
|   |-- router                       // vue的路由管理
|   |-- service                      // 网络请求管理
|   |   |-- api.js                   // 封装axios请求
|   |   |-- dataService              
|   |   |   |-- dataService.js       // 疫情数据API管理
|   |-- views                        // vue路由组件
|   |   |-- components               // 路由组件公用组件
|   |   |   |-- AreaBox.vue          // 地区数据栏
|   |   |   |-- TotalBox.vue         // 总体数据栏
|   |   |-- DomesticData.vue         // 国内总体数据页面
|   |   |-- DomesticDetails.vue      // 国内详情数据页面
|   |   |-- ForeignData.vue          // 国外总体数据页面
|   |   |-- ForeignDetails.vue       // 国外详情数据页面
|   |   |-- GlobalData.vue           // 全球数据页面
|   |-- App.vue                      // 页面入口文件
|   |-- main.js                      // 程序入口文件
|-- .browserslistrc                  // 配置兼容设置
|-- .gitignore                       // git上传需要忽略的文件格式
|-- README.md                        // 项目说明
|-- package.json                     // 项目基本信息,包依赖信息等
|-- babel.config.js                  // babel配置文件
|-- vue.config.js                    // 自定义vue配置文件
|-- yarn.lock                        // 包依赖管理
```

## 快速使用

+ clone项目：
  ```
  git clone https://github.com/NoahKex/realtime-epidemic-data.git
  ```
+ 安装依赖：
  ```
  cd realtime-epidemic-data && yarn install
  ```
+ 运行项目：
  ```
  yarn serve
  ```
+ 打包项目：
  ```
  yarn build
  ```
