import React,{Component} from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';

class ServiceDetails extends Component {

    
    state = {  }
    render() {
        const { navigation } = this.props;
        const arrayOfData = navigation.getParam('data');

        return (
          <View style = {styles.container}>
            <FlatList data={arrayOfData} 
            keyExtractor={(item, index) => index.toString()} 
            renderItem={({item,index})=>{
                return (
                    <FlatListItem item={item} index={index}/>
                )
            }}
            >

            </FlatList>
    
          </View>
        );
      }
}

class FlatListItem extends Component{
    render(){
        return (
            <View style={{
                flex:1,
                backgroundColor: this.props.index%2==0 ? '#abcdef' :'#fedcba'
            }}>
                <Text style={styles.FlatListItem}>{this.props.item.Key}</Text>
                <Text style={styles.FlatListItem}>{ this.props.item.name}</Text>

            </View>
        )
    }
}
 
export default ServiceDetails;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   alignItems: "center",
    //   justifyContent: "center"
    },
    FlatListItem:{
        color:'white',
        padding:10,
        fontSize:16,
    },
  });