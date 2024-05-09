module.exports = api => {
  const babelEnv = api.env();
  const plugins = [];
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console', {exclude: ['error', 'warn']}]);
  }
  plugins.push([
    'module:react-native-dotenv',
    {
      allowlist: ['API_URL'],
    },
  ]);
  plugins.push([
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.js', '.json', '.tsx', '.ts'],
      alias: {
        '@': './src',
      },
    },
  ]);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins,
  };
};
