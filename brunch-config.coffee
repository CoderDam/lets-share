exports.config =
  files:
    stylesheets:
      joinTo: 'css/app.css'
      # order:
      #   before: 'app/styles/reset.styl'

    javascripts:
      joinTo: 'js/app.js'

  paths:
    watched: ['app', 'vendor']

  plugins:
    babel:
      presets: ['latest', 'react']
      plugins: [
        'transform-class-properties'
        'transform-object-rest-spread'
      ]

    postcss:
      processors: [
        require('autoprefixer')
      ]

  modules:
    autoRequire:
      'js/app.js': ['src/index']
