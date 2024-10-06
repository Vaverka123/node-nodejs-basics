const parseEnv = () => {
  const variables = [];

  for (const [key, value] of Object.entries(process.env)) {
    if (key.startsWith("RSS_")) {
      variables.push(`${key}=${value}`);
    }
  }
  console.log(variables.join("; "));
};

parseEnv();
