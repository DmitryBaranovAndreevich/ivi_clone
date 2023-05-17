export type tOpenCloseModal = (val: boolean) => void;

export const openModal = (kindModal: tOpenCloseModal) => {
  kindModal(true);
};

export const closeModal = (kindModal: tOpenCloseModal) => {
  kindModal(false);
};
