import Mock from 'mockjs'
import loginAPI from './login'
import userAPI from './user'

// Mock.setup({
//   timeout: '350-600'
// })

// 登录相关
Mock.mock(/\/login\/login/, 'post', loginAPI.loginByUsername)
Mock.mock(/\/login\/logout/, 'post', loginAPI.logout)
Mock.mock(/\/user\/info\.*/, 'get', loginAPI.getUserInfo)
Mock.mock(/\/admin\/api\/sysUser/, 'get', userAPI.getList)
// Mock.mock(/\/admin\/api\/sysUser\.*/, 'put', userAPI.update)
// Mock.mock(/\/admin\/api\/sysUser\.*/, 'post', userAPI.add)
Mock.mock(/\user\/exist/, 'get', userAPI.exist)
Mock.mock(/\user\/add/, 'post', userAPI.add)
Mock.mock(/\user\/editInfo/, 'get', userAPI.editInfo)
Mock.mock(/\user\/update/, 'put', userAPI.update)
Mock.mock(/\user\/delete/, 'delete', userAPI.delete)
// Mock.mock(/\/admin\/api\/sysUser\.*/, 'delete', userAPI.delee)

export default Mock
