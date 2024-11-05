import React, { useCallback, useState } from 'react';
import { useTranslation } from '../context/TranslationContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './QuickPage.css';

const categories = [
  { 
    id: 'travel', 
    name: '제주 여행 🗿', 
    subcategories: [
      { 
        name: '식당', 
        situations: [
          { 
            name: '주문',
            sentences: [
              { 
                standard: '메뉴판 볼 수 있나요? 🥘',
                translation: '메뉴판 볼 수 이신가?'
              },
              {
                standard: '주문 할게요 🙋🏼‍♀️',
                translation: '주문 하쿠다'
              },
              {
                standard: '추천하는 메뉴가 있나요? 🙌',
                translation: '추천하는 메뉴가 이서?'
              }
            ]
          },
          { 
            name: '결제',
            sentences: [
              {
                standard: '이거 얼마예요? 💸',
                translation: '이거 얼마꽈?'
              },
              {
                standard: '현금으로 결제할게요? 💰',
                translation: '현금으로 결제하켜?'
              }
            ]
          },
          { 
            name: '예약',
            sentences: [
              {
                standard: '오늘 예약했어요 ✔️',
                translation: '오늘 예약핸'
              },
              {
                standard: '창가자리 앉을 수 있나요? 🪟',
                translation: '창가자리 앚아질 수 있수과?'
              },
              {
                standard: '몇시에 닫아요? 🚪',
                translation: '몇시에 덕어?'
              }
            ]
          }
        ]
      },
      { 
        name: '숙박', 
        situations: [
          { 
            name: '체크인',
            sentences: [
              {
                standard: '예약했어요',
                translation: '예약핸'
              },
              {
                standard: '방 업그레이드 가능한가요?',
                translation: '방 업그레이드 가능하꽈?'
              },
              {
                standard: '와이파이 비밀번호가 뭔가요?',
                translation: '와이파이 비밀번호가 무신고?'
              }
            ]
          },
          { 
            name: '체크아웃',
            sentences: [
              {
                standard: '체크아웃하려고 합니다',
                translation: '체크아웃허켜 합니다'
              },
              {
                standard: '짐 보관 가능한가요?',
                translation: '짐 보관 가능하꽈?'
              },
              {
                standard: '택시 불러주실 수 있나요?',
                translation: '택시 불러줄 수 이신가?'
              }
            ]
          },
          { 
            name: '조식',
            sentences: [
              {
                standard: '조식은 몇 시까지인가요?',
                translation: '조식은 몇 시까지우꽈?'
              },
              {
                standard: '룸서비스 가능한가요?',
                translation: '룸서비스 가능하꽈?'
              },
              {
                standard: '채식 메뉴가 있나요?',
                translation: '채식 메뉴 시난가?'
              }
            ]
          }
        ]
      },
      { 
        name: '교통', 
        situations: [
          { 
            name: '렌트',
            sentences: [
              {
                standard: '차 렌트하고 싶어요',
                translation: '차 렌트하고 싱겡'
              },
              {
                standard: '보험은 어떻게 되나요?',
                translation: '보험은 어떵 됨수과?'
              },
              {
                standard: '내비게이션 있나요?',
                translation: '내비게이션 시꽈?'
              }
            ]
          },
          { 
            name: '도착지',
            sentences: [
              {
                standard: '여기서 공항까지 얼마나 걸리나요?',
                translation: '여기서 공항까지 얼마나 걸립니까?'
              },
              {
                standard: '이 주소로 가주세요',
                translation: '이 주소로 가주쿠다'
              },
              {
                standard: '요금이 얼마인가요?',
                translation: '요금이 얼마쿠과?'
              }
            ]
          },
          { 
            name: '예약',
            sentences: [
              {
                standard: '버스 예약하고 싶어요',
                translation: '버스 예약행 싶어양'
              },
              {
                standard: '표 환불 가능한가요?',
                translation: '표 환불 가능하꽈?'
              },
              {
                standard: '막차가 몇 시인가요?',
                translation: '막차가 멧 시쿠과?'
              }
            ]
          }
        ]
      }
    ] 
  }
];

const QuickPage = () => {
  const { setInputText, setTranslationText } = useTranslation();
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [selectedSituation, setSelectedSituation] = useState(null);
  const [userInput, setUserInput] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedSubcategory(null);
    setSelectedSituation(null);
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory === selectedSubcategory ? null : subcategory);
    setSelectedSituation(null);
  };

  const handleSituationClick = (situation) => {
    setSelectedSituation(situation === selectedSituation ? null : situation);
  };

  const handleSentenceClick = useCallback((sentence) => {
    setInputText(sentence.standard);
    setTranslationText(sentence.translation);
    navigate('/regular');
  }, [setInputText, setTranslationText, navigate]);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim()) {
      setInputText(userInput.trim());
      setUserInput('');
      navigate('/regular');
    }
  };

  return (
    <div className="quick-page">
      <h2 className="situation-title">상황 선택</h2>

      <div className="categories">
        {categories.map((category) => (
          <div key={category.id} className="category-container">
            <button
              className={`category-button ${selectedCategory === category.id ? 'selected' : ''}`}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>

            {selectedCategory === category.id && (
              <div className="subcategories">
                {category.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.name}
                    className={`subcategory-button ${selectedSubcategory === subcategory.name ? 'selected' : ''}`}
                    onClick={() => handleSubcategoryClick(subcategory.name)}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            )}

            {selectedSubcategory && (
              <div className="situations">
                {category.subcategories
                  .find(sub => sub.name === selectedSubcategory)
                  .situations.map((situation) => (
                    <button
                      key={situation.name}
                      className={`situation-button ${selectedSituation === situation.name ? 'selected' : ''}`}
                      onClick={() => handleSituationClick(situation.name)}
                    >
                      {situation.name}
                    </button>
                  ))}
              </div>
            )}

            {selectedSituation && (
              <div className="recommended-sentences">
                <h2>추천 문장:</h2>
                {category.subcategories
                  .find(sub => sub.name === selectedSubcategory)
                  .situations.find(sit => sit.name === selectedSituation)
                  .sentences.map((sentence, index) => (
                    <button
                      key={index}
                      className="sentence-button"
                      onClick={() => handleSentenceClick(sentence)}
                    >
                      {sentence.standard}
                    </button>
                  ))}

                <div className="user-input-section">              
                  <h3>또는 번역할 문장을 입력하세요</h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      value={userInput}
                      onChange={handleUserInput}
                      placeholder="Type your sentence here"
                      className="user-input-field"
                    />
                    <button type="submit" className="submit-button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

QuickPage.propTypes = {
  onSentenceSelect: PropTypes.func
};

export default QuickPage;