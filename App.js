import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Game from './Game.js';

const Ratings = () => {
    return (
        <ScrollView style={{marginTop:60, marginBottom:50}}>
            <View>
                <Text style={{fontWeight: 'bold',fontSize: 20, textAlign: 'center' }}> Hariz's Game Ratings</Text>
            </View>
            <Game title='Life is Strange: Remastered Collection'
                  description= 'Life is Strange is an episodic, narrative-driven adventure game where players control Max Caulfield, a photography student who discovers she can rewind time. She and her best friend, Chloe Price, use this power to investigate the mysterious disappearance of a fellow student, Rachel Amber, and uncover a dark side to their town of Arcadia Bay. The game is known for its choice-and-consequence gameplay, supernatural themes, and focus on character relationships.'
                  rating= '10/10'
                  icon_name='butterfly'
                  picture={require('./img/lifeisstrange.avif')}
            />
            <Game title='The Legend of Zelda: Tears of the Kingdom'
                  description= 'The Legend of Zelda: Tears of the Kingdom is an open-world action-adventure game where players control Link to search for Princess Zelda and save the kingdom of Hyrule from the resurrected Ganondorf. It expands on its predecessor, Breath of the Wild, by adding new areas, including sky islands and a vast underground, and introducing new abilities like Ultrahand and Fuse that allow players to build and combine items to create vehicles and weapons.'
                  rating= '9/10'
                  icon_name='sword'
                  picture={require('./img/zeldatotk.jpg')}
            />
            <Game title='Lost Records: Bloom and Rage'
                  description='Lost Records: Bloom & Rage is a narrative adventure game from Dont Nod where players experience the story of four teenage friends across two timelines: the summer of 1995 and 2022. You play as Swann, the playable character in the present, who reunites with her friends Nora, Autumn, and Kat after a mysterious event from their past. Players make choices in both time periods that impact the relationships and the overall narrative, which explores themes of identity, friendship, and rebellion.'
                  rating= '10/10'
                  icon_name='music'
                  picture={require('./img/lostrecords.jpg')}
            />
            <Game title='Stardew Valley'
                  description=' Stardew Valley is a farming simulation RPG where players inherit a dilapidated farm and must work to restore it and their new life in a small town. Players can cultivate crops, raise animals, fish, mine for ore, and craft items, while also building relationships with the townsfolk through conversations and gifts. The open-ended gameplay allows for a wide variety of activities and goals, from building the farm into a thriving business to exploring caves filled with monsters and treasure.'
                  rating= '9/10'
                  icon_name='barn'
                  picture={require('./img/stardew.jpg')}
            />
            <Game title='Five Nights at Freddys: Secret of the Mimic'
                  description='Five Nights at Freddys: Secret of the Mimic, a survival horror game where the player explores Edwin Murrays abandoned Costume Manor to retrieve prototype technology. The primary threat is the Mimic, a prototype endoskeleton that can inhabit any mascot costume and has developed homicidal glitches. The player must use stealth, solve puzzles, and evade the Mimic while uncovering the secrets of the factory and its creator.'
                  rating= '8/10'
                  icon_name='controller'
                  picture={require('./img/fnafsotm.jpg')}
            />
        </ScrollView>
    )
}

export default Ratings;