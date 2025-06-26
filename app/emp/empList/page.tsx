"use client"

import { useEffect, useState } from "react"
import apiEmpList from "@/io/api-emp-list"

export default function EmpList() {
  const [list, setList] = useState<any[]>([])

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    try {
      const response = await apiEmpList()
      if (response.status === 200) {
        let userData = response.data
        setList(userData)
      }
    } catch (error) {
      console.error("Failed to fetch employee list", error)
    }
  }

   return (
    <>
      <h1>Employee List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {list.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {new Date(user.created_at).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )

}
