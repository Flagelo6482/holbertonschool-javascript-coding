process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const wsp = process.stdin.read();

  if (wsp) {
    process.stdout.write(`Your name is: ${wsp}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
