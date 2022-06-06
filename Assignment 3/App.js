import * as React from "react";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image, Dimensions,
  Touchable, Pressable,TouchableOpacity,
  navigation,ImageBackground,
  Button,
  Text,
  View
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";
import { createStackNavigator } from '@react-navigation/stack';
import { BarChart } from "react-native-chart-kit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from 'moment';


function Home({ navigation }) {


  

  const [selectedDate, setSelectedDate] = useState();
  const [text, settext] = useState(moment(selectedDate).format("YYYY/MM/DD"));
  const [fajar, setfajar] = useState("");
  const [zohar, setzohar] = useState("");
  const [asar, setasar] = useState("");
  const [mag, setmag] = useState("");
  const [esha, setesha] = useState("");

  
  const onDateChange = (date) => {

      setSelectedDate(date);
      settext(moment(date).format("YYYY/MM/DD"))
    
  };

  const storeFajar = async (val) => {
    setfajar(val);
    try {
      await AsyncStorage.setItem(text + "f", val);
    } catch (e) {
      // saving error
    }
  };
  const storeZuhar = async (val) => {
    setzohar(val);
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
    setmag(val);
    try {
      await AsyncStorage.setItem(text + "m", val);
    } catch (e) {
      // saving error
    }
  };
  const storeIsha = async (val) => {
   setesha(val);
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

      setfajar(fajar);
      setzohar(zuhar);
      setasar(asar);
      setmag(maghrib);
      setesha(isha);
    } catch (e) {
      // error reading value
    }
  };
  useEffect(() => {
    getData();
  });


  return (
    <View style={styles.container}>
  <ImageBackground 
            style={styles.container} 
            source={require("./assets/praye.jfif")}
          >
   

      <Text style={styles.titleStyle}>
        Salah Nimaz App
      </Text>
      <CalendarPicker
        startFromMonday={true}

        //allowRangeSelection={true}

        minDate={new Date(2018, 1, 1)}
        maxDate={new Date()}
        previousTitle="<<"
        nextTitle=">>"
        
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        width={600}

        textStyle={{
          fontFamily: 'Cochin',
          color: 'white',
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
            onSelected={(val) => storeFajar(val)}
            radioBackground="white">
            <RadioButtonItem value="offered" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="notOffered" label={
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
            onSelected={(val) => storeZuhar(val)}
            radioBackground="white">
            <RadioButtonItem value="offered" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="notOffered" label={
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
            onSelected={(val) => storeAsar(val)}
            radioBackground="white">
            <RadioButtonItem value="offered" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="notOffered" label={
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
            onSelected={(val) => storeMaghrib(val)}
            radioBackground="white">
            <RadioButtonItem value="offered" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="notOffered" label={
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
            onSelected={(val) => storeIsha(val)}
            radioBackground="white">
            <RadioButtonItem value="offered" label={<Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Offered</Text>
            } />
            <RadioButtonItem value="notOffered" label={
              <Text style={{ color: "black", fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginRight: 15 }}>Not Offered</Text>
            } />
          </RadioButtonGroup>

        </View >

      </View>

      <Text style={styles.titleStyle}>
        Previous Record
      </Text>

      <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', marginBottom: 100 }}>
        <Pressable
          onPress={() => navigation.navigate('WEEKLY')}
          style={styles.buttons}
        >
          <Text style={styles.textsty}>WEEKLY</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('MONTHLY')}
          style={styles.buttons}
        >
          <Text style={styles.textsty}>MONTHLY</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate('CUSTOM')}
          style={styles.buttons}
        >
          <Text style={styles.textsty}>CUSTOM</Text>
        </Pressable>
      </View>
      </ImageBackground>
    </View>
  );
}

function Weekly({ navigation }) {
  let defaultValues = [1, 1, 1, 1, 1];
  const [prayerRecord, setprayerRecord] = useState(defaultValues);
  const [curDate, setcurDate] = useState(new Date());
  const [weeklyCount, setweeklyCount] = useState(0);

  let fajarCount = 0;
  let zuharCount = 0;
  let asarCount = 0;
  let maghribCount = 0;
  let ishaCount = 0;

  const getWeeklyRecord = async () => {
    try {
      //day 1
      let d;
      let m;
      if (moment(curDate).format("DD") - 1 === 0) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = (moment(curDate).format("DD")) - 1;
        m = moment(curDate).format("MM");
      }
      console.log(curDate.getFullYear() + "/" + m + "/" + d + "i")
      const fajar1 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar1 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar1 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib1 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha1 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar1 === "offered") {
        fajarCount++;
      }
      if (zuhar1 === "offered") {
        zuharCount++;
      }
      if (asar1 === "offered") {
        asarCount++;
      }
      if (maghrib1 === "offered") {
        maghribCount++;
      }
      if (isha1 === "offered") {
        ishaCount++;
      }
      //day 2
      if (d - 1 === 0 ) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = d - 1;
        m = m;
      }
      const fajar2 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar2 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar2 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib2 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha2 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar2 === "offered") {
        fajarCount++;
      }
      if (zuhar2 === "offered") {
        zuharCount++;
      }
      if (asar2 === "offered") {
        asarCount++;
      }
      if (maghrib2 === "offered") {
        maghribCount++;
      }
      if (isha2 === "offered") {
        ishaCount++;
      }
      //day 3
      if (d - 1 === 0) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = d - 1;
        m = m;
      }
      const fajar3 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar3 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar3 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib3 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha3 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar3 === "offered") {
        fajarCount++;
      }
      if (zuhar3 === "offered") {
        zuharCount++;
      }
      if (asar3 === "offered") {
        asarCount++;
      }
      if (maghrib3 === "offered") {
        maghribCount++;
      }
      if (isha3 === "offered") {
        ishaCount++;
      }
      //day 4
      if (d - 1 === 0) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = d - 1;
        m = m;
      }
      const fajar4 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar4 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar4 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib4 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha4 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar4 === "offered") {
        fajarCount++;
      }
      if (zuhar4 === "offered") {
        zuharCount++;
      }
      if (asar4 === "offered") {
        asarCount++;
      }
      if (maghrib4 === "offered") {
        maghribCount++;
      }
      if (isha4 === "offered") {
        ishaCount++;
      }
      //day 5
      if (d - 1 === 0) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = d - 1;
        m = m;
      }
      const fajar5 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar5 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar5 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib5 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha5 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar5 === "offered") {
        fajarCount++;
      }
      if (zuhar5 === "offered") {
        zuharCount++;
      }
      if (asar5 === "offered") {
        asarCount++;
      }
      if (maghrib5 === "offered") {
        maghribCount++;
      }
      if (isha5 === "offered") {
        ishaCount++;
      }
      //day 6
      if (d - 1 === 0) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = d - 1;
        m = m;
      }
      const fajar6 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar6 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar6 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib6 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha6 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar6 === "offered") {
        fajarCount++;
      }
      if (zuhar6 === "offered") {
        zuharCount++;
      }
      if (asar6 === "offered") {
        asarCount++;
      }
      if (maghrib6 === "offered") {
        maghribCount++;
      }
      if (isha6 === "offered") {
        ishaCount++;
      }
      console.log(curDate.getFullYear() + "/" + m + "/" + d + "i")
      console.log(isha6)
      //day 7
      if (d - 1 === 0) {
        d = 31;
        m = moment(curDate).format("MM")-1;
      } else {
        d = d - 1;
        m = m;
      }
      const fajar7 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "f"
      );
      const zuhar7 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "z"
      );
      const asar7 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "a"
      );
      const maghrib7 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "m"
      );
      const isha7 = await AsyncStorage.getItem(
        curDate.getFullYear() + "/" + m + "/" + d + "i"
      );
      if (fajar7 === "offered") {
        fajarCount++;
      }
      if (zuhar7 === "offered") {
        zuharCount++;
      }
      if (asar7 === "offered") {
        asarCount++;
      }
      if (maghrib7 === "offered") {
        maghribCount++;
      }
      if (isha7 === "offered") {
        ishaCount++;
      }
    } catch (e) {
      console.log(e);
    }
    setweeklyCount(
      fajarCount + zuharCount + asarCount + maghribCount + ishaCount
    );
    if (weeklyCount !== 0) {
      setprayerRecord([
        fajarCount,
        zuharCount,
        asarCount,
        maghribCount,
        ishaCount,
      ]);
    }
    console.log(prayerRecord);
  };

  useEffect(() => {
    getWeeklyRecord();
  },[]);



  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BarChart
        data={{

          labels: ['FAJAR', 'ZOHAR', 'ASSAR', 'MAGRIB', 'ESHA'],
          datasets: [{ data:  prayerRecord}],

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
      <TouchableOpacity style={styles.button1} onPress={(val) => setVisible(val)}> <Text style={{justifyContent:'center', fontSize: 20,fontWeight:'bold'}} >Pick Start Date</Text></TouchableOpacity>
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
          Selected Date :
        </Text>
        <Text style={styles.textStyle}>
          {selectedStartDate1 ? selectedStartDate1.toString() : ''}
        </Text>
        
      </View>
    </View>  
    <View >
    <TouchableOpacity style={styles.button1} onPress={(val) => setVisible2(val)}> <Text style={{justifyContent:'center', fontSize: 20,fontWeight:'bold'}} >Pick End Date</Text></TouchableOpacity>
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
    <TouchableOpacity style={styles.button1} onPress={(val) => setVisible_chart(val)}> <Text style={{justifyContent:'center', fontSize: 20,fontWeight:'bold'}} >Show Chart</Text></TouchableOpacity>
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


const Stack = createStackNavigator();


const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HOME" component={Home} />
        <Stack.Screen name="WEEKLY" component={Weekly} />
        <Stack.Screen name="MONTHLY" component={Month} />
        <Stack.Screen name="CUSTOM" component={Date_range} />
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
    marginBottom: 10,
    marginTop: 10,
    fontWeight: 'bold',
    color: '#00f0f0'
  },
  buttons:{
    backgroundColor: '#4682b4', 
    padding: 10,
    marginTop: 15,
    marginRight: 20,
    borderRadius: 20 ,
    width:400,
  
    height:50,
    textAlign:"center"
  },
  pray: {
   
    height: 460,
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
    backgroundColor: "#00b3b3",
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
  ,
  button1:{
    backgroundColor: '#4682b4', 
    padding: 10,
    marginTop: 15,
    marginRight: 20,
    borderRadius: 20 ,
    width:200,
  
    height:50,
    textAlign:"center"
  }

});
