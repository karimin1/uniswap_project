module.exports = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        console: false, // Fix 'console' module not found error
        fs: false,
        module: false,
        child_process: false,
        net: false,  // Fix 'net' module not found error
        tls: false,  // Fix 'tls' module not found error
      };
    }
    return config;
  },
};
