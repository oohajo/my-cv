import React from 'react'
import ReactDOM from 'react-dom/client'

interface Experience {
  year: number;
  description: string;
}

interface CVData {
  photo: string;
  name: string;
  lastName: string;
  position: string;
  //tablica obiektow zgodnych z intefrace Experience
  experience: Experience[];
  //tablica ciagow znakow
  education: string[];
}

//zanim cokolwiek wyrenderujemy tworzymy obiekt. ktory bedzie implementowac przygotowany interface
const cvData: CVData = {
  photo: "https://placehold.co/400x400",
  name: "Diana",
  lastName: "K.",
  position: "Doctor of Sciences in Physics",
  experience: [
    {year: 2024, description: "Lorem ipsum"},
    {year: 2020, description: "Dolor sit amet"},
  ],
  education: ["Sobotka", "noc krotka", "gwiazdy sie pala"]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <h1>My CV</h1>
  </React.StrictMode>,
)
