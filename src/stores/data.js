import { defineStore } from "pinia";
import { ref } from 'vue';


export const dataStore = defineStore('course', () => {

    const courseList = ref([
    { 
    id: 1, name: 'Music',
    img: "https://continuingstudies.uvic.ca/media/ncghk1ss/mus-topic-header.jpg?anchor=center&mode=crop&width=710&height=315&rnd=133347052893000000",
    detail:'สอนทฤษฎีดนตรีบำบัด (Music Theory) ตั้งแต่การปูพื้นฐานด้านดนตรี จากคุณครูมีที่ประสบการณ์ทางด้านดนตรีมากกว่า 10 ปีประโยชน์ที่ผู้เรียนจะได้รับสามารถสอบเข้าคณะดุริยางค์ เอกวิชาดนตรี ของมหาวิทยาลัยดังๆ ได้ หรือสามารถสอบทฤษฎีดนตรีได้',
    wht_earn:'เพื่อพัฒนาทักษะความสามารถทางดนตรี เเละทำให้สามารถสอบเข้าคณะดุริยางค์ เอกวิชาดนตรี  หรือสามารถสอบทฤษฎีดนตรีได้',
    who_study:'ทุกคนที่เรียนดนตรี และสนใจเรียนทฤษฎีดนตรี เพื่อนำไปใช้ต่อยอดกับการเรียน, ผู้ที่ต้องการเตรียมสอบเข้า คณะดุริยางคศิลป์ ด้านดนตรี',
    knowledge:'ไม่จำเป็นต้องมีความรู้ เพียงแค่มีความสนใจทางด้านดนตรี',
    caption:'',
    },{ 
    id: 2, name: 'Cooking',
    img: "https://media.timeout.com/images/105170664/image.jpg",
    detail:'หลักสูตรเชฟอาหารไทย แบบเร่งรัด 90 ชั่วโมง (90 Hours Intensive Course) เป็นหลักสูตรที่เหมาะสำหรับผู้สนใจพัฒนาทักษะ และเทคนิคการทำอาหารไทยให้มากขึ้นในสายอาชีพที่ทำงานอยู่ในปัจจุบัน โดยจะเรียนรู้และลงมือปฎิบัติจริงในครัวที่ได้มาตรฐานมากกว่า 35 เมนู ที่เป็นอาหารไทย, ขนมไทย และของว่างที่มีเอกลักษณ์เฉพาะและรสชาติไทยแท้ สอนโดยอาจารย์และเชฟอาหารไทยมืออาชีพมาเป็นผู้ถ่ายทอดการสอนให้กับนักเรียนและคอยดูแลให้คำปรึกษานักเรียนอย่างใกล้ชิด',
    wht_earn:'เพื้อให้ผู้เรียนพัฒนาทักษะความสามารถทางด้านการทำอาหารให้ถูกสุขอนามัยอีกทั้งยังสามารถนำมาต่อยอดการประกอบอาชีพได้ในอนาคต',
    who_study:'บุคคลที่ต้องการเป็นเชฟอาหารไทย และต้องการทำงานในประเทศ หรือต่างประเทศบุคคลที่มีพื้นฐานการทำอาหารมาก่อน และมาเพิ่มเติมความรู้ด้านอาหารไทยให้มากขึ้นในสายอาชีพ บุคคลที่ต้องการสอบวัดระดับมาตรฐานอาชีพจากกรมพัฒนาฝีมือแรงงาน แต่มีเวลาเรียนจำกัด',
    knowledge:'ไม่จำเป็นต้องมีความรู้ เพียงแค่มีความสนใจทางด้านการทำอาหาร',
    caption:'',
    },{
    id: 3, name: 'Drawing',
    img: "https://www.hemeltoday.co.uk/webimg/T0FLMTMzNDczOTQ0.jpg?width=1200&enable=upscale&fbclid=IwAR0v2Gu-CPIi9YID-U1EtUen7UMD7Lcb4Dll1HsdovTxrnRzhWDUEWuMTeM",
    detail:'การสร้างภาพวาดเบื้องต้นในรูปแบบการ์ตูนและสติกเกอร์ใช้เทคนิคพื้นฐานในการเขียนและเรนเดอริ่งการวาดภาพตามแนวคิดและการสร้างภาพจากความคิดสร้างสรรค์',
    wht_earn:'เพื่อให้ผู้เรียนพัฒนาทักษะการวาดรูปการออกเเบบปูพื้นฐานความคิดเชิงศิลและสร้างสรรค์เพื่อให้ผู้เรียนสามารถนำไปต่อยอดได้ในหลายๆอาชีพ',
    who_study:'ผู้ที่สนใจในการศิลปะ คอร์สนี้เหมาะสำหรับบุคคลที่มีความสนใจในการเรียนรู้ศิลปะพัฒนาทักษะทางศิลป์ผู้ที่ต้องการพัฒนาทักษะการวาดรูป: หากคุณสนใจในการเรียนรู้การวาดรูปเบื้องต้นและสร้างสรรค์ศิลปะ, คอร์สนี้จะช่วยให้คุณพัฒนาทักษะนี้ได้ผู้ที่มีเวลาอยู่บ้านและต้องการการสอนออนไลน์: คอร์สนี้เหมาะสำหรับคนที่มีเวลาว่างที่จะลงมือทำศิลปะ',
    knowledge:'ผู้เรียนไม่จำเป็นต้องมีความรู้อะไรมาก่อนในคอร์สนี้ เนื่องจากเป็นคอร์สเริ่มต้นที่เหมาะสำหรับผู้ที่ไม่มีพื้นฐานหรือความรู้ด้านศิลปะมาก่อน คุณจะได้รับคำแนะนำและการสอนเบื้องต้นจากคอร์สนี้ เพียงแค่คุณมีความสนใจและความกระตือรือร้นในการเรียนรู้และพัฒนาทักษะทางศิลปะพอแล้ว',
    caption:'',
    },{ 
    id: 4, name: 'Exercise Program',
    img: "https://external.xx.fbcdn.net/emg1/v/t13/10797611773426526308?url=https%3A%2F%2Fd.newsweek.com%2Fen%2Ffull%2F1940536%2Ftwo-people-using-dumbbells-gym.jpg%3Fw%3D1600%26h%3D1200%26q%3D88%26f%3Df168284e914627dc8ee40d08e8f1f9af&fb_obo=1&utld=newsweek.com&stp=c0.5000x0.5000f_dst-emg0_p300x157_q75&_nc_eui2=AeFbsDzL_lS3-EzdJ4wg_lTWEqW0dCApBsYSpbR0ICkGxh8WPkBUU9K8b8qvtzW1vkbjy05W85ZZFc4Vm83r8bOF&ccb=13-1&oh=06_AbG7mZu6FgGXfrgfftVnmTT0b5kwB6fk4sXXaDQTeUNFeQ&oe=652988F0&_nc_sid=e9c42e",
    detail:'การออกกำลังกายเบื้องต้นที่สามารถทำที่บ้านการฝึกหรือยกเลิกแรงกล้างสตรีทไปในการออกกำลังกายการเพิ่มความยืดหยุ่นและความแข็งแกร่งของกล้ามเนื้อ',
    wht_earn:'เพิ้อให้ผู้เรียนเข้าใจพื้นฐานของการออกกำลังกายเพื่มขีดจำกัดของร่างกาย เพื่มความเข็งเเรงเเละสามารถต่อยอดให้กับผู้ที่สนใจจะเป็นนักกีฬา',
    who_study:'ผู้ที่สนใจในการออกกำลังกาย เพื่อสร้างสุขภาพที่ดีขึ้นและพัฒนาทักษะต่างๆผู้ที่ต้องการปรับปรุงสุขภาพร่างกาย: คอร์สนี้เหมาะสำหรับคนที่ต้องการออกกำลังกายเพื่อเพิ่มความแข็งแกร่งและความยืดหยุ่นของกล้ามเนื้อ, โดยไม่จำเป็นต้องไปยู่ในฟิตเนสหรือห้องออกกำลังกายผู้ที่มีเวลาอยู่บ้านและต้องการการสอนออนไลน์: คอร์สนี้เหมาะสำหรับคนที่มีเวลาว่างที่ออกกำลังกายโดยไม่ต้องเดินทางไปยุ่งกับคอร์สออฟไลน์.',
    knowledge:'ผู้เรียนไม่จำเป็นต้องมีความรู้อะไรมาก่อนในคอร์สนี้ เนื่องจากเป็นคอร์สเริ่มต้นที่เหมาะสำหรับผู้ที่ไม่มีพื้นฐานทางการออกกำลังกายมาก่อน คุณจะได้รับคำแนะนำและการสอนเบื้องต้นจากคอร์สนี้ เพียงแค่คุณมีความสนใจและความกระตือรือร้นในการเรียนรู้และพัฒนาทักษการออกกำลังกายคือพอแล้ว',
    caption:'',
    },
    ]);

    const packageList= ref([
        {
          id: 1,
          price: 1290,
          day:30,
          description1:'Average 43.-/day' ,
          keys_code:'R4G7T2Y9PQWC'
        },
        {
          id: 2,
          price: 1890,
          day:60,
          description1:'Average 945.-/day' ,
          keys_code:'LK6J3N8H5FEQ'
        },
        {
          id: 3,
          price: 2790,
          day:90,
          description1:'Average 930.-/day' ,
          keys_code:'XZ0V1M6WPDFG'
        },
        {
          id: 4,
          price: 3690,
          day:120,
          description1:'Average 922.-/day' ,
          keys_code:'Q1E2I3U5O94X'
        },
        {
          id: 5,
          price: 5390,
          day:180,
          description1:'Average 898.-/day' ,
          keys_code:'H6K4S7A8D3HW'
        },
        {
          id: 6,
          price: 9990,
          day:365,
          description1:'Average 832.-/day' ,
          keys_code:'B9N8M7L0O2ZD'
        },
      ]);
      
      const data_dev = ref([
         {
          id:1,name:'Athit Fongkhaimuk',
          img:'https://cdn.discordapp.com/attachments/1003582679465345034/1162014100553998436/image.png?ex=653a64f6&is=6527eff6&hm=0507c1f800c4f9297905dcdf1676b74d5a5efe5a8b487396b64bbfdbb2bd62f9&',
          url:'https://poplme.co/G7lP22B1/share',
          text:'Front-end Development'
         },{
          id:2,name:'Chaiyut Suntharote',
          img:'https://media.discordapp.net/attachments/1003582679465345034/1162012341932662824/365298108_4223788944514137_6778048245465402849_n.jpg?ex=653a6353&is=6527ee53&hm=d60c3b091bf802147d15ecf43e8910a5b398c8d4299041b1731d32985e621943&=&width=663&height=662',
          url:'https://poplme.co/GU4bLcu6/dash',
          text:'Web Design'
         },{
          id:3,name:'Preeyanuch Homseang',
          img:'https://cdn.discordapp.com/attachments/1003582679465345034/1162010492638871583/370122461_642879934634051_1136407460544028460_n.jpg?ex=653a619a&is=6527ec9a&hm=cac591c9824a1eab6497354cd86e0d3c9c1122afcb7cd3c676b36da8b81e808e&',
          url:'https://poplme.co/hash/FxjbYBMb/1/s',
          text:''
         },{
          id:4,name:'Sugritta Singharatho',
          img:'https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/373680210_966950998064702_6489262070922683041_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGexDxW0D1QdtfVvayoOM-SzSYrl2lqURDNJiuXaWpREBpTXIfZN04pL217x605m-rSz8O2hB0GjVHD-OK_Uljn&_nc_ohc=-YoQYYDPQWMAX8h9ANA&_nc_ht=scontent.fcnx3-1.fna&oh=00_AfCAeYgzKwCLkil2-eOwRd8HRPW4Xjf6jtkGpzOgwkhQUw&oe=652C261D',
          url:'',
          text:''
         },{
          id:5,name:'Praphaluck Thitimanokun',
          img:'https://media.discordapp.net/attachments/1003582679465345034/1162011851895349279/384543889_848461990118754_5932417620976423628_n.jpg?ex=653a62de&is=6527edde&hm=58ff06cf11e48f564fec7f32eef1d3adb84a3ca94c9f16de26eab4c84d22cca8&=&width=496&height=661',
          url:'',
          text:''
         },
      ])



    return { courseList, packageList, data_dev }
    
});