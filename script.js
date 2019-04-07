    var tab = document.getElementsByClassName('info-header-tab');
    var tabContent= document.getElementsByClassName('info-tabcontent');
    var info= document.getElementsByClassName('info-header')[0];

        function hideTabCOntent(a){
            for(var i = a;i<tabContent.length;i++){
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
                

            }
        }
        hideTabCOntent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')){
                hideTabCOntent(0);
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }
        info.addEventListener('click',function(event){
            var target = event.target;
            if (target.className=='info-header-tab'){
                for (var i=0; i< tab.length;i++){
                    if(target == tab[i]){
                        showTabContent(i);
                        break;
                    }
                }
            };
        });
    
        var more = document.querySelector('.more');
        var overlay = document.querySelector('.overlay');
        var popupClose = document.querySelector('.popup-close');
        
        more.addEventListener('click',function(){
            overlay.style.display='block';
            document.body.style.overflow="hidden";
        });
        popupClose.addEventListener('click',function(){
            overlay.style.display='none';
            document.body.style.overflow="";
        })



