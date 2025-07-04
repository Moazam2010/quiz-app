/**
 * @param {string} quesText 
 */
//Question function
const question = (quesText, opt1, opt2, opt3, opt4) => {

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
    for (i = 1; i <= 4; i++) {
        const opt = document.createElement('div');
        optionsBox.append(opt);
        opt.classList.add('opt')
        //putting condition
        i == 1 ? opt.innerText =opt1 :
        i == 2 ? opt.innerText = opt2 :
        i == 3 ? opt.innerText = opt3 :
        i == 4 ? opt.innerText = opt4 :
        i = 1;
    }
};
question('What is the color of grass?','Blue', 'Purple', 'Green', 'Red')