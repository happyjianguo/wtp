<template>
  <div class="app-container">
    <el-divider content-position="left">{{ $t('permission.authorized_appId') }}</el-divider>
    <el-transfer
      v-model="transferValue"
      filterable
      :filter-placeholder="$t('permission.appId')"
      :data="transferData"
      :titles="[$t('permission.authorized_title1'), $t('permission.authorized_title2')]"
      @change="handleChange"
    />
    <el-divider content-position="left">{{ $t('permission.specific_authorization') }}</el-divider>
    <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      :empty-text="$t('permission.empty_text')"
      :default-expanded-keys="[]"
      :default-checked-keys="treeChecked"
      @check-change="handleCheckChange"
    />
  </div>
</template>

<script>
import {
  appOptions
} from '@/api/app'
import {
  find,
  create,
  del
} from '@/api/user-app-permission'

export default {
  name: 'Permission',
  components: {},
  data() {
    return {
      user: {},
      transferData: [],
      transferValue: [],
      treeData: [],
      treeChecked: []
    }
  },
  computed: {},
  watch: {
    '$route': 'getParams',
    transferData: function(val, oldval) {
      oldval = val
      console.log(`transferData的旧值为` + oldval + `, 新值为` + val)
    },
    transferValue: function(val, oldval) {
      console.log(`transferValue的旧值为` + oldval + `, 新值为` + val)
    }
  },
  created() {
    this.getParams()
    this.appOptions()
    this.findPermission()
  },
  methods: {
    handleChange(value, direction, movedKeys) {
      console.log(JSON.stringify(value), JSON.stringify(direction), JSON.stringify(movedKeys))
      if (direction === 'right') {
        // 添加
        for (let i = 0; i < movedKeys.length; i++) {
          const movedKey = movedKeys[i]
          create({
            userId: this.user.userId,
            appId: movedKey
          }).then((response) => {
            if (response.data) {
              this.$message.success(this.$t('permission.success'))
              this.findPermission()
            } else {
              this.$message.error(this.$t('permission.fail'))
            }
          })
        }
      } else if (direction === 'left') {
        // 删除
        for (let i = 0; i < movedKeys.length; i++) {
          const movedKey = movedKeys[i]
          del({
            userId: this.user.userId,
            appId: movedKey
          }).then((response) => {
            if (response.data) {
              this.$message.success(this.$t('permission.success'))
              this.findPermission()
            } else {
              this.$message.error(this.$t('permission.fail'))
            }
          })
        }
      } else {
        this.$message.error(direction)
      }
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(JSON.stringify(data), JSON.stringify(checked), JSON.stringify(indeterminate))
      if (checked) {
        // 添加
        if (!data.children) {
          // 单个
          create({
            userId: this.user.userId,
            appId: data.appId,
            permission: data.label
          }).then((response) => {
            if (response.data) {
              this.$message.success(this.$t('permission.success'))
            } else {
              this.$message.error(this.$t('permission.fail'))
            }
          })
        }
      } else {
        // 删除
        if (!data.children) {
          // 单个
          del({
            userId: this.user.userId,
            appId: data.appId,
            permission: data.label
          }).then((response) => {
            if (response.data) {
              this.$message.success(this.$t('permission.success'))
            } else {
              this.$message.error(this.$t('permission.fail'))
            }
          })
        }
      }
    },
    getParams() {
      // 取到路由带过来的参数
      this.user = this.$route.query
      console.log('user' + this.user)
    },
    appOptions() {
      appOptions().then((response) => {
        var list = response.data.list
        const dataTemp = []
        for (let i = 0; i < list.length; i++) {
          var app = list[i]
          dataTemp[i] = {
            key: app.appId,
            label: app.appId
          }
        }
        this.transferData = dataTemp
      })
    },
    findPermission() {
      find({
        userId: this.user.userId
      }).then((response) => {
        var list = response.data.list
        const valueTemp = []
        for (let i = 0; i < list.length; i++) {
          var userAppPermissionDto = list[i]
          valueTemp[i] = userAppPermissionDto.id
          // tree
          userAppPermissionDto.disabled = true
        }
        this.transferValue = valueTemp
        // tree
        this.treeData = list
        this.treeChecked = response.data.data
      })
    }
  }
}
</script>
