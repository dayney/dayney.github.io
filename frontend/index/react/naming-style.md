---
outline: deep
editLink: false
---

# React 命名规范

## 1. 基本原则
- 遵循 React 官方规范
- 保持命名语义化
- 保持代码结构清晰

## 2. 文件命名规范

### 2.1 组件文件
- 使用 PascalCase 命名
- 文件名要与组件名一致
- 使用 `.jsx` 或 `.tsx` 扩展名

```typescript
// UserProfile.tsx
import React from 'react';

interface UserProfileProps {
  name: string;
  age: number;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age}</p>
    </div>
  );
};
```

### 2.2 工具文件
- 使用 camelCase 命名
- 使用 `.js` 或 `.ts` 扩展名
- 文件名要能表达其功能

```typescript
// formatDate.ts
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};
```

### 2.3 样式文件
- 使用 camelCase 命名
- 使用 `.css`、`.scss` 或 `.module.css` 扩展名
- 文件名要与组件名一致

```scss
// userProfile.scss
.userProfile {
  &__header {
    font-size: 24px;
  }
  
  &__content {
    margin-top: 16px;
  }
}
```

## 3. 代码命名规范

### 3.1 组件命名
- 使用 PascalCase 命名
- 组件名要有意义
- 组件名要能表达其功能

```typescript
// 好的示例
const UserProfile = () => {};
const NavigationBar = () => {};
const ProductCard = () => {};

// 不好的示例
const userProfile = () => {};
const nav = () => {};
const card = () => {};
```

### 3.2 属性命名
- 使用 camelCase 命名
- 属性名要有意义
- 布尔类型属性使用 is、has、can 等前缀

```typescript
// 好的示例
interface ButtonProps {
  isDisabled: boolean;
  hasIcon: boolean;
  canSubmit: boolean;
  onClick: () => void;
}

// 不好的示例
interface ButtonProps {
  disabled: boolean;
  icon: boolean;
  submit: boolean;
  click: () => void;
}
```

### 3.3 事件处理函数命名
- 使用 handle 前缀
- 使用 camelCase 命名
- 函数名要能表达其功能

```typescript
// 好的示例
const handleSubmit = () => {};
const handleClick = () => {};
const handleChange = () => {};

// 不好的示例
const submit = () => {};
const click = () => {};
const change = () => {};
```

### 3.4 Hook 命名
- 使用 use 前缀
- 使用 camelCase 命名
- Hook 名要能表达其功能

```typescript
// 好的示例
const useUserData = () => {};
const useWindowSize = () => {};
const useLocalStorage = () => {};

// 不好的示例
const userData = () => {};
const windowSize = () => {};
const localStorage = () => {};
```

## 4. 最佳实践

### 4.1 组件结构
```typescript
// 组件结构
import React from 'react';
import './ComponentName.scss';

interface ComponentNameProps {
  // 属性定义
}

export const ComponentName: React.FC<ComponentNameProps> = (props) => {
  // 状态定义
  const [state, setState] = React.useState();

  // 副作用
  React.useEffect(() => {
    // 副作用逻辑
  }, []);

  // 事件处理函数
  const handleEvent = () => {
    // 事件处理逻辑
  };

  // 渲染
  return (
    <div>
      {/* 组件内容 */}
    </div>
  );
};
```

### 4.2 自定义 Hook 结构
```typescript
// 自定义 Hook 结构
import { useState, useEffect } from 'react';

export const useCustomHook = (initialValue: any) => {
  // 状态定义
  const [state, setState] = useState(initialValue);

  // 副作用
  useEffect(() => {
    // 副作用逻辑
  }, []);

  // 返回状态和方法
  return {
    state,
    setState,
  };
};
```

## 5. 命名规范检查清单

- [ ] 组件文件使用 PascalCase 命名
- [ ] 工具文件使用 camelCase 命名
- [ ] 样式文件使用 camelCase 命名
- [ ] 组件使用 PascalCase 命名
- [ ] 属性使用 camelCase 命名
- [ ] 事件处理函数使用 handle 前缀
- [ ] Hook 使用 use 前缀
- [ ] 布尔类型属性使用 is、has、can 等前缀
- [ ] 组件名有意义
- [ ] 属性名有意义
- [ ] 函数名能表达其功能
- [ ] Hook 名能表达其功能 