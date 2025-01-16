import domain from "./domain";

export function api(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  const path = strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
  const api = `${domain()}api/`;
  return api + path;
}
