import { of, interval } from 'rxjs';
import {
  mergeMap,
  map,
  switchMap,
  exhaustMap,
  concatMap,
  timeout
} from 'rxjs/operators';

const letters = of('a', 'b', 'c');

const resultSw = letters.pipe(
  switchMap(x => {
    return interval(3526).pipe(map(ticks => x + ticks));
  })
);

const resultCn = letters.pipe(
  concatMap(x => {
    return interval(5846).pipe(map(ticks => x + ticks));
  })
);

const resultMr = letters.pipe(
  mergeMap(x => {
    return interval(2541).pipe(map(ticks => x + ticks));
  })
);

const resultEx = letters.pipe(
  exhaustMap(x => {
    return interval(5235).pipe(map(ticks => x + ticks));
  })
);

resultSw.subscribe(console.log);
resultCn.subscribe(console.log);
resultMr.subscribe(console.log);
resultEx.subscribe(console.log);
