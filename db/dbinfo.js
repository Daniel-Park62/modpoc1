module.exports = (function () {
  return {
    local: { // localhost
      host: '127.0.0.1',
      port: '3306',
      user: 'pocusr',
      password: '1234',
      database: 'poc1'
    },
    real: { // real server db info
      host: '',
      port: '3306',
      user: 'pocusr',
      password: '1234',
      database: 'poc1'
    },
    dev: { // dev server db info
      host: '',
      port: '',
      user: '',
      password: '',
      database: ''
    }
  }
})();
