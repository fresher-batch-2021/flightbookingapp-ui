class validator{
    static isValidString(input,message){
        if(input == null || input.trim() == ""){

            throw new Error(message);

        }
    }

    static isValidMobile(input,message){

        if (input.length != 10){
            throw new Error(message);
        }
    }

    static isValidPassword(input1, input2, message){
        if(input1.length < 8 ||input2.length < 8 || input1 != input2 ){
            throw new Error(message);
        }
    }

    
}