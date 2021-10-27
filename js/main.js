
const person = [
    {
        name: 'Nermeen',
        age: 22,
        img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
        dob: '20 Jul 1999',
    },

    {
        name: 'Farah',
        age: 32,
        img: 'https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg',
        dob: '20 Jul 1988',
    },


    {
        name: 'Tareq',
        age: 30,
        img: 'https://www.w3schools.com/howto/img_avatar.png',
        dob: '14 Oct 1999',
    },


    {
        name: 'Rakan',
        age: 25,
        img: 'https://www.w3schools.com/howto/img_avatar.png',
        dob: '14 Oct 1999',
    },
    {
        name: 'Noor',
        age: 33,
        img: 'https://www.w3schools.com/howto/img_avatar2.png',
        dob: '14 Oct 1999',
    },
];
var divElement = document.createElement('div');
var date = new Date()
var month = date.toLocaleString('en-US', { month: 'short' })
var day = date.getDate();
var today = day + ' ' + month;
var counter=0;

    var cardContainer = document.querySelector('.card-container');
    for (let i = 0; i<person.length; i++) {
        if (person[i].dob.includes(today)) {
            
            divElement.setAttribute('class', 'card');
            cardContainer.appendChild(divElement);
            //img
            var img = document.createElement('img');
            divElement.appendChild(img);
            img.src=person[i].img;

            
            //div text
            var textDiv = document.createElement('div');
            divElement.appendChild(textDiv);
            var pargraph = document.createElement('p');
            textDiv.appendChild(pargraph);
            pargraph.innerHTML = person[i].name + '<br>' + person[i].age;
            counter++;
        }
    }
    var header = document.querySelector('#header');
    header.innerHTML = `${counter} Birthday Today`

    let button1=document.getElementById('btn1');
    let button2=document.getElementById('btn2');
    let button3=document.getElementById('btn3');

    button1.addEventListener('click', color1)
    button2.addEventListener('click', color2)
    button3.addEventListener('click', color3)

    function color1() {
        document.body.style.backgroundColor = "red";
        button1.style.backgroundColor="red";
        button2.style.backgroundColor="";
        button3.style.backgroundColor="";
    }
    function color2() {
        document.body.style.backgroundColor = "green";
        button2.style.backgroundColor="green";
        button1.style.backgroundColor="";
        button3.style.backgroundColor="";
    }
    function color3() {
        document.body.style.backgroundColor = "blue";
        button3.style.backgroundColor="blue";
        button1.style.backgroundColor="";
        button2.style.backgroundColor="";
    }

    let clearAll = document.getElementById('clear');
    clearAll.addEventListener('click', click1);

    function click1() {
        divElement.style.display="none";
        console.log("dfdrf");
    }