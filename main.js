'use strict';

const digitFormat = (digit) => `0${digit}`.slice(-2);

const updateTime = (time) => {
    const seconds = document.querySelector('#seconds');
    const minutes = document.querySelector('#minutes');
    const hours = document.querySelector('#hours');
    const days = document.querySelector('#days');

    const qttSeconds = time % 60;
    const qttMinutes = Math.floor((time % (60 * 60)) / 60);
    const qttHours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
    const qttDays = Math.floor(time / (60 * 60 * 24));

    seconds.textContent = digitFormat(qttSeconds);
    minutes.textContent = digitFormat(qttMinutes);
    hours.textContent = digitFormat(qttHours);
    days.textContent = digitFormat(qttDays);

}

const countdown = (time) => {
    const stopCount = () => clearInterval(IntervalId);
    const count = () => {
        if(time === 0){
            stopCount();
        }
        updateTime(time);
        time--;
    }
    const IntervalId = setInterval(count, 1000);
};

const timeLeft = () => {
    const eventDay = new Date ('2022-03-31 15:00:00');
    const today = Date.now();
    return Math.floor((eventDay - today) / 1000);
}

countdown(timeLeft());