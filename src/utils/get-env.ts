export function getEnv<T>(key: string, type: T): T {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing Environment variable ${key}`);
  }

  if (typeof value !== typeof type) {
    throw new Error(`Environment variable ${key} is not a ${typeof type}`);
  }
  return value as T;
}
