import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const SearchBooks = () => {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  const URL = `https://www.nl.go.kr/seoji/SearchApi.do?cert_key=1c81199b2a9a2305bc71bb993c45e032794d810adae4c92544bd3d8ac9c2a574&result_style=json&page_no=1&page_size=10&start_publish_date=20220509&end_start_publish=20220509`;

  const searchBooks = () => {
    const searchURL = `${URL}&title=${encodeURIComponent(keyword)}`;

    fetch(searchURL)
      .then((response) => response.json())
      .then((data) => {
        const books = data.docs.map((item) => ({
          title: item.TITLE,
          publisher: item.PUBLISHER,
          author: item.AUTHOR
        }));

        setResult(books);
      })
      .catch((error) => {
        console.error('실패:', error);
      });
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
  };

  return (
    <View>
      <Text>책 검색</Text>
      <TextInput
        value={keyword}
        onChangeText={(text) => setKeyword(text)}
        placeholder="검색어를 입력하세요"
      />
      <Button title="검색" onPress={searchBooks} />
      {selectedBook ? (
        <View>
          <Text>선택된 책</Text>
          <Text>{selectedBook.title}</Text>
          <Text>{selectedBook.publisher}</Text>
          <Text>{selectedBook.author}</Text>
        </View>
      ) : (
        <View id="result">
          {result.map((book, index) => (
            <TouchableOpacity key={index} onPress={() => handleBookSelect(book)}>
              <Text>{book.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default SearchBooks;
