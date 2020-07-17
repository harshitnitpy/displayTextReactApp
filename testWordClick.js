import React, {useState, useEffect} from 'react'
import { View, Button, ScrollView, Text, TouchableOpacity} from 'react-native'

export default function TestWordClick() {
  const msg = "Drücken Sie die Songs-Taste unten und drücken Sie das Wort, um die Übersetzung anzuzeigen"
  const g = msg.split(" ")

  const [body, setBody] = useState(g)
  const [url1, seturl1] = useState([])
  const [url2, seturl2] = useState([])
  const [url3, seturl3] = useState([])

  //Fetching text file from S3 bucket
  useEffect(() => {
    fetch("https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/Fame.txt")
      .then(response => response.text())
      .then(data => {
        seturl1(data.split(/[\s]/))
      })
  }, [])

  useEffect(() => {
    fetch("https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/Wenn+sie+kommen.txt")
      .then(response => response.text())
      .then(data => {
        seturl2(data.split(/[\s]/))
      })
  }, [])

  useEffect(() => {
    fetch("https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/Lieblingsmensch.txt")
      .then(response => response.text())
      .then(data => {
        seturl3(data.split(/[\s]/))
      })
  }, [])

  const [tv, setTv] = useState("")
  //Setting translation view (tv) at top
  function translate(word){
    var url = "https://translation.googleapis.com/language/translate/v2?key=AIzaSyCvfXHDEUTzb9wwtgHWiWpcrTpl6ewtsvA&target=en&source=de&format=text&q="+ word ;
    fetch(url)
      .then(response => response.json())
      .then(germanWord => {
        setTv(word + " : " +germanWord.data.translations[0].translatedText)
        console.log(word + " : " +germanWord.data.translations[0].translatedText)
      })
  }
// Top: Translation View
// Middle: text scroll View
// Buttom : Buttons
  return (
    <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style = {{fontSize: 22, marginTop: '10%', color: "red"}}>{tv}</Text>
      <ScrollView style = {{width:"90%", height: '60%', marginTop:'5%', marginBottom:'5%'}}>
      <Text style={{fontSize: 18, lineHeight: 35, letterSpacing: 0.5}}>
        {
          body.map((word, key) => {
            return (<Text  onPress = {  () => translate(word)}>{word} </Text>)
          })
        }
      </Text>
      </ScrollView>
      <View >
      <Button
        title = 'Fame'
        onPress = {() => setBody(url1)}/>
      <Button
        title = 'Wenn Sie Commen'
        onPress = {() => setBody(url2)}/>
      <Button
        title = 'Lieblingsmensch'
        onPress = {() => setBody(url3)}/>

      </View>
    </View>

  )

}
