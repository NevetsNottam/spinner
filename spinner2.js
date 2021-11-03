let frameDelay = 200;
const animFrames = ["|", "/", "-", "\\"];
const animLoopID = setInterval(() => {
  for (let i = 0; i < animFrames.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${animFrames[i]}   `);
    }, frameDelay * i);}}, frameDelay * animFrames.length);
    setTimeout(() => {clearInterval(animLoopID);
process.stdout.write("\n")}, 4000);
