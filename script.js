
 const textElnora = document.querySelector('#textElnora');
        const textLeila = document.querySelector('#textLeila');
        const textLucinda = document.querySelector('#textLucinda');
        const close = document.querySelector('.close');
        const chatbox = document.querySelector('.chatbox');
        const chatboxContent = document.querySelector('.chatbox-content');

        function imgSlider1(anything) {
            document.querySelector('.chatImage').src = anything;
            textElnora.style.display = "block";
            textLeila.style.display = "none";
            textLucinda.style.display = "none";
        }

        function imgSlider2(anything) {
            document.querySelector('.chatImage').src = anything;
            textElnora.style.display = "none";
            textLeila.style.display = "block";
            textLucinda.style.display = "none";
        }

        function imgSlider3(anything) {
            document.querySelector('.chatImage').src = anything;
            textElnora.style.display = "none";
            textLeila.style.display = "none";
            textLucinda.style.display = "block";
        }

        function closeChatbox() {
            close.classList.toggle('active');
            chatboxContent.classList.toggle('hide');
            chatbox.classList.toggle('hideShowChatbox')
        }