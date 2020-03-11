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
                steps[i].style.height = "600px";
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
                        steps[i-1].style.height = "600px";
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
            
            if(page.innerHTML === "1"){
                for (var i=0; i<info.length; i++) {
                    if(info[i].value === ""){
                        alert('정보를 입력해주세요');
                        break;
                        }   
                        arrInfo.push(info[i].value); 
                     }
            }else if(page.innerHTML == 2){
                for (var i=0; i<movie.length; i++){
                    if(movie[i].checked){
                        selectMovie = movie[i].value;
                    }
                }
                if(selectMovie===undefined){
                    alert('영화를 선택해주세요');
                }
            }else if(page.innerHTML == 3) {
                for(var i=0; i<rate.length; i++){
                    total += Number(rate[i].value);
                }
            }else if(page.innerHTML == 4){
                favGenre.length =0;
                for(var i=0; i<genre.length; i++) {
                    if(genre[i].checked){
                        favGenre.push(genre[i].value);
                    }
                }
                if(favGenre.length >3){
                    alert('3개까지만 선택가능합니다.')
                }else if(favGenre.length === 0){
                    alert('좋아하는 장르를 선택해주세요.')
                }
            }

                for(var i=0; i<steps.length; i++){
                    if(steps[i].style.visibility === 'visible'){
                        if(i !== 4 ){
                            steps[i].style.visibility = 'hidden';
                            steps[i].style.width = '0';
                            steps[i].style.height = '0';
                            steps[i+1].style.visibility = 'visible'
                            steps[i+1].style.width = "600px";
                            steps[i+1].style.height = "600px";
                            page.innerText = Number(page.innerText)+1;
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
    
    spread(){
        // for (var i=0; i<info.length; i++) {
        //     arrInfo.push(info[i].value);
        // }

        // for (var i=0; i<movie.length; i++){
        //     if(movie[i].checked){
        //         selectMovie = movie[i].value;
        //     }
        // }

        // for(var i=0; i<rate.length; i++){
        //     total += Number(rate[i].value);
        // }

        for(var i=0; i<genre.length; i++) {
            if(genre[i].checked){
                favGenre.push(genre[i].value);
            }
            if(favGenre.length === 3)
                break;
        }
    }

    result(){
        this.spread();
        h3.innerText = '응답결과';
        footer.style.display ='none';
        steps[4].innerHTML =`<div>
        <ul>
        <li>이름: ${arrInfo}</li>
        <li>영화: ${selectMovie}</li>
        <li>평점: ${total/5}점/5점</li>
        <li>선호장르: ${favGenre}</li>
        <li>리뷰: ${review.value}</li>
        </ul>
        </div><a href="">재응답하기</a>` ;
             
    }

}

function info_chk() {
    if(page.value === 1){
    for (var i=0; i<info.length; i++) {
       if(info[i].value === ""){
           alert('!!!!!!!1');
           return "break";
            }    
        }
    }
}
function movie_chk() {
    if(page.value === 2){
        if(selectMovie.length === 0){
            return "break";
        }
    }
}
function genre_chk() {
    if(page.value === 4) {
        if(favGenre.length <3 || favGenre.length ===0){
            return "break";
        }
    }
}