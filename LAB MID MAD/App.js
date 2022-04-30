import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image, Dimensions,
  Touchable, Pressable,TouchableOpacity,
  navigation,
  Button,
  Text,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { createStackNavigator } from '@react-navigation/stack';
import { BarChart } from "react-native-chart-kit";

function Home({ navigation }) {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fajar, setfajar] = useState("");
  const [zohar, setzohar] = useState("");
  const [asar, setasar] = useState("");
  const [mag, setmag] = useState("");
  const [esha, setesha] = useState("");

  const onDateChange = (date, type) => {

    setfajar(null);
    setzohar(null);
    setasar(null);
    setmag(null);
    setesha(null);
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }


  };

  return (
    <View style={styles.container}>

      <Text style={styles.titleStyle}>
        Salah App
      </Text>
      <CalendarPicker
        startFromMonday={true}

        //allowRangeSelection={true}

        minDate={new Date(2018, 1, 1)}
        maxDate={new Date()}
        previousTitle="Previous"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        width={600}

        textStyle={{
          fontFamily: 'Cochin',
          color: 'black',
          alignSelf: 'center',

        }}

        onDateChange={onDateChange}

      />
     
       

      <View style={styles.pray}>

        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/fajrprayer.png")}
          ></Image>

          <RadioButtonGroup

            selected={fajar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setfajar(value)}
            radioBackground="blue">
            <RadioButtonItem value="fajarof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="fajarnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/zuhar.png")}
          ></Image>

          <RadioButtonGroup

            selected={zohar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setzohar(value)}
            radioBackground="blue">
            <RadioButtonItem value="zoharof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="zoharnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }} >Not Offered</Text>
            } />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/asar.png")}
          ></Image>

          <RadioButtonGroup

            selected={asar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setasar(value)}
            radioBackground="blue">
            <RadioButtonItem value="asarof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="asarnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/magrab.png")}
          ></Image>

          <RadioButtonGroup

            selected={mag}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setmag(value)}
            radioBackground="blue">
            <RadioButtonItem value="magof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="magnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />
          </RadioButtonGroup>

        </View >
        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/esha.png")}
          ></Image>

          <RadioButtonGroup

            selected={esha}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => setesha(value)}
            radioBackground="blue">
            <RadioButtonItem value="eshaof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="eshanotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />
          </RadioButtonGroup>

        </View >

      </View>

      <Text style={styles.titleStyle}>
        Previous Record
      </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 100 }}>


        <Pressable
          onPress={() => navigation.navigate('WEEK DATA')}
          style={{ backgroundColor: 'red', padding: 10, marginTop: 10, marginRight: 20, borderRadius: 20 }}
        >
          <Text style={styles.textsty}>Weekly</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MONTHLY')}
          style={{ backgroundColor: 'red', padding: 10, marginTop: 10, marginRight: 20, borderRadius: 20 }}
        >
          <Text style={styles.textsty}>MONTHLY</Text>
        </Pressable>
      
      </View>
    </View>
  );
}

function Days({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'orange' }}>
      <BarChart
        data={{

          labels: ['FAJAR', 'ZOHAR', 'ASSAR', 'MAGRIB', 'ESHA'],
          datasets: [{ data: [3, 5, 1, 2, 4] }],

        }}
        width={800}
        height={450}
        barColor="plum"
        chartConfig={{
          barPercentage: 1.5,
          barRadius: 5,
          propsForLabels: {
            fontSize: '10',
          },
          backgroundColor: 'white',
          backgroundGradientFrom: 'green',
          backgroundGradientTo: 'purple',
          decimalPlaces: false,
          color: (opacity = 255) => '#ECEFF1',
          style: {
            borderRadius: 20,
          },
        }}
        fromZero={true}
        showValuesOnTopOfBars={true}



      />
    </View>

  );
}

function Month({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' ,backgroundColor:'orange'}}>


      <BarChart
        data={{

          labels: ['JAN 2022', 'FEB 2022', 'MARCH 2022', 'APRIL 2022'],
          datasets: [{ data: [130, 162, 205, 110,] }],

        }}
        width={800}
        height={450}


        barColor="plum"
        chartConfig={{
          barPercentage: 1.5,
          barRadius: 5,
          propsForLabels: {
            fontSize: '10',
          },
          backgroundColor: 'white',
          backgroundGradientFrom: 'green',
          backgroundGradientTo: '#663399',
          decimalPlaces: false,
          color: (opacity = 255) => '#ECEFF1',
          style: {
            borderRadius: 20,
          },
        }}
        fromZero={true}
        showValuesOnTopOfBars={true}
      />
    </View>

  );
}




const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="WEEK DATA" component={Days} />
        <Stack.Screen name="MONTHLY" component={Month} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: 'orange',
    
  },
  custom:{
    marginTop:60,

flexDirection:'row',
alignItems:'center',
alignSelf:'center',
justifyContent:'center'
  },
  textStyle: {
    marginTop: 10,
    alignItems: 'center',
    fontSize: 20,
    marginBottom:20


  },
  checkbox: {
    alignSelf: 'center',
    height: 20,
    marginLeft: 40,
    width: 20
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 40,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  pray: {
    height: 500,
    width: 500,
    alignItems: 'center',

    marginTop: 10
  },
  prop: {

    height: 80,
    width: 500,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: "red",
    
  },
  pic: {
    height: 70,
    marginLeft: 50,
    marginRight: 30,
    width: 70,
  }
  ,
  text_off: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    alignSelf: 'center'
  },
  previous: {
    backgroundColor: '#f8f8ff',
    height: 600,
    width: 500,

  },
  MainContainer: {

    alignItems: 'center',
    justifyContent: 'center'
  },
  textsty: {
    fontSize: 20,
    fontWeight: 'bold'
  }

});