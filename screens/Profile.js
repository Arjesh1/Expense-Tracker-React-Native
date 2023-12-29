import React from 'react'
import { Text, View, StyleSheet, SafeAreaView, Image } from 'react-native'
import { GlobalStyles } from '../constants/styles'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Progress from 'react-native-progress';
import TransactionHeader from '../components/common/TransactionHeader';


const Profile = () => {
  return (
    <View style={styles.profileWrapper}>
        <View style={styles.profileImgWrapper}>
            <View style={styles.profileImg}>
                  <Image
                      style={styles.profilePicture}
                      source={{
                          uri: 'https://www.pngarts.com/files/5/User-Avatar-PNG-Background-Image.png',
                      }}
                  />
            </View>

        </View>

        <View style={styles.profileDetailsWrapper}>
            <Text style={styles.profileName}>Arjesh Khadka</Text>
        </View>

        <View style={styles.savingsGoalWrapper}>
            <View style={styles.iconWrapper}>
                  <FontAwesome name='dollar' color={GlobalStyles.colors.primary700} size={30}/>
            </View>
            <View style={styles.savingDescriptionWrapper}>
                <Text style={{fontSize: 17, fontWeight:'bold', paddingVertical: 5}}>Saving goals</Text>
                <View>
                      <Progress.Bar progress={0.7} width={null} color={GlobalStyles.colors.primary700} unfilledColor={GlobalStyles.colors.gray200} borderWidth={0} />
                      <View style={styles.savingAmountwrapper}>
                        <Text>$ 50</Text>
                        <Text>$ 500</Text>
                      </View>
                </View>

            </View>
        </View>
        
          <View style={styles.transactionsWrapper}>
            <View style={styles.incomeWrapper}>
                <Text>Income</Text>
            </View>

              <View style={styles.expensesWrapper}>
                  <Text>Income</Text>
              </View>

        </View>
    </View>  

  )
}

export default Profile
const styles = StyleSheet.create({
    profileWrapper:{
        flex: 1,
        paddingTop: 18,
        paddingHorizontal: 10,
        backgroundColor: GlobalStyles.colors.primary700
    },
    profileImgWrapper:{
        marginTop: 15,
        alignItems: 'center'
    },
    profileImg:{
        width: '40%',
        aspectRatio:1,
        backgroundColor:'red',
        borderRadius: 999,
        justifyContent:'center',
        alignItems:'center'

    },
    profilePicture: {
        width: '100%',
        height: '100%',
        borderRadius: 999,
        resizeMode: 'cover'
    },
    profileDetailsWrapper:{
        marginTop: 5,
        alignItems:'center'
    },
    profileName:{
        fontSize: 30,
        fontWeight:'bold',
        color:GlobalStyles.colors.white
    },
    savingsGoalWrapper:{
        backgroundColor:GlobalStyles.colors.white,
        flexDirection: 'row',
        margin: 7,
        padding: 18,
        borderRadius: 15,
        justifyContent: 'space-between',
        alignItems:'center',
    },
    iconWrapper:{
        backgroundColor:GlobalStyles.colors.primary100,
        width: '15%',
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flex: 1

    },
    savingDescriptionWrapper:{
        flex: 5,
        paddingLeft: 10,
    },
    savingAmountwrapper:{
        flexDirection:'row',
        justifyContent: 'space-between'
    },
    transactionsWrapper:{
        flexDirection: 'row',
        margin: 7,
        gap:10,
        alignItems: 'center',
    },
    incomeWrapper:{
        backgroundColor: GlobalStyles.colors.white,
        flex:1,
        padding: 18,
        borderRadius: 15,
    },
    expensesWrapper:{
        backgroundColor: GlobalStyles.colors.white,
        flex: 1,
        padding: 18,
        borderRadius: 15,
    },
})