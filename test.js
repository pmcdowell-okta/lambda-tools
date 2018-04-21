test=require ('./index.js');

test.handler ({}, {}, function( code, result) {
    console.log(result)
})

