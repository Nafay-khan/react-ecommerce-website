import React, { useState } from 'react'
import { addProduct } from '../../config/firebase'
import { useNavigate } from 'react-router-dom'

const Addpost = () => {
    const navigate = useNavigate()
    const [image, setImage] = useState()
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()

    const postProducts = async (e)=>{
        e.preventDefault()
        try {
            await addProduct({image, title, description, price})
            alert('added succesfully')
            navigate('/dashboard')

        } catch (e) {
            alert(e.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <form
    onSubmit={postProducts} 
    className="w-full max-w-md p-6 bg-white shadow-lg rounded-md">

    <h2 className="text-xl font-semibold text-center mb-4">Add Your Post</h2>


    <div className="mb-4">
      <label className="block text-gray-800 font-medium mb-1">
        Image
      </label>
      <input
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        type="file"
        className="w-full"
        required
      />
    </div>

    <div className="mb-3">
      <label className="block text-gray-800 font-medium mb-1">
        Title
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        required
      />
    </div>

    <div className="mb-3">
      <label className="block text-gray-800 font-medium mb-1">
        Description
      </label>
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        required
      />
    </div>

    <div className="mb-3">
      <label
        className="block text-gray-800 font-medium mb-1"
      >
        Price
      </label>
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="number"
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        required
      />
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
    >
      Add Product
    </button>
  </form>
</div>
  )
}

export default Addpost