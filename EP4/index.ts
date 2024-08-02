// function sayhi(dayOfweek: number){
//     if (dayOfweek === 1) {
//         console.log ('อาทิตย์')
//     }else if (dayOfweek === 2) {
//         console.log ('จันทร์')
//     }else if (dayOfweek === 3) {
//         console.log ('อังคาร')
//     }else if (dayOfweek === 4) {
//         console.log ('พุธ')
//     }else if (dayOfweek === 5){
//         console.log ('พฤหัส')
//     }else if (dayOfweek === 6){
//         console.log ('ศุกร์')
//     }else if (dayOfweek === 7){
//         console.log ('เสาร์')
//     }
// }

// sayhi(7)


function Sayhi(dayOfweek: number){
    switch (dayOfweek) {
        case 1 :
            console.log('สวัสดีวันอาทิตย์')
            break
        case 2 :
            console.log('สวัสดีวันจันทร์')
            break
        case 3 :
            console.log('สวัสดีวันอังคาร')
            break
        case 4 :
            console.log('สวัสดีวันพธ')
            break
        case 5 :
            console.log('สวัสดีวันพฤหัส')
            break
        case 6 :
            console.log('สวัสดีวันศุกร์')
            break
        case 7 :
            console.log ('สวัสดีวันเสาร์')
            break
        default:
            console.log ('ระบุวันผิด')
            break                    
    }
}
Sayhi(8)


