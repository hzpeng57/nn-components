# nn-components

微信小程序自定义组件库

## 使用

下载 zip 或者把仓库 clone 下来，复制要使用的组件到项目中即可。

## 组件

###1、 Message
属性名 | 作用 | 是否可为空 | 类型 | 默认值
-|-|-|-|-
`isShow` | 是否显示 | 是 | `Boolean` |`false`
`content` | 显示内容 | 是 | `String` | ''

###2、Loading
属性名 | 作用 | 是否可为空 | 类型 | 默认值
-|-|-|-|-
`isShow` | 是否显示 | 是 | `Boolean` | `true`

###3、 Modal
属性名 | 作用 | 是否可为空 | 类型 |默认值
-|-|-|-|-
`isShow` | 是否显示 | 是 | `Boolean` |`false`
`width` | 内容宽度（单位 rpx） | 是| `Number` | `520`
`height`| 内容高度（单位 rpx）|是| `Number`|`280`
`isShowClose`|是否显示关闭图标|是| `Boolean`|`false`
`isFooter`|是否显示底部|是| `Boolean`|`true`
`cancelText`|底部左侧内容文字（需与`isFooter`配合使用）|是| `String`|`取消`
`confirmText`|底部右侧内容文字（需与`isFooter`配合使用）|是| `String`|`确定`

> 当`confirmText`的内容为“去分享”时，会自动替换为分享按钮。
> `<button class='share-button' open-type='share'>去分享</button>`

###4、Popup
属性名 | 作用 | 是否可为空| 类型 | 默认值
-|-|-|-|-
`isShow` | 是否显示 | 是 | `String` | `false`
`height` | 弹出层高度（单位 rpx） | 是 | `Number` | `500`
