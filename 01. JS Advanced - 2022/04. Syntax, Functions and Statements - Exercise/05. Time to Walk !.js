function timeToWalk(steps, lengthFootprint, speed) {
  
  let distanceInMeters = steps * lengthFootprint;
  let speedInSec = speed / 3.6;
  let breakInSec = Math.floor(distanceInMeters / 500) * 60;
  let time = distanceInMeters / speedInSec + breakInSec;

  let hours = Math.floor(time / 3600)
    .toString()
    .padStart(2, 0);
  let minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, 0);
  let seconds = Math.round(time % 60)
    .toString()
    .padStart(2, 0);

  console.log(`${hours}:${minutes}:${seconds}`);
}
timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
