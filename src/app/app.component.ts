import { Component, OnInit } from '@angular/core';
declare const grapesjs: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'firstApp';
  constructor() {
    console.log('grapeJs : ', grapesjs);
    // this.initGrapeJS();
  }

  ngOnInit() {
    this.initGrapeJS()
  }

  initGrapeJS() {
    // const editor = grapesjs.init({
    //   // Indicate where to init the editor. You can also pass an HTMLElement
    //   container: '#gjs',
    //   // Get the content for the canvas directly from the element
    //   // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    //   fromElement: true,
    //   // Size of the editor
    //   height: '300px',
    //   width: 'auto',
    //   components: {
    //     html: ``,
    //     css: null,
    //     components: null,
    //     style: null,
    //   },
    //   // Disable the storage manager for the moment
    //   storageManager: false,
    //   // Avoid any default panel
    //   panels: { defaults: [] },
    // });
      var editor = grapesjs.init({
        container: '#gjs',
        components: `
        <head>
        <script type="text/javascript" src="js/script.js"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="">
        <meta name="author" content="">
        <title>Lose 28 kg in 30 days</title>
        <meta http-equiv="Cache-control" content="public">
        </head>
        <body data-gr-c-s-loaded="true">
        <div align="center" style="font-size:14pt;color: #666666;">Advertorial</div>
        <div class="container">
          <div class="row">
            <div style="padding:0 0 5px 0;" class="col-md-4"> <img class="img-responsive" style="width:406px;max-width:100%;padding-top:6px;padding-bottom:11px;" src="images/logo.png" alt=""> </div>
            <div class="col-md-4"> </div>
            <div class="col-md-2"> </div>
            <div class="col-md-2"> </div>
          </div>
        </div>
        <div class="container" style="padding-left: 15px; padding-right: 15px;">
          <div class="row">
            <div class="col-md-8">
              <h1 class="h1" style="margin-top:0"><b> AIIMS Doctor Discovers Shockingly Simple Way To <span style="color: #ff0000;">Lose 1Kg Per Day Without Diet or Exercise</span></b></h1>
              <h4 class="h4">The first all-natural weight loss solution!</h4>
              <div class="blog-post-tags"> <b style="color: #202020; vertical-align: middle;font-size: 12px;"> 
                <script type="text/javascript">
                                var date = new Date();
                                var month = new Array(7);
                                month[0] = "January";
                                month[1] = "February";
                                month[2] = "March";
                                month[3] = "April";
                                month[4] = "May";
                                month[5] = "June";
                                month[6] = "July";
                                month[7] = "August";
                                month[8] = "September";
                                month[9] = "October";
                                month[10] = "November";
                                month[11] = "December";
                                var year = date.getYear();
                                if (year < 2000) {
                                    year += 1900;
                                }
                                document.write(month[date.getMonth()] + " " + date.getDate() + ", " + year);
                            </script>January 6, 2020January 4, 2020December 23, 2019 
                </b> | <img alt="views" height="15" src="images/pageviews.jpg" style="width: 15px; height: 15px;" title="views" width="15"> <span style="color: #E43221; vertical-align: middle;font-size: 12px;">1,759,245</span> | <a href="http://trauwt.com/click" target="_top"> <img src="images/fb.png"></a> </div>
              <br>
              <img style="border-radius:5px;" src="images/afo.png" width="100%" class="img-responsive"> <img src="images/newsA.jpg" class="newsA"><img src="images/newsB.jpg" class="newsA">
              
               <!-- put slider in here -->
                  
                  <style>
        * {box-sizing:border-box}
        
        .mySlides {display:none}
        
        /* Slideshow container */
        .slideshow-container {
          max-width: 1000px;
          position: relative;
          margin: auto;
        }
        
        /* The dots/bullets/indicators */
        .dot {
          height: 13px;
          width: 13px;
          margin: 0 2px;
          background-color: #bbb;
          border-radius: 50%;
          display: inline-block;
          transition: background-color 1s ease;
        }
        
        .active {
          background-color: #717171;
        }
        
        /* Fading animation */
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 2s;
          animation-name: fade;
          animation-duration: 2s;
        }
        
        @-webkit-keyframes fade {
          from {opacity: .4} 
          to {opacity: 1}
        }
        
        @keyframes fade {
          from {opacity: .4} 
          to {opacity: 1}
        }
        
        /* On smaller screens, decrease text size */
        @media only screen and (max-width: 300px) {
          .text {font-size: 11px}
        }
        </style>
                <div class="slideshow-container">
                  <div class="mySlides fade" style="display: block;"> <img src="images/slide2.jpg" style="width:100%"> </div>
                  <div class="mySlides fade" style="display: none;"> <img src="images/slide3.jpg" style="width:100%"> </div>
                  <div class="mySlides fade" style="display: none;"> <img src="images/slide4.jpg" style="width:100%"> </div>
                  <div class="mySlides fade" style="display: none;"> <img src="images/slide5.jpg" style="width:100%"> </div>
                    <div class="mySlides fade" style="display: none;"> <img src="images/slide6.jpg" style="width:100%"> </div>
                      <div class="mySlides fade" style="display: none;"> <img src="images/slide7.jpg" style="width:100%"> </div>
                        <div class="mySlides fade" style="display: none;"> <img src="images/slide8.jpg" style="width:100%"> </div>
            
                </div>
                <br>
                <div style="text-align:center"> <span class="dot active"></span> <span class="dot"></span> <span class="dot"></span> <span class="dot"></span>
                <span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="dot"></span> </div>
                <script>
        var slideIndex = 0;
        showSlides();
        
        function showSlides() {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("dot");
            for (i = 0; i < slides.length; i++) {
               slides[i].style.display = "none";  
            }
            slideIndex++;
            if (slideIndex> slides.length) {slideIndex = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex-1].style.display = "block";  
            dots[slideIndex-1].className += " active";
            setTimeout(showSlides, 2000); // Change image every 2 seconds
        }
        </script> 
                <!-- end slider code here -->
              <div>
                <p> We have been getting hundreds of emails from our readers who are losing 1kg per day using this weird new trick. At first we didn’t believe it and decided to ignore it like every other magical weight loss trick out there, but the results were so truly shocking we decided to investigate! Many of our readers have lost 28kg in as little as 30 days, without dieting, exercise, expensive surgery or cutting out their favorite foods! Health Reports decided to track down the man who invented this revolutionary solution and learn his story. </p>
                <p> 
                 
                </p>
                <p> <img src="images/BreakingNewsDoctorMan.jpg" style="float: right; margin: 0px 0px 10px 10px; width: 400px;">Renowned bio-medicine doctor Siddharth Kumail is credited with creating this trick and exposing the HUGE lie the weight loss industry has been trying to hide for years. Dr. Kumail stumbled upon this revolutionary weight loss solution while working at AIIMS Kuala Lampur's prestigious Research Department, and pharmaceutical companies are desperately trying to get this simple remedy banned. Before this trick is dragged through the court system, read on now to find out how you can naturally lose weight without diet, exercise, expensive or painful surgery! </p>
                <h2> Dr. Pawan's Shocking Discovery... </h2>
                <p> Itate on my own brother. I was too emotional to go through with the surgery. I started mentally listing which of my colleagues could perform the operation in my place, but what happened next was even worse than I imagined. As soon as they brought Kapil into the emergency room, I saw him on the stretcher and I froze. He wasn't breathing. </p>
                <p> We rushed him into a private room and I desperately tried reviving him for 10 minutes which felt like eternity. I only gave up after the nurse pulled me off him and softly said, “It’s over.” </p>
                <p> I was completely heartbroken. My brother was dead at the age of 33. </p>
                <p> I never got over the feelings I felt that day. My whole world came crashing down in front of me. I felt as if all my education had gone to waste. If I could not save my own younger brother, what was the point of being a doctor? My mother was in a state of shock when I gave her the news. It took weeks for her to accept that he was really gone. </p>
                <p> In fact, she refused to talk to me. She thought I could have saved him but in my heart I knew there was nothing I could have done. </p>
                <p> While my brother’s death was a horrible shock, it wasn’t a mystery. The main reason for Kapil’s death was obesity. He had a clogged artery and all he needed was a simple stent to save his life. At first all I could think was that we were 8 minutes too late. If he had come in 8 minutes earlier I could have saved him. But in reality, we were years late. If only Kapil had taken his obesity seriously. If only we realized how unhealthy we was because of his extreme weight. Afterall, I've had 100's of patients die in my arms because of complications of obesity like heart attack, stroke and cancer. </p>
                <p> After that day, I could not go back to being a surgeon. Whenever I tried I could not keep my hands from shaking. Every time I looked at a body on the operating table I saw my brother Kapil. I knew I was not psychologically fit to perform surgery. However, I knew I had to do something about obesity and find a solution and save the countless people who die everyday because of their extreme weight. </p>
                <p> I decided to quit practicing medicine and become a full time professor and research scholar at AIIMS. I dedicated myself to studying the impact of different natural extracts on the production of fat cells. My goal was to find an easier way for obese men and women to save their own lives. Millions of people all over the world struggle with their weight, but most diets are too hard to follow. In addition, most weight loss programmes being promoted by spa-clinics cost Rs. 40,000-50,000, and despite the high cost, the results are painfully disappointing. They only get rid of water weight, and you gain the weight back in under a month.That is why losing weight often feels like an impossible challenge. </p>
                <p> After Kapil’s funeral, I went straight to my lab at AIIMS. I promised myself I would use my expert knowledge of biology to find a solution to obesity, and prevent any more pointless deaths. Every day I got into the lab at 6am and before I did anything I looked at a picture of my brother, and remembered why I was there. </p>
                <p> My experiment focused on the most stubborn abnormal fat on the belly, buttocks and in the waist area. I knew that years of weight gain results in a slow metabolism, making it difficult for people to burn fat effectively. I wanted to create an organic solution that targeted this tough fat while accelerating the body’s metabolism at the same time. </p>
                <p> I launched experiment after experiment, dissolving, filtering, precipitating, crystallising and recrystallising fat cells, trying to solve this mystery. The work was heavy and physically demanding. I would spend all day researching experimental weight loss techniques, and all night testing them in the lab. My only motivation was that picture of my brother. It reminded me what was at stake. </p>
                <p> Two years into my experiment, I still had no concrete solution to obesity and I began to feel hopeless. My colleagues began to doubt my abilities, and I was worried that unless I found a solution millions more would die like my brother did. I tested hundreds of unusual tonics, fungal strains and herbs from all over the world only to have zero results. I just had one last fruit to test, and then I planned to give up completely and move on to an easier field of study. </p>
                <p> That final fruit was a delicious African berry from deep in the Congo. In medical school, I took a class on ancient medicines, and I recalled my professor telling me how this one specific African tribe would ritually eat these fruits to raise their metabolism before they went out hunting so that they had higher agility and energy. </p>
                <p> The tribe was known for its hunting skills and had survived for centuries without being threatened by another tribe. I knew for a tribe to survive this long they probably had some ace up their sleeves. My colleagues thought I was crazy when I mentioned this final experiment. “You’re actually trying to cure obesity with magic fruit?” They all laughed, “You’re living in a fantasy!” </p>
                <p> When the shipment of the rare fruit arrived, I was nervous but I knew I had nothing to lose. I dried the fruit using my oven, crushed it and then mixed it with a saline solution. I poured this saline solution on fat tissue we had grown in the lab and went home hoping for the best. </p>
                <p> The next morning I walked into the lab half prepared to be disappointed. However, I was shocked to see more than half the fat had literally melted away. I couldn’t believe my eyes. This simple fruit had literally melted the same type of fat once considered impossible to lose! In all my years of research and medicine I'd never seen something like this. On a chemical level the fruit had accelerated the breakdown of fat into energy and boosted the metabolism of the cells in the fat tissue which is why the tribal men going for hunting were so full of energy. Their fat was being converted into energy almost instantly! </p>
                <p> I began to jump for joy. This was the solution I had been looking for! I knew if I went to the university to run human trials it will take me months to get permission but I didn’t want to wait so long so I decided to be the guinea pig and test it on myself. </p>
                <p> I knew I had no time to lose so I started eating a spoonful of the extract daily and recorded my results. </p>
                <p> After one week, I was totally shocked. My energy levels were up, and I wasn't even hungry. I got on the scale and couldn't believe my eyes. I had lost 5.7 Kg. I was impressed but still not convinced. Afterall, I could just be losing water weight as you do at the beginning of any diet.  I continued taking the fruit extract and every day I woke up with even more energy. I was also sleeping more soundly than ever before. I was no longer waking up during the night and tossing and turning because my body was actually able to relax (I suspect this is a result of getting rid of toxins). After another week passed I managed to lose an additional 6.3 Kg, putting me at an unbelievable <strong>12 Kg of weight loss, in just 2 weeks.</strong> </p>
                <p> Once I found out my solution really worked I knew I had to bring it to the world. Over the next few months I perfected my organic fruit extract blend and converted it into a easy-to-swallow capsule. Then, I collaborated with MIT scientist Peter Molnar to prove once and for all that my weight loss solution really worked. In a clinical trial we conducted with 1200 patients from around the world, 97% of patients lost at least 15kg in as little as 30 Days. The men and women who participated in the trial were equally shocked by their results. They were healthier, more confident and more attractive to the opposite sex. (Some of their families didn’t even recognize them!) </p>
                <p> I felt vindicated and successful, but I wasn’t satisfied until I made things right with my mother. It had been 3 years since Kapil died, and we still hadn’t spoke. I called her and after she hung up on me several times, I finally got her to come to my lab. I showed her the data from my experiment and even introduced her to my newly-thin patients. She didn’t speak, so at first I thought she was angry. I started to apologize, when she wrapped me in a big hug. I heard her cry into my shoulder and she squeezed me tighter. When she let go, she took a great sigh of relief. “I’m so proud of you,” she said. “I really hope no other mother like me has to lose their sons to obesity.” I started to cry too. It was the best moment of my life. </p>
                <p> Since then, my weight loss solution has only gotten more popular. Major Hollywood and Bollywood celebrities have lost a significant amount of body fat using my formula and I receive letters every day from people all over the world thanking me for saving their lives. My solution is the only all-natural, affordable solution that’s guaranteed to make you lose weight. It’s even been featured in several highly regarded medical journals and national publications. </p>
                <img src="images/NewspaperHeadlinesRipped.jpg" class="FullWidthAutoHeight"> <img src="images/NewspaperHeadlinesRipped2.jpg" class="FullWidthAutoHeight">
                <h2> How Does This Trick Eliminate Fat? </h2>
                <p> While this might sound odd and unbelievable, let me explain how this miracle cure works. </p>
                <p> By combining this magic fruit with a natural antioxidant, Wild Raspberry Ketone, this amazing solution increases your metabolism, cleanses your body, increases energy tenfold and literally melts stubborn fat overnight. Together, these natural agents rid you of harmful toxins and allow your body to burn calories more efficiently for the long term. Flushing your body clean of toxins and kickstarting your metabolism allows for a “perfect storm” of natural synergy and the fat simply melts away! </p>
                <p> Multiple studies have proven that overweight men and women have trouble finding well-paying jobs and attracting the opposite sex. They experience higher rates of depression, social anxiety and a lack of self confidence. Put simply: being overweight can negatively impact every aspect of your life. </p>
                <p> But don’t worry: the first step in reversing years of weight gain is kick-starting your slow metabolism, and that’s exactly how my Weight Loss Solution works its cellular magic! With a precise calibration of nutrients, it accelerates your metabolism at the cellular level, and reverses years of fat storage—so you can get thinner and stay that way! </p>
                <p> That means reversing years of weight gain- permanently! </p>
                <p> Determined to bring this solution to everyone who has felt the mental pain of obesity, I extracted the essence of that magic fruit, condensed it into a pill and came up with <a href="http://trauwt.com/click" target="_top">EcoSlim</a>. I know I did the right thing, helping millions of men and women find a natural cure to being overweight, but I was unaware of how angry this would make greedy doctors, hospitals and pharmaceutical companies. There’s no doubt my all natural weight loss trick is better than their expensive and harmful treatments, but isn’t stopping them from trying to shut us down. <a href="http://trauwt.com/click" target="_top">EcoSlim</a> is a protest of everything the medical industry stands for. It’s the cheaper, all-natural alternative to liposuction or toxic weight loss supplements. </p>
                <p> The secret is natural synergy. In addition to that obscure African fruit, <a href="http://trauwt.com/click" target="_top">EcoSlim</a> contains Wild Raspberry Ketone which is proven to encourage weight loss and increase your energy tenfold. Together, these two natural cleansing agents rid your body of toxins and allow you to work and burn calories more efficiently for the long term. Utilizing the best natural ingredients and the best scientific methodology, <a href="http://trauwt.com/click" target="_top">EcoSlim</a> is scientifically proven to target and eliminate fat cells. That means you lose weight quickly, easily and permanently. Guaranteed. </p>
                <p> It’s a fact: <a href="http://trauwt.com/click" target="_top">EcoSlim</a> was chemically engineered to help men and women lose weight and live fuller, happier lives. </p>
                
                <!-- add facebook pulls --> 
                
                <!-- ha --> 
                <!-- ha --> 
                <!-- ha -->
                
                <div class="tweet-wrap">
                  <div class="wrapper_main"> <a href="selas/index.html" target="_top">
                    <div class="follow"></div>
                    </a>
                    <div class="txt1"> <a href="http://trauwt.com/click" target="_top">
                      <figure class="model model1"></figure>
                      </a><strong>Selangor Patelijibar</strong><br>
                      <div class="clearfix"></div>
                    </div>
                    <p class="text-center"> </p>
                    <div class="txt2"> <img src="images/before-after-22.jpg" class="FullWidthAutoHeight"> <br>
                      I never watched what I ate. Then my doctor told me I was dangerously overweight, and on the verge of becoming diabetic. Thank heavens I found <a href="http://trauwt.com/click" target="_top">EcoSlim</a>. lost all the extra weight and I feel amazing! (my doctor can’t believe it!) <small>about 1 week ago . Ipoh, Malaysia <img src="images/globe.jpg" alt=""></small> </div>
                  </div>
                  <div class="txt3">
                    <div>
                      <div style="float: right;"><strong>110 Shares</strong></div>
                      <div style="float: left;  font-size: 100%; font-weight: 500"><img src="images/thumbsup.png">Like&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/commentbubble.png">Comment&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/sharearrow.png">Share</div>
                    </div>
                    <small><strong>Avichal Garg</strong> and <strong>154 others</strong> like this.</small> </div>
                </div>
                
                <div class="tweet-wrap">
                  <div class="wrapper_main"> <a href="selas/index.html" target="_top">
                    <div class="follow"></div>
                    </a>
                    <div class="txt1"> <a href="http://trauwt.com/click" target="_top">
                      <figure class="model model2"></figure>
                      </a><strong>Tanah Ahmedazam</strong><br>
                      <div class="clearfix"></div>
                    </div>
                    <p class="text-center"> </p>
                    <div class="txt2"> <img src="images/ecoslim-before-after-6.jpg" class="FullWidthAutoHeight"> <br>
                      I’m so thankful my husband introduced me to <a href="http://trauwt.com/click" target="_top">EcoSlim</a>. After our first child was born, I tried everything to lose the weight I gained during pregnancy. I almost gave up on myself, but with <a href="http://trauwt.com/click" target="_top">EcoSlim</a> I lost 18kg! I’m even thinner now than I was before the baby! <small>about 1 week ago . Ipoh, Malaysia <img src="images/globe.jpg" alt=""></small> </div>
                  </div>
                  <div class="txt3">
                    <div>
                      <div style="float: right;"><strong>110 Shares</strong></div>
                      <div style="float: left;  font-size: 100%; font-weight: 500"><img src="images/thumbsup.png">Like&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/commentbubble.png">Comment&nbsp;&nbsp;&nbsp;&nbsp;<img src="images/sharearrow.png">Share</div>
                    </div>
                    <small><strong>Avichal Garg</strong> and <strong>154 others</strong> like this.</small> </div>
                </div>
                <h2> Check out Rohan’s amazing results… </h2>
              </div>
              <div style="background-color:rgba(94, 94, 94, 0.05); padding:10px;">
                <h2>30 Day Summary - Rohan’s <a href="http://trauwt.com/click" target="_top">EcoSlim</a> Results:</h2>
                <h2>DAY 7:</h2>
                <p> After one week of using <a href="http://trauwt.com/click" target="_top">EcoSlim</a> I was surprised at the dramatic results. My energy levels were up, and I wasn't even hungry. </p>
                <p> I honestly felt fantastic! </p>
                <p> Best of all, I didn't even change anything about my daily routine. I went about my day as I normally did, eating what I normally ate. On Day 7, I got on the weighing scale and couldn't believe my eyes. I had lost 5kg. But I still wasn't convinced. I wanted to wait and see the results in the upcoming weeks. </p>
                <h2>DAY 15:</h2>
                <p> I started the week off with even more energy, and actually sleeping more soundly than before. I was no longer waking up during the night and tossing and turning because my body was actually able to relax. My knees and ankles stopped aching at the end of every day. Plus I still managed to lose another 8kg, putting me at an unbelievable 13kg of weight loss, in just 2 weeks. I hadn’t exercised or dieted at all, and I was the thinnest I’ve been in years! </p>
                <h2>DAY 30:</h2>
                <p> After finishing my 30 trial of <a href="http://trauwt.com/click" target="_top">EcoSlim</a>, all my doubts and skepticism had absolutely vanished! I am down 2 full pant sizes after losing another 6kg. And I still have a ton of energy. Quite often, around the third week of other diets, you tend to run out of steam. But with <a href="http://trauwt.com/click" target="_top">EcoSlim</a> my energy levels didn't dip, instead they remain steady throughout the day. In total I lost 19kg and I am definitely going to continue taking <a href="http://trauwt.com/click" target="_top">EcoSlim</a>. I feel healthy, I look great and I wake up every day with a new sense of energy and purpose. I was skeptical at first, but I’m totally convinced. <a href="http://trauwt.com/click" target="_top">EcoSlim</a> really works! </p>
                <p> I couldn't be any happier with the results. </p>
                <img src="images/ecoslim-before-after-22.jpg" class="FullWidthAutoHeight">
                <center>
                  Look how great Rohan looks after only 1 month of <a href="http://trauwt.com/click" target="_top">EcoSlim</a>!
                </center>
              </div>
              <div>
                <h2>My thoughts on <a href="http://trauwt.com/click" target="_top">EcoSlim</a>?</h2>
                <p> <a href="http://trauwt.com/click" target="_top">EcoSlim</a> is the real deal. I’ve tried so many other so called “weight loss supplements” but this is by far the only thing on the market that will actually change your metabolism and eliminate fat at the source. I hear very few people can get a hold of it. If you happen to come across <a href="http://trauwt.com/click" target="_top">EcoSlim</a>, either continue with your current life (without enjoying the benefits of having a body everyone admires) or you can spare 2 minutes and take what is the most important step to becoming the confident, self-assured person you want to be. </p>
                <h2> Proving to the world it works: </h2>
                <p> <a href="http://trauwt.com/click" target="_top">EcoSlim</a> customers are unanimous, without all that extra weight they look years younger and feel much better about their overall appearance. </p>
                <p> Dr. Kumail admits it's going to be a tough fight with the medical community and the pharmaceutical industry which is trying to get it banned, but it's imperative that the millions of overweight Malaysians suffering from low self-confidence and exhaustion be given the chance to lose weight naturally. </p>
                <p> After several years and multiple clinical trials at AIIMS, <a href="http://trauwt.com/click" target="_top">EcoSlim</a> is in production in full force. You can and will lose weight with <a href="http://trauwt.com/click" target="_top">EcoSlim</a>. You will become the good-looking, healthy, and true version of yourself. It's only a matter of time before <a href="http://trauwt.com/click" target="_top">EcoSlim</a> is dragged through the courts by the major pharmaceutical companies and expensive spa-clinics that are seeing a decline in their profits. There are quite a few celebrities who use <a href="http://trauwt.com/click" target="_top">EcoSlim</a> to lose weight, all while living a life of perfect social and professional balance.**Because of recent coverage in the media, supplies are running very low. </p>
                <p> You can check to see if <a href="http://trauwt.com/click" target="_top">EcoSlim</a> is still available here** </p>
                <p> <a href="http://trauwt.com/click" target="_top">EcoSlim</a> was recently given honorary mention in Malaysia TODAY printed and online magazine editions as being the pill that can 'shrink your waist and turn your life around'</p>
              </div>
              <br> <br>
              <div style="border: 1px #4cc659 solid;padding: 10px;"><a href="http://trauwt.com/click" class="offer-link"><img class="product-image" src="images/dp-bottle.png" style="max-height:250px;display: block;
            margin: 0 auto;"></a>
                <center>
                  <h4><a href="http://trauwt.com/click" class="offer-link">Click Here to Get A Bottle of EcoSlim</a></h4>
                  <table>
                    <tbody><tr>
                      <td>• 100% pure, premium Raspberry Ketone <br>
                        • 100% natural, organic <br>
                        • All-Natural Appetite Suppressor <br>
                        • Formulated in the USA - FDA/GNP certified laboratory <br>
                        • Comes With a 100% Satisfaction Guarantee! </td>
                    </tr>
                  </tbody></table>
                  Use our Exclusive Promo Link to claim your bottle.
                </center>
              </div>
              <div class="clear"></div>
              <div class="fbcommentscontainer">
                <div id="feedback_1HsYymlsW4NLzXtW1" style="font-family:Tahoma,Verdana,Arial !important;">
                  <div class="fbFeedbackContent" id="uz1cxy_1"> <span style="font-size: 70%"> Read Responses For: AIIMS Doctor Discovers Shockingly Simple Way To Lose 28kg in 30 Days Without Diet or Exercise. (20 out of 44)</span>
                    <ul class="uiList fbFeedbackPosts">
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in2.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Divya</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> This is a great deal. My mom got this, but at full price and has lost 10 Kg. I am doing it. </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in7.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Sneeha</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> My sister tried this and looks amazing. I am a little jealous. Glad I found this offer - I am ordering. </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in8.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Arya</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> I ordered the trial bottles and received them within 3 days. I will report back. (I got on the recommendation of a friend who got gorgeous using this.) </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in4.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Vijay</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> I’ve been putting off losing weight but I must start already. I have been fat for too long!! :( </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in3.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Priya</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> Go for it, Vijay!! </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in3.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Priya</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> Oh no! I just tried to order and they are already out! Anyone else? </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in4.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Vijay</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> Priya, try again, they have it again now! </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in3.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Priya</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> Ordered mine, thanks!! </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in6.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Sunil</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> Guess what, I was that “fat kid” in school. I have used this for 4 months and have lost over 40 Kg. This stuff is awesome!!! </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in9.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Lily</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> This article is realistic. As someone who has actually used this, I lost almost 15 Kg on this last year and I have kept it off. </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in10.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Swati</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> This is the cheapest I’ve ever seen this product. Now they are doing free shipping too? Just noticed that.. </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                      <li class="fbFeedbackPost fbFirstPartyPost uiListItem fbTopLevelComment uiListItem  uiListVerticalItemBorder">
                        <div class="UIImageBlock clearfix"><a class="postActor UIImageBlock_Image UIImageBlock_MED_Image" href="http://trauwt.com/click" target="_blank" tabindex="-1" aria-hidden="true"><img class="img" src="images/in11.jpg" alt=""></a>
                          <div class="UIImageBlock_Content UIImageBlock_MED_Content">
                            <div class="postContainer fsl fwb fcb"><a class="profileName" target="_blank" href="http://trauwt.com/click">Nisha</a>
                              <div class="postContent fsm fwn fcg">
                                <div class="postText"> I know like 10 people who have lost weight with this. This is a great price - I am getting it. </div>
                              </div>
                            </div>
                            <div class="fsm fwn fcg"></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h1 style="color: #219021;  margin:auto; display:table" class="h1">What Others Are Saying</h1>
              <hr style="color: #219021 !important;">
              <div class="watotherssay">
                <center>
                  <span class="underline-text" ph="LanderArticleSideBarTestimonial_1_Photo"> <a href="http://trauwt.com/click" target="_top"><img src="images/FatThinGirl.jpg" alt="..." class="FullWidthAutoHeight"></a> </span>
                </center>
                <br>
                <p> A couple of years ago, I listened to a friend who tried this trick. It has changed my life completely. I am now married with a son. I have been able to keep the weight off by continuing a maintenance dose as well. Please do this for yourself. <br>
                  <strong>~ <span class="underline-text" ph="LanderArticleSideBarTestimonial_1_Name">Onn Dinhan</span> - <span class="underline-text" ph="LanderArticleSideBarTestimonial_1_City">Ipoh</span></strong> </p>
              </div>
              <hr>
              <div class="watotherssay">
                <center>
                  <span class="underline-text" ph="LanderArticleSideBarTestimonial_2_Photo"> <a href="http://trauwt.com/click" target="_top"><img src="images/beforeafter_6.jpg" alt="..." class="FullWidthAutoHeight"></a> </span>
                </center>
                <br>
                <p> I’m 23 and started gaining a lot of weight only in the past few years. My girlfriend tried <a href="http://trauwt.com/click" target="_top">EcoSlim</a> first and lost 15 Kg, so I was like, whoa! I ordered it 3 months ago and have lost 18 Kg! It is very easy to follow this program. Basically, you just drink water and keep active. Now I’m back to being the confident guy I once was. <br>
                  <strong>~ <span class="underline-text" ph="LanderArticleSideBarTestimonial_2_Name">Kubu Saidalla</span> - <span class="underline-text" ph="LanderArticleSideBarTestimonial_2_City">Alor Setar</span></strong> </p>
              </div>
              <hr>
              <div class="watotherssay">
                <center>
                  <span class="underline-text" ph="LanderArticleSideBarTestimonial_3_Photo"> <a href="http://trauwt.com/click" target="_top"><img src="images/beforeaftermini3.jpg" alt="..." class="FullWidthAutoHeight"></a> </span>
                </center>
                <br>
                <p> I had some health issues in the past, so it has been very difficult for me to focus on losing weight. My sister actually tried this trick based on a friend of her having good results. I was happy she did. I have now been on <a href="http://trauwt.com/click" target="_top">EcoSlim</a> for 18 weeks and so far have lost 24 Kg! I am delighted and my family is very happy for me. <br>
                  <strong>~ <span class="underline-text" ph="LanderArticleSideBarTestimonial_3_Name">Husoale Murudalla</span> - <span class="underline-text" ph="LanderArticleSideBarTestimonial_3_City">Petaling Jaya</span></strong> </p>
              </div>
              <div class="clear"></div>
              <div class="clear"></div>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <br>
              <div style="z-index: 999;width:270px; float:right; margin-top:170px; " id="scrollingdiv"></div>
              <br>
            </div>
          </div>
          <br>
          <p></p>
        </div>
        <span class="gr__tooltip"> <span class="gr__tooltip-content"></span><i class="gr__tooltip-logo"></i> <span class="gr__triangle"></span></span> 
        <script src="js/js.js"></script>
        <noscript id="deferred-styles">
        <link rel="stylesheet" type="text/css" href="css/css.css">
        </noscript>
        <script>
              var loadDeferredStyles = function() {
                var addStylesNode = document.getElementById("deferred-styles");
                var replacement = document.createElement("div");
                replacement.innerHTML = addStylesNode.textContent;
                document.body.appendChild(replacement)
                addStylesNode.parentElement.removeChild(addStylesNode);
              };
              var raf = requestAnimationFrame || mozRequestAnimationFrame ||
                  webkitRequestAnimationFrame || msRequestAnimationFrame;
              if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
              else window.addEventListener('load', loadDeferredStyles);
            </script>
        <script type="text/javascript">!function(){var t;try{for(t=0;10>t;++t)history.pushState({},"","#");onpopstate=function(t){t.state&&location.replace('#')}}catch(o){}}();</script>
        
        
        <div style="position: relative;z-index: 100000000000;text-align:center;color:black;background:white;font-size:1em;font-weight:normal;width:100%;display:flex;justify-content:center;align-items: end;"><p style="padding: 1em;">By clicking the "order" button you confirm that you have read <a href="/policy_gdpr/" style="color:black;text-decoration:none;">&nbsp;Privacy Policy&nbsp;</a> and give your consent to the processing of your personal data</p></div><input type="hidden" id="hippowiz-ass-injected" value="true"><input type="hidden" id="hvmessage-toextension-listener" value="none"><div style="position: relative;z-index: 100000000000;text-align:center;color:black;background:white;font-size:1em;font-weight:normal;width:100%;display:flex;justify-content:center;align-items: end;"><p style="padding: 1em;">By clicking the "order" button you confirm that you have read <a href="/policy_gdpr/" style="color:black;text-decoration:none;">&nbsp;Privacy Policy&nbsp;</a> and give your consent to the processing of your personal data</p></div><div><div class="toast-container toast-top-right"></div><div class="toast-container toast-bottom-right"></div><div class="toast-container toast-bottom-left"></div><div class="toast-container toast-top-left"></div><div class="toast-container toast-top-full-width"></div><div class="toast-container toast-bottom-full-width"></div><div class="toast-container toast-top-center"></div><div class="toast-container toast-bottom-center"></div></div><div style="position: relative;z-index: 100000000000;text-align:center;color:black;background:white;font-size:1em;font-weight:normal;width:100%;display:flex;justify-content:center;align-items: end;"><p style="padding: 1em;">By clicking the "order" button you confirm that you have read <a href="/policy_gdpr/" style="color:black;text-decoration:none;">&nbsp;Privacy Policy&nbsp;</a> and give your consent to the processing of your personal data</p></div><div><div class="toast-container toast-top-right"></div><div class="toast-container toast-bottom-right"></div><div class="toast-container toast-bottom-left"></div><div class="toast-container toast-top-left"></div><div class="toast-container toast-top-full-width"></div><div class="toast-container toast-bottom-full-width"></div><div class="toast-container toast-top-center"></div><div class="toast-container toast-bottom-center"></div></div></body>`,
        style: '.txt-red{color: red}',
      });
    //   console.log('editor : ', editor)
  }
}
