import {StyleSheet } from 'react-native';

export default StyleSheet.create({

  okno: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E1D5C9',
  },

  bottomModal: {
      height: 650,
      width: "100%",
      position: 'absolute',
      bottom: -10,
      borderRadius: 10,
      borderColor: "#000",
      borderWidth: 2,
      backgroundColor: '#E1D5C9',
      alignItems: "center",
    },
  inputModal: {
      height: 350,
      width: 320,
      marginTop: 20,
      padding: 10,
      backgroundColor: '#eeeeee',
      borderRadius: 10,
      textAlignVertical: 'top',
  },

  modalTileContainer: {
    backgroundColor: "#C49450",
    width: 90,
    height: 90,
    borderRadius: 10,
    paddingVertical: 10,
    right: 20,
    alignItems: "center",
  },

  modalTileContainerKamera: {
    backgroundColor: "#C49450",
    width: 90,
    height: 90,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    position: "absolute",
    right: 10,
  },

  backArrowKamera: {
    backgroundColor: "#C49450",
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
  },


  modalButtonContainer: {
    backgroundColor: "#C49450",
    width: 120,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 6,
    left: 30,
  },
  modalButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },


  head: {
    width: "100%",
    height: 60,
    backgroundColor: "#C49450",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },

  listItem: {
    height: 80,
    flexDirection: 'row',
  },

   listItemButton: {
    flexDirection: 'row',
  },

  restaurantLogo: {
      width: 60,
      height: 60,
      resizeMode: 'stretch',
      borderRadius: 10,
      alignSelf: "center",
      marginRight: 10,
  },

  restaurantName: {
    marginTop: 5,
    fontSize: 18,
    color: "#202224",
    fontWeight: "bold",

  },

  restaurantOcena: {
      width: 60,
      height: 35,
      resizeMode: 'stretch',
      borderRadius: 10,
      alignSelf: "center",
      marginLeft: -30,
  },


  logo: {
    width: 300,
    height: 100,
    resizeMode: 'stretch',
    marginTop: 100,
  },

  logoMenuG: {
    width: 300,
    height: 100,
    resizeMode: 'stretch',
    marginTop: 80,
  },

  logoDrawer: {
    width: "80%",
    height: 100,
    resizeMode: 'stretch',
    marginTop: 10,
    alignSelf: "center",
  },

  optionDrawer: {
    marginTop: 5,
    width: "100%",
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#fefefe',
  },

  appButtonContainer: {
    backgroundColor: "#C49450",
    width: '50%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 18,
    color: "#202224",
    fontWeight: "bold",
    alignSelf: "center",
  },

  appMenuG: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

   appSettingsTop: {
    marginTop: 80,
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: "center",
  },

  avatar: {
    width: 80,
    height: 80,
    resizeMode: 'stretch',
    marginRight: 10,
    borderRadius: 10,
},

    appNicknameText: {
    marginTop: 20,
    fontSize: 18,
    color: "#202224",
    fontWeight: "bold",
  },


  appTileContainerL: {
    backgroundColor: "#202224",
    width: 120,
    height: 120,
    borderRadius: 10,
    paddingVertical: 10,
    right: 10,
  },

  appTileContainerR: {
    backgroundColor: "#202224",
    width: 120,
    height: 120,
    borderRadius: 10,
    paddingVertical: 10,
    left: 10,
  },
  appTileText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },

  appInputTextField: {
    backgroundColor: "#202224",
    width: '70%',
    color: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 20,
  },

  wyszukajInputTextField: {
    backgroundColor: "#fefefe",
    width: '70%',
    color: '#202224',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginLeft: 80,
  },

  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
  },
    fixedRatio:{
    flex: 1,
    aspectRatio: 1
  },

  opis: { 
    width: 300, 
    fontSize: 16,
  },

  opinia: { 
    width: 300, 
    fontSize: 16,
    paddingLeft: 10,
  },

  opiniaObraz: {
    width: 60,
    height: 60,
    resizeMode: 'stretch',
    borderRadius: 10,
    marginLeft: 10,
  },

  
});