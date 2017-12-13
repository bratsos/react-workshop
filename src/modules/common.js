export const getDateNow = () => {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  const yyyy = today.getFullYear()
  const hours = today.getHours()
  const minutes = today.getMinutes()

  if (dd < 10) {
      dd = '0' + dd
  }

  if (mm < 10) {
      mm = '0' + mm
  }

  today = `${dd}/${mm}/${yyyy} ${hours}:${minutes}`
  return today
}
