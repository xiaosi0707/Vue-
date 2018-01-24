# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build



#在Vue-cli中如何使用ElementUI？


方式一（完整引入）：


  1、cnpm install element-ui --save  // 安装element-ui

  2、在main.js中写入：
  
    import ElementUI from 'element-ui'
    
    import 'element-ui/lib/theme-chalk/index.css'
    
    Vue.use(ElementUI)

  3、在vue组件中即可使用




方式二（按需引入）：


  1、npm install babel-plugin-component --save  // 安装babel-plugin-component

  2、将 .babelrc 修改为：
    {
      "presets": [
        ["es2015", { "modules": false }]
      ],
      "plugins": [["component", [
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }
      ]]]
    }

  3、在main.js中写入：
  
     import { Tabs, TabPane } from 'element-ui'
     
     import 'element-ui/lib/theme-chalk/index.css'
     
     Vue.use(Tabs)
     
     Vue.use(TabPane)

  4、在vue组件中即可使用


