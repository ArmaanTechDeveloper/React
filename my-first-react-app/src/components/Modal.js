import './Modal.css';
export default function Modal({children , closeModal}) {
  return (
    <div>
      <div className="modal-backdrop">
            <div className="modal">
                {children}
                <button onClick={closeModal}> Close modal </button>
            </div>
        </div>
    </div>
  )
}
