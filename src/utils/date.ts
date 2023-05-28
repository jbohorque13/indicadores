// para formartear la fecha en dd/mm/yyyy
const timeFormat: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' }

// fecha actual
const now = new Date();
const lastTenDays = new Date(new Date().setHours(-240, 0, 0));
const current = new Date();
const dateLastYear = new Date(current.setFullYear(
  now.getFullYear() - 1,
  now.getMonth() + 1,
  now.getDate()
))
const lastYearDate = `${dateLastYear.toLocaleDateString('es-ES', timeFormat).substring(6, 10)}/${dateLastYear.toLocaleDateString('es-ES', timeFormat).substring(3, 5)}`;
const currentYear = now.getFullYear();
// currentMonth formato yyyy/mm
const currentMonth = `${now.toLocaleDateString('es-ES', timeFormat).substring(6, 10)}/${now.toLocaleDateString('es-ES', timeFormat).substring(3, 5)}`;
// Fecha del mes pasado.
const before = new Date(now.setMonth(now.getMonth() - 1))
// beforeMonth formato yyyy/mm
const beforeMonth = `${before.toLocaleDateString('es-ES', timeFormat).substring(6, 10)}/${before.toLocaleDateString('es-ES', timeFormat).substring(3, 5)}`;
// dia actual
const currentDay = new Date().getDate();

const beforeMonthFormated: number = parseInt(beforeMonth.substring(beforeMonth.length - 2, beforeMonth.length).trim()); 
const currentMonthFormated: number = parseInt(beforeMonth.substring(beforeMonth.length - 2, beforeMonth.length).trim());


const monthInitial = lastTenDays.getMonth() + 1 > 10 ?
  lastTenDays.getMonth() + 1 :
  '0'+(lastTenDays.getMonth() + 1);

const yearInitial = lastTenDays.getFullYear();

const dayInitial = lastTenDays.getDate() > 10 ?
  lastTenDays.getDate() :
  '0'+lastTenDays.getDate();

export {
  currentMonth,
  beforeMonth,
  currentYear,
  currentDay,
  beforeMonthFormated,
  currentMonthFormated,
  yearInitial,
  monthInitial,
  dayInitial,
  lastYearDate
}