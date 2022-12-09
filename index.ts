import { Observable } from 'rxjs';
// Observables have functions like next, error and complete.
// Once an error is encountered the further  lines of code will not be executred

// const observable = new Observable((subscriber) => {
//   subscriber.next(1);
//   subscriber.next(2);
//   subscriber.next(3);
//   setTimeout(() => {
//     subscriber.next(4);
//     subscriber.complete();
//   }, 1000);
// });

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  // subscriber.error(new Error('New Error'));
  subscriber.next(3);
  subscriber.complete();
  subscriber.next(4);
});

console.log('just before subscribe');
observable.subscribe({
  next(x) {
    console.log('got value ' + x);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('done');
  },
});
console.log('just after subscribe');
