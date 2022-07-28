import banner from 'vite-plugin-banner'

export default function createBanner() {
    return banner(`
/**
 * 由 admin-template 提供技术支持
 * Powered by admin-template
 * https://admin-template.netlify.app
 * 代码仓库
 * Gitee  https://gitee.com/hooray/admin-template
 * Github https://github.com/hooray/admin-template
 */
    `)
}
