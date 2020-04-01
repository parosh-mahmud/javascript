var date= new Date()
var today =date.getDate()

switch(today){
    case 0:
        console.log('today is sunday')
        break;
        case 30:
            console.log('today is monday')
            break;
            case 2:
                console.log('today is friday')
                break;
                default:console.log('this is not a valid number')
}
