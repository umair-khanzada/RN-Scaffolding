import { navigateTo } from '../src/util';

/*
 support all listItem props,
 check by clicking on below link.
 https://react-native-training.github.io/react-native-elements/docs/listitem.html
*/

export default [
  {
    "key": "1",
    "title": "Profile",
    "leftIcon": {"name": "edit", "type": "antdesign"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  },
  {
    "key": "2",
    "title": "Notifications",
    "leftIcon": {"name": "notifications-active", "type": "material"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  },
  {
    "key": "3",
    "title": "Progress",
    "leftIcon": {"name": "progress-two", "type": "entypo"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  },
  {
    "key": "4",
    "title": "Favorite",
    "leftIcon": {"name": "favorite", "type": "material"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  },
  {
    "key": "5",
    "title": "Feedback",
    "leftIcon": {"name": "feedback", "type": "material"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  },
  {
    "key": "6",
    "title": "About Us",
    "leftIcon": {"name": "account-group", "type": "material-community"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  },
  {
    "key": "7",
    "title": "Change Password",
    "leftIcon": {"name": "key-change", "type": "material-community"},
    "onPress": (navigation) => navigateTo(navigation, "ChangePassword")
  },
  {
    "key": "8",
    "title": "Logout",
    "leftIcon": {"name": "logout", "type": "antdesign"},
    "onPress": (navigation) => navigateTo(navigation, "Login")
  }
]