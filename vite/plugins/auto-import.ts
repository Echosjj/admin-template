
/**
 * @name createAutoImport
 * @description 按需加载，自动引入
 */
import AutoImport from 'unplugin-auto-import/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const createAutoImport = () => {
    return AutoImport({
        dts: 'types/auto-imports.d.ts',
        imports: [
            'vue',
            'pinia',
            'vue-router',
            {
                '@vueuse/core': []
            }
        ],
        resolvers: [ElementPlusResolver()]
    })
}
export default  createAutoImport
