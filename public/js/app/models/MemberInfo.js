/*
 * Represents membership infor for the Santropol Roulant bike shop.
 */


define (['parse', 'underscore'], function(Parse, _){
    //Using the parse object to create objects. But should be replaceablewith Backbone.
    
    var MemberInfo = Parse.Object.extend("MemberInfo",{
        defaults: {
            'fullname' : '',
            'phone': '',
            'email' : '',
            'fee' : 0,
            'signoff': false
        },
        
        initialize : function(options){
            options = options || {};
            
            if (!options.registrationDate) {
                this.set('registrationDate', new Date().getTime());
            }else{
                this.set('registrationDate', options.registrationDate);
            }
        },
        
        
        /*
         * Getter for fullname
         */
        getFullName : function(){
            return this.get('fullname');
        },
        
        
        /*
         * Name needs to be a string. Throws an exception if this fails
         */
        setFullName : function(name){
            if(_.isString(name)){
                this.set('fullname', name);
            }else{
                throw "name needs to be oftype string";   
            }
        },
        
        
        /*
         * Getter for phone number. Using Strings
         */
        getPhoneNumber : function(){
            return this.get('phone');
        },
        
        
        /*
         * setter - no error checking if it is string, number, etc
         */ 
        setPhoneNumber : function(number){
            this.set('phone', number);
        },
        
        
        /*
         * Email address getter
         */
        getEmail : function(){
            return this.get('email');
        },
        
        /*
         * set email. Must be a string or it will throw an error.
         */
        setEmail : function(email){
            if (_.isString(email)) {
                this.set('email', email);
            }else{
                throw "email must be a string";
            }
        },
        
        /*
         * Getter for fee paid
         */
        getFeePaid : function(){
            return this.get('fee');
        },
        
        
        /*
         * Setter for fee paid - will throw an error if it is not a number.
         */
        setFeePaid : function(fee){
            if (_.isNumber(fee)) {
                this.set('fee',fee);
            }else{
                throw "fee must be a number";
            }
        },
        
        
        /*
         * returns true or false if user has signed off on terms of service
         */
        getSignOff : function(){
            return this.signoff;
        },
        
        
        /*
         * Sets if the users has signed off - must be a boolean
         */
        setSignOff : function(signoff){
            if (_.isBoolean(signoff)) {
                this.set('signoff', signoff);
            }else{
                throw "signoff must be a boolean";
            }
        },
        
        
        /*
         * Returns the time in UTC that the user registered most recently.
         */ 
        getRegistrationDate : function(){
            return this.get('registrationDate');
        },
        
        
        /*
         * Sets the registration date for this user.
         * Needs to be in UTC time - milliseconds from the epoch.
         * Easiest method is: new Date().getTime()
         *
         * If parameter is undefined; defaults to now
         */
        setRegistrationDate: function(time){
            if (_.isUndefined(time)) {
                time = new Date().getTime();
            }
            if (!_.isNumber(time)) {
                throw "A number needs to be passed to setRegistrationDate";
            }            
            this.set('registrationDate', time);
        }
    });
    
    
    return MemberInfo;
});