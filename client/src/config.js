const config = {
  env: process.env["NODE_ENV"] || "development",
  validation: {
    email: {
      regexp: {
        emailRegexp: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      },
    },
  },
};

export default config;
