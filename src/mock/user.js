import Mock from 'mockjs'
import { param2Obj } from '@/utils'
const List = []
const count = 100
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@id',
    code: '@cname',
    name: '@cname',
    updateUser: '@cname',
    updateTime: +Mock.Random.date('T'),
    'generateRule|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    timestamp: +Mock.Random.date('T'),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }))
}
export default {
  getList: config => {
    const { importance, type, title, page = 1, size = 10, sort } = param2Obj(config.url)
    let mockList = List.filter(item => {
      if (importance && item.importance !== +importance) return false
      if (type && item.type !== type) return false
      if (title && item.title.indexOf(title) < 0) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    const pageList = mockList.filter((item, index) => index < size * page && index >= size * (page - 1))
    return {
      total: mockList.length,
      items: pageList
    }
  },
  editInfo: config => {
    return {
      id: '219839018301',
      username: 'admin',
      name: 'super',
      groupId: 1,
      groupName: '管理组',
      state: 1
    }
  },
  add: config => {
    const { body } = config
    console.log(body)
    return body
  },
  update: config => {
    return true
  },
  delete: config => {
    return true
  },
  exist: config => {
    const { username } = param2Obj(config.url)
    const item = List.filter(item => {
      return item.name === username
    })
    return item.length > 0
  }
}
