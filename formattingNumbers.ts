export const billionToTrillion = (value: any) => {
  const num = Number(value);
  if (isNaN(num)) return value?.toString();

  if (num >= 1_000_000_000_000) {
    // Trillions
    const trillions = num / 1_000_000_000_000;
    return trillions % 1 === 0
      ? `${trillions}T`
      : `${Math.floor(trillions * 10) / 10}T`; // 1 decimal place without rounding up
  }

  if (num >= 1_000_000_000) {
    // Billions
    const billions = num / 1_000_000_000;
    return billions % 1 === 0
      ? `${billions}B`
      : `${Math.floor(billions * 10) / 10}B`; // 1 decimal place without rounding up
  }

  if (num >= 1_000) {
    // Thousands
    return new Intl.NumberFormat('en-US').format(num);
  }

  return num.toString();
};
