import React from 'react';
import { useBookmark } from '../context/BookmarkContext';
import { Box, VStack, Text, IconButton, Heading, Center, Divider } from "@chakra-ui/react";
import { Trash2 } from "lucide-react";
import "./BookmarkPage.css";

const BookmarkPage = () => {
  const { bookmarks, removeBookmark } = useBookmark();

  return (
    <Box className="bookmark-page">
      <Center>
        <Heading as="h1" size="xl" mb={6}>북마크</Heading>
      </Center>
      <VStack spacing={4} align="stretch">
        {bookmarks.map((bookmark) => (
          <Box key={bookmark.id} className="bookmark-item">
            <Box flex="1">
              <Text className="input-text" fontSize="md" color="gray.600">
                {bookmark.text.input}
              </Text>
              <Divider my={2} />
              <Text className="output-text" fontSize="md" fontWeight="500">
                {bookmark.text.output}
              </Text>
            </Box>
            <IconButton
              icon={<Trash2 />}
              onClick={() => removeBookmark(bookmark.id)}
              aria-label="Remove bookmark"
              colorScheme="red"
              size="sm"
              ml={4}
            />
          </Box>
        ))}
        {bookmarks.length === 0 && (
          <Center>
            <Text>저장된 북마크가 없습니다.</Text>
          </Center>
        )}
      </VStack>
    </Box>
  );
};

export default BookmarkPage;