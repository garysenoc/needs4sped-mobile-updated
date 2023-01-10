 const objects = [
    {
        id: 1,
        object_name: 'Apple',
        image: require('../assets/images/letters/1.png')
    },
    {
        id: 2,
        object_name: 'Bag',
        image: require('../assets/images/letters/2.png')
    },
    {
        id: 3,
        object_name: 'Crocodile',
        image: require('../assets/images/letters/3.png')
    },
    {
        id: 4,
        object_name: 'Donut',
        image: require('../assets/images/letters/4.png')
       
    },
    {
        id: 5,
        object_name: 'Elephant',
        image: require('../assets/images/letters/5.png')
    },
    {
        id: 6,
        object_name: 'Flower',
        image: require('../assets/images/letters/6.png')
    },
    {
        id: 7,
        object_name: 'Girl',
        image: require('../assets/images/letters/7.png')
    },
    {
        id: 8,
        object_name: 'House',
        image: require('../assets/images/letters/8.png')
       
    },
    {
        id: 9,
        object_name: 'Icecream',
        image: require('../assets/images/letters/9.png')
    },
    {
        id: 10,
        object_name: 'Juice',
        image: require('../assets/images/letters/10.png')
    },
    {
        id: 11,
        object_name: 'Key',
        image: require('../assets/images/letters/11.png')
    },
    {
        id: 12,
        object_name: 'Lamp',
        image: require('../assets/images/letters/12.png')
       
    },
    {
        id: 13,
        object_name: 'Man',
        image: require('../assets/images/letters/13.png')
    },
    {
        id: 14,
        object_name: 'Nut',
        image: require('../assets/images/letters/14.png')
    },
    {
        id: 15,
        object_name: 'Owl',
        image: require('../assets/images/letters/15.png')
    },
    {
        id: 16,
        object_name: 'Penguin',
        image: require('../assets/images/letters/16.png')
       
    },
    {
        id: 17,
        object_name: 'Question',
        image: require('../assets/images/letters/17.png')
    },
    {
        id: 18,
        object_name: 'Robot',
        image: require('../assets/images/letters/18.png')
    },
    {
        id: 19,
        object_name: 'Shoes',
        image: require('../assets/images/letters/19.png')
    },
    {
        id: 20,
        object_name: 'Trees',
        image: require('../assets/images/letters/20.png')
       
    },
    {
        id: 21,
        object_name: 'Umbrella',
        image: require('../assets/images/letters/21.png')
    },
    {
        id: 22,
        object_name: 'Vegatables',
        image: require('../assets/images/letters/22.png')
    },
    {
        id: 23,
        object_name: 'Whistle',
        image: require('../assets/images/letters/23.png')
    },
    {
        id: 24,
        object_name: 'Xylophone',
        image: require('../assets/images/letters/24.png')
       
    },
    {
        id: 25,
        object_name: 'Yoyo',
        image: require('../assets/images/letters/25.png')
    },
    {
        id: 26,
        object_name: 'Zebra',
        image: require('../assets/images/letters/26.png')
    },
    
]

export const object_questions = [
    {
        id:1,
        question_object:objects[5].object_name,
        choice1:objects[5].image,
        choice2:objects[10].image,
        choice3:objects[15].image,
        choice4:objects[25].image,
        answer:'1'
    },
    {
        id:2,
        question_object:objects[10].object_name,
        choice1:objects[16].image,
        choice2:objects[1].image,
        choice3:objects[6].image,
        choice4:objects[10].image,
        answer:'4'
    },
    {
        id:3,
        question_object:objects[20].object_name,
        choice1:objects[8].image,
        choice2:objects[20].image,
        choice3:objects[2].image,
        choice4:objects[3].image,
        answer:'2'
    },
    {
        id:4,
        question_object:objects[15].object_name,
        choice1:objects[12].image,
        choice2:objects[9].image,
        choice3:objects[15].image,
        choice4:objects[21].image,
        answer:'3'
    },
    {
        id:5,
        question_object:objects[0].object_name,
        choice1:objects[16].image,
        choice2:objects[19].image,
        choice3:objects[0].image,
        choice4:objects[24].image,
        answer:'3'
    },
    {
        id:6,
        question_object:objects[19].object_name,
        choice1:objects[19].image,
        choice2:objects[0].image,
        choice3:objects[1].image,
        choice4:objects[6].image,
        answer:'1'
    },
    {
        id:7,
        question_object:objects[22].object_name,
        choice1:objects[16].image,
        choice2:objects[22].image,
        choice3:objects[13].image,
        choice4:objects[18].image,
        answer:'2'
    },
    {
        id:8,
        question_object:objects[8].object_name,
        choice1:objects[8].image,
        choice2:objects[24].image,
        choice3:objects[3].image,
        choice4:objects[16].image,
        answer:'1'
    },
    {
        id:9,
        question_object:objects[1].object_name,
        choice1:objects[13].image,
        choice2:objects[9].image,
        choice3:objects[23].image,
        choice4:objects[1].image,
        answer:'4'
    },
    {
        id:10,
        question_object:objects[24].object_name,
        choice1:objects[8].image,
        choice2:objects[11].image,
        choice3:objects[24].image,
        choice4:objects[9].image,
        answer:'3'
    },
    {
        id:11,
        question_object:objects[18].object_name,
        choice1:objects[2].image,
        choice2:objects[18].image,
        choice3:objects[10].image,
        choice4:objects[14].image,
        answer:'2'
    },
    {
        id:12,
        question_object:objects[11].object_name,
        choice1:objects[16].image,
        choice2:objects[25].image,
        choice3:objects[0].image,
        choice4:objects[11].image,
        answer:'4'
    },
    {
        id:13,
        question_object:objects[14].object_name,
        choice1:objects[14].image,
        choice2:objects[3].image,
        choice3:objects[7].image,
        choice4:objects[5].image,
        answer:'1'
    },
    {
        id:14,
        question_object:objects[15].object_name,
        choice1:objects[12].image,
        choice2:objects[9].image,
        choice3:objects[15].image,
        choice4:objects[21].image,
        answer:'3'
    },
    {
        id:15,
        question_object:objects[25].object_name,
        choice1:objects[1].image,
        choice2:objects[25].image,
        choice3:objects[16].image,
        choice4:objects[18].image,
        answer:'2'
    },
    {
        id:16,
        question_object:objects[4].object_name,
        choice1:objects[4].image,
        choice2:objects[0].image,
        choice3:objects[22].image,
        choice4:objects[25].image,
        answer:'1'
    },
    {
        id:17,
        question_object:objects[16].object_name,
        choice1:objects[5].image,
        choice2:objects[2].image,
        choice3:objects[3].image,
        choice4:objects[16].image,
        answer:'4'
    },
    {
        id:18,
        question_object:objects[21].object_name,
        choice1:objects[0].image,
        choice2:objects[21].image,
        choice3:objects[12].image,
        choice4:objects[2].image,
        answer:'2'
    },
    {
        id:19,
        question_object:objects[7].object_name,
        choice1:objects[14].image,
        choice2:objects[7].image,
        choice3:objects[8].image,
        choice4:objects[21].image,
        answer:'2'
    },
    {
        id:20,
        question_object:objects[13].object_name,
        choice1:objects[13].image,
        choice2:objects[23].image,
        choice3:objects[22].image,
        choice4:objects[24].image,
        answer:'1'
    },
    {
        id:21,
        question_object:objects[3].object_name,
        choice1:objects[15].image,
        choice2:objects[12].image,
        choice3:objects[3].image,
        choice4:objects[21].image,
        answer:'3'
    },
    {
        id:22,
        question_object:objects[17].object_name,
        choice1:objects[17].image,
        choice2:objects[15].image,
        choice3:objects[6].image,
        choice4:objects[7].image,
        answer:'1'
    },
    {
        id:23,
        question_object:objects[23].object_name,
        choice1:objects[17].image,
        choice2:objects[19].image,
        choice3:objects[18].image,
        choice4:objects[23].image,
        answer:'4'
    },
    {
        id:24,
        question_object:objects[12].object_name,
        choice1:objects[19].image,
        choice2:objects[0].image,
        choice3:objects[12].image,
        choice4:objects[1].image,
        answer:'3'
    },
    {
        id:25,
        question_object:objects[9].object_name,
        choice1:objects[13].image,
        choice2:objects[9].image,
        choice3:objects[7].image,
        choice4:objects[2].image,
        answer:'2'
    },
]