const getSleepHours = day => {
    day = day.toLowerCase();
    switch (day) {
      case 'monday':
      return 8;
      break;
      case 'tuesday':
      return 7;
      break;
      case 'wednesday':
      return 8;
      break;
      case 'thursday':
      return 5;
      break;
      case 'friday':
      return 6;
      break;
      case 'saturday':
      return 7;
      break;
      case 'sunday':
      return 4;
      break;
      }
    }
  
  
  const getActualSleepHours = () => (
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday')
    );
  
    const getIdealSleepHours = () => {
      const idealHours = 8;
      return idealHours * 7;
    }
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You have the perfect amount of sleep')
    } 
    if (actualSleepHours > idealSleepHours) {
      console.log('You sleep too much, you slept ' + (idealSleepHours - actualSleepHours) + 'hour(s) more!.');
    };
    if (actualSleepHours < idealSleepHours ) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week, get some rest' )
    }
  }
  calculateSleepDebt()