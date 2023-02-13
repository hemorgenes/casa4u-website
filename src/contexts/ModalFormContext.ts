import create from "zustand";

type ModalProps = {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  isSuccessSendForm: boolean;
  setIsSuccessSendForm: (modalIsOpen: boolean) => void;
  
  isMoreThanOnePlace: boolean;
  setIsMoreThanOnePlace: (isMoreThanOnePlace: boolean) => void;
};

export const useModalForm = create<ModalProps>((set) => ({
  modalIsOpen: false,
  setModalIsOpen: (state: boolean) => {
    set({ modalIsOpen: state });
  },

  isLoading: false,
  setIsLoading: (state: boolean) => {
    set({ isLoading: state });
  },

  isSuccessSendForm: false,
  setIsSuccessSendForm: (state: boolean) => {
    set({ isSuccessSendForm: state });
  },

  isMoreThanOnePlace: false,
  setIsMoreThanOnePlace: (state: boolean) => {
    set({ isMoreThanOnePlace: state });
  },



}));
