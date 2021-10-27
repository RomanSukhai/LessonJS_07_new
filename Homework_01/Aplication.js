function sendDataGetMethod() {
    var UserData={
        userName: document.getElementById("userName").value,
        userSurname: document.getElementById("userSurname").value,
        userAge: document.getElementById("userAge").value,
        userLives: document.getElementById("userLives").value,
    }
    var xml = new XMLHttpRequest();
    var flag = 0<UserData.userAge && 100>UserData.userAge;
    if (!flag) {
       UserData.userAge = 'Exception,please refoctor this value'
       xml.open('GET',"/userGet?userName="+(UserData.userName+' ValidatedByGET')+"&userSurname="+(UserData.userSurname+' ValidatedByGET')+"&userAge="+(UserData.userAge+' ValidatedByGET')+"&userLives="+(UserData.userLives+' ValidatedByGET'));
       alert('Age:Exception,please refoctor this value');
        xml.setRequestHeader("Content-type", "application/json");
        xml.send();
        
    }
    else if(flag){
        xml.open('GET',"/userGet?userName="+(UserData.userName+' ValidatedByGET')+"&userSurname="+(UserData.userSurname+' ValidatedByGET')+"&userAge="+(UserData.userAge+'  ValidatedByGET')+"&userLives="+(UserData.userLives+'  ValidatedByGET'));
        xml.setRequestHeader("Content-type", "application/json");
        xml.send();
        return

    }
    
}