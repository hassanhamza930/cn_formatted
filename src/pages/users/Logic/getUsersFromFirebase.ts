import { User } from './../../../interfaces/users/user';
import { collection, doc, getFirestore, onSnapshot } from "firebase/firestore";


export default function GetUsersFromFirebase(users:Array<User>,setUsers:Function) {
    const db=getFirestore();

    const unsub = onSnapshot(collection(db, "users"), (docs) => {
        var docsData= docs.docs;
        var dataList = docsData.map((doc)=>{
            return(doc.data() as Object);
        })
        setUsers(dataList);
    });

}