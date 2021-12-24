        // 슬라이더 페이드 인
        var i=0;
        function slide(){
            i++;
            if(i>$('#slide .Photo:last').index()){
                i=0;
            }
            $('#slide .Photo').eq(i).stop().fadeIn(500);
            $('#slide .Photo').eq(i-1).stop().fadeOut();
        }
        setInterval(slide,5000);
        
        // 어트랙션 서브 버튼
        $(function(){
            // # ALL
            $('.Attractions .sub-button span:nth-of-type(1)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(1)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.park').fadeIn();
            });

            // # 판타지 랜드
            $('.Attractions .sub-button span:nth-of-type(2)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(2)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Fantasyland').fadeIn();
                $('.park').not('.Fantasyland').hide();
            });

            // # 프론티어 랜드
            $('.Attractions .sub-button span:nth-of-type(3)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(3)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Frontierland').fadeIn();
                $('.park').not('.Frontierland').hide();
            });

            // 미키의 툰타운
            $('.Attractions .sub-button span:nth-of-type(4)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(4)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Toontown').fadeIn();
                $('.park').not('.Toontown').hide();
            });           

            // 크리터 컨트리
            $('.Attractions .sub-button span:nth-of-type(5)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(5)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Critter').fadeIn();
                $('.park').not('.Critter').hide();
            });   
            
            // 어드밴처 랜드
            $('.Attractions .sub-button span:nth-of-type(6)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(6)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Adventureland').fadeIn();
                $('.park').not('.Adventureland').hide();
            });   
            
            // 뉴 올리언스 광장
            $('.Attractions .sub-button span:nth-of-type(7)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(7)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Orleans').fadeIn();
                $('.park').not('.Orleans').hide();
            });        

            // 메인 스트리트, 미국
            $('.Attractions .sub-button span:nth-of-type(8)').click(function(){
                // 서브제목 색 바꾸기
                $('.Attractions .sub-button span:nth-of-type(8)').addClass('sub-color');
                $('.Attractions .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.USA').fadeIn();
                $('.park').not('.USA').hide();
            });   
            
        // 가이드맵 이비지 색 바꾸기
        $(function(){
            $('.Search button').hover(function(){
                $('.Search button img').attr('src','img/sub1/아이콘/지도2.png');
            });
            $('.Search button').mouseout(function(){
                $('.Search button img').attr('src','img/sub1/아이콘/지도.png');
            });
        });


        });

        // 점검시설 서브 버튼
        $(function(){
            // # ALL
            $('.inspection .sub-button span:nth-of-type(1)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(1)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.check').fadeIn();
            });

            // # 판타지 랜드
            $('.inspection .sub-button span:nth-of-type(2)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(2)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Fantasyland').fadeIn();
                $('.check').not('.Fantasyland').hide();
            });

            // # 프론티어 랜드
            $('.inspection .sub-button span:nth-of-type(3)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(3)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Frontierland').fadeIn();
                $('.check').not('.Frontierland').hide();
            });

            // 미키의 툰타운
            $('.inspection .sub-button span:nth-of-type(4)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(4)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Toontown').fadeIn();
                $('.check').not('.Toontown').hide();
            });           

            // 크리터 컨트리
            $('.inspection .sub-button span:nth-of-type(5)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(5)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Critter').fadeIn();
                $('.check').not('.Critter').hide();
            });   
            
            // 어드밴처 랜드
            $('.inspection .sub-button span:nth-of-type(6)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(6)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Adventureland').fadeIn();
                $('.check').not('.Adventureland').hide();
            });   
            
            // 뉴 올리언스 광장
            $('.inspection .sub-button span:nth-of-type(7)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(7)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Orleans').fadeIn();
                $('.check').not('.Orleans').hide();
            });        

            // 메인 스트리트, 미국
            $('.inspection .sub-button span:nth-of-type(8)').click(function(){
                // 서브제목 색 바꾸기
                $('.inspection .sub-button span:nth-of-type(8)').addClass('sub-color');
                $('.inspection .sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.USA').fadeIn();
                $('.check').not('.USA').hide();
            });   

        });

        // 점심시설 날자 버튼
        $(function(){
            $('.calendar-box span').click(function(){
                $(this).addClass('sub-color');
                $('.calendar-box span').not(this).removeClass('sub-color')
            });
        });

        // 추천코스 서브버튼 제이쿼리
        $(function(){
            // # 처음오는
            $('.Recommendation-sub-button span:nth-of-type(1)').click(function(){
                // 서브제목 색 바꾸기
                $('.Recommendation-sub-button span:nth-of-type(1)').addClass('sub-color');
                $('.Recommendation-sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.First').fadeIn();
                $('.Recommendation .box').not('.First').hide();
            });

            // # 아이와 오는
            $('.Recommendation-sub-button span:nth-of-type(2)').click(function(){
                // 서브제목 색 바꾸기
                $('.Recommendation-sub-button span:nth-of-type(2)').addClass('sub-color');
                $('.Recommendation-sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.Child').fadeIn();
                $('.Recommendation .box').not('.Child').hide();
            });

            // # 비 오는
            $('.Recommendation-sub-button span:nth-of-type(3)').click(function(){
                // 서브제목 색 바꾸기
                $('.Recommendation-sub-button span:nth-of-type(3)').addClass('sub-color');
                $('.Recommendation-sub-button span').not(this).removeClass('sub-color');

                // 창 바꾸기
                $('.rain').fadeIn();
                $('.Recommendation .box').not('.rain').hide();
            });
        });


        // 메인 버튼 제이쿼리
        $(function(){
            // 어트랙션
            $('.main-button button:nth-of-type(1)').click(function(){
                // 텍스트 색 바꾸기
                $('.main-button button:nth-of-type(1)').addClass('sub-color');
                $('.main-button button').not(this).removeClass('sub-color');
                // 창 바꾸기
                $('.Attractions').fadeIn();
                $('.inspection').hide();
                $('.Recommendation').hide();
                // 슬라이드 텍스트 바꾸기
                $('#slide strong').text('어트랙션')
            });
            // 점검시설
            $('.main-button button:nth-of-type(2)').click(function(){
                // 텍스트 색 바꾸기
                $('.main-button button:nth-of-type(2)').addClass('sub-color');
                $('.main-button button').not(this).removeClass('sub-color');
                // 창 바꾸기
                $('.inspection').fadeIn();
                $('.Attractions').hide();
                $('.Recommendation').hide();
                // 슬라이드 텍스트 바꾸기
                $('#slide strong').text('점검시설')
            });
            // 추천코스
            $('.main-button button:nth-of-type(3)').click(function(){
                // 텍스트 색 바꾸기
                $('.main-button button:nth-of-type(3)').addClass('sub-color');
                $('.main-button button').not(this).removeClass('sub-color');
                // 창 바꾸기
                $('.Recommendation').fadeIn();
                $('.Attractions').hide();
                $('.inspection').hide();
                // 슬라이드 텍스트 바꾸기
                $('#slide strong').text('추천코스')
            });
        });

        
