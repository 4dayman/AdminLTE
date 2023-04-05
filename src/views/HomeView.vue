<template>
  <content-header title="Статистика" />
  <content>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header">
            <h3 class="card-title">Статистика</h3>
          </div>
          <div class="card-body">
            <!-- Lorem ipsum dolor sit amet, consectetur adipisicing elit. -->
            <p v-for="country in countries" :key="country.name">
              Country: {{ country.name }}
              <br>
              Capital: {{ country.capital }}
            </p>
            <hr>
            <p v-for="user in users" :key="user.firstName">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <hr>
            <p v-for="user in usersOrder" :key="user.firstName">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <hr>
            <p v-for="user in usersOrderFilter" :key="user.firstName">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <hr>
            <p>Country: {{ name }} (aka. {{ aka }}) <br> Capital: {{ capital }}</p>
            <button @click="addAlsoKnownAs" class="btn btn-primary btn-block">Add AKA</button>
            <hr>
            <p v-for="user in usersColl" :key="user.firstName">
              {{ user.firstName }} {{ user.lastName }}
            </p>
            <hr>
            <p v-for="user in usersQuery" :key="user.firstName">
              {{ user.firstName }} {{ user.lastName }}
            </p>
          </div>
          <div class="card-footer">
            Footer
          </div>
        </div>
      </div>
    </div>
  </content>
</template>

<script>
import db from '@/firebase/init.js'
import { collection, addDoc, doc, setDoc, getDoc, getDocs, query, where, orderBy, limit, deleteDoc, updateDoc, deleteField, onSnapshot } from 'firebase/firestore'

export default {
  created() {
    // this.createUser(),
    this.createCountry(),
    this.getCountry()
    this.getCountries()
    this.getUsers()
    this.getUsersOrder()
    this.getUsersOrderAndFilter()
    this.dropCountry()
    this.dropCapital()
    this.getCountryAKA()
    this.getUsersColl()
    this.getUsersQuery()
  },
  data() {
    return {
      countries: [],
      users: [],
      usersOrder: [],
      usersOrderFilter: [],
      aka: '',
      name: '',
      capital: '',
      usersColl: [],
      usersQuery: [],
    }
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, 'users')
      // data to send
      const dataObj = {
        firstName: 'Jane',
        lastName: 'Roe',
        dob: '1995'
      }

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj)

      // accsess auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    },
    // async createCountry() {
    //   await setDoc(doc(db, 'countries', 'US'), { name: 'United States' })
    // },
    // async createCountry() {
    //   await setDoc(doc(db, 'countries', 'GB'), { name: 'Great Britain' })
    // },
    async createCountry() {
      await setDoc(doc(db, 'countries', 'GB'), {
        // new data
        capital: 'London'
        // merge
      }, { merge: true })
    },
    async getCountry() {
      // attempt to retrieve the document
      const docSnap = await getDoc(doc(db, 'countries', 'GB'))
      // if it exists, log it to the console
      if (docSnap.exists()) {
        console.log(docSnap.data())
      } else {
        console.log('Document does not exist')
      }
    },
    async getCountries() { 
      const querySnap = await getDocs(query(collection(db, 'countries')))
      // add each doc to 'countries' array
      querySnap.forEach((doc) => {
        this.countries.push(doc.data())
      })
    },
    async getUsers() {
      // filter to get users whih 'dob' after 1990
      const q = query(collection(db, 'users'), where('dob', '>', '1990'))
      const querySnap = await getDocs(q)

      querySnap.forEach((doc) => {
        this.users.push(doc.data())
      })
    },
    async getUsersOrder() {
      // order users by name (alphabetical order)
      const q = query(collection(db, 'users'), orderBy('firstName'), limit(1))
      const querySnap = await getDocs(q)
      querySnap.forEach((doc) => {
        this.usersOrder.push(doc.data())
      })
    },
    async getUsersOrderAndFilter() {
      // order users by name (alphabetical order)
      const q = query(collection(db, 'users'), orderBy('dob'), where('dob', '>', '1990'))
      const querySnap = await getDocs(q)
      querySnap.forEach((doc) => {
        this.usersOrderFilter.push(doc.data())
      })
    },
    async dropCountry() {
      await deleteDoc(doc(db, 'countries', 'US'))
    },
    async dropCapital() {
      await updateDoc(doc(db, 'countries', 'GB'), {
        capital: deleteField()
      })
    },
    async getCountryAKA() { 
      // register realtime listener for changes on 'GB' document
      onSnapshot(doc(db, 'countries', 'GB'), (snap) => {
        this.aka = snap.data().aka
        this.name = snap.data().name
        this.capital = snap.data().capital
      })
    },
    async addAlsoKnownAs() {
      // add 'aka' field to document
      await setDoc(doc(db, 'countries', 'GB'), {
        aka: 'United Kingdom'
      }, {merge: true})
    },
    async getUsersColl() {
      // use 'collection()' instead of 'doc()'
      onSnapshot(collection(db, 'users'), (snap) => {
        snap.forEach((doc) => {
          this.usersColl.push(doc.data())
        })
      })
    },
    async getUsersQuery() {
      onSnapshot(
      // use 'query()' instead of a reference
      query(collection(db, 'users'), where('dob', '>', '1990')),
        (snap) => {
          snap.forEach((doc) => {
            this.usersQuery.push(doc.data())
        })
      })
    },
  },
}

</script>
