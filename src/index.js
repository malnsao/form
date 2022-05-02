import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import From, { Field } from './rc-field-form'

let uniqueUsername = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === '123') {
        resolve('重复')
      } else {
        resolve('')
      }
    }, 3000)

  })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <From
    initialValues={{ username: '', password: '' }}
    onFinish={
      values => {
        console.log('成功', values)
      }
    }
    onFinishFailed={
      (errorInfo) => {
        console.log('失败', errorInfo)
      }
    }
  >
    <Field name='username' rules={[{ required: true, min: 3, max: 6 }, { validate: uniqueUsername }]}>
      <input placeholder='用户名' />
    </Field>
    <Field name='password' rules={[{ required: true }]}>
      <input placeholder='密码' />
    </Field>
    <button htmltype='submit'>提交</button>
  </From >
);


