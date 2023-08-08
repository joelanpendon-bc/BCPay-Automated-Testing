window.grecaptcha = {
    ready: (callback) => callback(),
    execute: async () => "FAKE_TOKEN",
    render: () => "",
    enterprise: {
      ready: (callback) => callback(),
      execute: async () => "FAKE_TOKEN",
      render: () => "",
    },
  };