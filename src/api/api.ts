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
  return instance.get(`/${indicator}/periodo/${beforeDate}/dias_i/${currentDay}/${currentDate}/dias_f/${currentDay}?apikey=${config.API_TOKEN}&formato=json`).then(response => response.data).catch(error => console.error(error));
}

// Recursos por current year
async function getResourcesByYear (indicator: string) {
  return instance.get(`/${indicator}/${currentYear}?apikey=${config.API_TOKEN}&formato=json`).then(response => response.data).catch(error => console.error(error));
}

export {
  getResources,
  getResourcesByYear
}