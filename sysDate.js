var sysDate = function() {
    return sysDate['init'].apply(sysDate, arguments)
};

(function(exp) {
  exp.config={
    url:'/'
  };
  
  exp.init = function() {
    var arg=arguments[0];
    for(i in arg){
      exp.config[i]=arg[i]
    };
    exp.get();
    return exp;
  };
  
  exp.get = function(){
    var xmlhttp;

    if (window.XMLHttpRequest) {
      xmlhttp = new XMLHttpRequest();
    } else {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == 4) {
        var sysD=xmlhttp.getResponseHeader('Date');
        sysD=new Date(sysD);
        sysD=Date.parse(sysD);
        if(exp.doneFn){
          exp.doneFn(sysD);
        };
        exp.config.lastDate=sysD;
      }
    };
    
    exp.done = function(fn){
      if(exp.config.lastDate){
        fn&&fn(exp.config.lastDate);
      }else{
        exp.doneFn=fn;
      }
      
    }
    
    xmlhttp.open("GET", exp.config.url, true);
    xmlhttp.send();
  }
  
})(sysDate);
