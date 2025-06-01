# Vue2 状态管理规范

## Vuex 使用规范

### Store 结构
```
store/
├── index.js          # store 入口文件
├── modules/          # 模块目录
│   ├── user.js      # 用户模块
│   ├── app.js       # 应用模块
│   └── ...
└── plugins/         # 插件目录
```

### 模块化规范
1. 按功能模块拆分
2. 每个模块包含 state、mutations、actions、getters
3. 使用命名空间避免命名冲突

```javascript
// store/modules/user.js
export default {
  namespaced: true,
  
  state: {
    userInfo: null,
    token: null
  },
  
  mutations: {
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
    },
    SET_TOKEN(state, token) {
      state.token = token
    }
  },
  
  actions: {
    async login({ commit }, credentials) {
      try {
        const { data } = await api.login(credentials)
        commit('SET_USER_INFO', data.userInfo)
        commit('SET_TOKEN', data.token)
      } catch (error) {
        throw error
      }
    }
  },
  
  getters: {
    isLoggedIn: state => !!state.token,
    userInfo: state => state.userInfo
  }
}
```

### State 规范
1. 使用对象形式定义 state
2. 提供初始值
3. 避免在组件中直接修改 state

```javascript
// 好的例子
state: {
  userInfo: null,
  token: null,
  loading: false,
  error: null
}
```

### Mutations 规范
1. 使用大写字母命名
2. 只进行同步操作
3. 每个 mutation 只做一件事
4. 使用常量作为 mutation 类型

```javascript
// mutation-types.js
export const SET_USER_INFO = 'SET_USER_INFO'
export const SET_TOKEN = 'SET_TOKEN'

// mutations
mutations: {
  [SET_USER_INFO](state, userInfo) {
    state.userInfo = userInfo
  },
  [SET_TOKEN](state, token) {
    state.token = token
  }
}
```

### Actions 规范
1. 使用小驼峰命名
2. 处理异步操作
3. 返回 Promise
4. 使用 try-catch 处理错误

```javascript
actions: {
  async fetchUserInfo({ commit }) {
    try {
      commit('SET_LOADING', true)
      const { data } = await api.getUserInfo()
      commit('SET_USER_INFO', data)
      return data
    } catch (error) {
      commit('SET_ERROR', error.message)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  }
}
```

### Getters 规范
1. 使用小驼峰命名
2. 保持 getter 的纯粹性
3. 避免在 getter 中修改 state
4. 使用箭头函数

```javascript
getters: {
  fullName: state => {
    const { firstName, lastName } = state.userInfo
    return `${firstName} ${lastName}`
  },
  
  hasPermission: state => permission => {
    return state.permissions.includes(permission)
  }
}
```

## 组件中使用 Vuex

### 使用 mapState
```javascript
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      token: state => state.user.token
    })
  }
}
```

### 使用 mapGetters
```javascript
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', [
      'isLoggedIn',
      'userInfo'
    ])
  }
}
```

### 使用 mapActions
```javascript
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('user', [
      'login',
      'logout'
    ])
  }
}
```

## 最佳实践

1. 状态管理原则
   - 集中管理应用状态
   - 状态变更可追踪
   - 状态变更可预测

2. 模块化
   - 按功能划分模块
   - 使用命名空间
   - 避免模块间耦合

3. 性能优化
   - 合理使用 getters
   - 避免不必要的状态更新
   - 使用 Vuex 的严格模式

4. 错误处理
   - 统一的错误处理机制
   - 错误状态管理
   - 错误日志记录

5. 测试
   - 单元测试
   - 集成测试
   - 状态快照测试 