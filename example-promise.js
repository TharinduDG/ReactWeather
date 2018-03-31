// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('City not found!');
// }
//
// getTempCallback('Badulla', function(error, temp){
//   if(error) {
//     console.log('error', error);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found!');
//     }, 1000);
//   });
// }
//
//
// getTempPromise('Badulla').then(function(temp){
//   console.log('promise success', temp);
// }, function(error){
//   console.log('promise error', error);
// });
//

//***********************

function addPromise(a, b) {
  return new Promise(function (resolve, reject){
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('both parameters should be numbers!');
    }
  });
}

addPromise(1, 2).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});

addPromise('1', 2).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
