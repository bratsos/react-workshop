export const getDateNow = () => {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth()+1; //January is 0!
  let yyyy = today.getFullYear();
  let hours = today.getHours();
  let minutes = today.getMinutes();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = `${dd}/${mm}/${yyyy} ${hours}:${minutes}`;
  return today;
};