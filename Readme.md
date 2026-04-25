# 前端学习
## 安装nvm

npm 国内加速
```
npm config set registry https://registry.npmmirror.com
```
安装node版本
```
nvm install 22.12
nvm use 22.12
-- 
nvm alias default 22.12
nvm use default
```
## 初始化项目
```
npm init
npm install react react-dom
npm install vite -D
```
add {"dev": "vite"} to scripts in package.json

new index.html

new index.js

本地运行: npm run dev

enable jsx 

npm install @vitejs/plugin-react

## ES6
### 模块化
通过以下方式，启用
```
<script type="module" src="/index.js"></script>
```

Module 可以理解为其它编程语言的Package or Namespace.

`export` and `import` 就够用了。

## React
### Component

## JS知识
### Object
Object in Browser Environment

`window`

`window.document` is gateway to DOM (Document Object Model)

### Function
function is object in JS, so we can do everything with it that object support.
## TailwindCSS
[Installing Tailwind CSS as a Vite plugin](https://tailwindcss.com/docs/installation/using-vite)