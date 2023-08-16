const url = require('url')
const urlString ="https://www.example.com/#info:8080/path/to/resource?params=value&params2=value&params3=value"
parseurl=url.parse(urlString,true)
// console.log(parseurl);
// parseurl1=url.parse(urlString)
// console.log(parseurl1);

console.log(parseurl.host)
parseurl.host='www.example.com:8082';
console.log(parseurl.host)
console.log(parseurl.hostname)
console.log(parseurl.href)
console.log(parseurl.protocol)
console.log(parseurl.port)
console.log(`Query Params: ${JSON.stringify(parseurl.query)}`)
console.log(parseurl.pathname)
console.log(parseurl.hash)




const formattedurl=url.format({
    protocol : 'https',
    host     : 'www.linkdin.com',
    port : 8080,
    query  : {
        param1 : 'value1',
        param2 : 'value1',
    }
})

console.log(formattedurl);




