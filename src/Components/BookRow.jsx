import React from 'react'
import { MdDelete } from "react-icons/md";


export default function BookRow({product, deleteProducts}) {
    const {isbn, title, author, pubYear, description, select, redio} = product
  return (
    <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>{pubYear}</td>
        <td>{description}</td>
        <td>{select}</td>
        <td>{redio}</td>
        {/* <td>{sizeRedio}</td> */}
        <td className='delete_btn' onClick={()=> deleteProducts(isbn)}><MdDelete color='red'/></td>
    </tr>
  )
}