<template>
  <el-dialog
    title="新增部门"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose">
    <el-form>
       <el-form-item>
        <el-input></el-input>
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
