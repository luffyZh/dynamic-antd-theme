const withLess = require('@zeit/next-less');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX(withLess({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  lessLoaderOptions: {
    javascriptEnabled: true,
    localIdentName: '[local]___[hash:base64:5]',
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      // deal antd style
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]
      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  }
}));
