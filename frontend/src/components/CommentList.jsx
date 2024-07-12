import React from "react";

const CommentsList = ({ comments }) => {
  return (
    <>
      <h3 className='text-2xl font-bold my-6 text-gray-900'>
        Comments:
      </h3>
      {comments.length > 0 ? (
        comments.map((comment, index) => (
          <div
            key={index}
            className='p-4 border rounded-lg shadow-md mb-4'
          >
            <h4 className='text-xl font-semibold text-gray-800'>
              {comment.username}
            </h4>
            <p className='mt-2 text-gray-600'>{comment.text}</p>
          </div>
        ))
      ) : (
        <p className='text-gray-600'>No comments yet.</p>
      )}
    </>
  );
};

export default CommentsList;
