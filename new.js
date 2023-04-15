const submitButtonCatch=document.getElementById("b1");
const cancel=document.getElementById("b2");
let storage=JSON.parse(localStorage.getItem("mainArr")) || [];
let index=JSON.parse(localStorage.getItem("rowInd")) || null;

function isAlpha(character) {
    return /^[A-Za-z]$/.test(character);
}
function sub()
{
    let formName=document.getElementById("f1");
    let obj={};
    let f=true;
    for(let i=0;i<formName.length;i++)
    {
        let x=formName.elements[i].value;
        if(x=="")
        {
            f=false;
            alert("Please fill up your data properly");
            break;
        }
        else if(i==0 && x.length<3)
        {
            f=false;
            alert("Please put your full name");
            break;
        }
        else if(i==0)
        {
            for(let j=0;j<x.length;j++)
            {
                if(isAlpha(x[j])==false && (x[j]!=' '))
                {
                    f=false;
                    alert("Please put a valid name");
                    break;
                }
            }
        }
        else if(i==2 && (x<=0 || x>7))
        {
            f=false;
            alert("Please put valid number of days");
            break;
        }
        obj[formName.elements[i].name]=formName.elements[i].value;
    }
    if(f)
    {
        alert("Submitted Successfully!");
        //storage.push(obj);
        if(index!=null) 
        {
            storage[index]=obj;
            index=null;
        }
        else {
            storage.push(obj);
        }
        localStorage.setItem("rowInd",JSON.stringify(index));
        localStorage.setItem("mainArr",JSON.stringify(storage));
        formName.reset();
    }
}

submitButtonCatch.addEventListener("click",sub);

if(index!=null)
{
    index--;
    let form=document.getElementById("f1");
    let i=0;
    for(let j in storage[index])
    {
        form.elements[i].value=storage[index][j];
        i++;
    }
}

function rset()
{
    let formName1=document.getElementById("f1");
    formName1.reset();
}
cancel.addEventListener("click",rset);
