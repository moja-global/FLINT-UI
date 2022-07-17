export default function () {
  function convertTitleCaseToStringWithSpaces(titleCase) {
    return titleCase.replace(/([A-Z])/g, ' $1').trim()
  }

  function convertSnakeCasetoStringWithSpaces(snakeCase) {
    return snakeCase.replace(/([a-z0-9])([A-Z])/g, '$1 $2').trim()
  }

  function convertGCBMModuleKeyToName(module) {
    let convertedModule = module

    if (module.startsWith('CBM')) {
      convertedModule = module.substr(3)
    }

    convertedModule = convertTitleCaseToStringWithSpaces(convertedModule)

    return convertedModule
  }

  function trimSlashes(str) {
    return str.replace(/^\/+|\/+$/g, '')
  }

  function bytesToKB(bytes) {
    return parseFloat((bytes / 1000).toFixed(2)) + ' KB'
  }

  return {
    bytesToKB,
    trimSlashes,
    convertGCBMModuleKeyToName,
    convertTitleCaseToStringWithSpaces,
    convertSnakeCasetoStringWithSpaces
  }
}
