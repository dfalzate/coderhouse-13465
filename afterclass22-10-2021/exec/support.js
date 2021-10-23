setTimeout(() => {
  console.log('Process=>', process.argv[2])
}, 5000+5000* process.argv[2]);