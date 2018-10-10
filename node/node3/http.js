var request = require('request');
request({
    method: 'POST',
    uri: 'http://ya.ru',
    form: {key: 'value'},
}, function (error, response, body) {
    if (error) {
        console.error(error);
    } else {
        console.log(body);
        console.log(response.statusCode);
    }
});
