import React from 'react'
import Loadable from 'react-loadable'
import { Spin, Icon } from 'antd'
import '../style/index.less'
//loadable是一个高阶组件
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />
const loadingComponent = ()=>{
  return(
    <div className="loading"><Spin indicator={antIcon} /></div>
  )
}

//第一个参数是被懒加载的对象  第二个是过场的内容,没有传便是用默认
export default (loader,loading = loadingComponent)=>{
  return Loadable({
    loader,
    loading
  })
}

//此处传入的应该是懒加载对象的绝对路径
// export default (path,loading=loadingComponent)=>{
//   return Loadable({
//     loader:()=>import(path),
//     loading
//   })
// }
