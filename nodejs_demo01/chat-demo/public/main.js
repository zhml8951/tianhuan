$(function () {
    var FADE_TIME = 150;
    var TYPING_TIME_LENGTH = 400;
    var COLORS = [
        '#e21400', '#91580f', '#f8a700', '#f78b00',
        '#58dc00', '#287b00', '#a8f07a', '#4ae8c4',
        '#3b88eb', '#3824aa', '#a700ff', '#d300e7'
    ];

    var $window = $(window);
    var $usernameInput = $('.usernameInput');
    var $messages = $('.messages');
    var $inputMessage = $('.inputMessage');
    
    var $loginPage = $('.login.page');
    var $chatPage = $('.chat.page');

    var username;
    var connected = false;
    var typing = false;
    var lastTypingTime;
    var $currentInput = $usernameInput.focus();

    var socket = io();

    function addParticipantsMessage(data) {
        var message = '';
        if(data.numUsers === 1) {
            message += "there's 1 participant";
        } else {
            message += "there are " + data.numUsers + "participants";
        }
        log(message);
    }

    function setUsername() {
        username = cleanInput($usernameInput.val().trim());

        if(username) {
            $loginPage.fadeOut();
            $chatPage.show();
            $loginPage.off('click');
            $currentInput = $inputMessage.focus();

            socket.emit('add user', username);
        }
    }

    function sendMessage() {
        var message = $inputMessage.val();
        message = cleanInput(message);

        if(message && connected) {
            $inputMessage.val('');
            addChatMessage({
                username:username,
                message: message
            });
            
            socket.emit('new message', message);
        }
    }

    function log(message, options) {
        var $el = $('<li>').addClass('log').text(message);
        addMessageElement($el, options);
    }

    function cleanInput(input) {
        return $('<div/>').text(input).text();
    }

    function addMessageElement(el, options) {
        var $el = $(el);
        if(!options) {
            options = {};
        }
        if(typeof options.fade === 'undefined') {
            options.fade = true;
        }
        if(typeof options.prepend === 'undefined'){
            options.prepend = false;
        }
        if(options.fase) {
            $el.hide().fadeIn(FADE_TIME);
        }
        if(options.prepend) {
            $messages.prepend($el);
        } else {
            $messages.append($el);
        }
        $messages[0].scrollTop = $messages[0].scrollHeight;
    }

    function addChatMessage(data, options) {
        var $typingMessages = getTypingMessages(data);
        options = options || {};
        if($typingMessages.length !== 0) {
            options.fade = false;
            $typingMessages.remove();
        }
        var $usernameDiv = $('<span class="username"/>')
            .text(data.username)
            .css('color', getUsernameColor(data.username));
        var $messageBodyDiv = $('<span class="messageBody">').text(data.message);
        var typingClass = data.typing ? 'typing':'';
        var $messageDiv = $('<li class="message"/>')
            .data('username', data.username)
            .addClass(typingClass)
            .append($usernameDiv, $messageBodyDiv);
        
        addMessageElement($messageDiv, options);
    }

    function addChatTyping(data) {
        data.typing = true;
        data.message = 'is typing';
        addChatMessage(data);
    }

    function removeChatTyping(data){
        getTypingMessage(data).fadeOut(function(){
            $(this).remove();
        });
    }

    function updateTyping(){
        if(connected) {
            if(!typing) {
                typing = true;
                socket.emit('typing');
            }
            lastTypingTime = (new Data()).getTime();

            setTimeout(function() {
                var typingTimer = (new Date()).getTime();
                var timeDiff = typingTimer - lastTypingTime;
                if(timeDiff >= TYPING_TIME_LENGTH && typing) {
                    socket.emit('stop typing');
                    typing = false;
                }
            }, TYPING_TIME_LENGTH);
        }
    }
    
});