<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <treeTools ></treeTools>
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <treeTools slot-scope="{ data }" :data="treeNode"></treeTools>
        </el-tree>
      </el-card>
    </div>
  </div>

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

