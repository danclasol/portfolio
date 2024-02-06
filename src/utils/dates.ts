import { getI18N } from "../i18n";

export function getDateDifference(
  date_start: string,
  date_end?: string,
  currentLocale: string = "es"
): string {
  const i18n = getI18N({ currentLocale });
  const yearLabel = i18n.YEAR_LABEL;
  const yearsLabel = i18n.YEARS_LABEL;
  const monthLabel = i18n.MONTH_LABEL;
  const monthsLabel = i18n.MONTHS_LABEL;
  const dateLinkLabel = i18n.DATES_LINK_LABEL;

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

  const formattedDifYear = `(${yearsDiff} ${
    yearsDiff > 1 ? yearsLabel : yearLabel
  } `;
  const formattedDifMonth =
    monthsDiff > 0
      ? `${dateLinkLabel} ${monthsDiff} ${
          monthsDiff > 1 ? monthsLabel : monthLabel
        })`
      : `)`;

  return formattedDifYear + formattedDifMonth;
}
