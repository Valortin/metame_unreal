require('ts-node/register/transpile-only')

module.exports = {
  test_file_extension_regexp: /.*\.ts$/,
  compilers: {
    solc: {
      version: '0.6.4',
    },
  },
}
