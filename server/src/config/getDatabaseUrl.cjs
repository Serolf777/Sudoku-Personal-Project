const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:asdf1235@localhost:5432/sudoku-personal-project_development",
      test: "postgres://postgres:asdf1235@localhost:5432/sudoku-personal-project_test",
      e2e: "postgres://postgres:asdf1235@localhost:5432/sudoku-personal-project_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;