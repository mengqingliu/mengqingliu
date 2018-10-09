export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd: true
        }],
    ],
    //如果配置routes执行配置式路由，否则执行约定式路由
    routes: [
        {
            path: '/',
            component: './HelloWorld',
        },
        {
            path: '/cord',
            component: './test/cord.js',
        },
    ],
};