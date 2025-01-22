import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
//import itemData from '../items.json';

const Card=(props) => {
    return(
        <View style={styles.card}>
            <View style={styles.headerRow}>
                <Image 
                    source={props.veg? require('../assets/veg.png'): require('../assets/Non_veg.png')}
                    style={styles.vegIcon} 
                />
                <Text 
                style={styles.bestseller}>
                    {props.isBestSeller? 'Bestseller': ' '}
                </Text>
            </View>
        <View style={styles.contentRow}>
            <View style={styles.contentLeft}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.price}>{props.price}</Text>
                <View style={styles.ratingRow}>
                    <Text style={styles.rating}>{props.rating}</Text>
                    <Text style={styles.reviewCount}>({props.reviewCount})</Text>
                </View>
                <TouchableOpacity style={styles.saveButton}>
                    <Text style={styles.saveText}>Save to eatlist</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.contentRight}>
                <Image
                    source={{uri: props.image}}
                    style={styles.image}
                ></Image>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={props.onAdd}
                >
                    <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
                <Text 
                title='Customisable'
                style={styles.customisableText}
                >Customisable</Text>
            </View>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        // alignItems: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 16,
        overflow: 'hidden',
    },
    headerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    vegIcon: {
        width: 16,
        //aspectRatio: 1,
        height: 16,
        marginRight: 8,
        resizeMode: 'contain',
    },
    bestseller: {
        fontSize: 14,
        fontWeight: '600',
        color: '#ff5722',
        marginRight: 4,
      },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        //width: '100%',
        gap: 12,
        justifyContent: 'space-between',
    },
    contentLeft: {
        flex: 3,
        //width: '50%',
        //marginRight: 16,
        verticalAlign: 'justify'
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'left',
        marginVertical: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
        marginBottom: 8,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    rating: {
        fontSize: 14,
        color: '#4caf50',
        fontWeight: 'bold',
    },
    reviewCount: {
        fontSize: 14,
        color: '#555',
        marginLeft: 4,
    },
    saveButton: {
        backgroundColor: '#fce4ec',
        borderRadius: 8,
        paddingVertical: 6,
        paddingHorizontal: 16,
        marginBottom: 16,
        width: '100%',
    },
    saveText: {
        fontSize: 14,
        color: '#ff4081',
    },
    contentRight: {
        flex: 2,
        alignItems: 'center',
        //width: '50%',
        //justifyContent: 'space-between',
        //flexDirection: 'column',
    }, 
    image: {
        width: '100%',
        //height: '170',
        aspectRatio: 1,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    addButton: {
        position: 'absolute',
        bottom: -20,
        shadowColor: '#000', // Optional: Add shadow for a floating effect
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
        backgroundColor: '#4caf50',
        borderRadius: 12,
        paddingVertical: 10,
        paddingHorizontal: 24,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: '80%',
      },
      addText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
      },
      customisableText: {
        position: 'absolute',
        bottom: -45,
        color: '#aaa',
        fontWeight: 500,
        fontSize: 13,
      },
});

export default Card;