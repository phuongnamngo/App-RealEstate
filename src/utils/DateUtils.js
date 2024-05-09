import moment from 'moment';

export const formatTime = date => {
  if (!date) {
    return '';
  }
  const _date = moment(date);
  const result = _date.format(moment.HTML5_FMT.TIME);
  return result;
};

export const formatDateWithDayOfWeek = date => {
  if (!date) {
    return '';
  }
  const _date = moment(date);
  const result = _date.format('dddd DD/MM/YYYY');
  return result;
};

export const formatMonthYear = date => {
  if (!date) {
    return '';
  }
  const _date = moment(date);
  const result = _date.format('M/YYYY');
  return result;
};

export const formatDateTime = date => {
  if (!date) {
    return '';
  }
  const _date = moment(date);
  const result = _date.format('YYYY-MM-DD HH:mm');
  return result;
};
export const formatDateReturn = date => {
  if (!date) {
    return '';
  }
  const _date = moment(date, 'DD/MM/YYYY');
  const result = _date.format('YYYY-MM-DD');
  return result;
};

export const formatDate = date => {
  if (!date) {
    return '';
  }
  const _date = moment(date);
  const result = _date.format('DD/MM/YYYY');
  return result;
};
