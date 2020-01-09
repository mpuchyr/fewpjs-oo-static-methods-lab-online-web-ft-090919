class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    let splitString = string.split(" ")
    let nonCapitals = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    splitString[0] = splitString[0][0].toUpperCase() + splitString[0].slice(1)
    for (let i = 1; i < splitString.length; i++) {
      if (!nonCapitals.includes(splitString[i])) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1)
      }
    }
    return splitString.join(" ")
  }
}