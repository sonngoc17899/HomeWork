let images = { 	
    "name": "images", 	
    "isFolder": true,
    "content":[
    { 			
        "name": "background.jpg",
        "isFolder": false,	
        "content": []
    },
    {
        "name": "forceground.jpg",
        "isFolder": false,
        "content": []
    },
    {
        "name": "my travel",
        "isFolder": true,
        "content": [
        {
            "name": "ha noi",
            "isFolder": true,
            "content": [
            {
                "name": "pho-co.jpg",
                "isFolder": false,
                "content": []
            },
            {
                "name": "ho-guom.jpg",
                "isFolder": false,
                "content": []
            }
            ]
        },
        {
            "name": "check-in.jpg",
            "isFolder": false,
            "content": []
        }
        ]
    }
    ]
}
let findFile = prompt("Nhập tên file cần tìm: ");
// function find(a, str){
//     let result = [];
//     if(a.isFolder === false){
//         if(a.name.search(str)>=0){
//             result.push(a.name);
//         }
//     }
//     else{
//         for (const childa of a.content) {
//             let r = find(childa);
//             result = result.concat(r);  
//         }
//     }
//     return result;
// }
function find(a, str){
    let allFile = [];
    let key = "c";
    allFile.push(images);
    while(allFile.length>0)
    {
        let a = allFile.shift();
        if(a.isFolder === false){
            if(a.name.search(key)>=0){
                console.log(a.name);
            }
        }
    else{
        allFile = allFile.concat(a.content); // push(...a.content)
    }
}
}
console.table(find(images,findFile));



