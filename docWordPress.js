import React, {useState, useEffect} from 'react'
import { View, Button, ScrollView, Text, TouchableOpacity} from 'react-native'

export default function DocWordTranslate(){
  const msg = "Er trinkt Wasser und sie liest ein Buch";
  const arr = msg.split(" ");

  const [tv, setTv] = useState("")

  function translate(word) {
    var url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCvfXHDEUTzb9wwtgHWiWpcrTpl6ewtsvA&target=en&source=de&format=text&q="+ word ;
    fetch(url)
      .then(response => response.json())
      .then(germanWord => {
        setTv(word + " : " +germanWord.data.translations[0].translatedText)
        console.log(word + " : " +germanWord.data.translations[0].translatedText)
      })
  }

   return (
    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{fontSize: 22, marginTop: '10%', color: "red"}}>{tv}</Text>
      <Text style={{fontSize: 18, lineHeight: 35, letterSpacing: 0.5}}>
        {
          arr.map((word, key) => {
            return (<Text  onPress = {  () => translate(word)}>{word} </Text>)
          })
        }
      </Text>
    </View>
   )
}
