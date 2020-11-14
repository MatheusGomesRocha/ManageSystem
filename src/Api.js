import firebase from 'firebase/app';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore';

import firebaseConfig from './FirebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default {
    getOrders: async (sort) => {
        let list = [];

        let res = await db.collection('orders').orderBy(sort).get();

        res.forEach(result => {
            let data = result.data();

            list.push({
                userId: data.userId,
                userName: data.userName,
                status: data.status,
                subtotal: data.subtotal,
                quantidadeTotal: data.quantidadeTotal,
                products: data.products,
                adress: data.adress,
            })
        })

        return list;
    },

    getProducts: async () => {
        let list = [];

        let res = await db.collection('products').get();

        res.forEach(result => {
            let data = result.data();

            list.push({
                id: data.id,
                name: data.name,
                price: data.price,
                type: data.type,
                img: data.img,
            })
        })

        return list;
    }
};