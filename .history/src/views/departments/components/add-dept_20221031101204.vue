<template>
  <el-dialog title="新增部门" :visible="showDialog" width="50%">

    <el-form label-width="120px" :rules="deptRules" :model="formDate">

      <el-form-item label="部门名称" prop="name">
        <el-input v-model="formDate.name" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>

      <el-form-item label="部门编码" prop="code">
        <el-input v-model="formDate.code" style="width:80%" placeholder="1-50个字符" />
      </el-form-item>

      <el-form-item label="部门负责人" prop="manager">
        <el-select @focus.native="getEmployeeSimple" v-model="formDate.manager" style="width:80%" placeholder="请选择">
          <!--   显示的是用户名 存的也是用户名 -->
          <el-option v-for="item in peoples " :key="item.id" :label="item.username" :value="item.username">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="部门介绍" prop="introduce">
        <el-input v-model="formDate.introduce" style="width:80%" placeholder="1-300个字符" type="textarea" :rows="3" />
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
import { deptRulesMixin } from '@/common/minxin'
import { getDepartments } from '@/api/departments'
import { getEmployeeSimple } from '@/api/employees'
export default {
  name: 'AddDept',
  mixins: [deptRulesMixin],
  props: {
    showDialog: {
      type: Boolean,
      default: false
    },
    // 当前操作的节点
    treeNode: {
      type: Object,
      default: null
    }
  },
  data() {
    const checkNameRepeat = async (rule, value, callback) => {
      // value 就是输入的值
      const { depts } = await getDepartments()
      // depts是所有的部门数据
      // 找到所有的子部门
      const isResult = depts.filter(item => item.pid === this.treeNode.id).some(item => item.name === value)
      isResult ? callback(new Error(`同级部门下已经有${value}的部门了`)) : callback()
    }

    const checkCodeRepeat = async (rule, value, callback) => {
      const { depts } = await getDepartments()
      const isResult = depts.some(item => item.code === value && value)
      isResult ? callback(new Error(`组织架构中已经有部门使用${value}编码`)) : callback()
    }
    return {
      formDate: {
        name: '', // 部门名称
        code: '', // 部门编码
        manager: '', // 负责人
        introduce: '' // 介绍
      },
      deptRules: {
        name: [{ trigger: 'blur', validator: checkNameRepeat }],
        code: [{ trigger: 'blur', validator: checkCodeRepeat }]
      },
      peoples: [] // 接收获取的员工简单列表的数据
    }
  },
  methods: {
    async getEmployeeSimple() {
      this.peoples = await getEmployeeSimple()
    }
  }
}

</script>

<style>

</style>
