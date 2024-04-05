var hoten=document.querySelector(".name__formdk");
var email=document.querySelector(".email__formdk");
var password=document.querySelector(".password__formdk");
var repassword=document.querySelector(".repassword__formdk");
var dk=document.querySelector(".dk");
var bug1=document.querySelector(".bug1");
var bug2=document.querySelector(".bug2");
var bug3=document.querySelector(".bug3");
var bug4=document.querySelector(".bug4");
function bugname()
{
    var valuehoten=hoten.value;
    if(valuehoten.length<5)
    {
        bug1.textContent="Tên không hợp lệ !";
    }
    else
    {
        bug1.textContent="";
        return true;
    }
};
function bugemail()
{
    var valueemail=email.value;
    var checkvalueemail=valueemail.indexOf("@gmail.com");
    if(checkvalueemail===-1)
    {
        bug2.textContent="Email không hợp lệ !";
    }
    else{
        bug2.textContent="";
        return true;
    }
};
function bugpassword()
{
    var valuepassword=password.value;
    if(valuepassword.length<5)
    {
        bug3.textContent="Mật khẩu quá yếu !";
    }
    else{
        bug3.textContent="";
        return true;
    }
};
function bugrepassword()
{
    var valuerepassword=repassword.value;
    if(valuerepassword!==password.value)
    {
        bug4.textContent="Mật khẩu nhập lại không đúng !";
    }
    else 
    {
        bug4.textContent="";
        return true;
    }
};
    hoten.addEventListener('blur',bugname);
    email.addEventListener('blur',bugemail);
    password.addEventListener('blur',bugpassword);
    repassword.addEventListener('blur',bugrepassword);
    dk.addEventListener('click',function(dkitems)
    {
        if(bugname() && bugemail() && bugpassword() && bugrepassword())
        {
            return;
        }
        else{
            dkitems.preventDefault();
        }
    });


