function formatNumber(value) {
  const absValue = Math.abs(value)

  if (absValue >= 1e12) {
    return (value / 1e12).toFixed(2) + ' trillion'
  } else if (absValue >= 1e9) {
    return (value / 1e9).toFixed(2) + ' billion'
  } else if (absValue >= 1e6) {
    return (value / 1e6).toFixed(2) + ' million'
  } else if (absValue >= 1e3) {
    return (value / 1e3).toFixed(2) + ' thousand'
  } else {
    return value.toFixed(2)
  }
}

const formatPrice = (price) => {
  const options = {
    minimumFractionDigits: price <= 0.009 ? 12 : 2,
    maximumFractionDigits: price <= 0.009 ? 12 : 3
  }

  return Number(price).toLocaleString('en-US', options)
}
function timestampToDate(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000)
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' }
  return date.toLocaleDateString('en-GB', options)
}

const formatTimestampChart = (timestamp) => {
  const date = new Date(timestamp * 1000)
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }
  return date.toLocaleDateString('en-US', options)
}

function generate24HourLabels() {
  const currentDate = new Date()
  const lastHour = currentDate.getHours()
  const lastMinute = currentDate.getMinutes()
  const hourLabels = []

  for (let i = 0; i < 24; i++) {
    let labelDate = new Date(currentDate)
    labelDate.setHours(lastHour - i)

    const dayNumeric = labelDate.getDate()
    const monthText = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(labelDate)
    let labelHour = labelDate.getHours()
    const amPm = labelHour < 12 ? 'AM' : 'PM'

    if (labelHour > 12) {
      labelHour -= 12
    } else if (labelHour === 0) {
      labelHour = 12
    }

    const formattedLabel = `${monthText} ${dayNumeric}, ${labelHour
      .toString()
      .padStart(2, '0')}:${lastMinute.toString().padStart(2, '0')} ${amPm}`

    hourLabels.unshift(formattedLabel)
  }

  return hourLabels
}

function getRandomGradient() {
  const gradients = [
    ['#4DFFDF', '#4DA1FF'],
    ['#7517F8', '#E323FF'],
    ['#E323FF', '#7517F8']
  ]

  const randomIndex = Math.floor(Math.random() * gradients.length)
  return (context) => {
    const gradient = context.chart.ctx.createLinearGradient(0, 0, 0, context.chart.height)

    const [startColor, endColor] = gradients[randomIndex]

    gradient.addColorStop(0, startColor)
    gradient.addColorStop(1, endColor)

    return gradient
  }
}

export {
  formatNumber,
  timestampToDate,
  getRandomGradient,
  formatPrice,
  generate24HourLabels,
  formatTimestampChart
}
