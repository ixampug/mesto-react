import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `card__like ${
    isLiked && "card__like_active"
  }`;

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleClick() {
    props.onOpenCard(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <div className="card">
      <img
        className="card__photo"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__table">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className={cardLikeButtonClassName}
            aria-label="Нравится"
            type="button"
            onClick={handleLikeClick}
            src={props.card.link}
          />
          <p className="card__like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      {isOwn && (
        <button
          className="card__delete"
          aria-label="Удалить"
          type="button"
          onClick={handleDeleteClick}
        />
      )}
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
