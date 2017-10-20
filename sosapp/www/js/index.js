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
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// app.initialize();

// var msg = "test msg";
// var num = 09074239571;

// //setTimeout(function(){ app.sendSms(); }, 3000); 
// // sendshit();

// // function sendshit(){
// //     msg = msg+" "+x;
// //     setTimeout(function(){ app.sendSms(); }, 3000); 
// // }

// var app = {
//     sendSms: function() {
//         var number = num.toString(); /* iOS: ensure number is actually a string */
//         var message = msg;
//         console.log("number=" + number + ", message= " + message);

//         //CONFIGURATION
//         var options = {
//             replaceLineBreaks: false, // true to replace \n by a new line, false by default
//             android: {
//                 intent: ''  // send SMS with the native android SMS messaging
//                 //intent: '' // send SMS without open any other app
//             }
//         };

//         // var success = function () { alert('Message sent successfully'); };
//         var error = function (e) { alert('Message Failed:' + e); };
//         var success = function () { alert('Message sent successfully');}

//         sms.send(number, message, options, success, error);

//     }
// }