import {atom} from "recoil";
import { User } from "../../interfaces/users/user";




let usersState = atom({
    key: 'usersState', 
    default: [] as Array<User>, 
  });


export default usersState;