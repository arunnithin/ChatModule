import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7A5EF7',
  },


  //Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: '#7A5EF7',
    // elevation: 5,
    // shadowColor: '#000',
    // shadowOpacity: 0.2,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },

  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    borderWidth: 2,
    // borderColor: '#fff',
  },

  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },

  lastSeen: {
    fontSize: 13,
    color: '#E0DFFF',
    marginTop: 2,
  },

  

  chatList: {
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    justifyContent: 'flex-end',
    // backgroundColor:"#fff",
    // borderTopEndRadius:55,
    // borderTopLeftRadius:55,
    // elevation:5,
    // shadowColor: '#000',
    // shadowOpacity: 0.2,
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 4,
  },
  chatBox:{
    flexGrow: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    justifyContent: 'flex-end',
    backgroundColor:"#fff",
    borderTopEndRadius:65,
    borderTopLeftRadius:65,
    elevation:5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },

  messageRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 14,
    // paddingVertical:20,
    // marginTop:10,
  },

  leftAlign: {
    alignSelf: 'flex-start',
  },

  rightAlign: {
    alignSelf: 'flex-end',
  },
  dotsIcon:{
    left:182,
    // top:5,
  },

  bubble: {
    maxWidth: '100%',
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 14,
    // marginHorizontal:-7,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  studentImageBubble: {
    backgroundColor: '#ece5f4',
    padding: 1,
    borderRadius: 8,
    maxWidth: '75%',
    left:16,
    alignSelf: 'flex-end',
  },
  
  wardenImageBubble: {
    backgroundColor: '#f0f0f0',
    padding: 4,
    borderRadius: 16,
    maxWidth: '70%',
    alignSelf: 'flex-start',
  },
  
  mediaImage: {
    width: 180,
    height: 180,
    borderRadius: 12,
    marginBottom: 4,
  },
  

  wardenBubble: {
    backgroundColor: '#EDEDED',
    right:14,
    borderTopLeftRadius: 0,
  },

  studentBubble: {
    backgroundColor: '#ece5f4',
    left:14,
    borderTopRightRadius: 0,
  },

  messageText: {
    fontSize: 15,
    color: '#333',
  },

  timestamp: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
    textAlign: 'right',
  },

  avatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginHorizontal: 6,
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    padding:20,
    paddingVertical: Platform.OS === 'ios' ? 12 : 8,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  add:{
    fontSize: 22, 
    color: '#7A5EF7',
    bottom:5,
    left:2,
  },

  textInput: {
    flex: 1,
    fontSize: 15,
    color:'#333',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 25,
    marginHorizontal: 10,
  },
  sendButton:{
    width: 40,
    height: 40,
    backgroundColor: '#7A5EF7',
    borderRadius: 25,
  },
  sendIcon: {
    fontSize: 20,
    color: '#fff',
    padding: 1,
    left:9,
    top:4,
  },

  mediaImage: {
    width: 160,
    height: 160,
    // borderRadius: 16,
    marginTop: 8,
  },


  documentBox: {
  padding: 10,
  paddingTop:10,
  backgroundColor: '#f5f5f5',
  borderRadius: 10,
  alignItems: 'center',
},
documentText: {
  color: '#333',
  fontSize: 14,
  fontWeight: 'bold',
},
documentName: {
  marginTop: 5,
  fontSize: 12,
  color: '#666',
},

});

export default styles;
