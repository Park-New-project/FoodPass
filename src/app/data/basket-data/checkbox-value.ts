
export class CheckValue{
    protected checked: boolean;
    protected indeterminated: boolean;
    protected parent? : CheckboxValue;

    constructor(parent : CheckboxValue){
        this.checked = true;
        this.indeterminated = false;
        this.parent = parent;
        this.valueChanged();
    }

    get checkValue(){
        return this.checked;
    }
    get indeterminate(){
        // return !this.allChecked && this.checked;
        return this.indeterminated;
    }

    get value(){
        return this.checked;
    }
    set value(b : boolean){
        this.checked = b;
        this.valueChanged();
    }

    toggle(){
        if(this.indeterminated){
            this.value = true;
        }
        else{
            this.value = !this.value;
        }
    }
    
    protected valueChanged(){
        if(this.parent != null){
            this.parent.applyValueChanged(this.checked);
        }
    }

    protected valueChangeFromParent(b : boolean){
        this.checked = b;
    }
}


export class CheckboxValue extends CheckValue{
    // protected allChecked: boolean;
    protected items: CheckValue[];

    constructor(parent: CheckboxValue = null){
        super(parent);
        // this.allChecked = true;
    }

    get checkValue(){
        // return this.allChecked;
        return this.checked !== this.indeterminated;
    }

    get value(){
        return this.checked;
    }
    set value(b : boolean){
        this.changeAll(b);
        this.valueChanged();
    }
    changeAll(b : boolean){
        // this.allChecked = b;
        this.indeterminated = false;
        this.checked = b;
        this.items.forEach((value, index, arr)=>{
            value.value = b;
        });
    }

    applyValueChanged(b : boolean){
        if(this.items.every((el, index, arr)=>{
            if(el.indeterminate){
                return false;
            }
            return el.value == b;
        })){
            //모두 체크 or 모두 해제
            // this.allChecked = b;
            this.indeterminated = false;
            if(b){
                // console.log("all check");
                
                this.checked = true;
            }
            else{
                // console.log("all not check");
                this.checked = false;
            }
        }
        else{
            //하나 이상 and 다는 아니게 체크됨
            // console.log("1 ~ max - 1");
            // this.allChecked = false;
            this.indeterminated = true;
            this.checked = true;
        }

        this.valueChanged();
    }

    valueChangeFromParent(b : boolean){
        this.changeAll(b);
    }

    // setItems(items: CheckValue[]){
    //     this.items = items;
    //     // this.checkEmpty();
    // }

    deleteItem(child: CheckValue){
        this.items.splice(this.items.indexOf(child), 1);
        this.checkEmpty();
    }

    checkEmpty(){
        if(this.parent == null){
            return;
        }
        if(this.items.length == 0){
            this.parent.deleteItem(this);
        }
    }
}

