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
      company: {},
      defaultProps: {
        label: 'name'
      },
      departs: []
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      const result = await getDepartments()
      this.company = { name: result.companyName, manager: '负责人' }
      console.log(this.company)
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

