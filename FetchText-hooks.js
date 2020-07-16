import React, {useState, useEffect} from 'react'
import { View, Button, ScrollView, Text } from 'react-native'

export default function FetchTextUsingHooks() {

  const [body, setBody] = useState('Press the songs button below')
  const [url1, seturl1] = useState('')
  const [url2, seturl2] = useState('')
  const [url3, seturl3] = useState('')

  useEffect(() => {
    fetch("https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/Fame.txt")
      .then(response => response.text())
      .then(data => {
        seturl1(data)
      })
  }, [])

  useEffect(() => {
    fetch("https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/Wenn+sie+kommen.txt")
      .then(response => response.text())
      .then(data => {
        seturl2(data)
      })
  }, [])

  useEffect(() => {
    fetch("https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/Lieblingsmensch.txt")
      .then(response => response.text())
      .then(data => {
        seturl3(data)
      })
  }, [])

  return (
    <View style = {{alignItems: 'center',justifyContent: 'center'}}>
      <ScrollView style = {{width:"90%", height: '75%', marginTop:'10%', marginBottom:'5%'}}>
        <Text>{body}</Text>

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
