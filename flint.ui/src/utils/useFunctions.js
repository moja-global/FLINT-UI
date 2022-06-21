export default function () {
  function convertTitleCaseToStringWithSpaces(titleCase) {
    return titleCase.replace(/([A-Z])/g, ' $1').trim()
  }

  function convertGCBMModuleKeyToName(module) {
    let convertedModule = module

    if (module.startsWith('CBM')) {
      convertedModule = module.substr(3)
    }

    convertedModule = convertTitleCaseToStringWithSpaces(convertedModule)

    return convertedModule
  }

  return {
    convertTitleCaseToStringWithSpaces,
    convertGCBMModuleKeyToName
  }
}
