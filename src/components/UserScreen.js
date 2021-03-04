import React, { useState } from "react";

const compatibles = [
  {
    id: 7,
    name: "Prof. Shaniya Breitenberg Sr.",
    email: "velda87@yahoo.com",
    email_verified_at: null,
    birthdate: "2000-05-23 23:15:23",
    password: "$2y$10$ojAIMlGpeGO2qhz4KvNgd.dNCcz4aXfFMkIhH97yXKx4R74xXUZo6",
    remember_token: null,
    created_at: "2021-03-03 23:01:10",
    updated_at: "2021-03-03 23:01:10",
    gender: "female",
    age: 26,
    description: null,
    location: null,
    address: "Wayne Gottlieb",
    min_age: 19,
    max_age: 24,
    preferred_gender: "male",
    preferred_pet: "peces",
    lng: "-0.21925400",
    lat: "78.48475800",
    role: "ROLE_USER",
    image: "public/images/f54ec7c65d386d256b3d10eedad290d0.png",
    photoUrl:
      "127.0.0.1:8000/storage/images/4c4a00ced4dcc4f988a91bd1208475e9.png",
  },

  {
    id: 11,
    name: "Ronny Cajas",
    email: "ronny.cajas@epn.edu.ec",
    email_verified_at: null,
    birthdate: "1996-06-01 14:02:07",
    created_at: "2021-03-03T23:01:31.000000Z",
    updated_at: "2021-03-03T23:01:31.000000Z",
    gender: "male",
    age: 22,
    description: "me gusta comer pizza",
    location: null,
    address: null,
    min_age: 18,
    max_age: 28,
    preferred_gender: "female",
    preferred_pet: "cats",
    lng: "20.00000000",
    lat: "20.00000000",
    role: "ROLE_USER",
    image: "public/images/PISslx4RyL2ouwp5uImjY6r8MS9ioz0KVPZhCZyt.png",
    music_genres: ["rock"],
    movie_genres: ["terror", "comedia"],
    imageUrl:
      "127.0.0.1:8000/storage/images/PISslx4RyL2ouwp5uImjY6r8MS9ioz0KVPZhCZyt.png",
  },
];

const box = {
  width: 100,
  height: 100,
  backgroundColor: "cyan",
  padding: 10,
};

export default function geolocation() {
  const [user, setUser] = useState(compatibles[0]);
  const [index, setIndex] = useState(0);

  const pickUser = (user) => {
    setUser(user);
  };

  return (
    <>
      {user && (
        <div style={box}>
          <div>{user.name}</div>
        </div>
      )}
      <button
        onClick={() => {
          const newIndex = index + 1;
          if (newIndex > compatibles.length - 1) {
            alert("ya no hay mas usuarios");
            return;
          }
          pickUser(compatibles[newIndex]);
          setIndex(newIndex);
        }}
      >
        siguiente
      </button>
    </>
  );
}
