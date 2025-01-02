export function getBasePath() {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
}

export function getAssetPath(path: string) {
  return `${getBasePath()}${path}`;
}