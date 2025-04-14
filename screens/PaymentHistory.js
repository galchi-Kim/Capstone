import React from 'react';
import { View, Text, FlatList } from 'react-native';
import {
  StyledContainer,
  InnerContainer,
  PageTitle
} from '../components/styles';

const dummyPayments = [
  { id: '1', date: '2024-04-01', lesson: '초보자 클래스 A', amount: '150,000원' },
  { id: '2', date: '2024-03-25', lesson: '중급 클래스 B', amount: '180,000원' },
  { id: '3', date: '2024-03-10', lesson: '자격증반 C', amount: '200,000원' },
];

const PaymentHistory = () => {
  const renderItem = ({ item }) => (
    <View style={{
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderBottomWidth: 1,
      borderColor: '#ccc'
    }}>
      <Text style={{ fontWeight: 'bold' }}>{item.lesson}</Text>
      <Text style={{ color: 'gray', marginTop: 5 }}>{item.date}</Text>
      <Text style={{ marginTop: 5 }}>{item.amount}</Text>
    </View>
  );

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle>결제 내역</PageTitle>
        <FlatList
          data={dummyPayments}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{ marginTop: 20, width: '100%' }}
        />
      </InnerContainer>
    </StyledContainer>
  );
};

export default PaymentHistory;
