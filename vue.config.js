module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://www.wanandroid.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
