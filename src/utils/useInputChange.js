import { useState } from 'react'

export const useInputChange = () => {
  const [input, setInput] = useState({})

  const handleInputChange = (e) => setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
  });

  const initInput = (data) =>  {setInput({
    ...input,
    [data.name]: data.value
  });console.log(data);}

  return [input, handleInputChange, initInput]
}