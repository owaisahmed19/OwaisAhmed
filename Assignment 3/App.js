import React, { useState,useEffect } from 'react';
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

  const [date, setdate] = useState(new Date());
 
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [fajar, setFajar] = useState("");
  const [zuhar, setzuhar] = useState("");
  const [asar, setasar] = useState("");
  const [maghrib, setmaghrib] = useState("");
  const [isha, setisha] = useState("");

  const onDateChange = (date, type) => {

   
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
    setFajar(null);
    setzuhar(null);
    setasar(null);
    setmaghrib(null);
    setisha(null);
    

  };


  const storeFajar = async (val) => {
    setFajar(val);
    try {
      await AsyncStorage.setItem(text + "f", val);
    } catch (e) {
      // saving error
    }
  };
  const storeZuhar = async (val) => {
    setzuhar(val);
    try {
      await AsyncStorage.setItem(text + "z", val);
    } catch (e) {
      // saving error
    }
  };
  const storeAsar = async (val) => {
    setasar(val);
    try {
      await AsyncStorage.setItem(text + "a", val);
    } catch (e) {
      // saving error
    }
  };
  const storeMaghrib = async (val) => {
    setmaghrib(val);
    try {
      await AsyncStorage.setItem(text + "m", val);
    } catch (e) {
      // saving error
    }
  };
  const storeIsha = async (val) => {
    setisha(val);
    try {
      await AsyncStorage.setItem(text + "i", val);
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const fajar = await AsyncStorage.getItem(text + "f");
      const zuhar = await AsyncStorage.getItem(text + "z");
      const asar = await AsyncStorage.getItem(text + "a");
      const maghrib = await AsyncStorage.getItem(text + "m");
      const isha = await AsyncStorage.getItem(text + "i");

      setFajar(fajar);
      setzuhar(zuhar);
      setasar(asar);
      setmaghrib(maghrib);
      setisha(isha);
      console.log(fajar)
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getData();
  });

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

        value={date}
        textStyle={{
          fontFamily: 'Cochin',
          color: 'black',
          alignSelf: 'center',

        }}

        onDateChange={onDateChange}

      />
      <View style={styles.textStyle}>
        <Text style={styles.textStyle}>
          Selected Start Date :
        </Text>
        <Text style={styles.textStyle}>
          {selectedStartDate ? selectedStartDate.toString() : ''}
        </Text>
       

      </View>
      <View style={styles.pray}>

        <View style={styles.prop} >

          <Image
            style={styles.pic}
            source={require("./assets/fajrprayer.png")}
          ></Image>

          <RadioButtonGroup

            selected={fajar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => storeFajar(value)}
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

            selected={zuhar}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => storeZuhar(value)}
            radioBackground="blue">
            <RadioButtonItem value="zoharof" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="zoharnotof" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
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
            onSelected={(value) => storeAsar(value)}
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

            selected={maghrib}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => storeMaghrib(value)}
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

            selected={isha}
            containerStyle={{ flexDirection: "row" }}
            onSelected={(value) => storeIsha(value)}
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

      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', marginBottom: 100 }}>


        <Pressable
          onPress={() => navigation.navigate('LAST 7 DAYS')}
          style={{ backgroundColor: 'orange', padding: 10, marginTop: 10, marginRight: 20, borderRadius: 20 }}
        >
          <Text style={styles.textsty}>LAST 7 DAYS</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MONTHLY')}
          style={{ backgroundColor: 'orange', padding: 10, marginTop: 10, marginRight: 20, borderRadius: 20 }}
        >
          <Text style={styles.textsty}>MONTHLY</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('YEARLY')}
          style={{ backgroundColor: 'orange', padding: 10, marginTop: 10, marginRight: 20, borderRadius: 20 }}
        >
          <Text style={styles.textsty}>YEARLY</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('DATE RANGE')}
          style={{ backgroundColor: 'orange', padding: 10, marginTop: 10, marginRight: 20, borderRadius: 20 }}
        >
          <Text style={styles.textsty}>DATE RANGE</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Days({ navigation }) {
  const [dataFromDb, setdataFromDb] = useState(TempData);
  const [TotalNimazs, setTotalNimazs] = useState(0);
  const [OfferedNimazs, setOfferedNimazs] = useState(0);
  const [DataRangeOptionShow, setDataRangeOptionShow] = useState(true);
  const getCurrentDate = (date) => {
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + "-0" + month + "-" + date; //format: dd-mm-yyyy;
  };
  const fetchDataofWeek = async (setData) => {
    const week = [];
    for (var i = 6; i >= 0; i--) {
      var date = new Date();
      var temp = null;
      temp = getCurrentDate(date.getDate() - i);
      week.push(temp);
    }
    var fajarcount = 0;
    var zuharcount = 0;
    var asrcount = 0;
    var maghribcount = 0;
    var eshacount = 0;
    for (var i = 0; i < 7; i++) {
      try {
        const jsonValue = await AsyncStorage.getItem(week[i]);
        if (jsonValue != null) {
          const parseValue = JSON.parse(jsonValue);
          if (parseValue[0]["Fajar"]) {
            fajarcount++;
          }
          if (parseValue[0]["Zuhar"]) {
            zuharcount++;
          }
          if (parseValue[0]["Asr"]) {
            asrcount++;
          }
          if (parseValue[0]["Maghrib"]) {
            maghribcount++;
          }
          if (parseValue[0]["Esha"]) {
            eshacount++;
          }
        }
        // console.log("You Fetch the data with date ",week[i]," with data ",jsonValue);
      } catch (e) {
        console.log(e);
      }
    }
    setOfferedNimazs(
      fajarcount + zuharcount + asrcount + maghribcount + eshacount
    );
    const data = [fajarcount, zuharcount, asrcount, maghribcount, eshacount];
    setdataFromDb(data);
    // console.log("Total: ",fajarcount," - ",zuharcount," - ",asrcount," - ",maghribcount," - ",eshacount);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      
      <BarChart
        data={{

          labels: ['FAJAR', 'ZOHAR', 'ASSAR', 'MAGRIB', 'ESHA'],
          datasets: [{ data: [6, 3, 7, 4, 7] }],

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
          backgroundGradientFrom: 'blue',
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


  const fetchDataofMonth = async (setData) => {
    const week = [];
    for (var i = 29; i >= 0; i--) {
      var date = new Date();
      var temp = null;
      temp = getCurrentDate(date.getDate() - i);
      week.push(temp);
    }
    var fajarcount = 0;
    var zuharcount = 0;
    var asrcount = 0;
    var maghribcount = 0;
    var eshacount = 0;
    for (var i = 0; i < 30; i++) {
      try {
        const jsonValue = await AsyncStorage.getItem(week[i]);
        if (jsonValue != null) {
          const parseValue = JSON.parse(jsonValue);
          if (parseValue[0]["Fajar"]) {
            fajarcount++;
          }
          if (parseValue[0]["Zuhar"]) {
            zuharcount++;
          }
          if (parseValue[0]["Asr"]) {
            asrcount++;
          }
          if (parseValue[0]["Maghrib"]) {
            maghribcount++;
          }
          if (parseValue[0]["Esha"]) {
            eshacount++;
          }
        }
        // console.log("You Fetch the data with date ",week[i]," with data ",jsonValue);
      } catch (e) {
        console.log(e);
      }
    }
    setOfferedNimazs(
      fajarcount + zuharcount + asrcount + maghribcount + eshacount
    );
    const data = [fajarcount, zuharcount, asrcount, maghribcount, eshacount];
    setdataFromDb(data);
    // console.log("Total: ",fajarcount," - ",zuharcount," - ",asrcount," - ",maghribcount," - ",eshacount);
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>


      <BarChart
        data={{

          labels: ['JAN 2022', 'FEB 2022', 'MARCH 2022', 'APRIL 2022'],
          datasets: [{ data: [160, 132, 205, 180,] }],

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
          backgroundGradientFrom: '#708090',
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

function Date_range() {
  const [selectedStartDate1, setSelectedStartDate1] = useState(null);
  const [selectedEndDate1, setSelectedEndDate1] = useState(null);
  const [selectedStartDate2, setSelectedStartDate2] = useState(null);
  const [selectedEndDate2, setSelectedEndDate2] = useState(null);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible_chart, setVisible_chart] = useState(false);
  const onDateChange1 = (date, type) => {
    setVisible(false)
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate1(date);
    } else {
      setSelectedEndDate1(null);
      setSelectedStartDate1(date);
    }
  
  };
  const onDateChange2 = (date, type) => {
    setVisible2(false)
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate2(date);
    } else {
      setSelectedEndDate2(null);
      setSelectedStartDate2(date);
    }
  
  };
 
  return (
    <View>
    <View style={styles.custom}>
    <View style={{marginRight:300}}>
      <TouchableOpacity style={{backgroundColor:'orange',height:50, padding: 10,borderRadius:20,alignSelf:'center'}} onPress={(val) => setVisible(val)}> <Text style={{justifyContent:'center', fontSize: 20,fontWeight:'bold'}} >Pick Start Date</Text></TouchableOpacity>
       {visible && (<CalendarPicker
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

        onDateChange={onDateChange1}

      />)}
      
      <View style={styles.textStyle}>
        <Text style={styles.textStyle}>
          Selected Start Date :
        </Text>
        <Text style={styles.textStyle}>
          {selectedStartDate1 ? selectedStartDate1.toString() : ''}
        </Text>
      </View>
    </View>  
    <View >
    <TouchableOpacity style={{backgroundColor:'orange',height:50, padding: 10,borderRadius:20,alignSelf:'center'}} onPress={(val) => setVisible2(val)}> <Text style={{justifyContent:'center', fontSize: 20,fontWeight:'bold'}} >Pick End Date</Text></TouchableOpacity>
       {visible2 && (<CalendarPicker
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

        onDateChange={onDateChange2}

      />)}
      
      <View style={styles.textStyle}>
        <Text style={styles.textStyle}>
          Selected End Date :
        </Text>
        <Text style={styles.textStyle}>
          {selectedStartDate2 ? selectedStartDate2.toString() : ''}
        </Text>
      </View>
    </View>
    </View>
    <View style={{alignItems:'center'}}>
    <TouchableOpacity style={{backgroundColor:'orange',height:50, padding: 10,borderRadius:20,alignSelf:'center',marginTop:60,marginBottom:60}} onPress={(val) => setVisible_chart(val)}> <Text style={{justifyContent:'center', fontSize: 20,fontWeight:'bold'}} >Show Chart</Text></TouchableOpacity>
    {visible_chart && (
      <BarChart
        data={{

          labels: ['FAJAR', 'ZOHAR', 'ASSAR', 'MAGRIB', 'ESHA'],
          datasets: [{ data: [160, 132, 189, 180,204] }],

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
          backgroundGradientFrom: '#36454F',
          backgroundGradientTo: 'red',
          decimalPlaces: false,
          color: (opacity = 255) => '#ECEFF1',
          style: {
            borderRadius: 20,
          },
        }}
        fromZero={true}
        showValuesOnTopOfBars={true}
      />

    )}
    </View>
    </View>
  );
}
function Year() {
 
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <BarChart
      data={{

        labels: ['2019', '2020', '2021', '2022'],
        datasets: [{ data: [1200, 1544, 1800, 1300] }],

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
        backgroundGradientFrom: '#008080',
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

const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="LAST 7 DAYS" component={Days} />
        <Stack.Screen name="MONTHLY" component={Month} />
        <Stack.Screen name="YEARLY" component={Year} />
        <Stack.Screen name="DATE RANGE" component={Date_range} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
    backgroundColor: '#ffffff',
    
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
    fontSize: 30,
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'blue'
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
    backgroundColor: "#f8f8ff",
    borderRadius: 20
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