import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'

class FetchText extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
      fetch('https://projectkfirstbucket.s3.ap-south-1.amazonaws.com/lyrics/80+Millionen.txt', {
         method: 'GET'
      })
      .then((response) => response.text())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   render() {
      return (
         <ScrollView>
            <Text>
               {this.state.data}
            </Text>
         </ScrollView>
      )
   }
}
export default FetchText
