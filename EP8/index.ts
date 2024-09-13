
/// 

onlyThai: function () {
    return this.data.filter(function (element, index) {
        return element.language === 'thai'
    })
},
onlyEnglish: function () {
    return this.data.filter(function (element, index) {
        return element.language === 'english'
    })
},
onlythaiPbs: function () {
    return this.data.filter(function (element, index) {
        return element.source_id === 'thaipbs'
    })
},
}
console.log(news.onlythaiPbs())



///ตารางฟุตบอล หาที่1
Champions: Function(){
    return this.standings.filter(function(element,index){
        return element.rank === 1
    })                                      