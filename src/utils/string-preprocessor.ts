function replaceNewLines(str: string) {
  return str.replaceAll("\n", "<br>");
}

export default function stringPreprocessor<T extends Record<string, any>>(data: T): T {
  for (const key in data) {
    if (typeof data[key] !== "string") return data;

    data[key] = replaceNewLines(data[key]) as T[typeof key];
  }

  console.log(data);
  return data;
}
