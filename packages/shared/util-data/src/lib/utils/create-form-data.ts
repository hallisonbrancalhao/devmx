export function createFormData<T extends object>(values: T) {
  const data = new FormData();

  for (const [name, value] of Object.values(values)) {
    data.append(name, value);
  }

  return data;
}
