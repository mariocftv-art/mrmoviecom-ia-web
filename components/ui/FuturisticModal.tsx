"use client";

import styles from "./FuturisticModal.module.css";

interface FuturisticModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

export default function FuturisticModal({
  open,
  onClose,
  title,
  description,
}: FuturisticModalProps) {
  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{title}</h2>
        <p>{description}</p>

        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
}
