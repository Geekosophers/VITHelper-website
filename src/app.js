import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import LoginPage from './components/LoginPage';
import { startAddTeacher, startSetTeachers } from './actions/teachers';
import { setTextFilter} from './actions/filter';
import getVisibleTeachers from './selectors/teachers';
 
const store = configureStore();

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleTeachers = getVisibleTeachers(state.teachers,state.filter);
//   console.log(visibleTeachers);
// });

// store.dispatch(startAddTeacher({ name: 'Anshul',comments:['c1','c2']}))
// store.dispatch(startAddTeacher({ name: 'Rahul',comments:['c1','c2']}))

// store.dispatch(startAddTeacher({ name: 'AJU D', comments:['He is very good','4 out of 5. strict for project component especially for the documentation part otherwise he is very good']}))
// store.dispatch(startAddTeacher({ name: 'AKILA VICTOR', comments:['Akila victor is strict','Padhata kaisa h no idea But strict hai','4/5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'ANAND M', comments:['Best.!','Anand M is a brilliant teacher','3/5 (1 review)','Good in class but god help you in exams']}))
// store.dispatch(startAddTeacher({ name: 'ANANDA KUMAR S', comments:['Okayish But not strict','Someone told me he gives work on research paper stuff (Reply to this comment by someone- "For j component many faculty gave research paper work..but he will not ask any thing to publish...and iot project too will be little bit complicated")','He doesn’t give much marks.My marks was 24,24,43 in cats n fats. Still got A. ','1.5/5 (2 reviews)','Ok ok. But Avoid if you can!!!','Worst']}))
// store.dispatch(startAddTeacher({ name: 'ANBARASI M', comments:['Don’t take Anbarasi for lab']}))
// store.dispatch(startAddTeacher({ name: 'ANIL KUMAR K', comments:['I had him for my Network Security. Banda accha hai. You can take him. But my experience was not good.','2/5 (1 review)','Beware of him.']}))
// store.dispatch(startAddTeacher({ name: 'ANISHA M. LAL', comments:['She is good','Good','Anisha M is better than Natarajan','Good (+5)','3.5/5 (4 reviews)','Good teacher.','Good for attentive students.','Mast Bandi hai😇']}))
// store.dispatch(startAddTeacher({ name: 'ANNY LEEMA A', comments:['She is my proctor. Nature wise she is good. Don’t know about teaching.','She\'s the best','She is good at teaching. A very friendly and a chill teacher. U can definitely take her. I learnt DLD from her last semester']}))
// store.dispatch(startAddTeacher({ name: 'ANTO S', comments:['4/5 (1 review)','Very chill in exam and projects']}))
// store.dispatch(startAddTeacher({ name: 'ANURADHA D', comments:['Anurada D is best, doesn\'t know shit about programming','Questions in the exam directly come from her notes. I had her for stats. But yeah probably doesn\'t know programming🙊😂','Badddd for cse subjects','She teaches very well! DA 30! Lab 100! (Related to stats) ']}))
// store.dispatch(startAddTeacher({ name: 'ANURADHA G', comments:['Never take her for any subject','Bad with repct to both marks n teaching','Don’t take her']}))
// store.dispatch(startAddTeacher({ name: 'ANURADHA J', comments:['3 out of 5. She is ok']}))
// store.dispatch(startAddTeacher({ name: 'ARIVOLI A', comments:['Usko kuch nahi aata.. number wo baat details of hai sabko.. I mean jao uske pass and Kam hue to aise hi badha deti hai.. class me abhi lagbhag same hi number hai avg ke paas.. classes 30 min me chhod deti hai.. padhati to bilkul na ke barabar. Project me sabko ek jaise hi diye hai']}))
// store.dispatch(startAddTeacher({ name: 'ARUN KUMAR G', comments:['He is chill','Strict, 2.5/5 (2 reviews)','Good and knowledgeable','Ok ok']}))
// store.dispatch(startAddTeacher({ name: 'ARUN KUMAR S', comments:['Mat lo','If you want an arrear. Take him']}))
// store.dispatch(startAddTeacher({ name: 'ASHWIN GANESAN', comments:['He givess his own exam… decent teacher but very less chances to get him']}))
// store.dispatch(startAddTeacher({ name: 'BALAKRISHNAN P', comments:['Teaches very well but strict in giving marks','🔥🔥']}))
// store.dispatch(startAddTeacher({ name: 'BALAMURUGAN R', comments:['4/5 ( 1 review)','Sweet teacher. Doesn\'t bother much']}))
// store.dispatch(startAddTeacher({ name: 'BALASUBRAMANIAN V', comments:['I heard Bala is good','4/5 (2 reviews)','Bhut chill h bhai sbme']}))
// store.dispatch(startAddTeacher({ name: 'BOOMINATHAN P', comments:['Bhai DSA mei Boominathan is good. Actually very good!','He teaches well','Bessstt','Besstt😍','4/5 ( 2 reviews)','Very chill']}))
// store.dispatch(startAddTeacher({ name: 'DEBI PRASANNA ACHARJYA', comments:['Don’t take Debi prasanna','He talked about How To Fail students in his introductory class…','He wrote good book in TOC','Drop Debi, even if credits are less [*less than 16 also]','Yeah... 👎🏼 drop him','Strict (2 reviews)','1.5/5 (2 reviews)','Hope you get good enough project for him','You will never get an S in his class']}))
// store.dispatch(startAddTeacher({ name: 'DEEBAK B D', comments:['I had him in PDC. I felt okay. He is very loud and fast. But teaches well.','3.5 out of 5 (2 reviews)','Project me locha karega']}))
// store.dispatch(startAddTeacher({ name: 'DELHI BABU R', comments:['Strict ( 2 reviews)','1.5/5 (2 reviews)','Blacklist ( 2 reviews)','Uda deta h bhai class me nd exam me','He doesn\'t even read your answer sheets properly.']}))
// store.dispatch(startAddTeacher({ name: 'DHEEBA J', comments:['She is very good bro. I got A in HCI just because of her. More importantly I barely ever went for classes😂 She gives you free attendance😅']}))
// store.dispatch(startAddTeacher({ name: 'GAWAS MAHADEV ANANT', comments:['Gawas Anant is pretty good.','Was in gawas\'s class… good and friendly teacher… looks promising']}))
// store.dispatch(startAddTeacher({ name: 'GAYATHRI P', comments:['Strict, 2/5 (2 reviews)','Vit me jinda rhna h toh isko mt lena chahe maut aa jaye','Very strict in all the aspects but teaches well']}))
// store.dispatch(startAddTeacher({ name: 'GEETHA MARY A', comments:['Just OK. Extremely moody.','Gives descent marks']}))
// store.dispatch(startAddTeacher({ name: 'GOPINATH M.P', comments:['Lele','He is a very chill teacher but getting S would be difficult','Good','He\'s brilliant. Mast teacher ekdum.','5/5 (1 review)','Mast hai']}))
// store.dispatch(startAddTeacher({ name: 'GOVINDA K', comments:['He is very chill. Gives marks also.','3.5/5 (2 reviews)','Paper me uda deta hai','He is a very nice teacher because he has a lot of knowledge and teaches really well in class']}))
// store.dispatch(startAddTeacher({ name: 'JAISAKTHI S M', comments:['Jaisakthi is okish. She doesn\'t teach well but gives marks.','Okaish','You can take her. Just don’t hurt her ego']}))
// store.dispatch(startAddTeacher({ name: 'JAISANKAR N', comments:['4/5 (4 reviews)','Mast Banda hai, knowledgeable but strict in lab. If you have an option to choose him then take him.','Great notes','He is a cutie❤❤']}))
// store.dispatch(startAddTeacher({ name: 'JOTHI K R', comments:['He\'s knowledgeable but lacks in communication skills. But hhe clears your doubts. And he\'s not strict in class gives attendance even if you come late','He\'s pretty nice he\'s a new facility joined 2 months back i had his cao class today.. seems knowledgable.. seems chill in class as well and pretty interactive.(cooment from 12-7-2018)']}))
// store.dispatch(startAddTeacher({ name: 'KALYANARAMAN P', comments:['3/5 (2 reviews)','Good','Never take, especially for J component']}))
// store.dispatch(startAddTeacher({ name: 'KANNADASAN R', comments:['4.5/5 (2 reviews)','Thik h yaar','He is the best faculty in VIT']}))
// store.dispatch(startAddTeacher({ name: 'KAUSER AHMED P', comments:['2/5 (1 review)','Kabhi mat lena']}))
// store.dispatch(startAddTeacher({ name: 'KRISHNAMOORTHY A', comments:['God level teacher hai','3.5/5 (2 reviews)','Bhut chill h project me sbko 96 milenge','Good']}))
// store.dispatch(startAddTeacher({ name: 'KUMAR K', comments:['Good for web mining','Kumar K is very chill. Nice person.','5 out of 5. One of the best faculties in VIT. He is very lenient and always helps his students.']}))
// store.dispatch(startAddTeacher({ name: 'KUMARAVELU R', comments:['Tough for project','Kumaravelu 👍🏼','Strict ( 2reviews)','2.5/5 (2 reviews)','Demand quality projects','Ok! Avoid if u can']}))
// store.dispatch(startAddTeacher({ name: 'LAKSHMANAN K', comments:['3/5 ( 1 review)','Knowledgeable']}))
// store.dispatch(startAddTeacher({ name: 'LAVANYA K', comments:['5/5 (2 reviews)']}))
// store.dispatch(startAddTeacher({ name: 'LIJO V.P', comments:['3.66/5 (3 reviews)','Chill','Doesn’t teach well']}))
// store.dispatch(startAddTeacher({ name: 'LOKESH KUMAR R', comments:['Gd']}))
// store.dispatch(startAddTeacher({ name: 'MADHU VISWANATHAM V', comments:['3/5 ( 2 reviews)','He is good','Teaches well']}))
// store.dispatch(startAddTeacher({ name: 'MANJULA R', comments:['Strict','I think she is Ok. If nothing else left take her.']}))
// store.dispatch(startAddTeacher({ name: 'MANOOV R', comments:['Very chill (for pdc)','Too chill🙌🏼']}))
// store.dispatch(startAddTeacher({ name: 'MARGRET ANOUNCIA S', comments:['She is strict… and gives a lot of extra assignments','She eats 5-% of the marks … But you will pass, as avg of the class goes very low']}))
// store.dispatch(startAddTeacher({ name: 'MARIMUTHU K', comments:['Marimuthu is chilllll','Marimuthu best h','Lenient, 4.5/5 ( 2 reviews)','He’s a really good teacher.','Mst h bhai']}))
// store.dispatch(startAddTeacher({ name: 'MEENAKSHI S P', comments:['Good. I also took her. She is very lenient and gives marks easily if u write something relevant.','Padatii bahut hai','Is she strict? Answer- That I don’t know… but dimaag khati hai','4/5. Kuch nahi bas c*****a katna hai iska baaki sab sahi hai']}))
// store.dispatch(startAddTeacher({ name: 'MOHANASUNDARAM R', comments:['Lenient ( 2 reviews)','3.5/5 ( 2 reviews)','Ok ok','He was my DLD teacher, was chill with attendance and allowed late in class too. Teaching wise average. He would pass almost everyone though (I think)']}))
// store.dispatch(startAddTeacher({ name: 'MURALI S', comments:['4/5 ( 3 reviews)','Last kuch sem toh acha tha but is sem maar raha hai bachhon ki','Knowledgable']}))
// store.dispatch(startAddTeacher({ name: 'MYTHILI T', comments:['Quiz ka dekhna usske. Udhar number nhi aate hai & for additional she accepts only NPTEL','Sahi hai','She\'s my proctor but I don’t know how she is as a teacher. She seems to be strict','She knows u. Maybe linient towards u']}))
// store.dispatch(startAddTeacher({ name: 'NALINI N', comments:['I heard that she is chill in marks','4/5 (1 review)','She is chill. You can take her. Will give good marks in project( in avg prject too)']}))
// store.dispatch(startAddTeacher({ name: 'NARAYANAMOORTHI M', comments:['4 out of 5 rating, lenient in attendance and paper correction','He is good, ok in teaching']}))
// store.dispatch(startAddTeacher({ name: 'NARESH K', comments:['He is good.','3.5/5 (2 reviews)','Good but moody','Chill😎']}))
// store.dispatch(startAddTeacher({ name: 'NATARAJAN P', comments:['Teaches okok but Gives lots of marks','He tells important topics from which questions come in exams','Lele Bahut accha hai','Natrajan P is better than Sureshkumar N','Natarajan P awesome for image','Natarajan is awesome. Like doesn’t teach well, is very slow. But is very lenient and give marks.']}))
// store.dispatch(startAddTeacher({ name: 'NAVAMANI T M', comments:['Navamani is good','Suna hai sahi he… mene liya']}))
// store.dispatch(startAddTeacher({ name: 'NAVEEN KUMAR N', comments:['He is good','3/5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'PADMA PRIYA R', comments:['2/5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'PARVEEN SULTANA H', comments:['bad','Not good','Strict, 1/5 (1 review)','Bas mt lena , project me maar lega bhai']}))
// store.dispatch(startAddTeacher({ name: 'PRABAKARAN N', comments:['Nice teacher bro. But end mei maar lega','3/5 (1 review)','Iss sem (Winter sem 2018-19) se toda nautanki kr rha h']}))
// store.dispatch(startAddTeacher({ name: 'PRABU S', comments:['He is better than Suresh Kumar for Image processing','Good','Don’t know about him as a teacher…But He is my proctor… chill banda hai. ']}))
// store.dispatch(startAddTeacher({ name: 'PRIYA G', comments:['Bakwas']}))
// store.dispatch(startAddTeacher({ name: 'RAHUL RAMAN', comments:['Rahul Raman is good.','Don’t take Rahul Raman… slow and boring teacher','Lele acha hai mene nhi liya hai','Rahul raman 👍🏼👍🏼👍🏼👍🏼👍🏼👍🏼🔥🔥','2/5 (2 reviews)','Very strict in project and DA']}))
// store.dispatch(startAddTeacher({ name: 'RAJAKUMAR K', comments:['Bestest','Badiya','Bhai bs le lena mile toh bhut chill h sb me']}))
// store.dispatch(startAddTeacher({ name: 'RAJKUMAR R', comments:['2 reviews- 1/5 and the other is 5/5 (dekh lo apne hisaab se)','Review from one of the above reviewer-Bhagwan teacher hai']}))
// store.dispatch(startAddTeacher({ name: 'RAJKUMAR S', comments:['Wherever you find Rajkumar S just take him','Best hai','baaap teacher. Lelo , sabse best banda hai VIT mei','class ke baad jaake bhi attendance de deta hai XD']}))
// store.dispatch(startAddTeacher({ name: 'RAMANATHAN L', comments:['Don’t ever take ramanathan']}))
// store.dispatch(startAddTeacher({ name: 'RAMANI S', comments:['5/5 ( 1 review)','Badiya teacher hai chill hai']}))
// store.dispatch(startAddTeacher({ name: 'RAMESH BABU K', comments:['Crap…','I have heard bad words for him and umadevi ks','There is a babu rule… Never take any babu in FFCS','Ramesh babu marks and attendance de dega… Project mei chutiyap karaega','Strict']}))
// store.dispatch(startAddTeacher({ name: 'RISHIN HALDAR', comments:['He was my teacher in SIN and AI. He is knowledgeable. Teaches well. He leave the class 10 min late. Doesn’t take review 1 and 2, directly takes review3. His quiz questions are tough. I recommend to take him once.','3/5 (3 reviews)','Quiz bahut tough deta hai','Very strict in project','He is a lazy one. But knowledgable']}))
// store.dispatch(startAddTeacher({ name: 'SAIRABANU J', comments:['Good. Take her','sahi hi he…okais']}))
// store.dispatch(startAddTeacher({ name: 'SALEEM DURAI M.A', comments:['DO NOT TAKE HIM, get rid of him asap','I have him for a core subject. He is too iritating. I wanted to change him but didn’t find a vacancy in the other class. ','Makes us write stuff dowm. Likhwa likhwa ke padhate hai. And kisne kya likha uspe bahut time barbad karte hai','Saleem durai will fuck you in project (Other reviewer said- "noo, bus vo questions bahut puuchta hai…agar classes aoogya to marks dayga" on this)','Ussay practical knowledge nhi hai','Salim Durai is chill. Has good knowledge. But he\'s bad at respecting people. If that’s not a problem fot you, take him. Chances of getting good marks also exist.','Good','Strict','Good','He has become too strict. Also doesn’t give marks.','3/5 (2 review)','Project me strict h ye']}))
// store.dispatch(startAddTeacher({ name: 'SANJIBAN SEKHAR ROY', comments:['Good. Partial towards Bengalis','He is linient','He will not give good marks. But he is chill and give you attendance','3.33/5 (3 reviews)','Mast hai','Chill but moody','Partial']}))
// store.dispatch(startAddTeacher({ name: 'SANTHI H', comments:['Don\'t take santhi ever','Better drop the subject🤣🤣','Is she good in teaching? Answer- Mediocre. But very very strict. Doesn’t give marks even if u write ']}))
// store.dispatch(startAddTeacher({ name: 'SANTHI K', comments:['Don’t take santhi k at any cost','2/5 ( 1 review)']}))
// store.dispatch(startAddTeacher({ name: 'SANTHI V', comments:['Santhi v is good','Santhi v mat lio']}))
// store.dispatch(startAddTeacher({ name: 'SATHEESH A', comments:['He is good. Lininient in checking','3/5 (2 reviews)','Bhut chill h','He teaches ok but too strict in paper correction']}))
// store.dispatch(startAddTeacher({ name: 'SATHIYA KUMAR C', comments:['3.5/5 (2 reviews)','Chill in class']}))
// store.dispatch(startAddTeacher({ name: 'SATHYARAJ R', comments:['Never ever take Sathyaraj R. He is my DBMS faculty this sem and he is toooo bad.']}))
// store.dispatch(startAddTeacher({ name: 'SELVAKUMAR K', comments:['3/5 ( 1review)','ok ok']}))
// store.dispatch(startAddTeacher({ name: 'SENDHIL KUMAR K.S', comments:['3/5 ( 1 review)','Not so good but ok']}))
// store.dispatch(startAddTeacher({ name: 'SENTHILNATHAN', comments:['Irritable, don’t take','In general that teacher is very bad. He doesn’t gives marks also.','Don’t give marks']}))
// store.dispatch(startAddTeacher({ name: 'SHAIK NASEERA', comments:['Bhai DSA mei Shaik Nseera is good. Actually very good!','Don’t take j component under her. She\'ll give you trouble regarding projects','2/5 (3 reviews)','She teaches ok but other things bad','Good']}))
// store.dispatch(startAddTeacher({ name: 'SHARMILA BANU K', comments:['Sharmila banu… she is really good…','I heard she is strict ','Well she seems strict…but she do give marks… Nd if possiblend in her hands she will give attendance too. Nd she kinda quite awesome when it comes to teaching… as long as u dont talk in her class']}))
// store.dispatch(startAddTeacher({ name: 'SHASHANK MOULI SATAPATHY', comments:['4 out of 5','He is a very good faculty. He may seem strict in the first few days, but after that once he knows you he is very helpful and lenient in most of the matters.']}))
// store.dispatch(startAddTeacher({ name: 'SIVA SHANMUGAM G', comments:['3/5 (2 reviews)','He is ok','Lazy fellow']}))
// store.dispatch(startAddTeacher({ name: 'SIVANESAN S', comments:['Don’t take','4.5/5 (2 reviews)','Good teacher for average student .','Chill teacher..']}))
// store.dispatch(startAddTeacher({ name: 'SRIMATHI C', comments:['Don’t take ','Very bad','1/5 (1 review)','Project na ho payega tmse']}))
// store.dispatch(startAddTeacher({ name: 'SRIVANI A', comments:['Sahi hai kaafi']}))
// store.dispatch(startAddTeacher({ name: 'SURESHKUMAR N', comments:['U no need to study in Suresh Kumar N class. He will give liberal marks. (Note- every teacher gave this reviewer full marks)','He is sooper chill with marks','Good']}))
// store.dispatch(startAddTeacher({ name: 'SWARNALATHA P', comments:['Swarnalatha is normally chill. If you don’t need much academic guidance, you can take her. But she creates a fuss in every lab. Nakhre hai uske. And she\'s a red tag. So pata ke rakhega to fayeda hoga']}))
// store.dispatch(startAddTeacher({ name: 'THENDRAL P', comments:['Thendral P is bad I heard from a lot','Bad','Strict','Gandfad','Thendral P teaches good but is liitle strict']}))
// store.dispatch(startAddTeacher({ name: 'THENMOZHI T', comments:['Okish']}))
// store.dispatch(startAddTeacher({ name: 'UMADEVI K S', comments:['Umadevi is a very strict teacher. She knows a lot and teaches well but expects the same from her students.','she is strict for attendance, marks fairly, teaches mediocre, good chance of getting better grade as she is doesn\'t marks everyone equally','Strict','I took her for web security. My only forced choice in my TT','I have heard bad words for umadevi ks and ramesh babu k','Don’t take','Bahut strict hai','Thik thak','Bad','Fail karegi kya? Answer- no, but she will trouble a lot in project and in attendance and marks also']}))
// store.dispatch(startAddTeacher({ name: 'USHUS ELIZEBETH ZACHARIAH', comments:['From Ushus and Krishnamurthy, Ushus ko le ','3.75/5 (4 reviews)','Thik hi h bhai','Good. Always smiling😄','Good teacher']}))
// store.dispatch(startAddTeacher({ name: 'VASANTHA W B', comments:['Till now … fine just. Low voice speaker. A bit strict in project. Don’t know about marking system','Thik hai but ladke aur ladkiyon ko alag alag baithati hai','Narrow minded']}))
// store.dispatch(startAddTeacher({ name: 'VIJAYA KUMAR K', comments:['Aankh band karke lele','Jhakkas. Super chill teacher']}))
// store.dispatch(startAddTeacher({ name: 'VIJAYASHERLY V', comments:['Acchi hai maine suna','Linent hai','Very chill at everything','4.5/5 (2 reviews)']}))
// store.dispatch(startAddTeacher({ name: 'YOKESH BABU S', comments:['Yogesh babu never','Don’t take','Strict, 1.5/5 (2 reviews)','May god pass you','Not the one to take']}))
// store.dispatch(startAddTeacher({ name: 'ARCHANA T', comments:['Ok. Average will be low.','Thik hai']}))
// store.dispatch(startAddTeacher({ name: 'Lydia Jane', comments:['Heard she is strict','moody.. a bit strict in project… doesn\'t like sense much','Lydia Jane is strict and partial','Lay lay (Rely to this comment by other reviewer - "kabhi mat lena!!")','Bura haal ho jayega']}))
// store.dispatch(startAddTeacher({ name: 'Sriram G', comments:['Likhoge toh marks dega.']}))
// store.dispatch(startAddTeacher({ name: 'Dhritiman Gupta', comments:['Noooooooooo. I didn\'t have him but I heard he\'s a nightmare for absolute grading']}))
// store.dispatch(startAddTeacher({ name: 'Balaji S', comments:['Not good']}))
// store.dispatch(startAddTeacher({ name: 'Coumaran', comments:['Bestest']}))
// store.dispatch(startAddTeacher({ name: 'JAYALAKSHMI M', comments:['Don\'t take her']}))
// store.dispatch(startAddTeacher({ name: 'SUDHAKAR R', comments:['Strict hai bhai attendance mei']}))
// store.dispatch(startAddTeacher({ name: 'CHELLATAMILAN', comments:['He is sweet when it comes to lab courses']}))
// store.dispatch(startAddTeacher({ name: 'ARUNA K', comments:['bad. Class average will be very low… better to drop her + doesn\'t teach that well']}))
// store.dispatch(startAddTeacher({ name: 'PRABHAVATY P', comments:['Chilled out.']}))
// store.dispatch(startAddTeacher({ name: 'ALAGIRI', comments:['Alagiri mat lena']}))
// store.dispatch(startAddTeacher({ name: 'MERCY MATHEW', comments:['Bad','You should drop her if you can','Class activities class mei hi kar lena. Zindagi acchi betegi']}))
// store.dispatch(startAddTeacher({ name: 'KALAIVANI K', comments:['Bad','Heard that Kalaivani k is bad']}))
// store.dispatch(startAddTeacher({ name: 'BHASKAR SEN GUPTA', comments:['Had his class just now seemed to be a nice guy.(comment from 12-7-2018)']}))
// store.dispatch(startAddTeacher({ name: 'OM P SUTHAR', comments:['I was told by someone never to take OM P SUTHAR','Don’t take him','Knowlegable','Bhai fail karega. Woh bhi do baar']}))
// store.dispatch(startAddTeacher({ name: 'KARTHIKA K', comments:['Kathika k bahut pyaari hai. Le le']}))
// store.dispatch(startAddTeacher({ name: 'ARUN KUMAR T', comments:['Ex dean I guess of cse, was not good at all as dean']}))
// store.dispatch(startAddTeacher({ name: 'SUBHASHINI R', comments:['Good']}))
// store.dispatch(startAddTeacher({ name: 'MANIMARAN', comments:['Good','chill bhi hai aur teaches good']}))
// store.dispatch(startAddTeacher({ name: 'MADHU V', comments:['Very good for ala']}))
// store.dispatch(startAddTeacher({ name: 'Padmavathy C', comments:['Mast hai… padhana hi chor diya tha humare batch ko 😂. Lele. Mera A aa gaya tha bina zyada padhe']}))
// store.dispatch(startAddTeacher({ name: 'JAGADEESH KUMAR K', comments:['He is good. He was my faculty for aod and first semester calculus','If you are good at maths and want to start hating the subject then only take him. And if you are not good at it and want someone linient and who teaches slowly then take him.','Sweet guy']}))
// store.dispatch(startAddTeacher({ name: 'SHARIEF BASHA S', comments:['Good for aod']}))
// store.dispatch(startAddTeacher({ name: 'MANJANNA B', comments:['Manjanna is super chill']}))
// store.dispatch(startAddTeacher({ name: 'BHULAKSHMI BONTU', comments:['Bhulakshmi doesn’t teach well. But she is sweet.','Bhulakshmi kabhi mat lena plzz. Gandi teacher hai']}))
// store.dispatch(startAddTeacher({ name: 'MALASERENE', comments:['Take her']}))
// store.dispatch(startAddTeacher({ name: 'ABDUL HAMEED', comments:['He is best. Take him for any maths. Super chill']}))
// store.dispatch(startAddTeacher({ name: 'YAMUNA M', comments:['Don’t take Yamuna at any cost','she\'s ok, marks de degi']}))
// store.dispatch(startAddTeacher({ name: 'Deepak G', comments:['Lelo','Deepa G is better than Ezhilmaran for discrete']}))
// store.dispatch(startAddTeacher({ name: 'Navin Kumar', comments:['He is good.']}))
// store.dispatch(startAddTeacher({ name: 'KARTHIKEYAN J', comments:['Ok ok','Accha banda hai. But agar TARP mei loge toh mostly B aayega.']}))
// store.dispatch(startAddTeacher({ name: 'Alli P', comments:['Reviewer used a lot of bad words. Conclusion- Don’t take her','I really like her']}))
// store.dispatch(startAddTeacher({ name: 'ABDUL GAFFAR H', comments:['Mast bandaa hain. Chill reheta hai life mein']}))
// store.dispatch(startAddTeacher({ name: 'TONY P', comments:['Tony is good… everyone gets A']}))
// store.dispatch(startAddTeacher({ name: 'JAYASHREE J', comments:['Take jayashree if you need free marks']}))
// store.dispatch(startAddTeacher({ name: 'SUBRAMANIAM', comments:['For IIP, don’t take him.']}))
// store.dispatch(startAddTeacher({ name: 'SHOBANA', comments:['Shobana gives marks… I have heard','Most chill teacher ever']}))
// store.dispatch(startAddTeacher({ name: 'GERALDINE BESSIE AMALI D', comments:['How is she? Answer- A1','best best','Bhai bahut acchi teacher hai.. Padati bhi hai knowledge bhi hai chill bhi hai','Padhati acha hai chilled hai number bhi deti hai. Matlab logic sai hai run nhi kiya to bhi number deti hai(was talking about OOPS subject)','She is good']}))
// store.dispatch(startAddTeacher({ name: 'ANTOINETTE', comments:['Antonette is better than Malathy']}))
// store.dispatch(startAddTeacher({ name: 'GEMINI V JOY', comments:['Bad']}))
// store.dispatch(startAddTeacher({ name: 'JAYAKUMAR S', comments:['Bro le le, mast faculty hai']}))
// store.dispatch(startAddTeacher({ name: 'SUDHIPTO BHATTACHARAYA', comments:['He is good','Marks wise? Answer- Strict a bit']}))
// store.dispatch(startAddTeacher({ name: 'JASMINE', comments:['Can someone tell a good teacher for analog electronics circuits? Answer - Jasmine. Don’t take Sathya or Govardhan']}))
// store.dispatch(startAddTeacher({ name: 'RAJESH A', comments:['Vinod babu or rajesh a… who\'s better for network?? Answer- Rajesh A']}))
// store.dispatch(startAddTeacher({ name: 'CHRISTINA JOSEPHINE', comments:['Is Christina Josephine good for electromagnetic field theory? Answer- Take Lavanya, she doesn’t teach well But proxy, da 30, project 90+']}))
// store.dispatch(startAddTeacher({ name: 'SARAVANARAJAN M C', comments:['Best 🔥']}))
// store.dispatch(startAddTeacher({ name: 'KALPANA PRIYA D', comments:['achi ha, Notes ache banvati ha']}))
// store.dispatch(startAddTeacher({ name: 'GITANJALI J', comments:['Best in software']}))
// store.dispatch(startAddTeacher({ name: 'MOHAN K', comments:['Best teacher for OS']}))
// store.dispatch(startAddTeacher({ name: 'KHADAR BABU', comments:['He is good for stats']}))
// store.dispatch(startAddTeacher({ name: 'KAVITHA G', comments:['She is good']}))
// store.dispatch(startAddTeacher({ name: 'CHANDRA MOULISWARAN S', comments:['CM mat lena partiality karta hai aur kabi kabi galat padata hai😏']}))
// store.dispatch(startAddTeacher({ name: 'PADMA R', comments:['Padma r is good']}))
// store.dispatch(startAddTeacher({ name: 'ANNAPURNA JONNALAGADDA', comments:['Nhi bhai❌❌❌']}))
// store.dispatch(startAddTeacher({ name: 'USHA RANI N', comments:['Free S grade']}))
// store.dispatch(startAddTeacher({ name: 'VARALAKSHMI', comments:['strict but teaches well']}))
// store.dispatch(startAddTeacher({ name: 'SWARNA PRIYA R M', comments:['strict but teaches really good']}))
// store.dispatch(startAddTeacher({ name: 'LAKSHMINARAYANA P', comments:['Lakshminarayan P is good. He taught good if you study. Else just go and sit. He rarely says anything']}))
// store.dispatch(startAddTeacher({ name: 'PUNDLIK RAMBHAU BHAGAT', comments:['Things come from his material. He maintains proper class average marking not too high not too low. He is approachable too.','Study his ppt and you will get A']}))
// store.dispatch(startAddTeacher({ name: 'ETHIRAJ RD', comments:['I took him in IIP. I was a part of group where most of them were his ex students. I got good marks because he was partial. Still you can take him if there is no other option']}))
// store.dispatch(startAddTeacher({ name: 'RAVI SHANKAR', comments:['He is good']}))
// store.dispatch(startAddTeacher({ name: 'DEEPA S', comments:['Deepa s is good']}))
// store.dispatch(startAddTeacher({ name: 'ANAND PREM RAJAN', comments:['I took him in Social Entrepreneurship. He is a crazy guy. Remember whatever he says you have to give him credit whenever you can. He gave full marks to all goups in project. But thoda bakchod hai. But you can take him']}))
// store.dispatch(startAddTeacher({ name: 'SRINIVASAN P', comments:['Mast banda hai. But sabko marks de deta hai. You can go n increase marks after paper correction. Chill teacher hai. Padhata bhi accha hai']}))
// store.dispatch(startAddTeacher({ name: 'NILAVATHY K', comments:['I took her in Ethics. She was chill. We had to give a presentation, a poster and a quiz(in class, google form). Life was easy under her.']}))
// store.dispatch(startAddTeacher({ name: 'BIJU V', comments:['He is a good teacher. You can take him.','Additional course mei hack ke 3 marks diye the isne… baaki he is okay']}))
// store.dispatch(startAddTeacher({ name: 'VIJAYARAJAN V', comments:['He is a good yeacher. Taught well. Take him. A little partial towards good n attentive students']}))
// store.dispatch(startAddTeacher({ name: 'MADIAJAGAN M', comments:['I took him in parallel in 2nd year. He was too chill. Knowledgeable. You can take him']}))
// store.dispatch(startAddTeacher({ name: 'ANTOINETTE DANIEL', comments:['She is okay. You can take her']}))
// store.dispatch(startAddTeacher({ name: 'VIJAYAN E', comments:['Dsa ka teacher hai ye… chill hai']}))
// store.dispatch(startAddTeacher({ name: 'THILAGAVATHI M', comments:['She is very good']}))
// store.dispatch(startAddTeacher({ name: 'THIPPA REDDY G', comments:['Super duper chill teacher']}))
// store.dispatch(startAddTeacher({ name: 'SHANTHARAJAH S P', comments:['Mer proctor hai..agar majboori naa ho to mat lena isko']}))
// store.dispatch(startAddTeacher({ name: 'VANITHA M', comments:['Not good','Not good']}))
// store.dispatch(startAddTeacher({ name: 'DIVYA UDAYAN J', comments:['Ye acchi hai']}))
// store.dispatch(startAddTeacher({ name: 'AGILANDEESWARI.L', comments:['Not good']}))
// store.dispatch(startAddTeacher({ name: 'VALARMATHI B', comments:['She is very good for machine learning']}))
// store.dispatch(startAddTeacher({ name: 'NEELU KHARE', comments:['She is good for ML']}))
// store.dispatch(startAddTeacher({ name: 'UMA K', comments:['Software testing ki teacher hai theek hai']}))
// store.dispatch(startAddTeacher({ name: 'LAKSHMI PRIYA G G', comments:['Good for data mining']}))
// store.dispatch(startAddTeacher({ name: 'AJIT KUMAR SANTRA', comments:['Bhul se bhi mat lena']}))
// store.dispatch(startAddTeacher({ name: 'ASWANI KUMAR CHERUKURI', comments:['Very good']}))
// store.dispatch(startAddTeacher({ name: 'JEYANTHI N', comments:['Ye acchi hai but thoda pareshaan karegi']}))
// store.dispatch(startAddTeacher({ name: 'GUNDALA SWATHI', comments:['Kisi kimat par mat lena']}))
// store.dispatch(startAddTeacher({ name: 'DAPHNE LOPEZ', comments:['Mat lena']}))
// store.dispatch(startAddTeacher({ name: 'SOVAN SUNDAR DASGUPTA', comments:['Lenient, 4 out of 5(1 review)','bohot chill hai']}))
// store.dispatch(startAddTeacher({ name: 'FATHIMA PATHAM K', comments:['2 out of 5 (1 review)','Strict in paper correction']}))
// store.dispatch(startAddTeacher({ name: 'SENTHILKUMAR P', comments:['4 out of 5(1 review)','Senthilkumar P bhi theek hai… Zyada strict bhi nhi hai… Zyada chill bhi nhi hai']}))
// store.dispatch(startAddTeacher({ name: 'SHARU B.K.', comments:['4 out of 5(1 review)']}))
// store.dispatch(startAddTeacher({ name: 'SENTHIL KUMAR M', comments:['4 out of 5(1 review)',' theek hai jaha tak mujhe pata hai… Riviera ka convenor banta hai wo']}))
// store.dispatch(startAddTeacher({ name: 'SEKARAPANDIAN N', comments:['Bahut chutiya hai bilkul mat lena']}))
// store.dispatch(startAddTeacher({ name: 'MOHAMED IBRAHIM M', comments:['2 out of 5 (2 reviews)']}))
// store.dispatch(startAddTeacher({ name: 'CHINMAYA PRASAD MOHANTY', comments:['5 out of 5 (2 reviews)']}))
// store.dispatch(startAddTeacher({ name: 'MOHAN C.G', comments:['4 out of 5(1 review)']}))
// store.dispatch(startAddTeacher({ name: 'PADMANATHAN P', comments:['5 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'SATHEESH A', comments:['4 out of 5 (2 reviews)']}))
// store.dispatch(startAddTeacher({ name: 'PRAKASH R', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'JAYAPRAKASH NARAYAN M', comments:['2.5 out of 5 (2 reviews)','One of the best']}))
// store.dispatch(startAddTeacher({ name: 'PRAVEEN KUMAR', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'VIGNESH M', comments:['5 out of 5 (1 review)','Ye sahi hai..']}))
// store.dispatch(startAddTeacher({ name: 'CHITRA D', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'ANAND VEERABADRA PRASAD GURUMOORTHY', comments:['Strict, 3 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'DEVENDRANATH RAMKUMAR', comments:['Strict, 2 out of 5 (1 review)','Avoid taking if you can','Ye worst hai']}))
// store.dispatch(startAddTeacher({ name: 'MUTHUCHAMY A', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'PADMANABHAN K', comments:['4 out of 5 (1 review)','Ye best hai']}))
// store.dispatch(startAddTeacher({ name: 'SK ARIFUL RAHAMAN', comments:['Ye bhi accha hai']}))
// store.dispatch(startAddTeacher({ name: 'RIJESH M', comments:['3 out of 5 (2 reviews)','Ye thik hai']}))
// store.dispatch(startAddTeacher({ name: 'SREEKANTH M. S', comments:['5 out of 5 (1 review)','Ye best hai']}))
// store.dispatch(startAddTeacher({ name: 'KARTHIKEYAN S', comments:['5 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'BABU C', comments:['5 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'JEYAPANDIARAJAN P', comments:['Strict, 1 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'SOLAMAN BOBBY S', comments:['Strict, 1 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'RAJAMURUGAN G', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'BHARANIDARAN R', comments:['3 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'KRISHNA KISHORE K.V.S', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'SRINIVASA GUPTA N', comments:['4 out of 5 (1 review)','Teaches good, strict with attendance']}))
// store.dispatch(startAddTeacher({ name: 'ANANDAVEL K', comments:['Strict, 2 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'VINOD KUMAR SHARMA', comments:['4 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'JOEL J', comments:['5 out of 5 (1 review)']}))
// store.dispatch(startAddTeacher({ name: 'RAHUL SINGH SIKARWAR', comments:['Strict, 2 out of 5 (1 review)']}))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    store.dispatch(startSetTeachers()).then(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
    });
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// store.dispatch(startSetTeachers()).then(() => {
//   ReactDOM.render(jsx, document.getElementById('app'));
// });

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    renderApp();
    if (history.location.pathname === '/') {
      history.push('/dashboard');
    }
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
