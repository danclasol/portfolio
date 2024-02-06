export function getDateDifference(
  date_start: string,
  date_end?: string
): string {
  // Parse the input strings into Date objects
  const start = new Date(date_start);
  const end = new Date(date_end || new Date());

  // Calculate the difference in years and months
  let yearsDiff = end.getFullYear() - start.getFullYear();
  let monthsDiff = end.getMonth() - start.getMonth();

  // Adjust for negative months difference
  if (monthsDiff < 0) {
    yearsDiff--;
    monthsDiff += 12;
  }

  monthsDiff++;

  const formattedDifYear = `(${yearsDiff} year${yearsDiff > 1 ? "s" : ""} `;
  const formattedDifMonth =
    monthsDiff > 0
      ? `and ${monthsDiff} month${monthsDiff > 1 ? "s" : ""})`
      : `)`;

  return formattedDifYear + formattedDifMonth;
}
