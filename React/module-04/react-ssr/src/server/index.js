import app from './http';
import renderer from './renderer'
import createStore from './createStore';
import routes from '../share/routes'
import { matchRoutes } from 'react-router-config'

app.get('*', (req, res) => {
  const store = createStore()
  // 1. 请求地址
  // 2. 获取到路由配置信息 routes
  // 3. 根据请求地址匹配出要渲染的组件的路由对象信息
  const promises = matchRoutes(routes, req.path).map(({ route }) => {
    if (route.loadData) {
      return route.loadData(store) // 获取数据
    };
  })

  Promise.all(promises).then( () => {
    // 获取数据完成
    res.send(renderer(req, store))
  });

});