document.getElementById('wbtn').addEventListener('click', function(){
    const dvalue = document.getElementById('wfield').value;
    console.log(dvalue);
    // document.getElementById('wfield').value=null;

    const total_d =  document.getElementById('total-d').innerText;
    document.getElementById('total-d').innerText = dvalue;
});