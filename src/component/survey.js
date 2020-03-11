const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const info = document.getElementsByClassName('info');
let arrInfo = [];
const movie = document.getElementsByName('movie');
let selectMovie ;
const rate = document.getElementsByClassName('rate');
let total = 0;
const genre = document.getElementsByName('genre');
let favGenre = [];
const review = document.getElementById('review');
const steps = document.getElementsByClassName('steps');
const button = document.querySelector('button');
const footer = document.querySelector('#footer');
const page = document.querySelector('#page');
const h3 = document.getElementsByTagName('h3');
let validation =false;
export class Survey {
    constructor (configuration = {}) {
        this.init();
    }

    init(){
        this.default();
        this.prev();
        this.next();
        this.submit();
    }

    default(){
        for(var i=0; i<steps.length; i++){
            if(i === 0){
                steps[i].style.visibility = "visible";
                steps[i].style.width = "600px";
                steps[i].style.height = "450px";
            } else {
                steps[i].style.visibility = "hidden";
                steps[i].style.width = "0";
                steps[i].style.height = "0";
            }
        }
    }

    prev() {
        prev.addEventListener('click',evt => {
            evt.preventDefault();
            for(var i=0; i<steps.length; i++){
                if(steps[i].style.visibility === 'visible'){
                    if(i !== 0 ){
                        steps[i].style.visibility = 'hidden';
                        steps[i].style.width = '0';
                        steps[i].style.height = '0';
                        steps[i-1].style.visibility = 'visible'
                        steps[i-1].style.width = "600px";
                        steps[i-1].style.height = "450px";
                        page.innerText = Number(page.innerText)-1;
                    }
                    break;
                }
            }
        })
    }

    next() {
        next.addEventListener('click', evt => {
            evt.preventDefault();
                if(page.innerHTML == 1){
                    for (var i=0; i<info.length; i++) {
                        if(info[i].value === ""){
                            alert('정보를 입력해주세요');
                            validation = false;
                            break;
                            }
                            arrInfo.push(info[i].value);
                            validation = true;
                            console.log(info[i].value)
                        }
                    if(info[1].value !== '남' && info[1].value !=='여') {
                        alert('셩별을 다시입력해주세요');
                        validation = false;
                        
                    }else if(isNaN(info[2].value)){
                        alert('나이에 숫자를 입력해주세요');
                        validation = false;
                    }         
                }else if(page.innerHTML == 2){
                    for (var i=0; i<movie.length; i++){
                        if(movie[i].checked){
                            selectMovie = movie[i].value;
                        }
                    }
                    if(selectMovie===undefined){
                        alert('영화를 선택해주세요');
                        validation = false;
                    }else {
                        validation = true;
                    }
                }else if(page.innerHTML == 3) {
                    for(var i=0; i<rate.length; i++){
                        total += Number(rate[i].value);
                    }
                    validation = true;
                }else if(page.innerHTML == 4){
                    favGenre.length =0;
                    for(var i=0; i<genre.length; i++) {
                        if(genre[i].checked){
                            favGenre.push(genre[i].value);
                        }
                    }
                    if(favGenre.length >3){
                        alert('3개까지만 선택가능합니다.');
                        validation = false;
                    }else if(favGenre.length === 0){
                        alert('좋아하는 장르를 선택해주세요.');
                        validation = false;
                    }else {
                        validation = true;
                    }
                }   

                for(var i=0; i<steps.length; i++){
                    if(steps[i].style.visibility === 'visible'){
                        if(i !== 4 ){
                            if(validation ){
                                steps[i].style.visibility = 'hidden';
                                steps[i].style.width = '0';
                                steps[i].style.height = '0';
                                steps[i+1].style.visibility = 'visible'
                                steps[i+1].style.width = "600px";
                                steps[i+1].style.height = "450px";
                                page.innerText = Number(page.innerText)+1;
                                validation = false;
                            }
                        }
                        break;
                    }
                }
                
            
        })
    }
    
    submit() {
        button.addEventListener('click', evt => {
            evt.preventDefault();
            this.result();
        })
    }
    
    // spread(){
    //     for (var i=0; i<info.length; i++) {
    //         arrInfo.push(info[i].value);
    //     }

    //     for (var i=0; i<movie.length; i++){
    //         if(movie[i].checked){
    //             selectMovie = movie[i].value;
    //         }
    //     }

    //     for(var i=0; i<rate.length; i++){
    //         total += Number(rate[i].value);
    //     }
    //     for(var i=0; i<genre.length; i++) {
    //         if(genre[i].checked){
    //             favGenre.push(genre[i].value);
    //         }
    //         if(favGenre.length === 3)
    //             break;
    //     }
    // }

    result(){
        h3.innerText = '응답결과';
        footer.style.display ='none';
        steps[4].innerHTML =`<div>
        <ul>
        <li>이름: ${arrInfo[0]}</li><br>
        <li>성별: ${arrInfo[1]}성</li><br>
        <li>나이: ${arrInfo[2]}살</li><br>
        <li>관람영화: ${selectMovie }</li><br>
        <li>평점: ${total/5}점/5점</li><br>
        <li>선호장르: ${favGenre}</li><br>
        <li>리뷰: ${review.value}</li><br>
        </ul>
        </div><a href="">재응답하기</a>` ;
             
    }
}