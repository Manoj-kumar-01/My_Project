const myname=document.getElementById('myname');
const partnername=document.getElementById('partnername');
const button=document.getElementById('button');
const scooter=document.getElementById('scooter');
const display=document.getElementById('displayFlames');

button.addEventListener('click',()=>{

    let x=0;
    scooter.classList.add('scooty');

    setTimeout(() => {

    let mynamevalue=myname.value;
    let partnernamevalue=partnername.value;
    if(mynamevalue=="" || partnernamevalue=="")
    {
        alert('please enter a valid name!');
    }
    else{
        display.classList.add('display1');

       let arr1=mynamevalue.split('')
       let arr2=partnernamevalue.split('')
       for(let i=0;i<arr1.length;i++)
       {
        for(let j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j])
            {
                arr1.splice(i,1);
                i--;
                arr2.splice(j,1);
            }
        }
       }
        let res1=arr1.join('');
        let res2=arr2.join('');
        let res=arr1.length+arr2.length

        let arr = ['F', 'L', 'A', 'M', 'E', 'S'];
         let index = 0; 
         while (arr.length > 1)
             {
                 index = (index + res - 1) % arr.length;
                arr.splice(index, 1);
            }
        switch(arr[0])
        {
            case 'F': display.textContent = "Friends"; 
                break;
            case 'L': display.textContent = "Love";
                break; 
            case 'A': display.textContent = "Affection";
                break;
            case 'M': display.textContent = "Marriage";
                break; 
            case 'E': display.textContent = "Enemies"; 
                break;
            case 'S': display.textContent = "Siblings"; 
                break;
        }
        
    }
}, 2000);
})