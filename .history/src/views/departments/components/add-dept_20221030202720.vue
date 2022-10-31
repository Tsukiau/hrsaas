<template>
  <el-dialog
    title="新增部门"
   :visible.sync="dialogVisible"
    width="30%"
     :before-close="handleClose">
    <el-form>
      <el-form-item label="部门名称">
        <el-input />
      </el-form-item>
      <el-form-item label="部门编码">
        <el-input />
      </el-form-item>
      <el-form-item label="部门负责人">
        <el-input />
      </el-form-item>
      <el-form-item label="部门介绍">
        <el-input />
      </el-form-item>
    </el-form>
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="info" size="small">取消</el-button>
        <el-button type="primary" size="small">确认</el-button>
      </el-col>
    </el-row>
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
