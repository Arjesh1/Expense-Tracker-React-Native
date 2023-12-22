import React, { useEffect, useState } from 'react'
import { Button, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setShowTransactionModal } from '../../reduxStore/systemSlice'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { GlobalStyles } from '../../constants/styles'
import { setTransactionData } from '../../reduxStore/transactionSlice'
import TransactionInput from './TransactionInput'
import DropdownComponent from './DropdownComponent'
import TransactionIcon from './TransactionIcon'

const AddEditTransactionModal = ({ headerName, selectedValue }) => {
    const { showTransactionModal } = useSelector(state => state.system)
    const {transactionData} = useSelector(state=>state.transaction)
    const dispatch = useDispatch()
    const handle0nDeleteTransaction = (selectedValue)=>{
      const restItem = transactionData.filter((item) => item.id !== selectedValue.id)
      dispatch(setTransactionData(restItem))
      dispatch(setShowTransactionModal(false))
    }
  const ExpensesIconsCategory = ["Travel", "Grocery", "Shopping", "House", "Food", 'Other']

  const [value, setValue] = useState();
  const[showCategory, setShowCategory] = useState(false)
  useEffect(()=>{
    if(value === 'expenses'){
      setShowCategory(true)
    } else{
      setShowCategory(false)
    }
  }, [value])

  const handleOnTransactionTypeSelected =(type)=>{
    setValue(type)
  }

  const amountChangeHandler = (item) =>{
    console.log(item)
  }

  const iconPressedHandler =(item) =>{
     
  }
  

  

  return (
      <Modal animationType="slide" transparent={true} visible={showTransactionModal} onRequestClose={() => {
        dispatch(setShowTransactionModal(!showTransactionModal));
      }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.headerTextWrapper}>
            <Text style={styles.headerText}>{headerName} Transactions</Text>
            </View>
          <View style={styles.closeModal}>
            <Pressable onPress={() => dispatch(setShowTransactionModal(!showTransactionModal))}>
              <AntDesign name='close' size={30} color='black' />
            </Pressable>
          </View>
          </View>
          <View style={styles.modalBody}>
          <TransactionInput label= 'Amount' textInputConfig={{placeholder: '$100', keyboardType:'numeric', onChangeText: amountChangeHandler}}/>
          <DropdownComponent label='Type' selectedType={(type) => handleOnTransactionTypeSelected(type) }/>

          {showCategory?
            <View style={styles.categoryWrapper}>
              <Text style={styles.labelText}>Category:</Text>
              <View style={styles.iconContainer}>
                {ExpensesIconsCategory.map((item, i) =>
                  <Pressable key={i} onPress={() => iconPressedHandler(item)}>
                    <TransactionIcon type='expenses' category={item} />
                  </Pressable>
                )}
              </View>
            </View>
          :null}

          <TransactionInput label='Name' textInputConfig={{ placeholder: 'Salary / Grocery', keyboardType: 'default' }} />
          {headerName === "Edit"? 
            <Button title="Delete" color={GlobalStyles.colors.error700} accessibilityLabel="Delete" onPress={()=>handle0nDeleteTransaction(selectedValue)}/>
          :null}
          </View>
        <Text>{selectedValue ? new Date(selectedValue.timestamp).toDateString() :null}</Text>
        </View>

      
      </Modal>
      
  )
}

export default AddEditTransactionModal

const styles = StyleSheet.create({
  modalContainer:{
    flex:1,
    backgroundColor: 'white',
    marginTop: '30%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 15,
  },
  modalHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTextWrapper:{
    alignItems: 'flex-end',
    flex: 5
  },
  headerText:{
    fontSize: 22,
    color: GlobalStyles.colors.gray700
  },

  closeModal:{
    alignItems: 'flex-end',
    flex: 2
  },
  modalBody:{
    paddingHorizontal: 10,
    gap: 15,
    marginTop: 8
  },
  labelText: {
    fontSize: 18,
    color: GlobalStyles.colors.gray500,
  },
  iconContainer:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 5,
    borderRadius: 10,
  }
 
})
