<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <treeTools :treeNode="company"></treeTools>
        <!-- tree -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <treeTools slot-scope="{ data }" :treeNode="data" :isRoot="true"></treeTools>
        </el-tree>
      </el-card>
    </div>
  </div>

</template>

<script>
import treeTools from './components/tree-tools'
import { getDepartments } from '@/api/departments'
export default {
  components: { treeTools },
  data() {
    return {
      company: { name: '江苏传智播客教育科技股份有限公司', manager: '负责人' },
      defaultProps: {
        label: 'name'
      },
      departs: [
        { name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' },
        { name: '人事部' }
      ]
    }
  },
  
}
</script>
<style scoped>
.tree-card {
  padding: 30px 80px;
  font-size: 14px;
}
</style>

