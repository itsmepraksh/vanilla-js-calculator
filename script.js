

let keys = document.querySelector('.part2')


 let history ="", currentInp = "";

function cacli(value){

    // console.log(value)

    let nums = [0,1,2,3,4,5,6,7,8,9,"."]
    let op = ['+','-','/','*','%'] 
    
    if(op.includes(value)){
        // console.log(value)
        history+=value 
        document.querySelector('.part1 h4').innerText = history
    }

    if(nums.includes(Number(value))  || value == "." ){
        // console.log(value) 
        currentInp += value
        document.querySelector('.part1 h1').innerText = currentInp;
        
        document.querySelector('.part1 h1').classList.add('truncate')
        history+=currentInp
        document.querySelector('.part1 h4').innerText = history
        currentInp = ""
    }  

    if(value == 'enter'){ 

        try {     
            let result = eval(history); 
            document.querySelector('.part1 h1').innerText = result;
            document.querySelector('.part1 h4').innerText = history;
            // console.log(result)
        } catch (error) {
            history = '',
            currentInp =''
            alert('try again')
        }
    }

    if(value == 'ac'){
        history = '',
        currentInp = ''
        document.querySelector('.part1 h1').innerText = '0';
        document.querySelector('.part1 h4').innerText = history

    }

    if(value == 'del'){
        
        // console.log(history,'ye del')
        currentInp = ''
        history = history.slice(0,-1)
        // console.log(history)
        document.querySelector('.part1 h1').innerText = '0';
        document.querySelector('.part1 h4').innerText = history
        

    }


    // console.log('final history',history)

}

function calculation(inp){ 

    if(inp.length>1 || inp.length<1){ 
        if(inp == 'ac' || inp == 'del' || inp == 'enter' || inp =='.'){ 
            cacli(inp)
        } else{
        // console.warn('error')

        }
    }else {
        cacli(inp)
    }
}


keys.addEventListener('click',function(e){
    e.preventDefault()

    calculation(e.target.innerText)
 
})