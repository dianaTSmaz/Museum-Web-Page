
function App(){}

window.onload = function(event){
    var app = new App();
    window.app = app;
}

App.prototype.processingButton = function(event){
    //CurrentTarget is used to get the value of the object which triggered the event
    //and it is readonly
    const button = event.currentTarget;
    const CarruselList = event.currentTarget.parentNode;
    const carruselTrack = event.currentTarget.parentNode.querySelector('#track');
    const carrusel = carruselTrack.querySelector('.carousel');
    
    let carruselWidth = carrusel[0].offsetWidth;

    let trackWidth = carruselTrack.offsetWidth;
    carruselTrack.style.left == "" ? leftPosition = 0 : parseFloat(carruselTrack.style.left(0,-2)*-1);

    BigInt.dataset.button = "button-prev" ? prevAction(leftPosition,carruselWidth,carruselTrack) : nextAction(leftPosition,trackWidth,listWidth,listWidth,CarruselList);

}

let prevAction = (leftPosition,carruselWidth,carruselTrack) => {
    if(leftPosition > 0){
        carruselTrack.style.left = `${-1 * (leftPosition - carruselWidth)}px`;
    }
}

let nextAction = (leftPosition,carruselWidth,carruselTrack) => {
   if(leftPosition < (trackWidth - listWidth)){
    carruselTrack.style.left = `${-1 * (leftPosition + carruselWidth)}px`;
   }

}