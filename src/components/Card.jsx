import React from "react";
export default function Card({ name, link, likes, onCardClick, onClose }) {
  function handleClick() {
    onCardClick({ name, link, likes });
  }

  return (
    <div className="card">
      <img
        className="card__photo"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="card__table">
        <h2 className="card__name">{name}</h2>
        <div className="card__like-container">
          <button className="card__like" aria-label="Нравится" type="button" />
          <p className="card__like-counter">{likes.length}</p>
        </div>
      </div>
      <button className="card__delete" aria-label="Удалить" type="button" />
    </div>
  );
}

// <template id="card-template">
//       <div class="card">
//         <img class="card__photo" src="#" alt="" />

//         <div class="card__table">
//           <h2 class="card__name"></h2>
//           <div class="card__like-container">
//             <button
//               class="card__like"
//               aria-label="Нравится"
//               type="button"
//             ></button>
//             <p class="card__like-counter"></p>
//           </div>
//         </div>
//         <button
//           class="card__delete"
//           aria-label="Удалить"
//           type="button"
//         ></button>
//       </div>
//     </template>
