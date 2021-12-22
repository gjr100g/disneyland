
        // 햄버거메뉴 누르기 제이쿼리///////////////////
        $(function(){
            $(".hamburger").click(function(){
                $("#Manu").slideToggle(700);
                $("header").toggleClass("active");
            });
        });
        
        // 새로고침 자바


        var filter = "win16|win32|win64|mac|macintel"; 
        if ( navigator.platform ) { 
            if ( filter.indexOf( navigator.platform.toLowerCase() ) < 0 ) { 
                //mobile 
                
            } else { 
                //pc 
                $(function(){
                    $(window).resize(function (){
          
                    var width_size = window.outerWidth;
        
                    if (width_size=599) {
                        document.location.reload();
                    }
                    if (width_size=1424) {
                        document.location.reload();
                    }
                    if (width_size=1425) {
                        document.location.reload();
                    }
                })
                });
            } 
        }

        
        // 스크롤 내리면 매뉴바 색이 바뀜
      
        $(window).on('scroll',function(){
            if($(window).scrollTop()){ 
                $('nav>a').addClass('nav');
                $('header').addClass('active');
                $('img[alt="logo8"]').attr("src","img/common/logo1.png");
            }else{ 
                $('header').removeClass('active');
                $('nav>a').removeClass('nav');
                $('img[alt="logo8"]').attr("src","img/common/logo8.gif"); 
            } 
        });


        if(matchMedia("screen and (max-width: 1424px)").matches){
            $(function(){
                $("#logo img").attr("src","img/common/logo1.png");
            });

            $(window).on('scroll',function(){
            if($(window).scrollTop()){ 
                $('nav>a').addClass('nav');
                $('header').addClass('active');
                $('img[alt="logo8"]').attr("src","img/common/logo1.png");
            }else{ 
                $('nav>a').removeClass('nav');
                $('header').removeClass('active');
                $('img[alt="logo8"]').attr("src","img/common/logo1.png"); 
            } 
        });

    }


