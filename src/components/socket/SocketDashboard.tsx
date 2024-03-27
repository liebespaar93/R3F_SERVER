"use client"

import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table'

type SocketDashBoardProps = {
  userList: userInfo[]
}

function TableHeaderInfo() {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className='overflow-hidden' colSpan={1}>ID</TableHead>
        <TableHead colSpan={2}>Nickname</TableHead>
        <TableHead colSpan={1} className="text-right">State</TableHead>
      </TableRow>
    </TableHeader>
  )
}

function TableBodyInfo({ userList }: { userList: userInfo[] }) {
  return (
    <TableBody>
      {userList.map((value, index) => {
        return (
          <TableRow key={index}>
            <TableCell className='max-w-[80px] truncate overflow-hidden overflow-x-hidden' colSpan={1}>
              {value.id}
            </TableCell>
            <TableCell colSpan={1}>
              {value.nickname}
            </TableCell>
            <TableCell colSpan={2} className={"text-yellow-400 text-right space-x-2"}>
              {"[ "}
              {value.state?.length ? value.state.map((value, index) => {
                return <p className='inline-block text-green-400' key={index}>{value}</p>
              }) : <p className='inline-block text-gray-500'>wait</p>}
              {" ]"}
            </TableCell>
          </TableRow>)
      })}
    </TableBody>
  )
}

function TableFootInfo({ userList }: { userList: userInfo[] }) {
  return (
    <TableFooter>
      <TableRow>
        <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right text-green-400">{userList.length}</TableCell>
      </TableRow>
    </TableFooter>
  )
}

function SocketDashBoard(props: SocketDashBoardProps) {

  return (
    <div className='w-full h-full p-4'>
      <Card className=' max-h-[320px] overflow-scroll'>
        <CardTitle className='p-4'>DashBoard</CardTitle>
        <hr />
        <Table>
          <TableHeaderInfo />
          <TableBodyInfo userList={props.userList} />
          <TableFootInfo userList={props.userList} />
        </Table>
      </Card>
    </div>
  )
}

SocketDashBoard.propTypes = {}

export default SocketDashBoard
