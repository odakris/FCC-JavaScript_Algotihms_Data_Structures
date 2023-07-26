function telephoneCheck(str) {

  // const regex = /^(1){0,1}(\s{0,1}|-{0,1})([(]\d{3}[)]|\d{3})(\s{0,1}|-{0,1})\d{3}(\s{0,1}|-{0,1})\d{4}$/;

  const regex = /^1?\s?([(]\d{3}[)]|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;

  return regex.test(str);

}

telephoneCheck("555-555-5555");
