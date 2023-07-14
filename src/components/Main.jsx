import React, { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";
import ImagePopup from "./ImagePopup";

export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    api
      .getUserInformation()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((error) => {
        console.log("ошибка", error);
      });

    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((error) => {
        console.log("ошибкааа", error);
      });
  }, []);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setSelectedCard(null);
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <button
            className="profile__change-photo"
            type="button"
            onClick={onEditAvatar}
          >
            <img
              className="profile__photo"
              style={{ backgroundImage: `url(${userAvatar})` }}
              alt="Фотография профиля"
            />
          </button>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button
              aria-label="Редактировать"
              className="profile__edit"
              type="button"
              onClick={onEditProfile}
            />
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add" type="button" onClick={onAddPlace} />
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card._id}
            name={card.name}
            link={card.link}
            likes={card.likes}
            onCardClick={handleCardClick}
            onClose={closeAllPopups}
          />
        ))}
      </section>
    </main>
  );
}

// export default function Main({ onEditProfile, onAddPlace, onEditAvatar }) {
//   const [userName, setUserName] = useState("");
//   const [userDescription, setUserDescription] = useState("");
//   const [userAvatar, setUserAvatar] = useState("");

//   useEffect(() => {
//     api
//       .getUserInformation()
//       .then((userInfo) => {
//         setUserName(userInfo.name);
//         setUserDescription(userInfo.about);
//         setUserAvatar(userInfo.avatar);
//       })
//       .catch((error) => {
//         console.log("Error fetching user info:", error);
//       });
//   }, []);

//   // написать запрос к апи подгрузить карточи

//   return (
//     <main className="content">
//       <section className="profile">
//         <div className="profile__box">
//           <button
//             className="profile__change-photo"
//             type="button"
//             onClick={onEditAvatar}
//           >
//             <img
//               className="profile__photo"
//             //   src={userAvatar}
//             style={{ backgroundImage: `url(${userAvatar})` }}
//               alt="Фотография профиля"
//             />
//           </button>
//           <div className="profile__info">
//             <h1 className="profile__name">{userName}</h1>
//             <button
//               aria-label="Редактировать"
//               className="profile__edit"
//               type="button"
//               onClick={onEditProfile}
//             />
//             <p className="profile__occupation">{userDescription}</p>
//           </div>
//         </div>
//         <button className="profile__add" type="button" onClick={onAddPlace} />
//       </section>
//       <section className="cards" />
//     </main>
//   );
// }
