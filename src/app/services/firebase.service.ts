import { Injectable } from '@angular/core';
import { Auth, authState, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from '@angular/fire/auth';
import { Firestore, addDoc, collection, collectionData, doc, getDoc, getDocs, query, setDoc, where, deleteDoc } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private auth: Auth, private firestore: Firestore) { }
  login(objeto: any) {
    let email = objeto.email
    let password = objeto.password
    return signInWithEmailAndPassword(this.auth, email, password)
  }

  resetPassword(email:string){
    return sendPasswordResetEmail(this.auth,email)
  }

  getAuthState() {
    return authState(this.auth)
  }
  esAdmin(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.getAuthState().subscribe(async res => {
        if (localStorage.getItem("registrando") === "false") {
          if (res) {
            let user = await this.userObserver(res.uid);
            let data: any = user.data();
            resolve(data.tipo === "admin");
          } else {
            resolve(false);
          }
        }

      });
    });
  }
  userObserver(id: string) {
    const userRef = doc(this.firestore, "users", id);
    return getDoc(userRef);
  }
  getPost(id: string) {
    const postRef = doc(this.firestore, "posts", id);
    return getDoc(postRef);
  }
  getHotelById(id: string) {
    const hotelRef = doc(this.firestore, "hotel", id);
    return getDoc(hotelRef);
  }
  cerrarSesion() {
    return signOut(this.auth)
  }
  singup(objeto: any) {
    let email = objeto.email
    let password = objeto.password
    return createUserWithEmailAndPassword(this.auth, email, password)
  }
  setUser(id: string, data: any) {
    const clienteRef = doc(this.firestore, "users", id);
    return setDoc(clienteRef, data);
  }
  setPost(id: string, data: any) {
    const postRef = doc(this.firestore, "posts", id);
    return setDoc(postRef, data);
  }
  setReserva(id: string, data: any) {
    const reservaRef = doc(this.firestore, "hotel", id);
    return setDoc(reservaRef, data);
  }
  addUser(data: any) {
    const addclientes = collection(this.firestore, "users")
    return addDoc(addclientes, data)
  }
  addMascota(data: any) {
    const addclientes = collection(this.firestore, "pets")
    return addDoc(addclientes, data)
  }
  setPet(id: string, data: any) {
    const petRef = doc(this.firestore, "pets", id);
    return setDoc(petRef, data);
  }
  setSchedule(id: string, data: any) {
    const scheduleRef = doc(this.firestore, "schedule", id);
    return setDoc(scheduleRef, data);
  }

  deleteReserva(id: string) {
    const scheduleRef = doc(this.firestore, "hotel", id);
    return deleteDoc(scheduleRef);
  }
  deletePost(id: string) {
    const postRef = doc(this.firestore, "posts", id);
    return deleteDoc(postRef);
  }
  
  getposts(): Observable<any[]> {
    const postsRef = collection(this.firestore, 'posts');
    const queryRef = query(
      postsRef,
    );
    return collectionData(queryRef, { idField: 'id' }).pipe(
      map(posts => posts.map((post: any) => ({ id: post.id, ...post })))
    );
  }
  async getMyPetsPr(): Promise<any[]> {
    try {
        let owner = localStorage.getItem("currentUID");
        const petsRef = collection(this.firestore, 'pets');
        const queryRef = query(
            petsRef,
            where('owner', '==', owner),
            where('status', '==', "active"),
        );

        const querySnapshot = await getDocs(queryRef);
        const pets: any[] | PromiseLike<any[]> = [];
        querySnapshot.forEach(doc => {
            pets.push({ id: doc.id, ...doc.data() });
        });
        return pets;
    } catch (error) {
        throw error;
    }
}


  async getUser(id: string) {
    const userRef = doc(this.firestore, "users", id);
    const userSnapshot = await getDoc(userRef);

    if (userSnapshot.exists()) {
      const userData = userSnapshot.data();
      return userData;
    } else {
      return null;
    }
  }
  
  getMyBooks(): Observable<any[]> {
    let owner=localStorage.getItem("currentUID")
    const hotelsRef = collection(this.firestore, 'hotel');
    const queryRef = query(
      hotelsRef,
      where('owner', '==', owner),
    );
    return collectionData(queryRef, { idField: 'id' }).pipe(
      map(hotels => hotels.map((hotel: any) => ({ id: hotel.id, ...hotel })))
    );
  }
  async getMyBookspr(): Promise<any[]> {
    let owner=localStorage.getItem("currentUID")
    const hotelsRef = collection(this.firestore, 'hotel');
    const queryRef = query(
      hotelsRef,
      where('owner', '==', owner),
    );

    const querySnapshot = await getDocs(queryRef);
    const hotels: Promise<any[]> | { id: string; }[] = [];

    querySnapshot.forEach((doc) => {
      hotels.push({ id: doc.id, ...doc.data() });
    });

    return hotels;
}



  async getPet(id: string) {
    const petRef = doc(this.firestore, "pets", id);
    const petSnapshot = await getDoc(petRef);

    if (petSnapshot.exists()) {
      const petData = petSnapshot.data();
      return petData;
    } else {
      return null;
    }
  }
  async getSch(id: string) {
    const schduleRef = doc(this.firestore, "schedule", id);
    const schduleSnapshot = await getDoc(schduleRef);

    if (schduleSnapshot.exists()) {
      const schduleData = schduleSnapshot.data();
      return schduleData;
    } else {
      return null;
    }
  }
  selectPlan(data:any){
    const addplans = collection(this.firestore, "plans")
    return addDoc(addplans, data)
  }
  async getPlanByPet(id: string): Promise<any[]> {
    const owner = localStorage.getItem("currentUID");
    const plansRef = collection(this.firestore, 'plans');
    const queryRef = query(plansRef, where('pet', '==', id));
  
    const querySnapshot = await getDocs(queryRef);
  
    const plans: any[] = [];
    querySnapshot.forEach((doc) => {
      plans.push({ id: doc.id, ...doc.data() });
    });
  
    return plans;
  }
  async getPlanByPetStatus(id: string): Promise<any[]> {
    const plansRef = collection(this.firestore, 'plans');
    const queryRef = query(plansRef, where('pet', '==', id),where('status', '==', true));
  
    const querySnapshot = await getDocs(queryRef);
  
    const plans: any[] = [];
    querySnapshot.forEach((doc) => {
      plans.push({ id: doc.id, ...doc.data() });
    });
  
    return plans;
  }
  async getSchedules(id: string): Promise<any[]> {
    const schedulesRef = collection(this.firestore, 'schedule');
    const queryRef = query(schedulesRef, where('pet', '==', id));
  
    const querySnapshot = await getDocs(queryRef);
  
    const schedules: any[] = [];
    querySnapshot.forEach((doc) => {
      schedules.push({ id: doc.id, ...doc.data() });
    });
  
    return schedules;
  }
  async getSchedulesUp(id: string): Promise<any[]> {
    const schedulesRef = collection(this.firestore, 'schedule');
    const queryRef = query(schedulesRef, where('pet', '==', id),where('status', '!=', 'deleted'));
  
    const querySnapshot = await getDocs(queryRef);
  
    const schedules: any[] = [];
    querySnapshot.forEach((doc) => {
      schedules.push({ id: doc.id, ...doc.data() });
    });
  
    return schedules;
  }
  async getSchedulesActives(id: string): Promise<any[]> {
    const schedulesRef = collection(this.firestore, 'schedule');
    const queryRef = query(schedulesRef, where('pet', '==', id),where('state', '==', 'active'));
  
    const querySnapshot = await getDocs(queryRef);
  
    const schedules: any[] = [];
    querySnapshot.forEach((doc) => {
      schedules.push({ id: doc.id, ...doc.data() });
    });
  
    return schedules;
  }
  getSchedulesobs(id: string): Observable<any[]> {
    const schedulesRef = collection(this.firestore, 'schedule');
    const queryRef = query(
      schedulesRef,
      where('pet', '==', id),where('state', '==', 'active'),
    );
    return collectionData(queryRef, { idField: 'id' }).pipe(
      map(schedules => schedules.map((schedule: any) => ({ id: schedule.id, ...schedule })))
    );
  }
  async getSchedulespr(id: string): Promise<any[]> {
    try {
        const schedulesRef = collection(this.firestore, 'schedule');
        const queryRef = query(
            schedulesRef,
            where('pet', '==', id),
            where('state', '==', 'active')
        );

        const querySnapshot = await getDocs(queryRef);
        const schedules: any[] | PromiseLike<any[]> = [];
        querySnapshot.forEach(doc => {
            schedules.push({ id: doc.id, ...doc.data() });
        });
        return schedules;
    } catch (error) {
        throw error;
    }
}

  getAllSchedules(): Observable<any[]> {
    const schedulesRef = collection(this.firestore, 'schedule');
    return collectionData(schedulesRef, { idField: 'id' }).pipe(
      map(schedules => schedules.map((schedule: any) => ({ id: schedule.id, ...schedule })))
    );
  }
  addAgenda(data: any) {
    const addAgendas = collection(this.firestore, "schedule")
    return addDoc(addAgendas, data)
  }
  addProduct(data: any) {
    const addclientes = collection(this.firestore, "products")
    return addDoc(addclientes, data)
  }
  setPlan(id: string, data: any) {
    const planRef = doc(this.firestore, "plans", id);
    return setDoc(planRef, data);
  }
  setProduct(id: string, data: any) {
    const planRef = doc(this.firestore, "products", id);
    return setDoc(planRef, data);
  }
  getProductsobs(): Observable<any[]> {
    const schedulesRef = collection(this.firestore, 'products');
    const queryRef = query(
      schedulesRef,
      where('status', '==', 'active'),
    );
    return collectionData(queryRef, { idField: 'id' }).pipe(
      map(products => products.map((product: any) => ({ id: product.id, ...product })))
    );
  }
  addHotel(data: any) {
    const addclientes = collection(this.firestore, "hotel")
    return addDoc(addclientes, data)
  }
}
