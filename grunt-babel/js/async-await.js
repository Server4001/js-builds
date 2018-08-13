// async and await requires the use of browser-polyfill.js

let whatever = function(url) {
    return new Promise(function(resolve, reject) {
        $.ajax({
            url: url,
            type: 'get'
        }).done(function(data) {
            resolve(data);
        }).fail(function(jqXHR) {
            reject(Error(`Request failed: ${jqXHR.status} ${jqXHR.statusText}`));
        });
    });
};

async function main() {
    let json = await whatever('/endpoint.json');
    console.log(json);
}

main();
console.log("something");
