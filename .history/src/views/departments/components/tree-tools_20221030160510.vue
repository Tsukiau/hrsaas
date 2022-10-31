<template>
  <el-row type="flex" justify="space-between" align="middle" style="height: 40px; width: 100%;">
    <el-col>
      <!-- 左 -->
      <span>{{ treeNode.name }}</span>
    </el-col>
    <el-col :span="4">
      <el-row type="flex" justify="end" class="el_col">
        <el-col style="margin-right:30px ;">{{ treeNode.manager }}</el-col>
        <el-col>
          <!-- 下拉菜单 -->
          <el-dropdown @command="operateDepts">
            <span>
              操作<i class="el-icon-arrow-down" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="add">添加子部门</el-dropdown-item>
              <el-dropdown-item v-if="isRoot" command="edit">编辑部门</el-dropdown-item>
              <el-dropdown-item v-if="isRoot" command="del">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
import { delDepartments } from '@/api/departments'
export default {
  props: {
    treeNode: {
      type: Object,
      required: true
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 监听事件command
    operateDepts(type) {
      if (type === 'add') {
        // 添加子部门的操作
      } else if (type === 'edit') {
        //  编辑部门的操作
      } else {
        //  删除操作
        console.log(this.treeNode)
        this.$confirm('确定要删除该部门吗').then(() => {
          return delDepartments(this.treeNode.id)
        }).then(() => {
this.$emit('')
        })
      }
    }
  }
}
</script>

<style>
.el_col {
  width: 100%;
}
</style>
