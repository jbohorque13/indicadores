// axios
import axios from 'axios';
// config
import config from '~/utils/config';
// utils
import {
  beforeMonth,
  currentMonth,
  currentDay,
  currentYear,
  beforeMonthFormated,
  dayInitial,
  yearInitial,
  monthInitial
} from '~/utils/date';
// constantes
const LAST_DAY_MONTH_FEBRUARY = 28;
const MONTH_FEBRUARY = 2;
const TIMEOUT = 1000
// axios instancia
const instance = axios.create({
  baseURL: config.API_URL,
  timeout: TIMEOUT
});

// Recursos por periodo de fechas
async function getResources (indicator: string) {
  if (
    beforeMonthFormated === MONTH_FEBRUARY &&
    currentDay > LAST_DAY_MONTH_FEBRUARY
  ) { // Si es a igual a mes febrero el mes anterior y el dia actual es mayor a 28
    return instance.get(`/${indicator}/periodo/${beforeMonth}/dias_i/${LAST_DAY_MONTH_FEBRUARY}/${currentMonth}/dias_f/${currentDay}?apikey=${config.API_TOKEN}&formato=json`)
      .then(response => response.data)
      .catch(error => console.error(error));
  } else {
    return instance.get(`/${indicator}/periodo/${beforeMonth}/dias_i/${currentDay}/${currentMonth}/dias_f/${currentDay}?apikey=${config.API_TOKEN}&formato=json`)
      .then(response => response.data)
      .catch(error => console.error(error));
  }
}

// Recursos de hace 10 dias.
async function getResourcesLastTenDays (indicator: string) {
  return instance.get(`/${indicator}/periodo/${yearInitial}/${monthInitial}/dias_i/${dayInitial}/${currentMonth}/dias_f/${currentDay}?apikey=${config.API_TOKEN}&formato=json`)
    .then(response => response.data)
    .catch(error => console.error(error));
 
}

// Recursos por current year
async function getResourcesByYear (indicator: string) {
  return instance.get(`/${indicator}/${currentYear}?apikey=${config.API_TOKEN}&formato=json`)
    .then(response => response.data)
    .catch(error => console.error(error));
}

export {
  getResources,
  getResourcesByYear,
  getResourcesLastTenDays
}