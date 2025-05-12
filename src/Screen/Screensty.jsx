import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#e5ddd5'},

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#075e54',
    padding: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginLeft: 10,
  },
  profileImage: {width: 40, height: 40, borderRadius: 20, marginRight: 10},
  title: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
  lastSeen: {fontSize: 12, color: '#d9fdd3'},
  iconButton: {padding: 5,color:'#d9fdd3'},

  chatList: {
    padding: 10,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  messageRow: {
    flexDirection: 'row',
    marginVertical: 5,
    alignItems: 'flex-end',
  },
  wardenRow: {
    justifyContent: 'flex-start',
  },
  studentRow: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
  },

  messageAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },

  messageBubble: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 10,
  },
  wardenBubble: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 0,
  },
  studentBubble: {
    backgroundColor: '#dcf8c6',
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  timeStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  timestamp: {
    fontSize: 10,
    color: 'gray',
    marginRight: 5,
  },
  statusText: {
    fontSize: 10,
    color: 'gray',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#075e54',
    padding: 10,
    borderRadius: 25,
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
