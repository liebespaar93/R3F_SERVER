type userInfo = {
  id: string,
  nickname? : string,
  state?: string[],
  room?: string,
}

type socketMsg = {
  type: string,
  msg?: string | null
}

type socketSend = {
  sendForm :userInfo
  sendTo? : userInfo
} & socketMsg

type socketRecv = {
  recvFrom: userInfo
} & socketMsg

