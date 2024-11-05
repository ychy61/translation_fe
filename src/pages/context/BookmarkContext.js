import React, { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  // text 파라미터가 { input, output } 형태의 객체로 변경
  const addBookmark = (textPair) => {
    setBookmarks([
      ...bookmarks, 
      { 
        id: Date.now(), 
        text: {
          input: textPair.input,
          output: textPair.output
        }
      }
    ]);
  };

  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.id !== id));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmark = () => useContext(BookmarkContext);

export default BookmarkContext;