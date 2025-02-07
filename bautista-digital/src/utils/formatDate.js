// src/utils/formatDate.js

import { formatDistanceToNow, parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

export const formatFriendlyDate = (dateString) => {
  const date = parseISO(dateString); // Convierte la fecha en ISO a un objeto Date

  // Calculamos la diferencia en el tiempo
  const distance = formatDistanceToNow(date, { addSuffix: true, locale: es });

  // Si la fecha tiene más de 24 horas, la mostramos en formato dd/mm/yyyy
  const isMoreThan24Hours = (Date.now() - date.getTime()) > 24 * 60 * 60 * 1000;

  if (isMoreThan24Hours) {
    return format(date, 'dd/MM/yyyy'); // Formato dd/mm/yyyy
  } else {
    return distance; // "Hace X minutos", "Hace X horas", etc.
  }
};
