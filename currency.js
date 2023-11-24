fetch('https:api.frankfurter.app/currencies')
.then(res=>(res.json()))
.then(res=>displayDropdown(res))

let select=document.querySelectorAll('.currency')

let btn=document.getElementById('btn')
let input=document.getElementById('input')
console.log(input)


function displayDropdown(res){
    //console.log(Object.entries(res)[0][0])
    let cur=Object.entries(res)
    for(i=0;i<cur.length;i++){
        let opt=` <option value="${cur[i][0]}">${cur[i][0]}</option>`
        select[0].innerHTML +=opt
        select[1].innerHTML +=opt
    }
}
btn.addEventListener('click',()=>{
    let cur1 =select[0].value
    let cur2 =select[1].value
    let inputVal =input.value
    console.log(cur1)
    console.log(cur2)
    
    
    if(cur1===cur2){
     alert('invalid pair')
    }
    else
        convert(cur1,cur2,inputVal)
    
    
});

function convert(cur1,cur2,inputVal){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputVal}&from=${cur1}&to=${cur2}`)
      .then(resp => resp.json())
      .then((data) => {
        document.getElementById('result').value=Object.values(data.rates)[0]
        console.log(Object.values(data.rates))
        
      });
}