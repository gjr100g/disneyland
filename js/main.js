
        // 스크롤을 내리면 눈이 움직임
        $(function(){
            var x = $(document).scrollTop(0);
            $(document).scroll(function(){
                var y = $(document).scrollTop();
                var z = y-x;
                if(y<400 || z<0){
                    $(".snow1").stop().animate({top:"500px",right:"470px"});
                    $(".snow2").stop().animate({top:"300px",right:"500px"});
                    $(".snow3").stop().animate({top:"600px",right:"800px"});
                    $(".snow4").stop().animate({top:"300px",right:"500px"});
                    $(".snow5").stop().animate({top:"900px",right:"730px"});
                    $(".snow6").stop().animate({top:"550px",right:"640px"});
                    $(".snow7").stop().animate({top:"770px",right:"500px"});
                    $(".snow8").stop().animate({top:"200px",right:"700px"});
                    $(".snow9").stop().animate({top:"700px",right:"800px"});
                    $(".snow10").stop().animate({top:"600px",right:"700px"});
                    $(".snow11").stop().animate({top:"400px",right:"800px"});
                    $(".snow12").stop().animate({top:"400px",right:"600px"});
                    $(".snow13").stop().animate({top:"800px",right:"600px"});
                    $(".snow14").stop().animate({top:"1010px",right:"850px"});
                    $(".snow15").stop().animate({top:"100px",right:"900px"});
                    $(".snow16").stop().animate({top:"870px",right:"600px"});
                    $(".snow17").stop().animate({top:"200px",right:"955px"});
                    $(".snow18").stop().animate({top:"1050px",right:"1000px"});
                }
                if(y<250 || z<0){
                    $(".snow1").stop().animate({top:"150px",right:"90px"});
                    $(".snow2").stop().animate({top:"200px",right:"120px"});
                    $(".snow3").stop().animate({top:"160px",right:"320px"});
                    $(".snow4").stop().animate({top:"300px",right:"190px"});
                    $(".snow5").stop().animate({top:"350px",right:"120px"});
                    $(".snow6").stop().animate({top:"260px",right:"190px"});
                    $(".snow7").stop().animate({top:"250px",right:"120px"});
                    $(".snow8").stop().animate({top:"300px",right:"170px"});
                    $(".snow9").stop().animate({top:"240px",right:"270px"});
                    $(".snow10").stop().animate({top:"190px",right:"160px"});
                    $(".snow11").stop().animate({top:"350px",right:"320px"});
                    $(".snow12").stop().animate({top:"450px",right:"100px"});
                    $(".snow13").stop().animate({top:"400px",right:"200px"});
                    $(".snow14").stop().animate({top:"410px",right:"250px"});
                    $(".snow15").stop().animate({top:"490px",right:"300px"});
                    $(".snow16").stop().animate({top:"370px",right:"90px"});
                    $(".snow17").stop().animate({top:"300px",right:"255px"});
                    $(".snow18").stop().animate({top:"350px",right:"300px"});
                }
                if(y<100 || z<0){
                    $(".snow1").stop().animate({top:"100px",right:"70px"});
                    $(".snow2").stop().animate({top:"170px",right:"90px"});
                    $(".snow3").stop().animate({top:"100px",right:"220px"});
                    $(".snow4").stop().animate({top:"170px",right:"170px"});
                    $(".snow5").stop().animate({top:"300px",right:"90px"});
                    $(".snow6").stop().animate({top:"250px",right:"140px"});
                    $(".snow7").stop().animate({top:"220px",right:"70px"});
                    $(".snow8").stop().animate({top:"210px",right:"140px"});
                    $(".snow9").stop().animate({top:"215px",right:"210px"});
                    $(".snow10").stop().animate({top:"120px",right:"130px"});
                    $(".snow11").stop().animate({top:"300px",right:"170px"});
                    $(".snow12").stop().animate({top:"390px",right:"70px"});
                    $(".snow13").stop().animate({top:"350px",right:"120px"});
                    $(".snow14").stop().animate({top:"360px",right:"170px"});
                    $(".snow15").stop().animate({top:"420px",right:"150px"});
                    $(".snow16").stop().animate({top:"350px",right:"50px"});
                    $(".snow17").stop().animate({top:"270px",right:"225px"});
                    $(".snow18").stop().animate({top:"330px",right:"230px"});
                }



            });
        });

        // 스크롤 내리면 매뉴바 색이 바뀜
      
            $(window).on('scroll',function(){
                if($(window).scrollTop()){ 
                    $('header').addClass('active');
                    $('img[alt="logo8"]').attr("src","img/common/logo1.png");
                }else{ 
                    $('header').removeClass('active');
                    $('img[alt="logo8"]').attr("src","img/common/logo8.gif"); 
                } 
            });


            if(matchMedia("screen and (max-width: 1424px)").matches){
                $(function(){
                    $("#logo img").attr("src","img/common/logo1.png");
                });

                $(window).on('scroll',function(){
                if($(window).scrollTop()){ 
                    $('header').addClass('active');
                    $('img[alt="logo8"]').attr("src","img/common/logo1.png");
                }else{ 
                    $('header').removeClass('active');
                    $('img[alt="logo8"]').attr("src","img/common/logo1.png"); 
                } 
            });

        }




        // 만화속 세상 스크롤 내리면 제이쿼리
        function isElementUnderBottom(elem, triggerDiff) {
            const { top } = elem.getBoundingClientRect();
            const { innerHeight } = window;
            return top > innerHeight + (triggerDiff || 0);
        }

        function handleScroll() {
        const elems = document.querySelectorAll('.qqqq');
        elems.forEach(elem => {
            if (isElementUnderBottom(elem, -20)) {
            elem.style.opacity = "0";
            elem.style.transform = 'scale(0.4)';
            } else {
            elem.style.opacity = "1";
            elem.style.transform = 'scale(1.0)';
            }
        })
        }

        window.addEventListener('scroll', handleScroll);
        
        // 호버시 화살표 색 바꾸기

        // 명소
        $(function(){
            $(".Attractions .VIEW_ALL").hover(function(){
                $(".Attractions .VIEW_ALL img").attr("src","img/main/화살표.1")
            });
            $(".Attractions .VIEW_ALL").mouseleave(function(){
                $(".Attractions .VIEW_ALL img").attr("src","img/main/화살표.png")
            });
        });
        // 상품
        $(function(){
            $(".Goods-box .VIEW_ALL").hover(function(){
                $(".Goods-box .VIEW_ALL img").attr("src","img/main/화살표.1")
            });
            $(".Goods-box .VIEW_ALL").mouseleave(function(){
                $(".Goods-box .VIEW_ALL img").attr("src","img/main/화살표.png")
            });
        });
        // 비디오
                $(function(){
            $(".Videos-text .VIEW_ALL").hover(function(){
                $(".Videos-text .VIEW_ALL img").attr("src","img/main/화살표.1")
            });
            $(".Videos-text .VIEW_ALL").mouseleave(function(){
                $(".Videos-text .VIEW_ALL img").attr("src","img/main/화살표.png")
            });
        });

        // 메인 비디오 나오는 제이쿼리 입니다
        $(function(){
            $(".main-s:nth-of-type(1) .button").click(function(){
                $("#Fantasy").fadeIn(500);
            });
            $(".main-s:nth-of-type(2) .button").click(function(){
                $("#Galaxy").fadeIn(500);
            });
            $(".main-s:nth-of-type(3) .button").click(function(){
                $("#Mickey").fadeIn(500);
            });
            $(".main-s:nth-of-type(4) .button").click(function(){
                $("#Critter").fadeIn(500);
            });
            $(".main-s:nth-of-type(5) .button").click(function(){
                $("#Adventur").fadeIn(500);
            });
            $(".main-s:nth-of-type(6) .button").click(function(){
                $("#New-Orleans").fadeIn(500);
            });
            $(".main-s:nth-of-type(7) .button").click(function(){
                $("#usa").fadeIn(500);
            });


            // 창 닫음
            $(".main1 span").click(function(){
                $(".main1").fadeOut(500);
            });
            $(".main1 div").click(function(){
                $(".main1").fadeOut(500);
            });
        });

        
        // 놀이기구 영상 나오는 제이쿼리 입니다
        $(function(){
            $(".Videos:nth-of-type(1) .button").click(function(){
                $("#Pinocchio").fadeIn(500);
            });
            $(".Videos:nth-of-type(2) .button").click(function(){
                $("#StarWars").fadeIn(500);
            });
            $(".Videos:nth-of-type(3) .button").click(function(){
                $("#Monsters").fadeIn(500);
            });
            $(".Videos:nth-of-type(4) .button").click(function(){
                $("#Caribbean").fadeIn(500);
            });
            $(".Videos:nth-of-type(5) .button").click(function(){
                $("#Ratatouille").fadeIn(500);
            });
            $(".Videos:nth-of-type(6) .button").click(function(){
                $("#Indiana").fadeIn(500);
            });
        });



        // 달력 제이쿼리 입니다
        $(function(){
            var today = new Date();
            var date = new Date();           

            $(".calendar .year button:nth-of-type(1)").click(function() { // 이전달
                $("#calendar > tbody > td").remove();
                $("#calendar > tbody > tr").remove();
                today = new Date ( today.getFullYear(), today.getMonth()-1, today.getDate());
                buildCalendar();
            })
            
            $(".calendar .year button:nth-of-type(2)").click(function(){ //다음달
                $("#calendar > tbody > td").remove();
                $("#calendar > tbody > tr").remove();
                today = new Date ( today.getFullYear(), today.getMonth()+1, today.getDate());
                buildCalendar();
            })


            function buildCalendar() {
                
                nowYear = today.getFullYear();
                nowMonth = today.getMonth();
                firstDate = new Date(nowYear,nowMonth,1).getDate();
                firstDay = new Date(nowYear,nowMonth,1).getDay(); //1st의 요일
                lastDate = new Date(nowYear,nowMonth+1,0).getDate();

                if((nowYear%4===0 && nowYear % 100 !==0) || nowYear%400===0) { //윤년 적용
                    lastDate[1]=29;
                }

                $(".year_mon").text(nowYear+"년 "+(nowMonth+1)+"월");

                for (i=0; i<firstDay; i++) { //첫번째 줄 빈칸
                    $("#calendar tbody:last").append("<td></td>");
                }
                for (i=1; i <=lastDate; i++){ // 날짜 채우기
                    plusDate = new Date(nowYear,nowMonth,i).getDay();
                    if (plusDate==0) {
                        $("#calendar tbody:last").append("<tr></tr>");
                    }
                    $("#calendar tbody:last").append("<td class='date'>"+ i +"</td>");
                }
                if($("#calendar > tbody > td").length%7!=0) { //마지막 줄 빈칸
                    for(i=1; i<= $("#calendar > tbody > td").length%7; i++) {
                        $("#calendar tbody:last").append("<td></td>");
                    }
                }
                $(".date").each(function(index){ // 오늘 날짜 표시
                    if(nowYear==date.getFullYear() && nowMonth==date.getMonth() && $(".date").eq(index).text()==date.getDate()) {
                        $(".date").eq(index).addClass('colToday');
                    }
                }) 

                $(function(){
                    // 달력 선택 입니다
                    $(function(){
                        $(".calendar tbody td").click(function(){
                            $(this).toggleClass("aa");
                        });
                    });
    
                    // 선택취소
                    $(function(){
                        $(".calendar .select button:nth-of-type(1)").click(function(){
                        $(".calendar tbody td").removeClass("aa") 
                        });
                    });
                });


            }
            buildCalendar();

        

        })


        // 스크롤에 따른 제이쿼리 입니다
        $(document).ready(function() {
            $(window).scroll( function(){
                    
                $('.opacity').each( function(i){
                    
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    if( bottom_of_window > bottom_of_element ){
                        $(this).animate({'opacity':'1'},1500);
                    }
                    
                }); 
            });
        });

        $(document).ready(function() {
            $(window).scroll( function(){
                    
                $('.qqqq').each( function(i){
                    
                    var bottom_of_element = $(this).offset().top + $(this).outerHeight() / 3;
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    
                    if( bottom_of_window > bottom_of_element ){
                        $(this).animate({transform:'scale(1)'},1500);
                    }
                    
                }); 
            });
        });

        // 메인 테마 사진 제이쿼리 입니다
        $(function(){
            $(document).ready(function(){
                $(".theme-button span:nth-of-type(1)").css({"background-color":"orange","opacity":"1"});
            });
        });

        $(function(){
            $(".theme-button span:nth-of-type(1)").click(function(){
                $(".theme-button span:nth-of-type(1)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(2)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(3)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(4)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(5)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(6)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(7)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(1)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(2)").hide();
                $(" #LANDS .main-s:nth-of-type(3)").hide();
                $(" #LANDS .main-s:nth-of-type(4)").hide();
                $(" #LANDS .main-s:nth-of-type(5)").hide();
                $(" #LANDS .main-s:nth-of-type(6)").hide();
                $(" #LANDS .main-s:nth-of-type(7)").hide();
            });
            $(".theme-button span:nth-of-type(2)").click(function(){
                $(".theme-button span:nth-of-type(2)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(1)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(3)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(4)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(5)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(6)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(7)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(2)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(1)").hide();
                $(" #LANDS .main-s:nth-of-type(3)").hide();
                $(" #LANDS .main-s:nth-of-type(4)").hide();
                $(" #LANDS .main-s:nth-of-type(5)").hide();
                $(" #LANDS .main-s:nth-of-type(6)").hide();
                $(" #LANDS .main-s:nth-of-type(7)").hide();
            });
            $(".theme-button span:nth-of-type(3)").click(function(){
                $(".theme-button span:nth-of-type(3)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(2)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(1)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(4)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(5)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(6)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(7)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(3)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(2)").hide();
                $(" #LANDS .main-s:nth-of-type(1)").hide();
                $(" #LANDS .main-s:nth-of-type(4)").hide();
                $(" #LANDS .main-s:nth-of-type(5)").hide();
                $(" #LANDS .main-s:nth-of-type(6)").hide();
                $(" #LANDS .main-s:nth-of-type(7)").hide();
            });
            $(".theme-button span:nth-of-type(4)").click(function(){
                $(".theme-button span:nth-of-type(4)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(2)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(3)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(1)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(5)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(6)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(7)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(4)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(2)").hide();
                $(" #LANDS .main-s:nth-of-type(3)").hide();
                $(" #LANDS .main-s:nth-of-type(1)").hide();
                $(" #LANDS .main-s:nth-of-type(5)").hide();
                $(" #LANDS .main-s:nth-of-type(6)").hide();
                $(" #LANDS .main-s:nth-of-type(7)").hide();
            });
            $(".theme-button span:nth-of-type(5)").click(function(){
                $(".theme-button span:nth-of-type(5)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(2)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(3)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(4)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(1)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(6)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(7)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(5)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(2)").hide();
                $(" #LANDS .main-s:nth-of-type(3)").hide();
                $(" #LANDS .main-s:nth-of-type(4)").hide();
                $(" #LANDS .main-s:nth-of-type(1)").hide();
                $(" #LANDS .main-s:nth-of-type(6)").hide();
                $(" #LANDS .main-s:nth-of-type(7)").hide();
            });
            $(".theme-button span:nth-of-type(6)").click(function(){
                $(".theme-button span:nth-of-type(6)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(2)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(3)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(4)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(5)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(1)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(7)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(6)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(2)").hide();
                $(" #LANDS .main-s:nth-of-type(3)").hide();
                $(" #LANDS .main-s:nth-of-type(4)").hide();
                $(" #LANDS .main-s:nth-of-type(5)").hide();
                $(" #LANDS .main-s:nth-of-type(1)").hide();
                $(" #LANDS .main-s:nth-of-type(7)").hide();
            });
            $(".theme-button span:nth-of-type(7)").click(function(){
                $(".theme-button span:nth-of-type(7)").css({"background-color":"orange","opacity":"1"});
                $(".theme-button span:nth-of-type(2)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(3)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(4)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(5)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(6)").css({"background-color":"white","opacity":"0.5"});
                $(".theme-button span:nth-of-type(1)").css({"background-color":"white","opacity":"0.5"});
                $(" #LANDS .main-s:nth-of-type(7)").fadeIn();
                $(" #LANDS .main-s:nth-of-type(2)").hide();
                $(" #LANDS .main-s:nth-of-type(3)").hide();
                $(" #LANDS .main-s:nth-of-type(4)").hide();
                $(" #LANDS .main-s:nth-of-type(5)").hide();
                $(" #LANDS .main-s:nth-of-type(6)").hide();
                $(" #LANDS .main-s:nth-of-type(1)").hide();
            });
        });


        // 추천 섹션 제이쿼리 입니다
        $(function(){
            $(document).ready(function(){
                $("#sh").css({"color":"rgb(0, 156, 218)"});
            });
        });

        $(function(){
            $("#le").click(function(){
                $("#le").css({"color":"rgb(0, 156, 218)"});
                $("#sh").css({"color":"#999"});
                $(".Attractions:nth-of-type(2)").fadeIn();
                $(".Attractions:nth-of-type(1)").hide();
            });
        });
        $(function(){
            $("#sh").click(function(){
                $("#sh").css({"color":"rgb(0, 156, 218)"});
                $("#le").css({"color":"#999"});
                $(".Attractions:nth-of-type(1)").fadeIn();
                $(".Attractions:nth-of-type(2)").hide();
            });
        });



        // 스크롤 내릴떄 애니메이션


        $(function(){
            var x = $(document).scrollTop(0);
            $(document).scroll(function(){
                var y = $(document).scrollTop();
                var z = y-x;

                if(y<3300 || z<0){
                    $(".photo1").stop().animate({top:"150px"});
                    $(".photo2").stop().animate({top:"0px"});
                    $(".photo4").stop().animate({top:"240px"});
                }
                if(y>=3400 || z>=0){
                    $(".photo1").stop().animate({top:"75px"});
                    $(".photo2").stop().animate({top:"75px"});
                    $(".photo4").stop().animate({top:"315px"});
                }
                if(y>=3500 || z>=0){
                    $(".photo1").stop().animate({top:"0px"});
                    $(".photo2").stop().animate({top:"150px"});
                    $(".photo4").stop().animate({top:"390px"});
                }

            });
        });








        if(matchMedia("screen and (max-width: 1429px)").matches)
        {
            $(function(){
                $("#logo img").attr("src","img/common/logo1.png");
            });
            $(function(){
                var x = $(document).scrollTop(0);
                $(document).scroll(function(){
                    var y = $(document).scrollTop();
                    var z = y-x;

                    if(y<3300 || z<0){
                        $(".photo1").stop().animate({top:"150px"});
                        $(".photo2").stop().animate({top:"30px"});
                        $(".photo4").stop().animate({top:"240px"});
                    }
                    if(y>=3400 || z>=0){
                        $(".photo1").stop().animate({top:"75px"});
                        $(".photo2").stop().animate({top:"75px"});
                        $(".photo4").stop().animate({top:"315px"});
                    }
                    if(y>=3500 || z>=0){
                        $(".photo1").stop().animate({top:"70px"});
                        $(".photo2").stop().animate({top:"110px"});
                        $(".photo4").stop().animate({top:"320px"});
                    }

                });
            });

        }



        if(matchMedia("screen and (max-width: 599px)").matches)
        {

            $(function(){
                var x = $(document).scrollTop(0);
                $(document).scroll(function(){
                    var y = $(document).scrollTop();
                    var z = y-x;

                    if(y<4500 || z<0){
                        $(".photo1").stop().animate({top:"170px"});
                        $(".photo2").stop().animate({top:"170px"});
                        $(".photo4").stop().animate({top:"450px"});
                    }
                    if(y>=4550 || z>=0){
                        $(".photo1").stop().animate({top:"115px"});
                        $(".photo2").stop().animate({top:"115px"});
                        $(".photo4").stop().animate({top:"355px"});
                    }
                    if(y>=4600 || z>=0){
                        $(".photo1").stop().animate({top:"40px"});
                        $(".photo2").stop().animate({top:"100px"});
                        $(".photo4").stop().animate({top:"290px"});
                    }

                });
            });

        }


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
