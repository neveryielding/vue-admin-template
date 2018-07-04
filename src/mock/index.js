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
Mock.mock(/\/admin\/api\/sysUser\.*/, 'get', userAPI.getList)

export default Mock
