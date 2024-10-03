import React, { useState, useEffect } from "react";
import { Box, VStack, Textarea, IconButton } from "@chakra-ui/react";
import { LanguageSelector } from "../../components/Layout/LanguageSelector";
import { ArrowRight } from "lucide-react";
import "./RegularPage.css";

const RegularPage = ({ inputTextProp }) => {
  const languages = ["제주 방언", "한글 표준어", "영어", "중국어"];
  const [sourceLanguage, setSourceLanguage] = useState(languages[1]);
  const [targetLanguage, setTargetLanguage] = useState(languages[0]);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  useEffect(() => {
    if (inputTextProp) {
      setInputText(inputTextProp);
    }
  }, [inputTextProp]);

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleTranslate = () => {
    setOutputText(inputText);  // 실제 번역 로직으로 대체 가능
  };

  return (
    <Box className="regular-page">
      <VStack spacing={4} align="stretch" width="100%">
        <Box className="language-selector">
          <LanguageSelector
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            setSourceLanguage={setSourceLanguage}
            setTargetLanguage={setTargetLanguage}
            handleSwapLanguages={handleSwapLanguages}
            selectWidth="40%"
            selectSize="sm"
            containerWidth="100%"
          />
        </Box>

        <Box className="input-output-box">
          <Textarea
            className="input-textarea"
            placeholder="번역할 내용을 입력하세요"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            size="sm"
            height="150px"
          />
        </Box>

        <Box className="translate-button-container">
          <IconButton
            icon={<ArrowRight />}
            onClick={handleTranslate}
            aria-label="Translate"
            colorScheme="orange"
            size="lg"
          />
        </Box>

        <Box className="input-output-box">
          <Textarea
            className="output-textarea"
            placeholder="번역 결과"
            value={outputText}
            readOnly
            size="sm"
            height="150px"
          />
        </Box>
      </VStack>
    </Box>
  );
};

export default RegularPage;