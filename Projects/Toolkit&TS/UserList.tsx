import React, {useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';
import {fetchUsers, User} from './userListSlice';
import { useAppDispatch, useAppSelector } from './hooks';

interface UserListProps {}

const UserList: React.FC<UserListProps> = () => {
  const dispatch = useAppDispatch();
  const screenState = useAppSelector(state => state.userList)
  
  useEffect(() => {
    dispatch(fetchUsers({page: 1}));
  }, []);

  const handleOnEndReached = () => {
    if (!screenState.loading) {
      dispatch(fetchUsers({page: screenState.nextPage}));
    }
  };

  const renderContent = () => {
    if (screenState.loading) {
      return <Text>LOADING</Text>;
    } else if (screenState.error) {
      return <Text>ERROR</Text>;
    } else {
      return <Text>DEFAULT</Text>;
    }
  };

  return (
    <View style={styles.mainContainer}>
      {renderContent()}
      <FlatList
        data={screenState.users}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => {
          return <UserListItem user={item} />;
        }}
        onEndReached={handleOnEndReached}
      />
    </View>
  );
};

const UserListItem: React.FC<{user: User}> = ({user}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{uri: user.picture.thumbnail}} />
      <Text style={styles.nameText}>{user.name.first}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  nameText: {
    padding: 15,
  },
  container: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'purple',
    borderWidth: 3
  },
});

export {UserList};
