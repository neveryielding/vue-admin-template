<template>
  <scroll-bar class="scroll-bar">
    <div class="logo-layout">
      <a href="#/">
        <img align="left" src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"/>
        <h1>Admin</h1>
      </a>
    </div>
    <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse" background-color="#001529" text-color="#bfcbd9" active-text-color="#409EFF">
      <sidebar-item :routes="permission_routers"></sidebar-item>
    </el-menu>
  </scroll-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'

export default {
  components: { SidebarItem, ScrollBar },
  computed: {
    ...mapGetters([
      'permission_routers',
      'sidebar'
    ]),
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.scroll-bar {
  -webkit-box-shadow: 2px 0 6px rgba(0,21,41,.35);
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}
.logo-layout {
    height: 64px;
    position: relative;
    line-height: 64px;
    padding-left: 24px;
    -webkit-transition: all .3s;
    transition: all .3s;
    background: #002140;
    overflow: hidden;
    vertical-align:middle
  a {
    color: #1890ff;
    background-color: transparent;
    text-decoration: none;
    outline: none;
    cursor: pointer;
    -webkit-transition: color .3s;
    transition: color .3s;
    -webkit-text-decoration-skip: objects;
  }
  img {
    width: 30px;
    height: 30px;
    margin-top: 17px;
    margin-left: -3px;
    display: inline-block;
    vertical-align: middle;
  }
  h1 {
    float: left;
    width: 80px;
    line-height: 64px;
    color: #fff;
    font-size: 20px;
    margin: 0 0 0 12px;
    font-family: Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;
    font-weight: 600;
  }
}
</style>

