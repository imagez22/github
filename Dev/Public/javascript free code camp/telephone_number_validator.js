const telephoneCheck = str => {
  const regExp = /^1?\s?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/gm
  return regExp.test(str)
}
