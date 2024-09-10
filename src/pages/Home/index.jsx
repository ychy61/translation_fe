import React, { useState } from "react";
import { RouterPath } from "../../routes/path";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Select,
  Button,
  VStack,
  HStack,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftRight } from "lucide-react";

const languages = ["제주 방언", "한글 표준어", "영어", "중국어"];

export const HomePage = () => {
  const [sourceLanguage, setSourceLanguage] = useState(languages[0]);
  const [targetLanguage, setTargetLanguage] = useState(languages[1]);
  const navigate = useNavigate();

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleQuickTranslation = () => {
    navigate(RouterPath.quick, { state: { sourceLanguage, targetLanguage } });
  };

  const handleRegularTranslation = () => {
    navigate(RouterPath.regular, { state: { sourceLanguage, targetLanguage } });
  };

  return (
    <Box width="100%" maxWidth="600px" margin="auto" p={4}>
      <VStack spacing={4} align="stretch">
        <HStack spacing={2} justifyContent="space-between">
          <Select
            value={sourceLanguage}
            onChange={(e) => setSourceLanguage(e.target.value)}
            size="sm"
            width="40%"
          >
            {languages
              .filter((lang) => lang !== targetLanguage)
              .map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
          </Select>
          <IconButton
            icon={<ArrowLeftRight />}
            onClick={handleSwapLanguages}
            aria-label="Swap languages"
            size="sm"
          />
          <Select
            value={targetLanguage}
            onChange={(e) => setTargetLanguage(e.target.value)}
            size="sm"
            width="40%"
          >
            {languages
              .filter((lang) => lang !== sourceLanguage)
              .map((lang) => (
                <option key={lang} value={lang}>
                  {lang}
                </option>
              ))}
          </Select>
        </HStack>
        <Button
          colorScheme="orange"
          height="37vh"
          borderRadius="15px"
          onClick={handleQuickTranslation}
        >
          <Text fontSize="2xl">Quick translation</Text>
        </Button>
        <Button
          colorScheme="blue"
          height="37vh"
          borderRadius="15px"
          onClick={handleRegularTranslation}
        >
          <Text fontSize="2xl">Regular translation</Text>
        </Button>
      </VStack>
    </Box>
  );
};
