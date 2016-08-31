'use strict';

var regExp = /\.(js|jsx)$/i;

module.exports = function () {
  return {
    visitor: {
      ImportDeclaration: function ImportDeclaration(path) {
        var source = path.node.source;


        if (!source.value.match(regExp)) {
          return;
        }

        source.value = source.value.replace(regExp, '');
      }
    }
  };
};
