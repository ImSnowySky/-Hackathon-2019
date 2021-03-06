import React from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';
import Comment from '../../components/Comment/Comment';
import Col from 'react-bootstrap/Col';

const comments = [
  {
    "id": 1,
    "author": "Весемир",
    "url": "http://i.imgur.com/187Y4u3.png",
    "text": "Недавно знакомый рассказал, что помимо того, что в его дворе мусорные баки заполнены уже целых 2 недели, вокруг мусорных баков очень много мусора. На фотографиях можете увидеть сколько мусора там скопилось. Предлагаю встретиться и помочь жителям этого двора.",
    "date": "Sun May 18 2019 03:53:17 GMT+0500"
  },
  {
    "id": 2,
    "author": "Геральт",
    "url": "https://oss.adm.ntu.edu.sg/a150018/wp-content/uploads/sites/289/2016/02/cat1_2.png",
    "text": "Ужас какой!",
    "date": "Sun May 19 2019 03:53:17 GMT+0500"
  }
];

export default class Comments extends React.Component {
  render() {
    const { isLarge } = this.props;

    return (
      <Col md={isLarge ? 8 : 4}>
        <div className="comments">
          <div className="comments-title">Все комментарии</div>
          <CommentForm />
          {comments.length && comments.map(el => <Comment data={el} key={el.id}/>)}
        </div>
      </Col>
    );
  }
};
