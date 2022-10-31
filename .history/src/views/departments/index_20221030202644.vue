<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <treeTools :treeNode="company"></treeTools>
        <!-- tree -->
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <treeTools
          slot-scope="{ data }"
           :treeNode="data"
           @delDepts="getDepartments"
           :isRoot="true">
          </treeTools>
        </el-tree>
      </el-card>
    </div>
    <addDept></addDept>
  </div>

</template>

<script>
import treeTools from './components/tree-tools'
import { getDepartments } from '@/api/departments'
import { transListToTreeData } from '@/utils'
import AddDept from './components/add-dept.vue'
export default {
  components: { treeToolsAddDept },
  data() {
    return {
      company: {}, // 头部数据
      departs: [],
      defaultProps: {
        label: 'name'
      }
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人' }
      this.departs = transListToTreeData(result.depts, '') // 需要将其转化成树形结构
    }
  }
}
</script>
<style scoped>
.tree-card {
  padding: 30px 80px;
  font-size: 14px;
}
</style>

