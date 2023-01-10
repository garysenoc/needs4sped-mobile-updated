const random = [
    {
        id: 1,
        random_name: '1 Panda',
        image:require('../assets/images/numbers/1.png')

    },
    {
        id: 2,
        random_name: '2 Clocks',
        image:require('../assets/images/numbers/2.png')
       
    },
    {
        id: 3,
        random_name: '3 Ducks',
        image:require('../assets/images/numbers/3.png')
    },
    {
        id: 4,
        random_name: '4 Hearts',
        image:require('../assets/images/numbers/4.png')
    },
    {
        id: 5,
        random_name: '5 Diamonds',
        image:require('../assets/images/numbers/5.png')
        
    },
    {
        id: 6,
        image:require('../assets/images/numbers/6.png'),
        random_name: '6 Stars',
    },
    {
        id: 7,
        image:require('../assets/images/numbers/7.png'),
        random_name: '7 Whistles',
    },
    {
        id: 8,
        image:require('../assets/images/numbers/8.png'),
        random_name: '8 Bulbs',
    },
    {
        id: 9,
        image:require('../assets/images/numbers/9.png'),
        random_name: '9 Trophies',
    },
    {
        id: 10,
        image:require('../assets/images/numbers/10.png'),
        random_name: '10 Pencils',
    },
    {
        id: 11,
        image:require('../assets/images/numbers/num1.png'),
        random_name: 'One',

    },
    {
        id: 12,
        image:require('../assets/images/numbers/num2.png'),
        random_name: 'Two',
    },
    {
        id: 13,
        image:require('../assets/images/numbers/num3.png'),
        random_name: 'Three',
    },
    {
        id: 14,
        image:require('../assets/images/numbers/num4.png'),
        random_name: 'Four',
    },
    {
        id: 15,
        image:require('../assets/images/numbers/num5.png'),
        random_name: 'Five',
    },
    {
        id: 16,
        image:require('../assets/images/numbers/num6.png'),
        random_name: 'Six',
    },
    {
        id: 17,
        image:require('../assets/images/numbers/num7.png'),
        random_name: 'Seven',
    },
    {
        id: 18,
        image:require('../assets/images/numbers/num8.png'),
        random_name: 'Eight',
    },
    {
        id: 19,
        image:require('../assets/images/numbers/num9.png'),
        random_name: 'Nine',
    },
    {
        id: 20,
        image:require('../assets/images/numbers/num10.png'),
        random_name: 'Ten',
    },
    {
        id: 21,
        image:require('../assets/images/abc/Asmall.png'),
        random_name: 'A',

    },
    {
        id: 22,
        image:require('../assets/images/abc/Bsmall.png'),
        random_name: 'B',
    },
    {
        id: 23,
        image:require('../assets/images/abc/Csmall.png'),
        random_name: 'C',
    },
    {
        id: 24,
        image:require('../assets/images/abc/Dsmall.png'),
        random_name: 'D',
    },
    {
        id: 25,
        image:require('../assets/images/abc/Esmall.png'),
        random_name: 'E',
    },
    {
        id: 26,
        image:require('../assets/images/abc/Fsmall.png'),
        random_name: 'F',
    },
    {
        id: 27,
        image:require('../assets/images/abc/Gsmall.png'),
        random_name: 'G',
    },
    {
        id: 28,
        image:require('../assets/images/abc/Hsmall.png'),
        random_name: 'H',
    },
    {
        id: 29,
        image:require('../assets/images/abc/Ismall.png'),
        random_name: 'I',
    },
    {
        id: 30,
        image:require('../assets/images/abc/Jsmall.png'),
        random_name: 'J',
    },
    {
        id: 31,
        image:require('../assets/images/abc/Ksmall.png'),
        random_name: 'K',

    },
    {
        id: 32,
        image:require('../assets/images/abc/Lsmall.png'),
        random_name: 'L',
    },
    {
        id: 33,
        image:require('../assets/images/abc/Msmall.png'),
        random_name: 'M',
    },
    {
        id: 34,
        image:require('../assets/images/abc/Nsmall.png'),
        random_name: 'N',
    },
    {
        id: 35,
        image:require('../assets/images/abc/Osmall.png'),
        random_name: 'O',
    },
    {
        id: 36,
        image:require('../assets/images/abc/Psmall.png'),
        random_name: 'P',
    },
    {
        id: 37,
        image:require('../assets/images/abc/Qsmall.png'),
        random_name: 'Q',
    },
    {
        id: 38,
        image:require('../assets/images/abc/Rsmall.png'),
        random_name: 'R',
    },
    {
        id: 39,
        image:require('../assets/images/abc/Ssmall.png'),
        random_name: 'S',
    },
    {
        id: 40,
        image:require('../assets/images/abc/Tsmall.png'),
        random_name: 'T',
    },
    {
        id: 41,
        image:require('../assets/images/abc/Usmall.png'),
        random_name: 'U',
    },
    {
        id: 42,
        image:require('../assets/images/abc/Vsmall.png'),
        random_name: 'V',
    },
    {
        id: 43,
        image:require('../assets/images/abc/Wsmall.png'),
        random_name: 'W',
    },

    {
        id: 44,
        image:require('../assets/images/abc/Xsmall.png'),
        random_name: 'X',
    },
    {
        id: 45,
        image:require('../assets/images/abc/Ysmall.png'),
        random_name: 'Y',
    },
    {
        id: 46,
        image:require('../assets/images/abc/Zsmall.png'),
        random_name: 'Z',
    },   
]

export const random_questions = [
    {
        id:1,
        question_object:random[6].random_name,
        choice1:random[6].image,
        choice2:random[1].image,
        choice3:random[5].image,
        choice4:random[4].image,
        answer:'1'
    },
    {
        id:2,
        question_object:random[11].random_name,
        choice1:random[14].image,
        choice2:random[10].image,
        choice3:random[12].image,
        choice4:random[11].image,
        answer:'4'
    },
    {
        id:3,
        question_object:random[25].random_name,
        choice1:random[39].image,
        choice2:random[25].image,
        choice3:random[45].image,
        choice4:random[36].image,
        answer:'2'
    },
    {
        id:4,
        question_object:random[4].random_name,
        choice1:random[5].image,
        choice2:random[7].image,
        choice3:random[0].image,
        choice4:random[4].image,
        answer:'4'
    },
    {
        id:5,
        question_object:random[10].random_name,
        choice1:random[14].image,
        choice2:random[10].image,
        choice3:random[12].image,
        choice4:random[18].image,
        answer:'2'
    },
    {
        id:6,
        question_object:random[20].random_name,
        choice1:random[25].image,
        choice2:random[42].image,
        choice3:random[20].image,
        choice4:random[36].image,
        answer:'3'
    },
    {
        id:7,
        question_object:random[5].random_name,
        choice1:random[5].image,
        choice2:random[0].image,
        choice3:random[3].image,
        choice4:random[4].image,
        answer:'1'
    },
    {
        id:8,
        question_object:random[17].random_name,
        choice1:random[17].image,
        choice2:random[19].image,
        choice3:random[13].image,
        choice4:random[11].image,
        answer:'1'
    },
    {
        id:9,
        question_object:random[36].random_name,
        choice1:random[28].image,
        choice2:random[22].image,
        choice3:random[36].image,
        choice4:random[33].image,
        answer:'3'
    },
    {
        id:10,
        question_object:random[8].random_name,
        choice1:random[6].image,
        choice2:random[8].image,
        choice3:random[1].image,
        choice4:random[4].image,
        answer:'2'
    },
    {
        id:11,
        question_object:random[13].random_name,
        choice1:random[13].image,
        choice2:random[12].image,
        choice3:random[18].image,
        choice4:random[11].image,
        answer:'1'
    },
    {
        id:12,
        question_object:random[26].random_name,
        choice1:random[24].image,
        choice2:random[28].image,
        choice3:random[30].image,
        choice4:random[26].image,
        answer:'4'
    },
    {
        id:13,
        question_object:random[2].random_name,
        choice1:random[5].image,
        choice2:random[1].image,
        choice3:random[2].image,
        choice4:random[4].image,
        answer:'3'
    },
    {
        id:14,
        question_object:random[12].random_name,
        choice1:random[19].image,
        choice2:random[12].image,
        choice3:random[15].image,
        choice4:random[11].image,
        answer:'2'
    },
    {
        id:15,
        question_object:random[39].random_name,
        choice1:random[39].image,
        choice2:random[34].image,
        choice3:random[38].image,
        choice4:random[40].image,
        answer:'1'
    },
    {
        id:16,
        question_object:random[3].random_name,
        choice1:random[2].image,
        choice2:random[0].image,
        choice3:random[3].image,
        choice4:random[4].image,
        answer:'3'
    },
    {
        id:17,
        question_object:random[15].random_name,
        choice1:random[17].image,
        choice2:random[16].image,
        choice3:random[13].image,
        choice4:random[15].image,
        answer:'4'
    },
    {
        id:18,
        question_object:random[44].random_name,
        choice1:random[44].image,
        choice2:random[42].image,
        choice3:random[45].image,
        choice4:random[41].image,
        answer:'1'
    },
    {
        id:19,
        question_object:random[9].random_name,
        choice1:random[3].image,
        choice2:random[4].image,
        choice3:random[5].image,
        choice4:random[9].image,
        answer:'4'
    },
    {
        id:20,
        question_object:random[14].random_name,
        choice1:random[10].image,
        choice2:random[18].image,
        choice3:random[14].image,
        choice4:random[11].image,
        answer:'3'
    },
    {
        id:21,
        question_object:random[18].random_name,
        choice1:random[12].image,
        choice2:random[15].image,
        choice3:random[13].image,
        choice4:random[18].image,
        answer:'4'
    },
    {
        id:22,
        question_object:random[42].random_name,
        choice1:random[42].image,
        choice2:random[33].image,
        choice3:random[26].image,
        choice4:random[38].image,
        answer:'1'
    },
    {
        id:23,
        question_object:random[7].random_name,
        choice1:random[6].image,
        choice2:random[8].image,
        choice3:random[1].image,
        choice4:random[7].image,
        answer:'4'
    },
    {
        id:24,
        question_object:random[19].random_name,
        choice1:random[14].image,
        choice2:random[10].image,
        choice3:random[19].image,
        choice4:random[18].image,
        answer:'3'
    },
    {
        id:25,
        question_object:random[29].random_name,
        choice1:random[35].image,
        choice2:random[29].image,
        choice3:random[45].image,
        choice4:random[28].image,
        answer:'2'
    },
    {
        id:26,
        question_object:random[40].random_name,
        choice1:random[28].image,
        choice2:random[25].image,
        choice3:random[38].image,
        choice4:random[40].image,
        answer:'4'
    },
    {
        id:27,
        question_object:random[1].random_name,
        choice1:random[3].image,
        choice2:random[8].image,
        choice3:random[1].image,
        choice4:random[2].image,
        answer:'3'
    },
    {
        id:28,
        question_object:random[16].random_name,
        choice1:random[16].image,
        choice2:random[19].image,
        choice3:random[13].image,
        choice4:random[12].image,
        answer:'1'
    },
    {
        id:29,
        question_object:random[37].random_name,
        choice1:random[31].image,
        choice2:random[25].image,
        choice3:random[27].image,
        choice4:random[37].image,
        answer:'24'
    },
    {
        id:30,
        question_object:random[0].random_name,
        choice1:random[2].image,
        choice2:random[0].image,
        choice3:random[1].image,
        choice4:random[4].image,
        answer:'2'
    },

]