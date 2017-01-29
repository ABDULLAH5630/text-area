$(document).ready(function(){
    
    
    
    
   
    
    
    
    $("#txtarea").keyup(function(){
        var totalLength = $("#txtarea").val();
        var remain = 160-totalLength.length;
        $(".result").text("You are typing "+totalLength.length+" letters");
        $(".remain").text("You have remained " + remain + " letters");
        
        if(remain<0){
            $(".remain").text("You have crossed " + remain + " letters");
            $(".remain").addClass("lal");
        }
        
        else{
            
            $(".remain").removeClass("lal");
        }
    });
    
    
    
    $("#txtarea").keydown(function(){
        var totalLength = $("#txtarea").val();
        var remain = 160-totalLength.length;
        $(".result").text("You are typing "+totalLength.length+" letters");
        $(".remain").text("You have remained " + remain + " letters");
        
        if(remain<0){
            $(".remain").text("You have crossed " + remain + " letters");
            $(".remain").addClass("lal");
        }
        
        else{
            
            $(".remain").removeClass("lal");
        }
    });
    
    
    
    
    
    
    
    
    
    
    
    
});