<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-row type="flex" justify="space-between">
          <el-col>
            <!-- 左 -->
            <span>江苏传智播客教育科技股份有限公司</span>
          </el-col>
          <el-col :span="4">
            <el-row type="flex" justify="end">
              <el-col>负责人</el-col>
              <el-col>
                <!-- 下拉菜单 -->
                <el-dropdown>
                  <span>
                    下拉菜单<i class="el-icon-arrow-down" />
                  </span>
                  <el-dropdown-menu>

                  </el-dropdown-menu>
                </el-dropdown>
              </el-col>

            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
