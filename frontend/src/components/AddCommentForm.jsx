import React, { useState } from 'react';
import axios from 'axios';

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/articles/${articleName}/add-comments`, {
        username,
        text,
      });
      setArticleInfo(response.data);  // Update the articleInfo to include the new comment
      setUsername('');
      setText('');
    } catch (error) {
      console.error('Error adding the comment:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='shadow-lg rounded-lg p-6 mb-6 bg-white border border-gray-200'>
      <h3 className='text-2xl font-semibold mb-4 text-gray-900'>Add a Comment</h3>
      <label className='block text-gray-700 text-sm font-medium mb-2' htmlFor='username'>
        Name:
      </label>
      <input
        id='username'
        type='text'
        placeholder='Enter your name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <label className='block text-gray-700 text-sm font-medium mb-2 mt-4' htmlFor='comment'>
        Comment:
      </label>
      <textarea
        id='comment'
        rows='4'
        placeholder='Enter your comment'
        value={text}
        onChange={(e) => setText(e.target.value)}
        className='shadow-sm border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
      <button
        type='submit'
        className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Add Comment
      </button>
    </form>
  );
};

export default AddCommentForm;
