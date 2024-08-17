import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut  } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, getDoc, doc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBJWEXMAiWH8i2A_f_vsMSKQPuK0lqD-_g",
  authDomain: "expertozo-advance.firebaseapp.com",
  projectId: "expertozo-advance",
  storageBucket: "expertozo-advance.appspot.com",
  messagingSenderId: "1058799913978",
  appId: "1:1058799913978:web:f60051c7143f678c663243",
  measurementId: "G-HQJQCTW8BP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



const registerUser = async (userInfo)=>{
    const { name, email, password} = userInfo;
    await createUserWithEmailAndPassword(auth, email, password)
    return addDoc(collection(db, 'users'), {
        email,
        name,
      });
}

const loginUser = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
}

const addProduct = async (product)=>{
    const {image, title, description, price} = product;
    const storageRef = ref(storage, 'products/' + image.name);
    await uploadBytes(storageRef, image)
    const url = await getDownloadURL(storageRef)
    return addDoc(collection(db, "products"), {
        image:url,
        title,
        description,
        price,
      });
}

const getProduct = async ()=>{
    const querySnapshot = await getDocs(collection(db, "products"));
        const product = []
        querySnapshot.forEach((doc) => {
        const data = doc.data()
        data.id = doc.id
        product.push(data)
    });
    return product
}

const getSingleProduct = async (productId)=>{
    const docSnap = await  getDoc(doc(db, "products", productId));;

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
     // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }
}

export {
    registerUser,
    loginUser,
    addProduct,
    getProduct,
    getSingleProduct,
    auth,
    onAuthStateChanged,
    signOut
}