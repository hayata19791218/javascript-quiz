'use strict'

let score = 0;

const correct = "正解です";
const incorrect = "不正解です";

const selects1 = document.querySelectorAll(`[name='answer1']`);

for(let select1 of selects1){
    select1.addEventListener('change',()=>{
        document.querySelector('#information1').innerHTML = '「' + select1.value + '」' + 'を選択しました' ;

        const question1Answer = document.getElementById('question1-answer');

        question1Answer.addEventListener('click',() => {
            const quiz_1 = document.getElementById('quiz-1');
            
            if(quiz_1.answer1.value == "紫式部"){
                answer1.innerHTML = '間違いです'; 
                select1.disabled = true;
            }else if(quiz_1.answer1.value == "清少納言"){
                score ++;
                answer1.innerHTML = '正解です'; 
                select1.disabled = true;
            }else if(quiz_1.answer1.value == "小野小町"){
                answer1.innerHTML = '間違いです'; 
                select1.disabled = true;
            }else{
                answer1.innerHTML = '答えを選択してください';
                select1.disabled = false;
            }
            console.log(score)
        });
    });

    
}

const selects2 = document.querySelectorAll(`[name='answer2']`);

for(let select2 of selects2){
    select2.addEventListener('change',()=>{
        document.querySelector('#information2').innerHTML = '「' + select2.value + '」' + 'を選択しました' ;

        const question2Answer = document.getElementById('question2-answer');

        question2Answer.addEventListener('click',() => {
            const quiz_2 = document.getElementById('quiz-2');
            
            if(quiz_2.answer2.value == "ニュージーランド"){
                answer2.innerHTML = '間違いです'; 
                select2.disabled = true;
            }else if(quiz_2.answer2.value == "中国"){
                score ++;
                answer2.innerHTML = '正解です'; 
                select2.disabled = true;
            }else if(quiz_2.answer2.value == "オーストラリア"){
                answer2.innerHTML = '間違いです'; 
                select2.disabled = true;
            }else{
                answer2.innerHTML = '答えを選択してください';
                select2.disabled = false;
            }
            console.log(score)
        });
    });
}

const selects3 = document.querySelectorAll(`[name='answer3']`);

for(let select3 of selects3){
    select3.addEventListener('change',()=>{
        document.querySelector('#information3').innerHTML = '「' + select3.value + '」' + 'を選択しました' ;

        const question3Answer = document.getElementById('question3-answer');

        question3Answer.addEventListener('click',() => {
            const quiz_3 = document.getElementById('quiz-3');
            
            if(quiz_3.answer3.value == "アマゾン"){
                answer3.innerHTML = '間違いです'; 
                select3.disabled = true;
            }else if(quiz_3.answer3.value == "ナイル"){
                score ++;
                answer3.innerHTML = '正解です'; 
                select3.disabled = true;
            }else if(quiz_3.answer3.value == "ミシシッピ"){
                answer3.innerHTML = '間違いです'; 
                select3.disabled = true;
            }else{
                answer3.innerHTML = '答えを選択してください';
                select3.disabled = false;
            }
            console.log(score)
        });
    });
}

const showScore = document.getElementById('showScore');

showScore.addEventListener('click',()=>{
    const scoreMessage = document.getElementById('scoreMessage');
    if(score == 3){
        scoreMessage.innerHTML = score + "点:満点!おめでとう!";
    }else if(score == 2){
        scoreMessage.innerHTML = score + "点:あともう一息!";
    }else if(score == 1){
        scoreMessage.innerHTML = score + "点:まあまあ...";
    }else{
        scoreMessage.innerHTML = score + "点:残念";
    }
    const reset = document.getElementById('reset');
    reset.classList.add('block');
});