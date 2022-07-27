import { atom } from 'recoil'

// const [modalState, setModalState] = useState(false) --> Local file 
export const modalState = atom({  // --> Global
  key: "modalState",
  default: false,
})

export const postIdState = atom({  
  key: "postIdState",
  default: "",
})