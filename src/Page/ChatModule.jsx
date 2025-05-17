import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './ChatModulesty';

const chatData = [
  {
    id: '1',
    name: 'Warden',
    message: 'I want to request for leave.',
    time: '9:02 PM',
    unread: true,
    image: require('../assets/profile.png'),
  },
  {
    id: '2',
    name: 'Group',
    message: 'Hello everyone',
    time: '11:24 AM',
    unread: true,
    image: require('../assets/profile.png'),
  },
  {
    id: '3',
    name: 'Mentor',
    message: 'Class will be online tomorrow.',
    time: '3:15 PM',
    unread: false,
    image: require('../assets/profile.png'),
  },
];

const ChatModule = () => {
  const navigation = useNavigation();

  // States for Tabs
  const [activeTab, setActiveTab] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [customTabs, setCustomTabs] = useState([]);

  // States for modals and inputs for Tabs
  const [showTabCreator, setShowTabCreator] = useState(false);
  const [newTabName, setNewTabName] = useState('');
  const [selectedChatIds, setSelectedChatIds] = useState([]);

  // States for modals and inputs for Groups
  const [showGroupCreator, setShowGroupCreator] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedGroupChatIds, setSelectedGroupChatIds] = useState([]);
  const [groupSearchQuery, setGroupSearchQuery] = useState('');

  // Combine default tabs + custom tabs
  const allTabs = [
    'All',
    'Unread',
    'Groups',
    ...customTabs.map((tab) => tab.name),
    'Add More +',
  ];

  // Filter chats for main chat list based on active tab and main search
  const filteredChats = chatData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTab =
      activeTab === 'All' ||
      (activeTab === 'Unread' && item.unread) ||
      (activeTab === 'Groups' && item.name.toLowerCase().includes('group')) ||
      (customTabs.find((tab) => tab.name === activeTab)?.chatIds.includes(item.id));

    return matchesSearch && matchesTab;
  });

  // Filter chats for group modal search
  const filteredGroupChats = chatData.filter((item) =>
    item.name.toLowerCase().includes(groupSearchQuery.toLowerCase())
  );

  // Render each tab button
  const renderTab = (tab) => (
    <TouchableOpacity
      key={tab}
      style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
      onPress={() => {
        if (tab === 'Add More +') {
          setShowTabCreator(true);
        } else {
          setActiveTab(tab);
        }
      }}
    >
      <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
        {tab}
      </Text>
    </TouchableOpacity>
  );

  // Render chat item in list
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.chatItem}
      onPress={() => navigation.navigate('ChatScreen', { chatData: item })}
    >
      <Image source={item.image} style={styles.profileImage} />
      <View style={styles.chatDetails}>
        <View style={styles.chatHeader}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatTime}>{item.time}</Text>
        </View>
        <View style={styles.chatFooter}>
          <Text numberOfLines={1} style={styles.chatMessage}>
            {item.message}
          </Text>
          {item.unread && <View style={styles.unreadDot} />}
        </View>
      </View>
    </TouchableOpacity>
  );

  // Create custom tab
  const createCustomTab = () => {
    if (!newTabName.trim() || selectedChatIds.length === 0) return;

    setCustomTabs([
      ...customTabs,
      {
        name: newTabName.trim(),
        chatIds: selectedChatIds,
      },
    ]);
    setNewTabName('');
    setSelectedChatIds([]);
    setShowTabCreator(false);
  };

  // Create group handler
  const createGroup = () => {
    if (!newGroupName.trim() || selectedGroupChatIds.length === 0) return;

    // Placeholder for saving group (backend or state)
    console.log('Group created:', newGroupName, selectedGroupChatIds);

    setNewGroupName('');
    setSelectedGroupChatIds([]);
    setGroupSearchQuery('');
    setShowGroupCreator(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Messages</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => setShowGroupCreator(true)}>
              <Text style={styles.add}>＋</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#ddd"
            value={searchQuery}
            onChangeText={setSearchQuery}
            style={styles.searchInput}
          />
        </View>

        <View style={styles.tabsContainer}>{allTabs.map(renderTab)}</View>
      </View>

      <View style={styles.chatBox}>
        <FlatList
          data={filteredChats}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.chatList}
        />
      </View>

      {/* --- Custom Tab Creator Modal --- */}
      <Modal visible={showTabCreator} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Create Custom Tab</Text>

            <TextInput
              placeholder="Enter tab name"
              placeholderTextColor="#999"
              style={styles.modalInput}
              value={newTabName}
              onChangeText={setNewTabName}
            />

            <TextInput
              placeholder="Search persons..."
              placeholderTextColor="#999"
              style={styles.modalInput1}
              value={groupSearchQuery}
              onChangeText={setGroupSearchQuery}
            />

            <FlatList
              data={chatData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const isSelected = selectedChatIds.includes(item.id);
                return (
                  <TouchableOpacity
                    style={[styles.modalChatItem, isSelected && styles.modalChatItemSelected]}
                    onPress={() => {
                      setSelectedChatIds((prev) =>
                        prev.includes(item.id)
                          ? prev.filter((id) => id !== item.id)
                          : [...prev, item.id]
                      );
                    }}
                  >
                    <Image source={item.image} style={styles.modalProfileImage} />
                    <Text style={styles.modalChatName}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
              style={styles.modalChatList}
            />

            <TouchableOpacity style={styles.modalCreateButton} onPress={createCustomTab}>
              <Text style={styles.modalCreateText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCancelButton} onPress={() => setShowTabCreator(false)}>
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* --- Group Creator Modal --- */}
      <Modal visible={showGroupCreator} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Create Group</Text>

            <TextInput
              placeholder="Enter group name"
              placeholderTextColor="#999"
              style={styles.modalInput}
              value={newGroupName}
              onChangeText={setNewGroupName}
            />

            <TextInput
              placeholder="Search persons..."
              placeholderTextColor="#999"
              style={styles.modalInput1}
              value={groupSearchQuery}
              onChangeText={setGroupSearchQuery}
            />

            <FlatList
              data={filteredGroupChats}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                const isSelected = selectedGroupChatIds.includes(item.id);
                return (
                  <TouchableOpacity
                    style={[styles.modalChatItem, isSelected && styles.modalChatItemSelected]}
                    onPress={() => {
                      setSelectedGroupChatIds((prev) =>
                        prev.includes(item.id)
                          ? prev.filter((id) => id !== item.id)
                          : [...prev, item.id]
                      );
                    }}
                  >
                    <Image source={item.image} style={styles.modalProfileImage} />
                    <Text style={styles.modalChatName}>{item.name}</Text>
                  </TouchableOpacity>
                );
              }}
              style={styles.modalChatList}
            />

            <TouchableOpacity style={styles.modalCreateButton} onPress={createGroup}>
              <Text style={styles.modalCreateText}>Create</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalCancelButton} onPress={() => setShowGroupCreator(false)}>
              <Text style={styles.modalCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ChatModule;
