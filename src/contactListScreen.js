// src/ContactListScreen.js
import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, Image, StyleSheet} from 'react-native';
import contacts from './contact';

const ContactListScreen = () => {
  const [search, setSearch] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <View style={styles.contactItem}>
      <Image source={{uri: item.image}} style={styles.profileImage} />
      <View style={styles.contactDetails}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const ItemSeparator = () => {
    return <View style={{marginBottom: 5}} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInput}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/500px-Search_Icon.svg.png',
            }}
            style={styles.searchIconStyle}
          />
          <TextInput
            style={{paddingLeft: 10}}
            placeholder="Search Contacts"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>
      {filteredContacts.length === 0 ? (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No data found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredContacts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparator}
          bounces={false}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchIconStyle: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#a9a9a9',
  },
  searchInput: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  contactItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  contactDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactDescription: {
    color: '#888',
  },
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ContactListScreen;
