let lst = [ { id: 1, name: "John" }, { id: 2, name: "Jane" }, { id: 3, name: "Paul" } ]

// 요소 추가
let newLst = lst.concat({ id: 4, name: "Ken" })
console.log("concat =====")
console.log(lst)
console.log(newLst)
console.log(lst === newLst)

// 요소 변경
let updatedId = 2
let updatedName = "Smith"
let updatedLst = lst.map(item => {
    if(item.id === updatedId) {
        item = { ...item, name: updatedName }
    }
    return item
})
console.log("map =====")
console.log(lst)
console.log(updatedLst)
console.log(lst === updatedLst)

// 요소 삭제
let removedId = 1
let removedLst = lst.filter(item => {
    return item.id !== removedId
})
console.log("filter =====")
console.log(lst)
console.log(removedLst)
console.log(lst === removedLst)

// map, filter 사용하지 않고 요소 변경, 삭제하기
console.log("");
console.log("Quiz ===================================")
console.log("처음 리스트 ========")
console.log(lst);
console.log("map 사용하지 않고 요소 변경 ========")
let noMapList = [...lst];
noMapList[0].name = "Bhark";
console.log(noMapList);
console.log("참조가 같다/다르다 : ", lst===noMapList);

console.log("filter 사용하지 않고 요소 삭제 ========")
let noFilterList = [...lst];
noFilterList.splice(0, 1);
console.log(noFilterList);
console.log("참조가 같다/다르다 : ", lst===noFilterList);