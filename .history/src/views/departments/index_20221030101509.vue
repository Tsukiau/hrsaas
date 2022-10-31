<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
      
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <!-- 插槽 data就是每一项的数据 -->
          <el-row slot-scope="{ data }" type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%;">
            <el-col>
              <!-- 左 -->
              <span>{{ data.name }}</span>
            </el-col>
            <el-col :span="4">
              <el-row type="flex" justify="end">
                <el-col>负责人</el-col>
                <el-col>
                  <!-- 下拉菜单 -->
                  <el-dropdown>
                    <span>
                      操作<i class="el-icon-arrow-down" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>添加子部门</el-dropdown-item>
                      <el-dropdown-item>编辑部门</el-dropdown-item>
                      <el-dropdown-item>删除部门</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-tree>
      </el-card>
    </div>
  </div>
<!--   <treeTools></treeTools> -->
</template>

<script>
import treeTools from './components/tree-tools.vue'
export default {
  components: { treeTools },
  data() {
    return {
      defaultProps: {
        label: 'name'
      },
      departs: [
        { name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' },
        { name: '人事部' }
      ]
    }
  }
}
</script>
<style scoped>
.tree-card {
  padding: 30px 130px;
  font-size: 14px;
}
</style>

