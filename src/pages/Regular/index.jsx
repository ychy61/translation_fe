import React, { useState } from "react";
import { Box, VStack, Textarea, IconButton, HStack } from "@chakra-ui/react";
import { LanguageSelector } from "../../components/Layout/LanguageSelector";
import { ArrowRight } from "lucide-react";
import "./RegularPage.css";  // 새로운 CSS 파일을 가져옴

export const RegularPage = () => {
  const languages = ["제주 방언", "한글 표준어", "영어", "중국어"];
  const [sourceLanguage, setSourceLanguage] = useState(languages[0]);
  const [targetLanguage, setTargetLanguage] = useState(languages[1]);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const handleSwapLanguages = () => {
    setSourceLanguage(targetLanguage);
    setTargetLanguage(sourceLanguage);
  };

  const handleTranslate = () => {
    setOutputText(inputText);  // 실제 번역 로직으로 대체 가능
  };

  return (
    <Box width="100%" maxWidth="600px" margin="auto" p={4} className="regular-page">
      <VStack spacing={4} align="stretch">
        {/* 언어 선택 상태바 */}
        <LanguageSelector
          sourceLanguage={sourceLanguage}
          targetLanguage={targetLanguage}
          setSourceLanguage={setSourceLanguage}
          setTargetLanguage={setTargetLanguage}
          handleSwapLanguages={handleSwapLanguages}
        />

        {/* 입력 영역 박스 */}
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

        {/* 입력창 하단의 번역 버튼 */}
        <HStack justifyContent="center">
          <IconButton
            className="translate-button"
            icon={<ArrowRight />}
            onClick={handleTranslate}
            aria-label="Translate"
            colorScheme="orange"
            size="lg"
          />
        </HStack>

        {/* 출력 영역 박스 */}
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
