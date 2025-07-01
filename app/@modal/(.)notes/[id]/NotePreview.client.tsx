"use client";

import { useRouter } from "next/navigation";
import NotePreview from "@/components/NotePreview/NotePreview";
import Modal from "@/components/Modal/Modal";

type Props = { id: number };

export default function NotePreviewClient({ id }: Props) {
  const router = useRouter();
  const closeModal = () => router.back();

  return (
    <Modal onClose={closeModal}>
      <NotePreview id={id} onClose={closeModal} />
    </Modal>
  );
}
