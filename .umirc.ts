import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  alias: {
    'react-vant': 'react-vant/2x',
  },
  mfsu: {},
});
