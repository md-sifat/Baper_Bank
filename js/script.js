document.getElementById('btn').addEventListener('click' , function(){
    const email =  document.getElementById('mail').value;
    const pass =  document.getElementById('pass').value;
    if (email === '' || pass=== '') {
        alert('Invalid User');
    }
    else
    {
        window.location.href = 'bank.html';
    }
});