// axios
import axios from 'axios';

// config
import config from '~/utils/config';

// para formartear la fecha en dd/mm/yyyy
const timeFormat: Intl.DateTimeFormatOptions = { month: '2-digit', day: '2-digit', year: 'numeric' }

// fecha actual
const now = new Date();
const currentYear = now.getFullYear();
const currentDate = `${now.toLocaleDateString('es-ES', timeFormat).substring(6, 10)}/${now.toLocaleDateString('es-ES', timeFormat).substring(3, 5)}`; 
// fecha del mes pasado.
const before = new Date(now.setMonth(now.getMonth() - 1))
const beforeDate = `${before.toLocaleDateString('es-ES', timeFormat).substring(6, 10)}/${before.toLocaleDateString('es-ES', timeFormat).substring(3, 5)}`;

// axios
const instance = axios.create({
  baseURL: config.API_URL,
  timeout: 1000
});

// Recursos por periodo de fechas
async function getResources (indicator: string) {
  const currentDay = new Date().getDate();
  // Verificar si el mes es febrero y entonces si el dia es mayor a 28 por ejemplo del dia actual 30 entonces llevarlo a 28
  const month: number = parseInt(beforeDate.substring(beforeDate.length - 2, beforeDate.length).trim()); // ultimos dos digitos de 2023/[10] ejemplo
  console.log(month);
  if (month === 2 && currentDay > 28) { // si es a igual a mes febrero el mes anterior y el dia actual es mayor a 28
    return instance.get(`/${indicator}/periodo/${beforeDate}/dias_i/28/${currentDate}/dias_f/${currentDay}?apikey=${config.API_TOKEN}&formato=json`).then(response => response.data).catch(error => console.error(error));
  } else {
    return instance.get(`/${indicator}/periodo/${beforeDate}/dias_i/${currentDay}/${currentDate}/dias_f/${currentDay}?apikey=${config.API_TOKEN}&formato=json`).then(response => response.data).catch(error => console.error(error));
  }
}

// Recursos por current year
async function getResourcesByYear (indicator: string) {
  return instance.get(`/${indicator}/${currentYear}?apikey=${config.API_TOKEN}&formato=json`).then(response => response.data).catch(error => console.error(error));
}

export {
  getResources,
  getResourcesByYear
}