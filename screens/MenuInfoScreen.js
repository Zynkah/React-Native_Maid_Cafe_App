import { useState } from "react";
import { FlatList, StyleSheet, Text, View, Button, Modal } from "react-native";
import { COMMENTS } from "../shared/COMMENTS";
import RenderMenu from "../features/menu/RenderMenu";
import { Input, Rating } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const MenuInfoScreen = ({ route }) => {
  const { menu } = route.params;
  const [comments, setComments] = useState(COMMENTS);

  //

  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = () => {
    setShowModal(!showModal);
  };

  const resetForm = () => {
    setRating(5);
    setAuthor("");
    setText("");
  };

  //

  const renderCommentItem = ({ item }) => {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <View style={styles.commentItem}>
          <Text style={{ fontSize: 14 }}>{item.text}</Text>

          <Rating
            type="heart"
            readonly
            startingValue={item.rating}
            imageSize={10}
            style={{
              paddingVertical: 5,
              fontSize: 12,
              alignItems: "flex-start",
            }}
          >
            {item.rating}
          </Rating>

          <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
          <Text
            style={{ fontSize: 12 }}
          >{`-- ${item.author}, ${item.date}`}</Text>
        </View>
      </Animatable.View>
    );
  };

  return (
    <>
      <FlatList
        data={comments.filter((comment) => comment.menuId === menu.id)}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
        ListHeaderComponent={
          <>
            <Animatable.View
              animation="fadeInDown"
              duration={2000}
              delay={1000}
            >
              <RenderMenu
                menu={menu}
                onShowModal={() => setShowModal(!showModal)}
              />
              <Text style={styles.commentsTitle}>Comments</Text>
            </Animatable.View>
          </>
        }
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modal}>
          <Rating
            type="heart"
            fractions={1}
            showRating={true}
            startingValue={rating}
            imageSize={30}
            onFinishingRating={(rating) => setRating(rating)}
            style={{ paddingVertical: 10 }}
          ></Rating>
          <Input
            placeholder="Author"
            leftIcon={{ type: "font-awesome", name: "user-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(newAuthor) => setAuthor(newAuthor)}
            value={author}
          ></Input>
          <Input
            placeholder="Comment"
            leftIcon={{ type: "font-awesome", name: "comment-o" }}
            leftIconContainerStyle={{ paddingRight: 10 }}
            onChangeText={(newComment) => setText(newComment)}
            value={text}
          ></Input>
          <View style={{ margin: 10 }}>
            <Button
              onPress={() => {
                handleSubmit();
                resetForm();
              }}
              color="#cc3366"
              title="Submit"
            ></Button>
          </View>
          <View style={{ margin: 10 }}>
            <Button
              onPress={() => {
                setShowModal(!showModal);
                resetForm();
              }}
              color="#FFB6C1"
              title="Cancel"
            ></Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  commentsTitle: {
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    color: "#43484D",
    padding: 10,
    paddingTop: 30,
  },
  commentItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
export default MenuInfoScreen;
