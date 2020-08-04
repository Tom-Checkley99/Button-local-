let button;                                                        // defining button
let button2;                                                       // defining button2



function setup() {                                                 // opening setup function


  button = createButton('LEFT');                                   // creating "LEFT" button
  button.addClass('LEFT');                                         // creating "LEFT" button class
	button2 = createButton('RIGHT');                                 // creating "RIGHT" button
  button2.addClass('RIGHT');                                       // creating "RIGHT" button class
  button3 = createButton('PAUSE');                                 // creating "PAUSE" button
  button3.addClass('PAUSE');                                       // creating "PAUSE" button class
  button4 = createButton('PLAY');                                  // creating "PLAY" button
  button4.addClass('PLAY');                                        // creating "PLAY" button class
  button5 = createButton('RESTART');                               // creating "RESTART" button
  button5.addClass('RESTART');                                     // creating "RESTART" button class

  button.mousePressed(message);                                    // button is mouse pressed, send "message"
	button2.mousePressed(message2);                                  // button 2 is mouse pressed, send "message2"

}                                                                  // close setup function

function draw() {                                                  // opening draw function

  if (keyIsDown(LEFT_ARROW)) {                                     // if LEFT_ARROW key is down
    message();                                                     // send "message"
  } else if (keyIsDown(RIGHT_ARROW)) {                             // if RIGHT_ARROW key is down
    message2();                                                    // send "message2"
  }

}                                                                  // closing draw function

pubnub = new PubNub({                                              // contacting pubnub
    publishKey : 'pub-c-3c27741a-6520-44bc-a0dc-458f1fa5d19e',     // publishing pubnub channel code
    subscribeKey : 'sub-c-d0567ae6-cf2f-11ea-b0f5-2a188b98e439',   // subscribing pubnub channel code
})

function message()	{                                              // message function

  var publishConfig = {
		channel : "IOE_channel",                                       // sending/listeing at "IOE_channel"
		message: {                                                     // send message
		button: "player1_L"                                            // when button selected send "player1_L" message
    }
}
pubnub.publish(publishConfig, function(status, response) {         // publishing to pubnub
		console.log(status, response);                                 // console logging repsone
	})

}                                                                  // close draw function

function message2()	{                                              // opening message2 function

	var publishConfig = {
		 channel : "IOE_channel",                                      // sending/listeing at "IOE_channel"
		 message: {                                                    // send message
		 button: "player1_R"                                           // when button selected send "player1_L" message
		}
}
	pubnub.publish(publishConfig, function(status, response) {       // pubnub publish (all inside)
			console.log(status, response);                               // console logging status and repsonse in pubnub&console
	})

}                                                                  // closing message2 function
