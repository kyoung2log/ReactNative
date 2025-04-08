import { StatusBar } from 'expo-status-bar';
import { Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReactNativeTagsPage = () => {
  const handlePress = () => {
    alert('버튼 눌렀다냥');
  };

  const handleChangeText = (text: string) => {
    console.log(text);
  };

  const handleScroll = () => {
    console.log('스크롤됨');
  };

  return (
    <SafeAreaView //
      style={{ flex: 1, backgroundColor: 'pink' }}
      edges={['top', 'bottom']}
    >
      <StatusBar style='dark' />
      <Button title='버튼핑' onPress={handlePress} />
      <TouchableOpacity onPress={handlePress}>
        <Text>안녕핑</Text>
      </TouchableOpacity>
      <TextInput secureTextEntry={true} onChangeText={handleChangeText} style={styles.input} />
      <View style={styles.boardList}>
        <FlatList
          data={[
            { number: 1, title: '게시물 제목1' },
            { number: 2, title: '게시물 제목2' },
            { number: 3, title: '게시물 제목3' },
            { number: 4, title: '게시물 제목4' },
            { number: 5, title: '게시물 제목5' },
            { number: 6, title: '게시물 제목6' },
            { number: 7, title: '게시물 제목7' },
            { number: 8, title: '게시물 제목8' },
            { number: 9, title: '게시물 제목9' },
            { number: 10, title: '게시물 제목10' },
          ]}
          renderItem={({ item }) => (
            <Text>
              글번호 : {item.number}, 글제목 : {item.title}
            </Text>
          )}
          onScroll={handleScroll}
        />
      </View>
    </SafeAreaView>
  );
};

export default ReactNativeTagsPage;

const styles = StyleSheet.create({
  input: {
    borderWidth: 2,
    borderColor: 'white',
  },
  boardList: {
    height: 100,
    backgroundColor: 'yellow',
  },
});
