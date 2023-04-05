export const formatCurrency = (val: number) => {
  return `Rp${Intl.NumberFormat().format(val).replace(/,/g, '.')}`
}
