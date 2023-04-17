jest.autoMockOff()

const babel = require('babel-core')
const plugin = require('../src/index')

function transform (code, options) {
  return babel.transform(code, {
    plugins: [plugin].concat(options && [options] || [])
  }).code
}

describe('trim-import-extension', () => {
  it('it should not remove anything with a library name', () => {
    const source = 'import React from "react-dom";'
    const expected = 'import React from "react-dom";'

    expect(transform(source)).toBe(expected)
  })

  it('it should remove .js extension', () => {
    const source = 'import Lib from "./lib.js";'
    const expected = 'import Lib from "./lib";'

    expect(transform(source)).toBe(expected)
  })

  it('it should work with jsx', () => {
    const source = 'import Lib from "./lib.jsx";'
    const expected = 'import Lib from "./lib";'

    expect(transform(source)).toBe(expected)
  })

  it('it should not remove .js extension from library submodules', () => {
    const source = 'import React from "react-dom/submodule.js";'
    const expected = 'import React from "react-dom/submodule.js";'

    expect(transform(source)).toBe(expected)
  })
})
