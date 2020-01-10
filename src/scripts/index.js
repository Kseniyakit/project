const week = [
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date(),
    new Date()
]; 

//Storage

const eventsArray = [
    {
        header: 'event1',
        startTime: new Date(2019,11,31,22),
        endTime: new Date(2020,0,1,2),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event2',
        startTime: new Date(2020,0,1,23),
        endTime: new Date(2020,0,1,24),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: undefined,
        startTime: new Date(2020,0,2,9,30),
        endTime: new Date(2020,0,2,11),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event3',
        startTime: new Date(2020,0,6,18),
        endTime: new Date(2020,0,6,19,30),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event4',
        startTime: new Date(2020,0,11,23),
        endTime: new Date(2020,0,12,2),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event5',
        startTime: new Date(2020,0,7,9),
        endTime: new Date(2020,0,7,10),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event6',
        startTime: new Date(2019,11,11,9),
        endTime: new Date(2019,11,11,10),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event7',
        startTime: new Date(2019,11,11,21),
        endTime: new Date(2019,11,12,2),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
    {
        header: 'event8',
        startTime: new Date(2020,0,7,23),
        endTime: new Date(2020,0,7,24),
        description: undefined,
        ident:Math.random().toFixed(10),
    },
];

const monthAndYear = document.querySelector('.header__datenow');

const getMonday = (arr) => {
   
    const currentDay = new Date().getDay()-1;
    const currentDate = new Date().getDate();
    let countDays = currentDay;
    let next = 1;
    for (let i = 0; i < arr.length; i++) {
 
        if (i < currentDay) {
            let date = currentDate - countDays;
            arr[i] = new Date(new Date().setDate(date));
            countDays--;
        } else if (i == currentDay) {
            arr[i] = new Date();
        } else {
            let date = currentDate + next;
           arr[i] = new Date(new Date().setDate(date));
            next++;
        }
    }
    showDate(week);
    showWeek(week);
};


getMonday(week); 

function showDate(arr) {
    let arrMonth = [];
    let arrYear = [];
    let result;
    for (let i = 0; i < arr.length; i++) {
        let m = arr[i].getMonth();
        if (m==0) month=" янв";
if (m==1) month=" фев";
if (m==2) month=" март";
if (m==3) month=" апр";
if (m==4) month=" май";
if (m==5) month=" июнь";
if (m==6) month=" июля";
if (m==7) month=" авг";
if (m==8) month=" сент";
if (m==9) month=" окт";
if (m==10) month=" нояб";
if (m==11) month=" дек";

    
        let year = arr[i].toDateString().split(' ')[3];

        if (arrMonth.indexOf(month) == -1) {
            arrMonth.push(month);
        };
        if (arrYear.indexOf(year) == -1) {
            arrYear.push(year);
        }

    }
    if (arrMonth.length == 1) {
        result = `${arrMonth[0]} ${arrYear[0]}`;
    }
    if (arrMonth.length == 2) {
        result = `${arrMonth[0]} - ${arrMonth[1]} ${arrYear[0]}`;
    }
    if (arrYear.length == 2) {
        result = `${arrMonth[0]} ${arrYear[0]} - ${arrMonth[1]} ${arrYear[1]}`;
    }
    monthAndYear.innerHTML = result;
}




function showWeek(arr){
    const daysContainer = document.querySelector('.days-container');
    daysContainer.innerHTML = '';

    const gmtBlock = document.createElement('div');
    gmtBlock.textContent = 'gmt+02';
    gmtBlock.classList.add('gmt');
    daysContainer.append(gmtBlock);

    for (let i = 0; i < arr.length; i++){
        const oneDay = document.createElement('div');
        oneDay.classList.add('day');
        
        let dayName = document.createElement('span');
       
       
        dayName.classList.add('day-name');
        let dayNum = arr[i].getDay();
        if (dayNum ==1) dName = " ПН";
        if (dayNum==2) dName = " ВТ";
        if (dayNum==3) dName= " СР";
        if (dayNum ==4) dName= " ЧТ";
        if (dayNum==5) dName= " ПТ";
        if (dayNum==6) dName = " СБ";
        if (dayNum ==0) dName = " ВС";
        dayName.textContent = dName;
        oneDay.append(dayName);

        const dayDate = document.createElement('div');
        dayDate.classList.add('day-date');
        dayDate.textContent = arr[i].getDate();
        oneDay.append(dayDate);

        if (week[i].toDateString() == new Date().toDateString()) {
            dayDate.classList.add('day-date_current');
        }
        
        daysContainer.append(oneDay);
    }
};



const todayBtn = document.querySelector('.header__btn-day');
const todayWeekSwitcher = () => {
    getMonday(week);
};
const switchToTodaysWeek = todayBtn.addEventListener('click', todayWeekSwitcher);

const forwardSwitcherBtn = document.querySelector('.header__arrow-btn_arr-right');
const backwardSwitcherBtn = document.querySelector('.header__arrow-btn_arr-left');


function showNextWeek(week) {
    let newWeek = [...week];

    newWeek.map(dateOfDay => {
        const newDate = dateOfDay.getDate();

        dateOfDay = new Date(dateOfDay.setDate(newDate + 7));
    });
    showDate(week);
    showWeek(week);
};
const switchWeekForward = forwardSwitcherBtn.addEventListener('click', showNextWeek.bind(forwardSwitcherBtn, week));



const showPrevWeek = (week) => {
    let newWeek = [...week];

    newWeek.map(dateOfDay => {
        const newDate = dateOfDay.getDate();

        dateOfDay = new Date(dateOfDay.setDate(newDate - 7));
    });
    showDate(week);
    showWeek(week);
};
const switchWeekBackward = backwardSwitcherBtn.addEventListener('click', showPrevWeek.bind(backwardSwitcherBtn, week));

/* main */

const calendar = document.querySelector('.calendar');

 const renderCalendar = () => {
    const week = document.createElement('div');
    week.classList.add('calendar__week-bar');
    calendar.append(week);
    
    for (let i = 1; i <= 7; i++) {
        const day = document.createElement('div');
        day.classList.add('calendar__day-bar');
        day.setAttribute('data-day', i - 1);
        week.append(day);
        
        for (let j = 1; j <= 24; j++) {
            const hour = document.createElement('div');
            hour.classList.add('calendar__hour-bar');
            hour.setAttribute('data-day', i - 1);
            hour.setAttribute('data-hour', j - 1);
            hour.setAttribute('data-id', `${i - 1}${j - 1}`);

        
            day.append(hour);
        }
    }
}
renderCalendar();


function renderSidebar () {
    const sidebar = document.querySelector('.sidebar');
    
    for (let hour = 0; hour < 24; hour++) {
      
      const sidebarHour = document.createElement('div');
      sidebarHour.classList.add('sidebar__hour');
      
      const sidebarHourText = document.createElement('span');
      sidebarHourText.classList.add('sidebar__hour-text');
  
      sidebarHourText.textContent = `${(hour < 10) ? '0' + hour : hour}:00`;
         
      sidebar.append(sidebarHour);
      sidebarHour.append(sidebarHourText);
    }
  
    const firstHour = sidebar.firstChild;
    firstHour.classList.add('sidebar__no-display');
  };
  
  renderSidebar(); 

  
//GenarateEventObject

let firstPoint, lastPoint;
const fileOfHoures = document.querySelectorAll('.calendar__day-bar');

const clearFunc = () => {
    const arrOfHours = document.querySelectorAll('.calander__hour-bar');
    [...arrOfHours].forEach(elem => elem.innerHTML = '');
};



const transformObjectFunc = (element) => {
    const endYearForObj1 = new Date(element.startTime).getFullYear();
    const endMonthForObj1 = new Date(element.startTime).getMonth();
    const endDateForObj1 = new Date(element.startTime).getDate();
    let endTimeForObj1 = new Date(endYearForObj1,endMonthForObj1,endDateForObj1,24);
    
    const startYearForObj2 = new Date(element.endTime).getFullYear();
    const startMonthForObj2 = new Date(element.endTime).getMonth();
    const endDateForObj2 = new Date(element.endTime).getDate();
    const startTimeForObj2 = new Date(startYearForObj2,startMonthForObj2,endDateForObj2);
    const indentificator = Math.random().toFixed(10);

    const obj1 = {
        header: element.header,
        startTime:element.startTime,
        endTime: endTimeForObj1,
        description:element.description,
        ident: indentificator,
    };
    const obj2 = {
        header: element.header,
        startTime:startTimeForObj2,
        endTime: element.endTime,
        description:element.description,
        ident: indentificator,
    };
    eventsArray.push(obj1, obj2);  
};


const forHeight = (object, elem) => {
    if(object.startTime.getMinutes() === 15)elem.style.top = '25%';
    if(object.startTime.getMinutes() === 30)elem.style.top = '50%';
    if(object.startTime.getMinutes() === 45)elem.style.top = '75%';


}
const transformHourFormat = (hour) => {
    if(hour === 13) hour = 1;
    if(hour === 14) hour = 2;
    if(hour === 15) hour = 3;
    if(hour === 16) hour = 4;
    if(hour === 17) hour = 5;
    if(hour === 18) hour = 6;
    if(hour === 19) hour = 7;
    if(hour === 20) hour = 8;
    if(hour === 21) hour = 9;
    if(hour === 22) hour = 10;
    if(hour === 23) hour = 11;
    if(hour === 24) hour = 0;
    return hour;
};

const fillDayPlace = (dayObject) => {
    const startTime = new Date(dayObject.startTime);
    const endTime = new Date(dayObject.endTime);

    let certainHour = startTime.getHours();
  
    let startTimeHour = startTime.getHours();
    startTimeHour = transformHourFormat(startTimeHour);
    let startTimeMinutes = startTime.getMinutes();
  
    let endTimeHour = endTime.getHours();
    endTimeHour = transformHourFormat(endTimeHour);
    let endTimeMinutes = endTime.getMinutes();
    
    if(startTimeMinutes !== 0) {
        startTimeHour += `:${startTimeMinutes}`; 
    }
    if(endTimeMinutes !== 0) {
        endTimeHour += `:${endTimeMinutes}`; 
    }
    
    let certainDay = [...fileOfHoures]
        .find((elem,index) => index === new Date(dayObject.startTime).getDay());
    let certainPlace = [...certainDay.children]
        .find((elem,index) => index === certainHour);
    let tempNum = 12;
    let tempVal;
    [...fileOfHoures].forEach(() => {
        if(startTime.getHours() <= tempNum && endTime.getHours() <= tempNum){
            tempVal = `${startTimeHour} - ${endTimeHour} AM`;
        }
        if(startTime.getHours() <= tempNum && endTime.getHours() > tempNum){
            tempVal = `${startTimeHour} AM - ${endTimeHour} PM`;
        }
        if(startTime.getHours() > tempNum){
            tempVal = `${startTimeHour} - ${endTimeHour} PM`;
        }
    });
   
    const divElem = document.createElement('div');
    const h7Elem = document.createElement('h7');
    dayObject.header ? h7Elem.innerHTML = dayObject.header : h7Elem.innerHTML = "without of header";
    const pElem = document.createElement('p');
    pElem.innerHTML = tempVal;
    divElem.classList.add('calendar__day_object');
    divElem.setAttribute('data-id', dayObject.ident);
    forHeight(dayObject, divElem);
    divElem.append(h7Elem, pElem);
    certainPlace.append(divElem); 
};



const filterCorrectDays = (eventsArray, firstDayOfWeek, lastDayOfWeek) => {
    let firstDateInWeek = new Date(firstDayOfWeek);
    let firstDayYear = firstDateInWeek.getFullYear();
    let firstDayMonth = firstDateInWeek.getMonth();
    let firstDayDate = firstDateInWeek.getDate();
    firstPoint = new Date(firstDayYear, firstDayMonth, firstDayDate);
    
    let lastDateInWeek = new Date(lastDayOfWeek);
    let lastDayYear = lastDateInWeek.getFullYear();
    let lastDayMonth = lastDateInWeek.getMonth();
    let lastDayDate = lastDateInWeek.getDate();
    lastPoint = new Date(lastDayYear, lastDayMonth, lastDayDate+1); 
    
    return eventsArray
        .filter(elem => elem.startTime >= firstPoint && elem.startTime < lastPoint);        
};

const forChangingEventsArray = (array) => {
    array.map((element,index) => {
        if(element.startTime.getDate() !== element.endTime.getDate() && element.endTime.getHours() > 0){
            array.splice(index,1);
            transformObjectFunc(element);
        }
    });
    let tempArr = filterCorrectDays(array,week[0],week[6]);
    tempArr.forEach(elem => fillDayPlace(elem));
};


const renderEventObject = (array) => {
    return forChangingEventsArray(array);    
};

renderEventObject(eventsArray);
