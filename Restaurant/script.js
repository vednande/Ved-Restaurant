/* document.getElementById('line').onclick = function(){
    document.getElementById('mob').style.display="flex";
    document.getElementById('mob').style.margin="5px 0px";
}

document.getElementById('band').onclick = function(){
    document.getElementById('mob').style.display='none';
} 

document.getElementById('bandF').onclick = function(){ 
    document.getElementById('mob').style.display='none';
}

document.getElementById('bandHIT').onclick = function(){
    document.getElementById('mob').style.display='none';
} 

document.getElementById('bandT').onclick = function(){
    document.getElementById('mob').style.display='none';
} 

document.getElementById('bandFP').onclick = function(){
    document.getElementById('mob').style.display='none';
} 
*/

function common(){
    document.getElementById('mob').style.display='none';
    document.getElementById('rightGhum').style.transform="rotate(0deg) translateX(0px)";
    document.getElementById('rightGhum').style.width="20px";
    document.getElementById('leftGhum').style.transform="rotate(0deg) translateX(0px)";
    document.getElementById('leftGhum').style.width="20px";
    document.getElementById('matDikh').style.display="block";
    document.getElementsByClassName('line1').style.width="20px"
}

document.getElementById('line').addEventListener('click',function(){

        const rightGhum = document.getElementById('rightGhum');
        rightGhum.style.transform="rotate(45deg) translateX(5px)"
        rightGhum.style.width="25px";
    
        const leftGhum = document.getElementById('leftGhum');
        leftGhum.style.transform="rotate(-45deg) translateX(6px)" 
        leftGhum.style.width="25px"; 
     
        const matDikh = document.getElementById('matDikh');
        matDikh.style.display="none";
    
        document.getElementById('mob').style.display="flex";  
        document.getElementById('mob').style.margin="5px 0px";
    
    
        document.getElementById('band').onclick = function(){ 
            document.getElementById('mob').style.display='none';
            /* document.getElementById('rightGhum').style.transform="rotate(0deg) translateX(0px)";
            document.getElementById('rightGhum').style.width="20px";
            document.getElementById('leftGhum').style.transform="rotate(0deg) translateX(0px)";
            document.getElementById('leftGhum').style.width="20px";
            document.getElementById('matDikh').style.display="block";
            document.getElementsByClassName('line1').style.width="20px"
            */
           common();  
        } 
        
        document.getElementById('bandF').onclick = function(){ 
            document.getElementById('mob').style.display='none';
            common();
        }
        
        document.getElementById('bandHIT').onclick = function(){
            document.getElementById('mob').style.display='none';
            common();
        } 
        
        document.getElementById('bandT').onclick = function(){
            document.getElementById('mob').style.display='none';
            common();
        } 
        
        document.getElementById('bandFP').onclick = function(){
            document.getElementById('mob').style.display='none';
            common();
        } 



}); 

document.getElementById('submitGIT').addEventListener('click',function (){
    const fn = document.getElementById('firstName').value;
    const ln = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNum = document.getElementById('phoneNumber').value;
    const restName = document.getElementById('restName').value;
    const address = document.getElementById('address').value;

    // window.alert(`First Name: ${fn} || Last Name: ${ln} || Email: ${email} || Phone Number: ${phoneNum}`); 
    // window.alert('Submitted Succesfully!!');

    if(fn==""){
        alert(`Please fill the first name correctly`);
    }
    if(ln==""){
        alert(`Please fill the last name correctly`);
    }
    if(email==""){
        alert(`Please fill the Email correctly`);
    }
    if(phoneNum==""){
        alert(`Please fill the phone number correctly`);
    }
    if(restName==""){
        alert(`Please fill the Restaurant Name correctly`);
    }
    if(address==""){
        alert(`Please fill the address correctly`);
    }

    window.alert('Are you sure you want to submit?');
});