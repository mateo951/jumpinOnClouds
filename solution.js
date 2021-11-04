function jumpingOnClouds(c) {
  let jumps = 0;
  let playerPos = 0;
  for(let i = 0; i < c.length; i += 1) {
    // i = 1
    if(c[i + 1] != 1){
      playerPos = c[i +1];
      jumps++;
    } else {
      playerPos = c[playerPos + 1];
      i++;
    }
  }
  return jumps;
}
