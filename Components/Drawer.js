import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, ScrollView, Dimensions, Button } from 'react-native';

const Drawer = (props) => {

    return(
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <View style={styles.modalContent}>
                <Image 
                    source={{uri: props.itemImage}} 
                    style={styles.itemImage} 
                    resizeMode='cover'/>
                <View style={styles.contentContainer}>
                    <View style={styles.titleContainer}>
                        <Image 
                        source={props.veg? require('../assets/veg.png'): require('../assets/Non_veg.png')} 
                        style={styles.vegImage}/>
                        <Text style={styles.modalTitle}>{props.title}</Text>
                    </View>
                    <Text style={styles.description}>{props.description}</Text>
                    <Button 
                        title='Close' 
                        onPress={props.onClose}/>
                </View>
            </View>
        </ScrollView>
    );
};

const { height: screenHeight } = Dimensions.get('window');

const styles= StyleSheet.create({
    scrollViewContent: {
        flex: 1,
        justifyContent: 'flex-end', // Align modal to the bottom
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '100%',
        maxHeight: screenHeight*0.7,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingBottom:24,
        alignItems: 'center',
        justifyContent: 'space-between',
      },
    itemImage: {
        width: '100%',
        height: 300,
        borderRadius: 32,
        //borderTopLeftRadius: 32,
        //borderTopRightRadius:32,
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
        padding: 4,
      },
    contentContainer:{
        //margin: 5,
        //padding: 20,
        backgroundColor: '#f5f5f5',
      },
    titleContainer: {
        //paddingLeft: 20,
        marginLeft:24,
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center',
        backgroundColor: '#e1e1e1',
    },
    vegImage: {
        width: 16,
        height: 16,
        marginBottom: 12,
        //aspectRatio: 1,
      },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
    modalPrice: {
        fontSize: 16,
        marginBottom: 20,
      },
      description: {
        paddingLeft: 24,
      },
      
});

export default Drawer;