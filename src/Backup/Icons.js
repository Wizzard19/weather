const Icons = (icon) => {
  switch (icon) {
    case 'Soleado':
      icon = 'weather-icons/clear-day.svg';
      console.log('Soleado');
      break;
      case 'Parcialmente nublado':
      icon = 'weather-icons/partly-cloudy-day.svg';
      console.log('Parcialmente nublado');
      break;
      case 'Nublado':
      icon = 'weather-icons/cloudy.svg';
      console.log('Nublado');
      break;
      case 'Cielo cubierto':
      icon = 'weather-icons/cloudy.svg';
      console.log('Cielo cubierto');
      break;
      case 'Neblina':
      icon = 'weather-icons/mist.svg';
      console.log('Neblina');
      break;
      case 'Lluvia  moderada a intervalos':
      icon = 'weather-icons/rain.svg';
      console.log('Lluvia  moderada a intervalos');
      break;
      case 'Nieve moderada a intervalos en las aproximaciones':
      icon = 'weather-icons/snowflakes.svg';
      console.log('Nieve moderada a intervalos en las aproximaciones');
      break;
      case 'Llovizna helada a intervalos en las aproximaciones':
      icon = 'weather-icons/sleet.svg';
      console.log('Llovizna helada a intervalos en las aproximaciones');
      break;
      case 'Cielos tormentosos en las aproximaciones':
      icon = 'weather-icons/thunderstorms.svg';
      console.log('Cielos tormentosos en las aproximaciones');
      break;
      case 'Chubascos de nieve':
      icon = 'weather-icons/Snowflake.svg';
      console.log('Chubascos de nieve');
      break;
      case 'Ventisca':
      icon = 'weather-icons/wind.svg';
      console.log('Ventisca');
      break;
      case 'Niebla moderada':
      icon = 'weather-icons/mist.svg';
      console.log('Niebla moderada');
      break;
      case 'Niebla helada':
      icon = 'weather-icons/mist.svg';
      console.log('Niebla helada');
      break;
      case 'Llovizna a intervalos':
      icon = 'weather-icons/rain.svg';
      console.log('Llovizna a intervalos');
      break;
      case 'Llovizna':
      icon = 'weather-icons/rain.svg';
      console.log('Llovizna');
      break;
      case 'Llovizna helada':
      icon = 'weather-icons/rain.svg';
      console.log('Llovizna helada');
      break;
      case 'Fuerte llovizna helada':
      icon = 'weather-icons/rain.svg';
      console.log('Fuerte llovizna helada');
      break;
      case 'Lluvias ligeras a intervalos':
			icon = 'weather-icons/rain.svg';
			console.log('Lluvias ligeras a intervalos');
			break;
			case 'Ligeras lluvias':
			icon = 'weather-icons/rain.svg';
			console.log('Ligeras lluvias');
			break;
			case 'Periodos de lluvia moderada':
			icon = 'weather-icons/rain.svg';
			console.log('Periodos de lluvia moderada');
			break;
			case 'Lluvia moderada':
			icon = 'weather-icons/rain.svg';
			console.log('Lluvia moderada');
			break;
			case 'Periodos de fuertes lluvias':
			icon = 'weather-icons/thunderstorms-rain.svg';
			console.log('Periodos de fuertes lluvias');
			break;
			case 'Fuertes lluvias':
			icon = 'weather-icons/thunderstorms-rain.svg';
			console.log('Fuertes lluvias');
			break;
			case 'Ligeras lluvias heladas':
			icon = 'weather-icons/rain.svg';
			console.log('Ligeras lluvias heladas');
			break;
			case 'Lluvias heladas fuertes o moderadas':
			icon = 'weather-icons/rain.svg';
			console.log('Lluvias heladas fuertes o moderadas');
			break;
			case 'Ligeras precipitaciones de aguanieve':
			icon = 'weather-icons/sleet.svg';
			console.log('Ligeras precipitaciones de aguanieve');
			break;
			case 'Aguanieve fuerte o moderada':
			icon = 'weather-icons/sleet.svg';
			console.log('Aguanieve fuerte o moderada');
			break;
			case 'Nevadas ligeras a intervalos':
			icon = 'weather-icons/sleet.svg';
			console.log('Nevadas ligeras a intervalos');
			break;
			case 'Nevadas ligeras':
			icon = 'weather-icons/snow.svg';
			console.log('Nevadas ligeras');
			break;
			case 'Nieve moderada a intervalos':
			icon = 'weather-icons/snow.svg';
			console.log('Nieve moderada a intervalos');
			break;
			case 'Nieve moderada':
			icon = 'weather-icons/snow.svg';
			console.log('Nieve moderada');
			break;
			case 'Nevadas intensas':
			icon = 'weather-icons/snow.svg';
			console.log('Nevadas intensas');
			break;
			case 'Fuertes nevadas"':
			icon = 'weather-icons/thunderstorms-snow.svg';
			console.log('Fuertes nevadas"');
			break;
			case 'Granizo':
			icon = 'weather-icons/hail.svg';
			console.log('Granizo');
			break;
			case 'Ligeras precipitaciones':
			icon = 'weather-icons/rain.svg';
			console.log('Ligeras precipitaciones');
			break;
			case 'Lluvias fuertes o moderadas':
			icon = 'weather-icons/thunderstorms-rain.svg';
			console.log('Lluvias fuertes o moderadas');
			break;
			case 'Lluvias torrenciales':
			icon = 'weather-icons/thunderstorms-rain.svg';
			console.log('Lluvias torrenciales');
			break;
			case 'Ligeros chubascos de aguanieve':
			icon = 'weather-icons/sleet.svg';
			console.log('Ligeros chubascos de aguanieve');
			break;
			case 'Chubascos de aguanieve fuertes o moderados':
			icon = 'weather-icons/snowflake.svg';
			console.log('Chubascos de aguanieve fuertes o moderados');
			break;
			case 'Ligeras precipitaciones de nieve':
			icon = 'weather-icons/snowflake.svg';
			console.log('Ligeras precipitaciones de nieve');
			break;
			case 'Chubascos de nieve fuertes o moderados':
			icon = 'weather-icons/thunderstorms-snow.svg';
			console.log('Chubascos de nieve fuertes o moderados');
			break;
			case 'Ligeros chubascos acompañados de granizo':
			icon = 'weather-icons/hail.svg';
			console.log('Ligeros chubascos acompañados de granizo');
			break;
			case 'Chubascos fuertes o moderados acompañados de granizo':
			icon = 'weather-icons/hail.svg';
			console.log('Chubascos fuertes o moderados acompañados de granizo');
			break;
			case 'Intervalos de lluvias ligeras con tomenta en la región':
			icon = 'weather-icons/rain.svg';
			console.log('Intervalos de lluvias ligeras con tomenta en la región');
			break;
			case 'Lluvias con tormenta fuertes o moderadas en la región':
			icon = 'weather-icons/rain.svg';
			console.log('Lluvias con tormenta fuertes o moderadas en la región');
			break;
			case 'Nieve moderada con tormenta en la región':
			icon = 'weather-icons/snow.svg';
			console.log('Nieve moderada con tormenta en la región');
			break;
			case 'Nieve moderada o fuertes nevadas con tormenta en la región':
			icon = 'weather-icons/thunderstorms-snow.svg';
			console.log('Nieve moderada o fuertes nevadas con tormenta en la región');
			break;
			case 'Despejado':
			icon = 'weather-icons/clear-night.svg';
			console.log('Despejado');
			break;
    
    default:
      icon = 'weather-icons/barometer.svg';
      console.log('Default, corregir');
  }
  return icon;
};

export default Icons;
