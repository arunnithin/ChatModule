import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  Linking,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import DocumentPicker from 'react-native-document-picker';
import Back from '../assets/ArrowBackIcon';
import KebabIcon from '../assets/KebabMenu';
import styles from './ChatScreensty';

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { chatData } = route.params;

  const flatListRef = useRef(null);
  const [newMessage, setNewMessage] = useState('');

  const [messages, setMessages] = useState(() => {
    if (chatData.id === '1') {
      return [
        { id: '1', text: 'Hello, how can I help you?', sender: 'warden', time: '9:00 AM' },
        { id: '2', text: 'I want to request for leave.', sender: 'student', time: '9:02 AM' },
      ];
    } else if (chatData.id === '2') {
      return [
        { id: '1', text: 'Hey group!', sender: 'student', time: '11:00 AM' },
        { id: '2', text: 'Hello everyone!', sender: 'warden', time: '11:24 AM' },
      ];
    } else if (chatData.id === '3') {
      return [
        { id: '1', text: 'Class will be online tomorrow.', sender: 'Mentor', time: '3:15 PM' },
        { id: '2', text: 'Okay', sender: 'student', time: '3:20 PM' },
      ];
    }
    return [];
  });

  const sendMessage = () => {
    if (newMessage.trim()) {
      const newMsg = {
        id: Date.now().toString(),
        text: newMessage,
        sender: 'student',
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setNewMessage('');
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  const handleMediaPress = async () => {
    try {
      const res = await DocumentPicker.pickSingle({
        type: DocumentPicker.types.allFiles,
      });

      const newMsg = {
        id: Date.now().toString(),
        sender: 'student',
        media: { uri: res.uri },
        time: new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }),
      };
      setMessages((prevMessages) => [...prevMessages, newMsg]);
      setTimeout(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
      }, 100);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error('Document Picker Error: ', err);
      }
    }
  };

  const renderItem = ({ item }) => {
    const isStudent = item.sender === 'student';
    const isMedia = !!item.media?.uri;
    const uri = item.media?.uri || '';

    const isImage = uri.match(/\.(jpeg|jpg|png|gif)$/i);
    const isDocument = uri.match(/\.(pdf|docx?|pptx?|xlsx?)$/i);

    const handleFilePress = () => {
      if (isImage) {
        navigation.navigate('ImagePreview', { uri });
      } else if (isDocument) {
        Linking.openURL(uri).catch((err) =>
          console.error('Failed to open document:', err)
        );
      }
    };

    return (
      <View
        style={[
          styles.messageRow,
          isStudent ? styles.rightAlign : styles.leftAlign,
        ]}
      >
        <View
          style={[
            styles.bubble,
            isMedia
              ? (isStudent ? styles.studentImageBubble : styles.wardenImageBubble)
              : (isStudent ? styles.studentBubble : styles.wardenBubble),
          ]}
        >
          {isMedia ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ImagePreview', {
                  uri: item.media.uri,
                  sender: item.sender,
                  time: item.time,
                })
              }
            >
              <Image
                source={{ uri: item.media.uri }}
                style={styles.mediaImage}
                resizeMode="cover"
              />
            </TouchableOpacity>

          ) : (
            <Text style={styles.messageText}>{item.text}</Text>
          )}
          <Text style={styles.timestamp}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{ color: 'white' }}><Back /></Text>
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <Image source={chatData.image} style={styles.profileImage} />
            <View>
              <Text style={styles.title}>{chatData.name}</Text>
              <Text style={styles.lastSeen}>Online</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.dotsIcon}><KebabIcon /></Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Chat List */}
        <View style={styles.chatBox}>
          <FlatList
            ref={flatListRef}
            data={messages}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.chatList}
            onContentSizeChange={() =>
              flatListRef.current?.scrollToEnd({ animated: true })
            }
          />
        </View>

        {/* Input Bar */}
        <View style={styles.inputWrapper}>
          <TouchableOpacity onPress={handleMediaPress}>
            <Text style={styles.add}>＋</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message"
            placeholderTextColor="#999"
            value={newMessage}
            onChangeText={setNewMessage}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Text style={styles.sendIcon}>➤</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
