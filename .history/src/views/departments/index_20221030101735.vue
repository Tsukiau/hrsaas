<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="tree-card">
        <TreeTools></TreeTools>
        <el-tree :data="departs" :props="defaultProps" :default-expand-all="true">
          <TreeTools slot-scope="{ data }" :TreeTools="data"></TreeTools>
        </el-tree>
      </el-card>
    </div>
  </div>

</template>

<script>
import TreeTools from './components/tree-tools.vue'
export default {
  components: { TreeTools },
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

