<template>
  <div class="base-header clearfix">
    <div class="base-header-open">
      <i class="el-icon-menu" @click="handleClick"></i>
    </div>
    <div class="base-header-breadcrumb">
      <moor-breadcrumb class="breadcrumb" :data="breadcrumbData">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
      </moor-breadcrumb>
    </div>
    <div class="base-header-tool">
      <el-row :gutter="5">
         <el-col :span="10">
          <div class="base-header-tool-icon">
            admin
          </div>
        </el-col>
        <el-col :span="7">
          <div class="base-header-tool-icon">
            <i class="el-icon-bell"></i>
          </div>
        </el-col>
        <el-col :span="7">
          <div class="base-header-tool-icon">
            <i class="el-icon-circle-close-outline"></i>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BaseHeader',
  computed: {
    ...mapState('system', [
      'breadcrumbData'
    ])
  },
  methods: {
    handleClick () {
      this.$emit('on-click-menu')
    }
  }
}
</script>
<style lang="stylus" scoped>
.base-header
  .base-header-open
    float left
    width 40px
    height 60px
    line-height 60px
    font-size 24px
    .el-icon-menu
      cursor pointer
  .base-header-breadcrumb
    float left
    width 200px
    height 60px
    position relative
    .breadcrumb
      position absolute
      top 50%
      transform translateY(-50%)
  .base-header-tool
    float right
    height 60px
    width 180px
    line-height 60px
    text-align center
    font-size 18px
    .base-header-tool-icon
     width 45px
     cursor pointer
</style>
