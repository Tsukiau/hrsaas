<template>
  <el-dialog title="新增部门" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
    <el-form>
      <el-form-item label="部门名称">
        <el-input />
      </el-form-item>
      <el-form-item label="部门名称">
        <el-input />
      </el-form-item>
      <el-form-item label="部门名称">
        <el-input />
      </el-form-item label="部门名称">
      <el-form-item>
        <el-input />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'AddDept',
  data() {
    return {

    }
  }
}

</script>

<style>

</style>
