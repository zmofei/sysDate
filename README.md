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
    //it will return 'done 1385003673000'
});

```

or you can use it async

``` javascript

var a=sysDate();

//use async it's also awesome : )
//but you must the time you get is the time when you define sysDate().
setTimeout(function(){
  a.done(function(data){
    console.log('done',data);
    //it will return 'done 1385003673000'
  });
},3000)

```
