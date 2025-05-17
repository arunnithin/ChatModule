// ChatModulesty.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A5EF7',
  },

  headerContainer: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 18,
    backgroundColor: '#7A5EF7',
  },

  chatBox:{
    flexGrow: 1,
    paddingHorizontal: 8,
    paddingTop: 12,
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderTopEndRadius:60,
    borderTopLeftRadius:60,
    elevation:5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#rgba(255,255,255,0.2)', // semi-transparent white
    borderRadius: 20,
    width:350,
    right:20,
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  
  searchInput: {
    flex: 1,
    color: '#fff',
    fontSize: 14,
    fontFamily: 'System', // or your custom font
    paddingVertical: 6,
  },
  

  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    fontSize: 28,
    // bottom:40,
    // left:105,
    color: '#fff',
    fontWeight: 'bold',
    bottom:20,
  },

  GroupIcon:{
    color:"#fff",
    left:20,
  },

  dotsIcon:{
    // left:182,
    right:10,
    bottom:5,
  },

  searchIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },

  tabsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    right:8,
    gap:5,
    justifyContent: 'space-around',
    // backgroundColor:'#fff'
  },

  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },

  activeTabButton: {
    backgroundColor: '#fff',
  },

  tabText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },

  activeTabText: {
    color: '#4a00e0',
  },

  chatList: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },

  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#7A5EF7',
    borderBottomWidth: 0.2,
  },

  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  chatDetails: {
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },

  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },

  chatName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  chatTime: {
    fontSize: 12,
    color: '#888',
  },

  chatFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  chatMessage: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },

  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7A5EF7',
    marginLeft: 8,
  },

  //Modal
  modalOverlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 20,
  height:"fix-the-content",
},
modalBox: {
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 15,
  width: '100%',
  maxHeight: '80%',
},
modalTitle: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 10,
  color:'#7A5EF7',
},
modalInput: {
  borderWidth: 1,
  borderColor: '#7A5EF7',
  borderRadius: 8,
  color:'#333',
  padding: 8,
  marginBottom: 10,
},
modalChatItem: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 8,
  borderBottomWidth: 0.2,
  borderColor: '#7A5EF7',
},
modalChatItemSelected: {
  backgroundColor: '#e0e0ff',
},
modalProfileImage: {
  width: 36,
  height: 36,
  borderRadius: 18,
  marginRight: 10,
},
modalChatName: {
  fontSize: 16,
  color:'#333',
  fontWeight:'500'
},
modalCreateButton: {
  backgroundColor: '#7A5EF7',
  borderRadius: 8,
  padding: 10,
  alignItems: 'center',
  marginTop: 10,
},
modalCreateText: {
  color: '#fff',
  fontWeight: 'bold',
},
modalCancelButton: {
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: 10,
  borderColor:'#7A5EF7',
  height:40,
  borderWidth:1,
  alignItems: 'center',
  marginTop: 10,
},
modalCancelText: {
  color: '#7A5EF7',
  fontWeight:'bold',
  textAlign: 'center',
},
addGroupIcon: {
  marginLeft: 10,
  backgroundColor: '#fff',
  width: 30,
  height: 30,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
},

plusIcon: {
  fontSize: 20,
  color: '#7A5EF7',
  fontWeight: 'bold',
},

 add:{
    fontSize: 28, 
    color: '#fff',
    bottom:10,
    // left:,
  },

  
  searchInput1: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 25,
    fontSize: 16,
    color: '#333',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 10,
  },

  // Optional container if you want the search bar to have some margin/padding
  searchContainer1: {
    paddingHorizontal: 15,
    marginTop: 10,
  },

  // For modal search input (same styling)
  modalInput1: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },

});
