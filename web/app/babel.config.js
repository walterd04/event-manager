module.exports = (api) => {
  api.cache.invalidate(() => process.env.NODE_ENV);

  return {
    compact: true,
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-transform-arrow-functions',
      '@babel/plugin-syntax-dynamic-import',
    ],
  };
};
