"use server"

import { noteServerLog } from "./log/server_logger"

export async function getIp() {
  "use server"
  await fetch('get', {
    method: "GET",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({
      title: "Get ip",
      data: "need ip"
    })
  }).then((e) => {
    noteServerLog(e.json())
  })
}