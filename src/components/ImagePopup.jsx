export default function ImagePopup({ card, onClose }) {
  return (
    <div
      className={`popup popup_fullview ${card ? "popup_opened" : ""}`}
      id="popup-open-image"
    >
      <div className="popup__fullscreen">
        <img
          className="popup__picture"
          src={card ? card.link : ""}
          alt={card ? card.name : ""}
        />
        <h3 className="popup__subtitle">{card ? card.name : ""}</h3>
        <button
          className="popup__close popup__close_fullview"
          type="button"
          onClick={onClose}
        />
      </div>
    </div>
  );
}
