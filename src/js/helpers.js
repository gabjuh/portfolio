'use strict'

export const setTimeperiod = (start, end) => {

  let timeperiod = start
  
  if (end === '') {
    timeperiod = `Since ${start}`
  }

  if (start < end && end !== '') {
    timeperiod = `${start} - ${end}`
  }

  return timeperiod
  
}

export const skipLastBorder = (i, a) => {

  let border = 'border-bottom border-info'
  
  if (i === a.length - 1) {
    border = ''
  }

  return border

}