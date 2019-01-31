/*
 * @Author: lihaitao
 * @Date: 2018-12-19 10:54:03
 * @Last Modified by: lihaitao
 * @Last Modified time: 2019-01-18 14:13:39
 * @description 系统级别的数据mock, 如：菜单列表，个人信息
 */

const menuList = [{
  _id: 1,
  parent_id: 0,
  name: '首页',
  path: '/home',
  icon: 'el-icon-circle-plus'
},
// {
//   _id: 3,
//   parent_id: 0,
//   name: '图表',
//   path: '/charts',
//   icon: 'el-icon-news',
//   children: [{
//     _id: 31,
//     parent_id: 3,
//     name: '折线图',
//     path: '/charts/moorline',
//     icon: 'el-icon-date'
//   }]
// },
{
  _id: 4,
  parent_id: 0,
  name: '应用管理',
  path: '/application',
  icon: 'el-icon-circle-plus'
},
{
  _id: 2,
  parent_id: 0,
  name: '员工管理',
  path: '/staff',
  icon: 'el-icon-circle-plus'
},
{
  _id: 5,
  parent_id: 0,
  name: '个人设置',
  path: '/setting',
  icon: 'el-icon-circle-plus'
}]
export default {
  menuList: () => {
    return menuList
  }
}
