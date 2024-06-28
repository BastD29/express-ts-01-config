const checkEnvVariables = (variables: string[]) => {
  const missingVariables = variables.filter(
    (variable) => !process.env[variable]
  );

  if (missingVariables.length > 0) {
    throw new Error(
      `The following environment variables are missing: ${missingVariables.join(
        ", "
      )}`
    );
  }
};

export { checkEnvVariables };
