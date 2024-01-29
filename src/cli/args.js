const parseArgs = () => {
  let output = [];
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i += 2) {
    if (args[i].includes('--'))
      output.push(`${args[i].replaceAll('--', '')} is ${args[i + 1]}`);
    else throw 'invalid argument';
  }

  console.log(output.join(', '));
};

parseArgs();
