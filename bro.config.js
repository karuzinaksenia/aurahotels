const pkg = require('./package')

module.exports = {
  apiPath: 'stubs/api',
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`
    }
  },
  /* use https://admin.bro-js.ru/ to create config, navigations and features */
  navigations: {
    'aurahotels.main': '/aurahotels',
    'link.aurahotels.auth': '/auth'
  },
  features: {
    'aurahotels': {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    'aurahotels.api': '/api'
  },
  // Путь к кастомному HTML-шаблону prom-режима (оставьте undefined чтобы использовать дефолт)
  htmlTemplatePath: undefined
}
