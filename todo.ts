/**
 * Created by abdulmoiz on 7/19/2016.
 */
/**
 * Created by abdulmoiz on 7/17/2016.
 */
function addTask() {
    let taskElement = <HTMLInputElement>document.getElementById('task');
    let task:string = taskElement.value;
    document.getElementById('lists').innerHTML += "<div><div class='alert alert-info'><input type='checkbox' name='todos' onclick='checkCheckboxes(); done(this);'/><p><b>"+task +"</b></p><button class='pull-right' onclick='del(this); checkCheckboxes();'><span class='glyphicon glyphicon-trash'></span></button></div></div>";
    taskElement.value = "";
    checkCheckboxes();


}
function checkCheckboxes(){
    let checkboxes = <HTMLInputElement[]><any>document.getElementsByName('todos');
    let noOfchecks : number = 0;
    let noOfUnchecks : number = 0;
    for (var i=0; i<checkboxes.length; i++ ){
        if (checkboxes[i].checked === true){
            noOfchecks++;
        }
        else {
            noOfUnchecks++;
        }
    }
    document.getElementById('counter').innerHTML = "<p><b>"+noOfUnchecks+" </b><span>tasks left</span> <span class='pull-right'>"+noOfchecks+" Completed Task</span> </p>" ;
}
function done(th) {
    let tasknode : HTMLElement ;
    let task : string;
    if(th.checked === true) {
        tasknode = th.parentNode.childNodes[1];
        task = tasknode.innerHTML;
        tasknode.innerHTML = "<del>" + task + "</del>";
    }
    else if (th.checked === false ){
        tasknode = th.parentNode.childNodes[1];
        task = th.parentNode.childNodes[1].childNodes[0].innerHTML;
        tasknode.innerHTML = task;
    }
}
function del(th) {
    let taskdiv = th.parentNode.parentNode;
    taskdiv.innerHTML = ' ';
}
