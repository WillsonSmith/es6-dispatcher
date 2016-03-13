## ES6 Dispatcher

or es2015 - whatever you want to call it


Sample code
```
let dispatch = Dispatcher();

function logData(data) {
  console.log(data);
}
function logDataData(data) {
  console.log(data.data);
}

dispatch.register('event:sent', logData, logDataData);

dispatch.dispatch({
  type: 'event:sent',
  data: {
    test: 'test'
  }
});
/*
  {
    type: 'event:sent',
    data: {
    test: 'test'
    }
  }
*/
// { test: 'test' }
dispatch.remove('event:sent', logData);
dispatch.dispatch({
  type: 'event:sent',
  data: {
    test: 'test'
  }
});
// { test: 'test' }
```
