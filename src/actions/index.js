import openSocket from 'socket.io-client';
const socket = openSocket('https://movie-ease.herokuapp.com/api/bot');
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE'
export const SEND_AI_MESSAGE = 'SEND_AI_MESSAGE'
export const RECEIVE_AI_MESSAGE = 'RECEIVE_AI_MESSAGE'

function speak(text) {
  let synthesis = window.speechSynthesis
  let utterance = new window.SpeechSynthesisUtterance()
  utterance.text = text
  synthesis.speak(utterance)
}

export const sendAIMessage = message => dispatch => {
  socket.emit("userMessage", message)
  dispatch(sendMessage(message))
}

export const listenForMessages = () => dispatch => {
  console.log("listening for messages")
  socket.on("AIMessage", message =>{
    speak(message)
    dispatch(receiveMessage(message))
  })
}

export const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  id
})

const receiveMessage = (message) => ({
  type: RECEIVE_AI_MESSAGE,
  message
})

const sendMessage = (message) => ({
  type: SEND_AI_MESSAGE,
  message
}) 