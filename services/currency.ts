export const currency = (price: number) => {
  const moneyCurrency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);

  return moneyCurrency;
}