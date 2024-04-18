export function toRaws(args) {
  if (!args || Object.keys(args).length === 0) {
    return {};
  }
  return JSON.stringify(args);
}
