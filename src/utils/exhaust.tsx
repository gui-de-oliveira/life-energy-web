export function exhaust(value: never): never {
  throw new Error(`Value should be null: ${JSON.stringify(value)}`);
}
