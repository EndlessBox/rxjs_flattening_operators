import { of, interval } from 'rxjs';
import { mergeMap, map, switchMap, concatMap, timeout } from 'rxjs/operators';

const letters = of('a', 'b', 'c');
const result = letters.pipe(
  concatMap(x => {
    timeout(2000).pipe(tap(data => letters =))
    return interval(4000).pipe(map(ticks => x + ticks));
  })
);
result.subscribe(x => console.log(x));

// Results in the following:
// a0
// b0
// c0
// a1
// b1
// c1
// continues to list a,b,c with respective ascending integers
