แบบฝึกหัดของ วัชรพล กอแก้ว
//for loop
// let sum: number = 0

// for (let i = 1; i <= 365; i++){
//     sum = sum + i
    
// }
//     console.log('total: ', sum)

// do loop

// let i: number = 1
// let sum: number = 0

// do{
//     sum = sum + i
//     i++
// }while(i <= 365)
//     console.log('total: ', sum)




// let i: number = 1
// let sum: number = 0

// for (let j = 1; j < 10; j++){
//     i = i * 5

// while(i <= 365){
//     sum = sum + i
//     i++
// }

// }

// console.log('total: ', sum)


// let sum: number = 0
// let isBeark: boolean = false
// let row: number = 0

// while(true){
//     console.log('วิพูลลวิล่าโสด')
//     row ++
//     if (row === 3) {
//         break
//     }
// }

// let car1: string = 'Honda'
// let car2: string = 'Yamaha'
// let car3: string = 'Toyota'
// let car4: string = 'Suzuki'


const cars: string[] = ['Honda','Yamaha','Toyota','Suzuki','Mazda']

for (let i = 0; i < cars.length ; i++){
    if(cars[i] === 'Yamaha'){
        console.log('รถซื้อแกง จะไปแรงได้ยังไง')
    }
}

    

    console.log(cars)


const cars: string[] = ['Honda','Yamaha','Toyota','Suzuki','Mazda']

for (let i = 0; i < cars.length ; i++){
    if(cars[i] === 'Yamaha'){
        console.log('รถซื้อแกง จะไปแรงได้ยังไง')
    }
}

    

    console.log(cars)

cars.forEach(function(C) {
    console.log(C)
})