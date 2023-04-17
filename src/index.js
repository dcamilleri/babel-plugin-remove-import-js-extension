const regExp = /\.(js|jsx)$/i

module.exports = function () {
  return {
    visitor: {
      ImportDeclaration (path) {
        const { source } = path.node

        if (!source.value.match(regExp)) {
          return
        }

        if (!source.value.startsWith('.')) {
          // Don't remove extension from library imports
          return
        }

        source.value = source.value.replace(regExp, '')
      }
    }
  }
}
