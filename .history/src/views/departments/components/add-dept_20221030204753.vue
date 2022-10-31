<template>
  <el-dialog title="新增部门" :visible="showDialog" width="50%">

    <el-form label-width="120px" :rules="deptRules">
      <el-form-item label="部门名称" prop="name">
        <el-input v-model="" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门编码" prop="code">
        <el-input style="width:80%" placeholder="1-50个字符" />
      </el-form-item>
      <el-form-item label="部门负责人" prop="manager">
        <el-input style="width:80%" placeholder="请选择" />
      </el-form-item>
      <el-form-item label="部门介绍" prop="introduce">
        <el-input style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
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
  props: {
    showDialog: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      formDate: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 负责人
        introduce: '' // 介绍
      }
    }
  }
}

</script>

<style>

</style>
