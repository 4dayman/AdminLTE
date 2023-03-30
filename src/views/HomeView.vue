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
import { collection, addDoc, doc, setDoc, getDoc, getDocs, query } from 'firebase/firestore'

export default {
  created() {
    // this.createUser(),
    this.createCountry(),
    this.getCountry()
    this.getCountries()
  },
  data() {
    return { countries: [] }
  },
  methods: {
    async createUser() {
      // 'users' collection reference
      const colRef = collection(db, 'users')
      // data to send
      const dataObj = {
        firstName: 'John',
        lastName: 'Doe',
        dob: '1990'
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
    }
  },
}

</script>
