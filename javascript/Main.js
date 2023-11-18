const Main = Vue.createApp({
    data() {
        return {         
            Latest_Events_News_Modal_Img: '', //主要資訊src
            Latest_Events_News_Modal_Intro: '', //主要資訊簡介
            Latest_Events_News_Modal_Title: '', //主要資訊Title
            Latest_Events_News_Modal_Time: '', //主要資訊日期
            Latest_Events_News_Modal_Content: '', //主要資訊內容
            Latest_Events_News_Modal_Side_Intro: '', //看更多資訊簡介
            Latest_Events_News_Modal_Side_Intro2: '', //看更多資訊簡介2
            Latest_Events_News_Modal_Side_Img: '', //看更多Src
            Latest_Events_News_Modal_Side_Img2: '', //看更多Src2
            Latest_Events_News_Modal_Variable: '', //點擊最新活動要帶的變數
            Latest_Events_News_Modal_Variable2: '', //點擊最新活動要帶的變數

            PolicyIssues_Modal_Img: '',
            PolicyIssues_Modal_Intro: '',
            PolicyIssues_Modal_Title: '',
            PolicyIssues_Content_Title:'',
            PolicyIssues_Content_Text:'',
            PolicyIssues_Content_Title2:'',
            PolicyIssues_Content_Text2:'',
            PolicyIssues_Content_Title3:'',
            PolicyIssues_Content_Text3:'',
            PolicyIssues_Modal_Side_Img:'',
            PolicyIssues_Modal_Side_Intro:'',
            PolicyIssues_Modal_Variable: '', //點擊最新活動要帶的變數
            PolicyIssues_Modal_Variable2: '',
        }
    },
    methods: {
        EntryLoading: function () {
            var $this = this;
            $("#Index").addClass('d-none');
                $("#Main_Content").removeClass('d-none');
                $("#Main_Content").addClass('d-block');
            // setTimeout(() => {
            //     $("#Index").addClass('d-none');
            //     $("#Main_Content").removeClass('d-none');
            //     $("#Main_Content").addClass('d-block');
            //   }, "7000");
        },

        OpenLatestEventsNews: function(type){
            var $this = this;
            if(type == "PetCommunityModal"){
                $this.Latest_Events_News_Modal_Intro = "參與台北寵物論壇，爭取貓咪友善環境";
                $this.Latest_Events_News_Modal_Img = "./images/latest_events_news_side_3_sm.png";
                $this.Latest_Events_News_Modal_Title = "參與台北寵物論壇，爭取貓咪友善環境";
                $this.Latest_Events_News_Modal_Time = "2023/12/26";
                $this.Latest_Events_News_Modal_Content = "炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。";
                $this.Latest_Events_News_Modal_Side_Img = "./images/latest_events_news_side_1_sm.png";
                $this.Latest_Events_News_Modal_Side_Intro = "掃街模式開啟！帶著你的貓耳，來和我一起走！";
                $this.Latest_Events_News_Modal_Side_Img2 = "./images/latest_events_news_side_2_sm.png";
                $this.Latest_Events_News_Modal_Side_Intro2 = "收容所模特兒大比拼！";
                $this.Latest_Events_News_Modal_Variable = "StreetPatrolMode";
                $this.Latest_Events_News_Modal_Variable2 = "AnimalShelter";
            }
            else if(type == "StreetPatrolMode"){
                $this.Latest_Events_News_Modal_Intro = "掃街模式開啟！帶著你的貓耳，來和我一起走！";
                $this.Latest_Events_News_Modal_Img = "./images/latest_events_news_side_1_sm.png";
                $this.Latest_Events_News_Modal_Title = "掃街模式開啟！帶著你的貓耳，來和我一起走！";
                $this.Latest_Events_News_Modal_Time = "2023/12/24";
                $this.Latest_Events_News_Modal_Content = "街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！";
                $this.Latest_Events_News_Modal_Side_Img = "./images/latest_events_news_side_3_sm.png";
                $this.Latest_Events_News_Modal_Side_Intro = "參與台北寵物論壇，爭取貓咪友善環境";
                $this.Latest_Events_News_Modal_Side_Img2 = "./images/latest_events_news_side_2_sm.png";
                $this.Latest_Events_News_Modal_Side_Intro2 = "收容所模特兒大比拼！";
                $this.Latest_Events_News_Modal_Variable = "PetCommunityModal";
                $this.Latest_Events_News_Modal_Variable2 = "AnimalShelter";
            }
            else if(type == "AnimalShelter"){
                $this.Latest_Events_News_Modal_Intro = "收容所模特兒大比拼！";
                $this.Latest_Events_News_Modal_Img = "./images/latest_events_news_side_2_sm.png";
                $this.Latest_Events_News_Modal_Title = "收容所模特兒大比拼！";
                $this.Latest_Events_News_Modal_Time = "2023/12/20";
                $this.Latest_Events_News_Modal_Content = "今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！";
                $this.Latest_Events_News_Modal_Side_Img = "./images/latest_events_news_side_3_sm.png";
                $this.Latest_Events_News_Modal_Side_Intro = "參與台北寵物論壇，爭取貓咪友善環境";
                $this.Latest_Events_News_Modal_Side_Img2 = "./images/latest_events_news_side_1_sm.png";
                $this.Latest_Events_News_Modal_Side_Intro2 = "掃街模式開啟！帶著你的貓耳，來和我一起走！";
                $this.Latest_Events_News_Modal_Variable = "PetCommunityModal";
                $this.Latest_Events_News_Modal_Variable2 = "StreetPatrolMode";
            }
        },

        OpenPolicyIssuesModal: function(type){
            var $this = this;
            if(type == "policy_issues_content_1"){
                $this.PolicyIssues_Modal_Img = "./images/policy_issues_content_1_img.png";
                $this.PolicyIssues_Modal_Intro = "打造休閒天堂！ 推廣寵物休閒與娛樂場所";
                $this.PolicyIssues_Modal_Title = "打造休閒天堂！ 推廣寵物休閒與娛樂場所";
                $this.PolicyIssues_Content_Title = "設立寵物醫療基金";
                $this.PolicyIssues_Content_Text = "每年撥款新台幣 10 億元，專款專用於支援家庭寵物的醫療費用";
                $this.PolicyIssues_Content_Title2 = "提供醫療補助";
                $this.PolicyIssues_Content_Text2 = "每隻寵物每年可獲得高達新台幣 20,000 元的醫療補助，減輕飼主的經濟壓力";
                $this.PolicyIssues_Content_Title3 = "合作動物醫院";
                $this.PolicyIssues_Content_Text3 = "目前已有和超過 200 家動物醫院進行初步的合作討論";
                $this.PolicyIssues_Modal_Side_Img = "./images/policy_issues_content_2_img.png";
                $this.PolicyIssues_Modal_Side_Intro = "為毛孩子謀福利！ 推動寵物醫療保障方案";
                $this.PolicyIssues_Modal_Side_Img2 = "./images/policy_issues_content_3_img.png";
                $this.PolicyIssues_Modal_Side_Intro2 = "推廣寵物飼養教育！ 讓愛更加專業";
                $this.PolicyIssues_Modal_Variable = "policy_issues_content_2";
                $this.PolicyIssues_Modal_Variable2 = "policy_issues_content_3";
            }
            else if(type == "policy_issues_content_2"){
                $this.PolicyIssues_Modal_Img = "./images/policy_issues_content_2_img.png";
                $this.PolicyIssues_Modal_Intro = "為毛孩子謀福利！ 推動寵物醫療保障方案";
                $this.PolicyIssues_Modal_Title = "為毛孩子謀福利！ 推動寵物醫療保障方案";
                $this.PolicyIssues_Content_Title = "建立寵物公園";
                $this.PolicyIssues_Content_Text = "每年撥款新台幣 5 億元，用於在各大都市建立專屬的寵物公園。根據初步規劃，預計在第一年內，將在全國範圍內建立至少 10 座寵物公園。";
                $this.PolicyIssues_Content_Title2 = "推廣寵物友善商家";
                $this.PolicyIssues_Content_Text2 = "鼓勵商家提供寵物友善的環境，並為參與的商家提供稅收優惠。預計在政策實施後的首年，將有超過 500 家商家加入此計畫。";
                $this.PolicyIssues_Content_Title3 = "舉辦寵物活動和工作坊";
                $this.PolicyIssues_Content_Text3 = "與各大寵物社團和組織合作，每年舉辦至少 5 場大型的寵物活動，包括寵物才藝比賽、飼養知識工作坊等。";
                $this.PolicyIssues_Modal_Side_Img = "./images/policy_issues_content_1_img.png";
                $this.PolicyIssues_Modal_Side_Intro = "打造休閒天堂！ 推廣寵物休閒與娛樂場所";
                $this.PolicyIssues_Modal_Side_Img2 = "./images/policy_issues_content_3_img.png";
                $this.PolicyIssues_Modal_Side_Intro2 = "推廣寵物飼養教育！ 讓愛更加專業";
                $this.PolicyIssues_Modal_Variable = "policy_issues_content_1";
                $this.PolicyIssues_Modal_Variable2 = "policy_issues_content_3";
            }
            else if(type == "policy_issues_content_3"){
                $this.PolicyIssues_Modal_Img = "./images/policy_issues_content_3_img.png";
                $this.PolicyIssues_Modal_Intro = "推廣寵物飼養教育！ 讓愛更加專業";
                $this.PolicyIssues_Modal_Title = "推廣寵物飼養教育！ 讓愛更加專業";
                $this.PolicyIssues_Content_Title = "建立寵物飼養教育中心";
                $this.PolicyIssues_Content_Text = "每年撥款新台幣 3 億元，用於在全國各地建立專業的寵物飼養教育中心。預計在第一年內，在全國至少 5 大城市設立教育中心。";
                $this.PolicyIssues_Content_Title2 = "推廣寵物飼養課程";
                $this.PolicyIssues_Content_Text2 = "與學校、社區組織和寵物社團合作，推出一系列免費的寵物飼養課程。預計每年將有超過 10,000 名市民受益。";
                $this.PolicyIssues_Content_Title3 = "製作教育資料";
                $this.PolicyIssues_Content_Text3 = "出版寵物飼養手冊、影片和線上課程，讓所有有意飼養寵物的家庭都能輕鬆取得正確的知識。";
                $this.PolicyIssues_Modal_Side_Img = "./images/policy_issues_content_1_img.png";
                $this.PolicyIssues_Modal_Side_Intro = "打造休閒天堂！ 推廣寵物休閒與娛樂場所";
                $this.PolicyIssues_Modal_Side_Img2 = "./images/policy_issues_content_2_img.png";
                $this.PolicyIssues_Modal_Side_Intro2 = "為毛孩子謀福利！ 推動寵物醫療保障方案";
                $this.PolicyIssues_Modal_Variable = "policy_issues_content_1";
                $this.PolicyIssues_Modal_Variable2 = "policy_issues_content_2";
            }
        },

        GetDateTime: function () {
            var $this = this;
            // 獲取當前日期和時間
            var Today = new Date();
            $this.SettingDate = Today.getFullYear() + "/" + (Today.getMonth() + 1) + "/" + Today.getDate();
        },

    },

    watch: {

    },

    mounted: function () {
        var $this = this;
        window.onload = function () {
            $this.EntryLoading();

            // 監聽滾動事件
            window.onmousewheel = document.onmousewheel = (e) => {
                const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                const clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
                const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

                if (scrollTop === 0) {//滾動到頂了
                    $(".navbar").removeClass('bg-none');                
                }
                else{
                    $(".navbar").addClass('bg-none');
                }
            }
            $(".Donation_Wrapper").on('click',function(){
                $('#Donation_Btn').attr("disabled",false);
                $(".ClickDonatePlan").removeClass("ClickDonatePlan");
                $(this).addClass('ClickDonatePlan');
            });

            $("#Donation_Custom").on('click',function(){
                $('#Donation_Btn').attr("disabled",true);
                $("#Donation_Custom").addClass("ClickDonatePlan");
            });
        }
    },
});