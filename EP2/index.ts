
function grade(homework: number, midterm: number, final: number ){
    let score: number = homework + midterm + final

    if (score <50){
        return 'เกรด F'
    }else if (score < 60){
        return 'เกรด D'
    }else if (score < 70){
        return 'เกรด c'
    }
        

}
console.log(grade(20,10,30))
  