export const toBRL = (value: number): string => {
  return value.toLocaleString("pt-BR", {
    currency: "BRL",
    style: "currency",
  });
};
