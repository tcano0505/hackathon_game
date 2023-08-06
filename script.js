const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state={}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerHTML = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option){
    return option
}

function selectOption(option){
   const nextTextNodeID = option.nextText
   showTextNode(nextTextNodeID)
}

const textNodes = [
    {
        id: 1,
        text: 'Welcome to a Day in the Life Simulator. Here You will try to tackle you to-do list before you go to the movies with friends. Each choice will add an hour to your time, but your main tasks for the day will add 2 hours to your time. Try your best to tackle your to-do list before meeting with friends at 6PM for an 7PM movie.',
        options: [
            {
                text: 'Start Simulation',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Scenario: You have been woken up by your alarm clock. It is currently 8am. How would you like to wake up?',
        options: [
            {
                text: 'Scrolling Twitter and Checking Emails',
                nextText: 3
            }, 
            {
                text: 'Sleeping a Little Longer',
                nextText: 5
            },
            {
                text: 'Start your Morning Routine',
                nextText: 9
            }
        ]
    },
    {
        id: 3,
        text: 'You have now spend an hour in bed reading and responding to emails and texts. It is currently 9am. How would you like to proceed?',
        options: [ 
            {
                text: 'Sleeping a Little Longer',
                nextText: 4
            },
            {
                text: 'Start your Morning Routine',
                nextText: 8
            }
        ]
    },
    {
        id: 4,
        text: 'You have now spend an extra hour sleeping in bed.  It is currently 10am. You now have to start your morning routine to get ready for the day!',
        options: [ 
            {
                text: 'Start your morning routine',
                nextText: 7
            }
        ]
    },
    {
        id: 5,
        text: 'You have now spend an hour in bed reading and responding to emails and texts. It is currently 9am. How would you like to proceed?',
        options: [ 
            {
                text: 'Scrolling Twitter and Checking Emails',
                nextText: 6
            },
            {
                text: 'Start your Morning Routine',
                nextText: 8
            }
        ]
    },
    {
        id: 6,
        text: 'You have now spend an hour in bed reading and responding to emails and texts. It is currently 10am. How would you like to proceed?',
        options: [ 
            {
                text: 'Start your Morning Routine',
                nextText: 7
            }
        ]
    },
    {//After Morning Routine: 1st task of day options
        id: 7,
        text: 'After completing your Morning Routine, you are now ready to complete one of your three tasks. Each one of these task will now take 2 hours to complete and the current time is 11am. What task would you like to complete',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 12
            },
            {
                text: 'Daily Exercise',
                nextText: 15
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 18
            }
        ]
    },
    {
        id: 8,
        text: 'After completing your Morning Routine, you are now ready to complete one of your three tasks. Each one of these task will now take 2 hours to complete and the current time is 10am. What task would you like to complete',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 11
            },
            {
                text: 'Daily Exercise',
                nextText: 14
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 17
            }
        ]
    },
    {
        id: 9,
        text: 'After completing your Morning Routine, you are now ready to complete one of your three tasks. Each one of these task will now take 2 hours to complete and the current time is 9am. What task would you like to complete',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 10
            },
            {
                text: 'Daily Exercise',
                nextText: 13
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 16
            }
        ]
    },
    { //First task choices of Studying
        id: 10,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. Each one of these task will now take 2 hours to complete and the current time is 12pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 99
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 99
            }
        ]
    },
    {
        id: 11,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. Each one of these task will now take 2 hours to complete and the current time is 1pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 25
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 26
            }
        ]
    },
    {
        id: 12,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. Each one of these task will now take 2 hours to complete and the current time is 2pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 19
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 20
            }
        ]
    },
    { //First task choices of Exercising
        id: 13,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. Each one of these task will now take 2 hours to complete and the current time is 12pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 99
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 99
            }
        ]
    },
    {
        id: 14,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. Each one of these task will now take 2 hours to complete and the current time is 1pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 27
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 28
            }
        ]
    },
    {
        id: 15,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. Each one of these task will now take 2 hours to complete and the current time is 2pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 21
            },
            {
                text: 'Go Grocery Shopping',
                nextText: 22
            }
        ]
    },
    { //First task choices of Grocery Shopping
        id: 16,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. Each one of these task will now take 2 hours to complete and the current time is 12pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 99
            },
            {
                text: 'Daily Exercise',
                nextText: 99
            }
        ]
    },
    {
        id: 17,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. Each one of these task will now take 2 hours to complete and the current time is 1pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 29
            },
            {
                text: 'Daily Exercise',
                nextText: 30
            }
        ]
    },
    {
        id: 18,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. Each one of these task will now take 2 hours to complete and the current time is 2pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 23
            },
            {
                text: 'Daily Exercise',
                nextText: 24
            }
        ]
    },
    { //2nd task choices for worst case scenario - Studying 1st choice
        id: 19,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 5pm. You no longer have enough time to complete your final task for the day, so you meet up with friends earlier than expected.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    {
        id: 20,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 5pm. You no longer have enough time to complete your final task for the day, so you meet up with friends earlier than expected.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //2nd task choices for worst case scenario - Exercising 1st choice
        id: 21,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 5pm. You no longer have enough time to complete your final task for the day, so you meet up with friends earlier than expected.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    {
        id: 22,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 5pm.  You no longer have enough time to complete your final task for the day, so you meet up with friends earlier than expected.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //2nd task choices for worst case scenario - Grocery Shopping 1st choice
        id: 23,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 5pm. You no longer have enough time to complete your final task for the day, so you meet up with friends earlier than expected.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    {
        id: 24,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 5pm. You no longer have enough time to complete your final task for the day, so you meet up with friends earlier than expected.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //2nd task choices for medium case scenario - Studying 1st choice
        id: 25,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 4pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 32
            }
        ]
    },
    {
        id: 26,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 4pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Go Grocery Shopping',
                nextText: 33
            }
        ]
    },
    { //2nd task choices for medium case scenario - Exercising 1st choice
        id: 27,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 4pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 31
            }
        ]
    },
    {
        id: 28,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 4pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Go Grocery Shopping',
                nextText: 33
            }
        ]
    },
    { //2nd task choices for medium case scenario - Grocery Shopping 1st choice
        id: 29,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 4pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',         
                nextText: 31
            }
        ]
    },
    {
        id: 30,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 4pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 32
            }
        ]
    },
    { //3rd task choices for medium case scenario - Studying 2nd choice final
        id: 31,
        text: 'After completing your Study Session, do notcheck this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 4pm. Due to an excess amount of social media and streaming distractions you faced throughout the day, you could not fully complete the final task. You had to rush to meet up with your friends at the movies and now you are running late to meet them.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //3rd task choices for medium case scenario - Exercise 2nd choice final
        id: 32,
        text: 'After completing your Daily Exercise, do not check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 4pm. Due to an excess amount of social media and streaming distractions you faced throughout the day, you could not fully complete the final task. You had to rush to meet up with your friends at the movies and now you are running late to meet them.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //3rd task choices for medium case scenario - Grocery 2nd choice final
        id: 33,
        text: 'After completing your Grocery Shopping, do not check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 4pm. Due to an excess amount of social media and streaming distractions you faced throughout the day, you could not fully complete the final task. You had to rush to meet up with your friends at the movies and now you are running late to meet them.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //2nd task choices for best case scenario - Studying 1st choice
        id: 34,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 3pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 40
            }
        ]
    },
    {
        id: 33,
        text: 'After completing your Study Session, check this off of your list below. During your studying you spent an extra hour on YouTube and got stuck in a YouTube Rabbit Hole. The current time is 3pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Go Grocery Shopping',
                nextText: 41
            }
        ]
    },
    { //2nd task choices for best case scenario - Exercising 1st choice
        id: 35,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 3pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',
                nextText: 39
            }
        ]
    },
    {
        id: 36,
        text: 'After completing your Daily Exercise, check this off of your list below. After your tiring exercise, you spent an extra hour on Netflix watching your favorite show. The current time is 3pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Go Grocery Shopping',
                nextText: 41
            }
        ]
    },
    { //2nd task choices for best case scenario - Grocery Shopping 1st choice
        id: 37,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 3pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Study for Work/Exams',         
                nextText: 39
            }
        ]
    },
    {
        id: 38,
        text: 'After completing your Grocery Shopping, check this off of your list below. Before, during, and after shopping you spent a total of an extra hour sending memes to your friends about the upcoming movie on Instagram and Tiktok. The current time is 3pm. What task would you like to complete next?',
        options: [ 
            {
                text: 'Daily Exercise',
                nextText: 40
            }
        ]
    },
    { //3rd task choices for best case scenario - Studying 3rd choice final
        id: 39,
        text: 'After completing your Study Session, the current time is 5pm. CONGRATS! You have successfully completed everything on your todo list for the day with an extra hour to spare for the movies!.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //3rd task choices for best case scenario - Exercise 3rd choice final
        id: 40,
        text: 'After completing your Daily Exercise, The current time is 5pm. CONGRATS! You have successfully completed everything on your todo list for the day with an extra hour to spare for the movies!.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    { //3rd task choices for best case scenario - Grocery 3rd choice final
        id: 41,
        text: 'After completing your Grocery Shopping, the current time is 5pm. CONGRATS! You have successfully completed everything on your todo list for the day with an extra hour to spare for the movies!.',
        options: [ 
            {
                text: 'Outro',
                nextText: 42
            }
        ]
    },
    {
        id: 42,
        text: 'As you can see, everyday we all face a battle most of us are not even aware that we are in, the battle over our attention and distractions. After going through all the examples of the game, you should come away with the feeling of awareness now to what distracts you and aims to grab your attention at all times. Try to find some habits which distract you and temporarily shift you off course of your long, medium, and short term goals. Hopefully this small interactive game can spark a change in your relationship with the devices around you. Thank you for playing!',
        options: [
            {
                text: 'Restart and Simulate a New Day!',
                nextText: -1
            }
        ]
    },
]

startGame()