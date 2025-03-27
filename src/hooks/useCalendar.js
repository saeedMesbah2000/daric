import React from "react";

const gregorianmonths = [
  "Janary",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const jalalimonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const useCalendar = () => {
  // Convert Jalali (Persian) date to Gregorian date
  function gregorianToJalali(gregorianYear, gregorianMonth, gregorianDay) {
    let jalaliYear = gregorianYear - 621;

    // Determine if the Jalali and Gregorian years are leap years
    const isJalaliLeapYear = isJalaliLeap(jalaliYear);
    const isGregorianLeapYear = isGregorianLeap(gregorianYear);

    // Define the start of the Jalali year in Gregorian calendar
    const startJalaliDate = isGregorianLeapYear
      ? new Date(gregorianYear, 2, 20) // March 20 in Gregorian leap year
      : new Date(gregorianYear, 2, 21); // March 21 in Gregorian non-leap year

    // Create the input Gregorian date object
    const inputGregorianDate = new Date(
      gregorianYear,
      gregorianMonth - 1,
      gregorianDay
    );

    // Calculate the difference in days
    const daysDifference = Math.floor(
      (inputGregorianDate - startJalaliDate) / (24 * 60 * 60 * 1000)
    );

    // Define days in each Jalali month
    const daysInEachJalaliMonth = [
      31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29,
    ];
    if (isJalaliLeapYear) daysInEachJalaliMonth[11] = 30; // Adjust for Jalali leap year

    // Determine Jalali month and day
    let jalaliMonth = 1;
    let jalaliDay = 1;
    let daysAccumulated = 0;

    for (let i = 0; i < daysInEachJalaliMonth.length; i++) {
      if (daysDifference < daysAccumulated + daysInEachJalaliMonth[i]) {
        jalaliMonth = i + 1;
        jalaliDay = daysDifference - daysAccumulated + 1;
        break;
      }
      daysAccumulated += daysInEachJalaliMonth[i];
    }

    // If the daysDifference is negative, adjust to the previous Jalali year
    if (daysDifference < 0) {
      const previousJalaliYear = jalaliYear - 1;
      const isPreviousJalaliLeap = isJalaliLeap(previousJalaliYear);
      const daysInPreviousJalaliYear = isPreviousJalaliLeap ? 366 : 365;
      const adjustedDaysDifference = daysInPreviousJalaliYear + daysDifference;

      jalaliYear = previousJalaliYear;
      daysAccumulated = 0;

      for (let i = 0; i < daysInEachJalaliMonth.length; i++) {
        if (
          adjustedDaysDifference <
          daysAccumulated + daysInEachJalaliMonth[i]
        ) {
          jalaliMonth = i + 1;
          jalaliDay = adjustedDaysDifference - daysAccumulated + 1;
          break;
        }
        daysAccumulated += daysInEachJalaliMonth[i];
      }
    }

    return {year: jalaliYear, month: jalaliMonth, day: jalaliDay};
  }

  const result = gregorianToJalali(2024, 3, 12);

  // Convert Gregorian date to Jalali (Persian) date
  function gregorianToJalali(gregorianYear, gregorianMonth, gregorianDay) {
    const jalaliYear = gregorianYear - 621;

    // Determine if the Gregorian and Jalali years are leap years
    const isGregorianLeapYear = isGregorianLeap(gregorianYear);
    const isJalaliLeapYear = isJalaliLeap(jalaliYear);

    // Define the start of the Jalali year in Gregorian calendar
    const startJalaliDate = isGregorianLeapYear
      ? new Date(gregorianYear, 2, 20) // March 20 in Gregorian leap year
      : new Date(gregorianYear, 2, 21); // March 21 in Gregorian non-leap year

    // Create the input Gregorian date
    const inputGregorianDate = new Date(
      gregorianYear,
      gregorianMonth - 1,
      gregorianDay
    );

    // Calculate the difference in days between the input date and the Jalali year start
    const daysDifference = Math.floor(
      (inputGregorianDate - startJalaliDate) / (24 * 60 * 60 * 1000)
    );

    // Adjust for cases where the Gregorian date is before the start of the Jalali year
    if (daysDifference < 0) {
      const previousJalaliYear = jalaliYear - 1;
      const isPreviousJalaliLeap = isJalaliLeap(previousJalaliYear);

      const daysInPreviousJalaliYear = isPreviousJalaliLeap ? 366 : 365;
      const adjustedDaysDifference = daysInPreviousJalaliYear + daysDifference;

      return calculateJalaliDate(
        previousJalaliYear,
        adjustedDaysDifference,
        isPreviousJalaliLeap
      );
    }

    // Otherwise, calculate the Jalali date in the current year
    return calculateJalaliDate(jalaliYear, daysDifference, isJalaliLeapYear);
  }

  function calculateJalaliDate(year, daysDifference, isLeapYear) {
    const daysInEachJalaliMonth = [
      31, 31, 31, 31, 31, 31, 30, 30, 30, 30, 30, 29,
    ];
    if (isLeapYear) daysInEachJalaliMonth[11] = 30;

    let month = 1;
    let day = 1;
    let daysAccumulated = 0;

    for (let i = 0; i < daysInEachJalaliMonth.length; i++) {
      if (daysDifference < daysAccumulated + daysInEachJalaliMonth[i]) {
        month = i + 1;
        day = daysDifference - daysAccumulated + 1;
        break;
      }
      daysAccumulated += daysInEachJalaliMonth[i];
    }

    return {year, month, day};
  }

  // Calculate the total number of days from the start of the Jalali year
  function calculateDaysFromStartOfYear(month, day, daysInEachMonth) {
    let totalDays = 0;
    for (let i = 0; i < month - 1; i++) totalDays += daysInEachMonth[i];
    totalDays += day - 1;
    return totalDays;
  }

  function isGregorianLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function isJalaliLeap(year) {
    const cycleYear = ((year - (year > 0 ? 474 : 473)) % 2820) + 474;
    return ((cycleYear + 38) * 682) % 2816 < 682;
  }

  // Expose the utility functions
  return {gregorianToJalali};
};

export default useCalendar;
