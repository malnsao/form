# form

antdesign4-form 表单实现

create-react-app
npm i react-app-rewired customize-cra babel-plugin-import less less-loader

思路
1、渲染表单组件
2、初始化表单、提交按钮
3、注册全局 FieldContext， 使用 useForm 解构 formInstance
4、useForm 包含 FormStore 仓库
5、FormStore 类
--store 表单值对象
--getForm 方法暴露内部方法
--setFieldsValue 设置所有属性的值
--getFieldValue 获取某个属性值
--setCallback 设置回调函数
--onSubmit 提交表单
--forceRootRender 重新渲染
--setInitialValues 初始值

6、双向数据绑定
7、校验
