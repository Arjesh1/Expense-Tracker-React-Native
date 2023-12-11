import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { GlobalStyles } from '../../constants/styles'
import TransactionDetailBanner from '../common/TransactionDetailBanner'

const HomeTransactions = () => {
  return (
    <View style={styles.HomeTransactionContainer}>
      <View style={styles.homeHeader}>
        <Text style={styles.headertext}>Recent</Text>
      </View>
        <ScrollView style={styles.transactionLists}>
        <TransactionDetailBanner type="income"  description="Salary" amount="100" />
        <TransactionDetailBanner type="expenses" category="Travel" description="Fuel" amount="200" />
        <TransactionDetailBanner type="expenses" category="Food" description="Mc Donald's" amount="25" />
        <TransactionDetailBanner type="expenses" category="Grocery"  description="Grocery" amount="1000" />
        <TransactionDetailBanner type="expenses" category="Shopping" description="Mc Donald's" amount="25" />
        <TransactionDetailBanner type="expenses" category="House" description="Mc Donald's" amount="25" />
        <TransactionDetailBanner type="expenses" category="Other" description="Mc Donald's" amount="25" />
        </ScrollView>
    </View>
  )
}

export default HomeTransactions

const styles = StyleSheet.create({
    HomeTransactionContainer:{
        backgroundColor: GlobalStyles.colors.white,
        flex: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingHorizontal: 10,
    },
  homeHeader:{
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: GlobalStyles.colors.gray500
  },
  headertext:{
    fontSize: 20,
    fontWeight: "700",
  },
  transactionLists:{
    padding: 8,
    gap: 5,
    marginBottom:5
  },


})
