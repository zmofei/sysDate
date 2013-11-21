sysDate
=======

use javascript get servers date ,which you needn't care about the servers script.

example
=======

you can simple use it like this:

``` javascript

var a=sysDate(option);
//option is an object,like {'url':'/getDate'}

a.done=function(data){
  console.log( 'the servers data is: ' , data );
  //it will return "the servers data is: 1385000740000 "
}

```
