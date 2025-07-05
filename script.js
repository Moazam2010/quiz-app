/**
 * @param {string} quesText 
 */
//Question function
const question = (quesText, opt1, opt2, opt3, opt4, correctAns) => {

    const quesBox = document.getElementById('ques-box');

    // Adding Question Text
    const ques = document.createElement('p');
    quesBox.append(ques);
    ques.classList.add('ques');
    ques.innerText = quesText;

    //Adding Options
    const optionsBox = document.createElement('div');
    quesBox.append(optionsBox);
    optionsBox.classList.add('options-box');
    let clicks = 0;
    for (i = 1; i <= 4; i++) {
        const opt = document.createElement('div');
        optionsBox.append(opt);
        opt.classList.add('opt')
        //Event Listener on options 
        opt.addEventListener('click', (e) => {
            if(clicks == 0){
                clicks++;
                if (opt.textContent.toLowerCase() == correctAns) {
                    opt.classList.add('right')
                } else {
                    opt.classList.add('wrong');
                }
            }
            
        })
        //putting condition
        i == 1 ? opt.innerText = opt1 :
        i == 2 ? opt.innerText = opt2 :
        i == 3 ? opt.innerText = opt3 :
        i == 4 ? opt.innerText = opt4 :
        i = 1;
    }
};
question('What is the color of grass?', 'Blue', 'Purple', 'Green', 'Red','green')
question('How many teeth does an adult have?','12','36','32','25','32')
question('Who is the co-founder of Microsoft?','Satya Nadella', 'Bill Gates', 'Elon Musk', 'Narendra Modi', 'bill gates')
question('How many letters are there in English Alphabet?','15','20','26','33','15')