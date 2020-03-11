
export class Calculator {
    constructor (
        configuration = {}
    ) {
        this.numbers = document.getElementsByClassName("select_Num");
        this.operaters = document.getElementsByClassName("operator");
        // this.storage = document.querySelector("#func_storage").value;
        // this.func = document.getElementById("func"); 
        this.result = document.getElementById("result");
        this.pn = document.getElementById("pn");
        this.calculate = document.getElementById("calculate");
        this.allClear = document.getElementById("ac");
        this.back = document.getElementById("back");
        this.inputType ="false"; //입력값이 연산자인지 숫자인지 확인 
        this.init();
    }
    init() {
        this.getNum();
        this.getOper();
        this.clear()
    }

    getNum(){
        Array.from(this.numbers).forEach(selNum => 
            selNum.addEventListener("click",addNum));

        function addNum(event) {
            const num = event.target.value;
                if(this.inputType == false){
                    func.value = null;
                    console.log("chsdf")
                }
                func.value = `${func.value}${num}`;
                func_storage.value= func_storage.value+""+num;
                this.inputType = 'true';
            }
    }

    getOper(){
        console.log(this.inputType);
        Array.from(this.operaters).forEach(operater => 
            operater.addEventListener("click",addOper));
        function addOper(event) {
            const operater = event.target.value;
            //console.log(this.inputType);
            if(this.inputType == 'true') {
                func_storage.value = eval(func_storage.value);
                func.value = func_storage.value;
                func_storage.value= `${func_storage.value}${operater}`;
                func.value = "";
                this.inputType= 'false';
                pn.value = "+";
            }
        }

    }

    clear() {
        ac.addEventListener("click",clear);

        function clear () {
            func.value = null;
            func_storage.value = null;
            this.inputType ='false'
        }
    }

}