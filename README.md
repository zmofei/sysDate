sysDate
=======

use javascript get servers date ,which you needn't care about the servers script.

example
=======

you can simple use it like this:

``` javascript

var a=sysDate(option);
//option is an object,like {'url':'/getDate'}

a.done(function(data){
    console.log('done',data);
});

```

or you can use it async

``` javascript

var a=sysDate();

//use async it's also awesome : )
setTimeout(function(){
  a.done(function(data){
    console.log('done',data);
  });
},3000)

```
