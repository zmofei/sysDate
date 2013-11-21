sysDate
=======

use javascript get  servers date

example
=======

you can simple use it like this:

``` javascript

var a=sysDate(option);

//option is an object,like {'url':'/getDate'}

a.done=function(data){
  console.log( 'the servers data is: ' , data );
}

```
