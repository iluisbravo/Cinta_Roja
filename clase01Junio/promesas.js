const promesa = new Promise( (resolve, reject) => {
    const numero = 6;
    setTimeout(() => {
        if(numero > 5){
            resolve('Si es mayor a 5');
        }
        else{
            reject('No es mayor a 5');
        }
    },2000);
});

promesa.then(data => console.log(data))
       .catch(error => console.log(err));