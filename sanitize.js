const sanitizeHtml = require("sanitize-html");


console.log('Sanitize some code')
const dirty = "<h1 class='top'> Heading </h1> today is a <em id = 'sun'>sunny </em> day"

const clean = sanitizeHtml(dirty, {allowedTags:[]})

console.log(dirty)
console.log(clean)
