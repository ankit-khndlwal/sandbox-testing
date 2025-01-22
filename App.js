import React, { startTransition, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView, Modal, Button, StatusBar, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install expo vector icons or use a similar icon library
import Card from './Components/Card';
import items from './items.json';
import Drawer from './Components/Drawer';

const IceCreamApp = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleAddPress = (item) => {
    setSelectedItem(item);
    setIsModalVisible(true);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar />
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <Ionicons name="search" size={20} color="#888" style={styles.searchIcon} />
        <TextInput
          style={styles.searchBar}
          placeholder="Search for ice creams..."
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        />
      </View>

      <View style={styles.cardContainer}>
        {items.itemData.map(card => (
          <Card 
            key={card.id}
            veg={card.veg}
            isBestSeller={card.isBestseller}
            title={card.title}
            price={card.price}
            rating={card.rating}
            reviewCount={card.reviewCount}
            image={card.imageUrl}
            onAdd={() => handleAddPress(card)}
          />
        ))}
      </View>

      <Modal 
        visible={isModalVisible}
        animationType='slide'
        //presentationStyle='formSheet'
        transparent={true}
      >
        <View style={styles.modalOverlay}>
            {selectedItem && (
              <>
                <Drawer 
                  itemImage={selectedItem.imageUrl}
                  veg={selectedItem.veg}
                  title={selectedItem.title}
                  description={selectedItem.description}
                  onClose={()=>{
                    setIsModalVisible(false)
                    setSelectedItem(null);
                  }}
                />
              </>
            )}
        </View>
      </Modal>
    </ScrollView>
  );
};

const { height: screenHeight } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
    marginTop: 48,
    //marginBottom: 50,
    //paddingBottom: 40,
  },
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  bolt: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  cardContainer: {
    paddingBottom: 24,
    //gap: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent background
    justifyContent: 'flex-end', // Align modal to the bottom 
  },
});

export default IceCreamApp;
