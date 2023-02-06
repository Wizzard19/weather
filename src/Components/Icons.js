

const Icons = (icon) => {
  switch (icon) {
    case 'Soleado':
      icon='weather-icons/clear-day.svg'
      console.log('Limpio dia')
      break;
      
      case 'Nublado':
        icon='weather-icons/cloudy.svg'
        console.log('Limpio dia')
        break;

        case 'Llovizna':
          icon='weather-icons/cloudy.svg'
          console.log('Limpio dia')
          break;
    
  
    default:
      icon='weather-icons/clear-day.svg'
      console.log('default')
  }
  return icon
}

export default Icons