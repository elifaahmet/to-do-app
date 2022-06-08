import React from 'react';
import styled from 'styled-components/native';
import { initializeApp } from 'firebase/app';
import {
  Poppins_400Regular,
  useFonts
} from '@expo-google-fonts/poppins';
import {
  Roboto_400Regular,
} from '@expo-google-fonts/roboto';

import ToDoApp from './app/to-do-app';


// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDR1A6mintxSbyBnJwy-_oDPWBTKCRrldc",
  authDomain: "qoopertodoapp.firebaseapp.com",
  projectId: "qoopertodoapp",
  storageBucket: "qoopertodoapp.appspot.com",
  messagingSenderId: "964230504577",
  appId: "1:964230504577:web:8dee219630d0540d9a2d80",
  measurementId: "G-5EL7QL8N8C"
};

export default function App() {

    let [fontsLoaded] = useFonts({
      Poppins_400Regular,
      Roboto_400Regular
    });
    initializeApp(firebaseConfig);

    while (!fontsLoaded) {
      return null;
    }
    return (
        <ToDoApp />
     
    );
}
