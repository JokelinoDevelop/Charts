import { formatPrice } from '@/services/utilityFunctions.js'

const options = {
  animation: false,
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
  interaction: {
    intersect: false,
    mode: 'index'
  },
  plugins: {
    legend: {
      display: false
    },
    label: {
      display: false
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const value = context.parsed.y // Access the numeric value
          return ' $ ' + formatPrice(value) // Adjust the number of decimals here
        }
      }
    }
  }
}

export { options }
