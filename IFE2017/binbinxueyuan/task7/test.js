    var root = document.getElementById("root");
    var btnBefore = document.getElementById("before");
    var btnMid = document.getElementById("mid");
    var btnRear = document.getElementById("rear");
    var timer = 0;

    function showNode(node){
        node.style.backgroundColor = "#ffffff";
        setTimeout(function(){
            node.style.backgroundColor = "#ff524a";
        },timer+=500);
        setTimeout(function(){
            node.style.backgroundColor = "#ffffff";
        },timer+=500);
    }

    function before(root){
        if(root){
            showNode(root);
            before(root.children[0]);
            before(root.children[0]);
        }
    }

    function mid(root){
        if(root){
            mid(root.children[0]);
            showNode(root);
            mid(root.children[1]);
        }
    }

    function rear(root){
        if(root){
        rear(root.children[0]);
        rear(root.children[1]);
        showNode(root);
    }
}

    btnBefore.addEventListener("click",function(){
        before(root);
        timer = 0;
    },false);
    btnMid.addEventListener("click",function(){
        mid(root);
        timer = 0;
    },false);
    btnRear.addEventListener("click",function(){
        rear(root);
        timer = 0;
    },false);
   
        

 
