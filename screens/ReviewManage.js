import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  PageTitle
} from '../components/styles';

const dummyReviews = [
  { id: '1', lessonName: '초보자 클래스 A', content: '너무 친절했어요', rating: 5 },
  { id: '2', lessonName: '중급 클래스 B', content: '조금 어렵지만 도움됐어요', rating: 4 },
  { id: '3', lessonName: '전문가 클래스 C', content: '실전 감각 키우기 좋아요', rating: 5 }
];

const ReviewManage = () => {
  const renderItem = ({ item }) => (
    <View style={{
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      paddingVertical: 10,
      paddingHorizontal: 15
    }}>
      <Text style={{ fontWeight: 'bold' }}>{item.lessonName}</Text>
      <Text style={{ color: 'gray', marginTop: 5 }}>{item.content}</Text>
      <Text style={{ marginTop: 5 }}>⭐ {item.rating}</Text>
    </View>
  );

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>리뷰 관리</PageTitle>
        <FlatList
          data={dummyReviews}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{ marginTop: 20, width: '100%' }}
        />
      </InnerContainer>
    </StyledContainer>
  );
};

export default ReviewManage;
