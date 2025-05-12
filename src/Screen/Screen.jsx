import React, {useState, useRef, useEffect} from 'react';
import {
  View,navigation,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';
import styles from './Screensty';
// import {useNavigation} from '@react-/native';
import ArrowBackIcon from '../assets/ArrowBackIcon';
import KebabIcon from '../assets/KebabMenu';
import MediaIcon from '../assets/MediaIcon';

const WardenChatScreen = () => {
  // const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [menuVisible, setMenuVisible] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Announcement: Assemble at ground floor.',
      time: '3:15 pm',
      sender: 'warden',
      status: 'seen',
    },
    {id: '2', text: 'Time?', time: '3:16 pm', sender: 'student', status: 'seen'},
    {id: '3', text: '5:30 PM', time: '3:17 pm', sender: 'warden', status: 'delivered'},
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() !== '') {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });

      const newMsg = {
        id: Date.now().toString(),
        text: newMessage,
        time: currentTime,
        sender: 'student',
        status: 'sent',
      };

      setMessages(prev => [...prev, newMsg]);
      setNewMessage('');

      setTimeout(() => {
        // Simulate message received from warden
        setMessages(prev => [
          ...prev,
          {
            id: Date.now().toString() + 'w',
            text: 'Noted.',
            time: currentTime,
            sender: 'warden',
            status: 'seen',
          },
        ]);
      }, 1500);
    }
  };

  useEffect(() => {
    flatListRef.current?.scrollToEnd({animated: true});
  }, [messages]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          // onPress={() => navigation.goBack()}
          style={styles.iconButton}>
         <ArrowBackIcon width={24} height={24}  />

        </TouchableOpacity>

        <View style={styles.profileContainer}>
          {/* <Image
            source={require('../../assets/warden.png')}
            style={styles.profileImage}
          /> */}
          <View>
            <Text style={styles.title}>Warden</Text>
            <Text style={styles.lastSeen}>last seen today at 5:45 PM</Text>
          </View>
        </View>

        <TouchableOpacity
  onPress={() => setMenuVisible(!menuVisible)}
  style={styles.iconButton}>
  <KebabIcon width={24} height={24} />
</TouchableOpacity>
{menuVisible && (
  <TouchableOpacity
    style={{
      position: 'absolute',
      top: 60, // adjust based on your layout
      right: 20,
      backgroundColor: '#d4edda', // soft green like in your screenshot
      padding: 10,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    }}
    // onPress={() => {
    //   setMenuVisible(false);
    //   navigation.navigate('Media');
    // }}
    >
    <MediaIcon/>
    <Text style={{color: '#000'}}>Media</Text>
  </TouchableOpacity>
)}

      </View>

      {/* Chat Body */}
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.chatList}
        renderItem={({item}) => (
          <View
            style={[
              styles.messageRow,
              item.sender === 'student'
                ? styles.studentRow
                : styles.wardenRow,
            ]}>
            {item.sender === 'warden' && (
              <Image
                source={require('../assets/profile.png')}
                style={styles.messageAvatar}
              />
            )}

            <View
              style={[
                styles.messageBubble,
                item.sender === 'student'
                  ? styles.studentBubble
                  : styles.wardenBubble,
              ]}>
              <Text style={styles.messageText}>{item.text}</Text>
              <View style={styles.timeStatusContainer}>
                <Text style={styles.timestamp}>{item.time}</Text>
                {item.sender === 'student' && (
                  <Text style={styles.statusText}>✓ {item.status}</Text>
                )}
              </View>
            </View>
          </View>
        )}
      />

      {/* Message Input */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message"
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={styles.sendButtonText}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default WardenChatScreen;
