'use strict'

let score = 0;

const answer1 = document.getElementById('answer1');
const information1 = document.getElementById('information1');
const selectMurasaki = document.querySelector(`[name='murasaki']`);
const selectSeisyo = document.querySelector(`[name='seisyo']`);
const selectOnono = document.querySelector(`[name='onono']`);

selectMurasaki.addEventListener('click',() => {
    information1.innerHTML = '「' + selectMurasaki.value + '」を選択しました';
    selectMurasaki.disabled = true;
    selectSeisyo.disabled = true;
    selectOnono.disabled = true;
});
selectSeisyo.addEventListener('click',() => {
    information1.innerHTML = '「' + selectSeisyo.value + '」を選択しました';
    selectMurasaki.disabled = true;
    selectSeisyo.disabled = true;
    selectOnono.disabled = true;
});
selectOnono.addEventListener('click',() => {
    information1.innerHTML = '「' + selectOnono.value + '」を選択しました';
    selectMurasaki.disabled = true;
    selectSeisyo.disabled = true;
    selectOnono.disabled = true;
});

const answerLook1 = () => {
    const resultButton1 = document.querySelector(`[name='resultButton1']`);

    if(selectMurasaki.checked){
        answer1.innerHTML = "不正解です";
        answer1.classList.add("blue");
        resultButton1.disabled = true;
    }
    else if(selectSeisyo.checked){
        answer1.innerHTML = "正解です";
        answer1.classList.add("blue");
        resultButton1.disabled = true;
        score ++;
    }
    else if(selectOnono.checked){
        answer1.innerHTML = "不正解です";
        answer1.classList.add("blue");
        resultButton1.disabled = true;
    }
    else{
        answer1.innerHTML = "回答を選択してください"
        answer1.classList.add("red");
    } 
}

const questionAnswer1 = document.getElementById('questionAnswer1');
questionAnswer1.addEventListener('click',answerLook1);


const answer2 = document.getElementById('answer2');
const information2 = document.getElementById('information2');
const selectChina = document.querySelector(`[name='china']`);
const selectNewzealand = document.querySelector(`[name='newzealand']`);
const selectAustralia = document.querySelector(`[name='australia']`);

selectChina.addEventListener('click',() => {
    information2.innerHTML = '「' + selectChina.value + '」を選択しました';
    selectChina.disabled = true;
    selectNewzealand.disabled = true;
    selectAustralia.disabled = true;
});
selectNewzealand.addEventListener('click',() => {
    information2.innerHTML = '「' + selectNewzealand.value + '」を選択しました';
    selectChina.disabled = true;
    selectNewzealand.disabled = true;
    selectAustralia.disabled = true;
});
selectAustralia.addEventListener('click',() => {
    information2.innerHTML = '「' + selectAustralia.value + '」を選択しました';
    selectChina.disabled = true;
    selectNewzealand.disabled = true;
    selectAustralia.disabled = true;
});

const answerLook2 = () => {
    const resultButton2 = document.querySelector(`[name='resultButton2']`);

    if(selectChina.checked){
        answer2.innerHTML = "正解です";
        answer2.classList.add("blue");
        resultButton2.disabled = true;
        score ++;
    }
    else if(selectNewzealand.checked){
        answer2.innerHTML = "不正解です";
        answer2.classList.add("blue");
        resultButton2.disabled = true;
    }
    else if(selectAustralia.checked){
        answer2.innerHTML = "不正解です";
        answer2.classList.add("blue");
        resultButton2.disabled = true;
    }
    else{
        answer2.innerHTML = "回答を選択してください"
        answer2.classList.add("red");
    } 
}

const questionAnswer2 = document.getElementById('questionAnswer2');
questionAnswer2.addEventListener('click',answerLook2);


const answer3 = document.getElementById('answer3');
const information3 = document.getElementById('information3');
const selectAmazon = document.querySelector(`[name='amazon']`);
const selectMisisippi = document.querySelector(`[name='misisippi']`);
const selectNail = document.querySelector(`[name='nail']`);

selectAmazon.addEventListener('click',() => {
    information3.innerHTML = '「' + selectAmazon.value + '」を選択しました';
    selectAmazon.disabled = true;
    selectMisisippi.disabled = true;
    selectNail.disabled = true;
});
selectMisisippi.addEventListener('click',() => {
    information3.innerHTML = '「' + selectMisisippi.value + '」を選択しました';
    selectAmazon.disabled = true;
    selectMisisippi.disabled = true;
    selectNail.disabled = true;
});
selectNail.addEventListener('click',() => {
    information3.innerHTML = '「' + selectNail.value + '」を選択しました';
    selectAmazon.disabled = true;
    selectMisisippi.disabled = true;
    selectNail.disabled = true;
});

const answerLook3 = () => {
    const resultButton3 = document.querySelector(`[name='resultButton3']`);

    if(selectAmazon.checked){
        answer3.innerHTML = "不正解です";
        answer3.classList.add("blue");
        resultButton3.disabled = true;
    }
    else if(selectMisisippi.checked){
        answer3.innerHTML = "正解です";
        answer3.classList.add("blue");
        resultButton3.disabled = true;
        score ++;
    }
    else if(selectNail.checked){
        answer3.innerHTML = "不正解です";
        answer3.classList.add("blue");
        resultButton3.disabled = true;
    }
    else{
        answer3.innerHTML = "回答を選択してください"
        answer3.classList.add("red");
    } 
}

const questionAnswer3 = document.getElementById('questionAnswer3');
questionAnswer3.addEventListener('click',answerLook3);


const showScore = document.getElementById('showScore');
showScore.addEventListener('click',()=>{
    const scoreMessage = document.getElementById('scoreMessage');

    const showScore = document.querySelector(`[name='showScore']`);

    if(score == 3){
        scoreMessage.innerHTML = score + "点:満点!おめでとう!";
        showScore.disabled = true;
    }else if(score == 2){
        scoreMessage.innerHTML = score + "点:あともう一息!";
        showScore.disabled = true;
    }else if(score == 1){
        scoreMessage.innerHTML = score + "点:まあまあ...";
        showScore.disabled = true;
    }else{
        scoreMessage.innerHTML = score + "点:残念";
        showScore.disabled = true;
    }
    const reset = document.getElementById('reset');
    reset.classList.add('block');
});