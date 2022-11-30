const plainNumberToUSD = (price: number): string => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'usd',
  });

  return formatter.format(price);
};

export { plainNumberToUSD };
