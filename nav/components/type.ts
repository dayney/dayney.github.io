/*
 * @Author: krui krui0728@gmail.com
 * @Date: 2024-08-11 17:38:39
 * @LastEditors: cheftchen cheft.chen@newtype.games
 * @LastEditTime: 2024-08-29 23:10:43
 * @FilePath: /dayney.github.io/docs/nav/components/type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface NavLink {
  /** 站点图标 */
  icon?: string | { svg: string }
  /** 站点名称 */
  title: string
  /** 站点名称 */
  desc?: string
  /** 站点链接 */
  link: string
  /** 站点链接 */
  badge?: string
}
