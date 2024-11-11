import React from "react";

const AboutFilmComments = ({ comments }) => {
  return (
    <div>
      <h2 className="text-2xl mb-1">Комментарии</h2>
      <ul className="flex flex-col gap-2">
        {comments.data?.map((comment) => (
          <li key={comment.id} className="border border-gray-800 p-2 hover:border-gray-500 transition cursor-pointer">
            <div>
              <div className="flex flex-col">
                <div >
                  <span className="text-text-color">id:</span>
                  <span>{comment.id}</span>
                </div>
                <div >
                  <span  className="text-text-color">Имя:</span>
                  <span > {comment.name}</span>
                </div>
                <div>
                  <span  className="text-text-color">Почта:</span> 
                  <span> {comment.email}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <span className="text-text-color">Описание:</span>
                <span>{comment.body}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutFilmComments;
