import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TrackPlayer from 'react-native-track-player';

const App = () => {
  const setupApp = async ()=>{
    console.log("setup player");
	// khởi tạo cho player
    await TrackPlayer.setupPlayer();
    
	// định nghĩa danh sách track
    let listTrack = [
      {
        id: '1',
        url: 'https://cdn.pixabay.com/audio/2022/10/18/audio_31c2730e64.mp3',
        title: 'Password Infinity',
        artist: '',
         
      }
    ];
	// đưa track vào player
    await TrackPlayer.add(listTrack);

    console.log("Finish setup");
  }

  useEffect(   () => {
    console.log("start render");
  
    setupApp();
    
  }, []);

  //--- hàm điều khiển
  const PlayMusic = ()=>{
  	// hàm chạy nhạc
       console.log("play music");

      TrackPlayer.play();
  }
  // hàm tạm dừng
  const PauseMusic = ()=>{
    console.log("pause music");
    
    TrackPlayer.pause();
  }




  return (
    <View>
  <View>
      <Text>Demo Music</Text>
      
      <View style={{width: 100,margin: 10}}>
        <Button title='Play' onPress={PlayMusic} />
      </View>
      
      <View style={{width: 100,margin: 10}}>
        <Button title='Pause' onPress={PauseMusic} />
      </View>
 
    </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})