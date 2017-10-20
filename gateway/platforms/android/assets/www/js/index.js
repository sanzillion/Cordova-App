/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        var local = this;
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false); 
        document.addEventListener("online", function(){
            document.getElementById('status').innerHTML = "Connected."; 
            local.checkForUpdate();
        }, false);
        document.addEventListener("offline", function(){
            document.getElementById('status').innerHTML = "Connection Failed, reconnecting...";
            local.checkForUpdate();
        }, false);
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        // this.receivedEvent('deviceready'); alert();
        // this.checkForUpdate(); 
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    checkForUpdate: function(){ 
        var local = this;
        // var networkState = navigator.connection.type;

        // if (navigator.onLine) {
        //     document.getElementById('status').innerHTML = "Connected.";
        // }
        // else{
        //     document.getElementById('status').innerHTML = "Connection Failed, reconnecting...";
        // }
        

        $.getJSON('http://recordmanager.000webhostapp.com/smsRoute?callback=?', null, function (results) {
          
            if(results.length>0){

                

                for(var i = 0; i < results.length; i++){
                    // alert( results[i].firstname+" "+results[i].lastname+" is recorded.");
                    
                    if(i == results.length-1){
                        local.sendSms(results[i], "go");
                    }else{
                        local.sendSms(results[i], "no");
                    }

                }
                
            }
            else{
                document.getElementById('message').innerHTML = "No notification to send.";
                local.checkForUpdate();
            }

        });

    },
    setToSent: function(id){

        $.getJSON('http://recordmanager.000webhostapp.com/setToSent?callback=?&id='+id, null, function (results) {
            console.log(results);
        })
    },
    sendSms: function(results, sign){ 
        var local = this;
        var options = {
                    replaceLineBreaks: false, // true to replace \n by a new line, false by default
                    android: {
                    intent: '' // send SMS with the native android SMS messaging
                    //intent: '' // send SMS without open any other app
                    }
                };
        var message = results.firstname+" "+results.lastname+" attendance is recorded.";
        sms.send(results.phone, message, options, function(){
            
            if(sign == "no"){
                document.getElementById('message').innerHTML = "SMS notification for "+results.firstname+" "+results.lastname+" sent!";
                local.setToSent(results.id);
            }
            else{
                document.getElementById('message').innerHTML = "SMS notification for "+results.firstname+" "+results.lastname+" sent!";
                local.setToSent(results.id);
                local.checkForUpdate();
            }

        },
        function(e){
            
            if(sign == "no"){
                document.getElementById('message').innerHTML = e;
            }
            else{
                document.getElementById('message').innerHTML = e;
            }
        });
    }
};

app.initialize();
