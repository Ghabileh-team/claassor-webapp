import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { ReactComponent as Heart } from "src/assets/icons/Heart.svg";
import { ReactComponent as Bookmark } from "src/assets/icons/Bookmark.svg";
import { ReactComponent as Chat } from "src/assets/icons/Chat.svg";
import { trackPromise } from "react-promise-tracker";
import LoadingIndicator from "./LoadingIndicator";
import Comment from "./Comment/Comment";
const NotificationLeft = styled.div`
  h3 {
    color: #000;
    font-size: 0.9em;
  }

  p {
    color: rgba(0, 0, 0, 0.3);
    font-size: 0.6em;
  }
`;

const NotificationData = styled.div`
  padding: 2vh;
  background-color: #fff;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 8fr 1fr;
  text-align: right;
  color: #6f6f6f;
`;

const SenderContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const SenderTextContainer = styled.div`
  display: grid;
  margin-left: 10px;
  grid-template-columns: 1fr 1fr;
  text-align: left;

  h3 {
    font-size: ${(props) => (props.isBig ? "30px" : null)};
    margin-right: 10px;
  }
  p {
    font-size: ${(props) => (props.isBig ? "14px" : null)};
  }
`;

const SenderImage = styled.img`
  border-radius: 10px;
  width: ${(props) => (props.isBig ? "80px" : "50px")};
  height: ${(props) => (props.isBig ? "80px" : "50px")};
  object-fit: cover;
  object-position: 0 1px;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-right: ${(props) => (props.isBig ? "1vh" : null)};
  justify-content: center;
`;

const NotificationDescription = styled.div`
  margin-top: 10px;
  p {
    font-size: ${(styled) => (styled.isBig ? " 20px" : "0.8em")};
  }
`;

const NotificationImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Comments = styled.div`
  position: relative;
  width: 100%;
  height: ${(props) => (props.selected ? "200px" : "0")};
  border-top: ${(props) => (props.selected ? "1px solid gray" : null)};
  margin-top: 1vw;
`;

const Parse = require("parse");

export default function NotificationItem(props) {
  const [sender, setSender] = useState();
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [data] = useState(props.object);
  const [comments, setComments] = useState([]);
  const [toggleComments, setToggleComments] = useState(false);
  const [day, setDay] = useState(false);
  const [month, setMonth] = useState(false);
  const [hour, setHour] = useState(false);
  const [minute, setMinute] = useState(false);
  var one_day = 1000 * 60 * 60 * 24;
  const date = new Date();
  const secounds = date - data.createdAt;
  const days = secounds / one_day;
  const months = secounds / (one_day * 30);
  const hours = secounds / (1000 * 60 * 60);
  const minutes = secounds / (1000 * 60);

  useEffect(() => {
    if (days >= 1) {
      setDay(true);
    }
    if (months >= 1) {
      setMonth(true);
    }
    if (hours >= 1) {
      setHour(true);
    }
    if (minutes >= 1) {
      setMinute(true);
    }
  }, []);

  // const data = props.object;
  const isBig = props.isBig;
  const commentRef = useRef(null);
  const containerRef = useRef(null);

  const NotificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    overflow: hidden;
    width: ${isBig ? "70%" : null};
    margin: ${isBig ? "1vw auto" : "1vw 0"};
    margin-top: 0;
    background-color: white;
  `;
  const News = Parse.Object.extend("News");
  const likedQuery = data.relation("likedBy").query();

  const checkLiked = () => {
    likedQuery.equalTo("objectId", Parse.User.current().id);
    likedQuery.find().then((tweet) => {
      if (tweet.length === 1) {
        setLiked(true);
      }
    });
  };

  const checkSaved = () => {
    let query = Parse.User.current().relation("savedNews").query();
    query.equalTo("objectId", data.id);
    query.find().then((res) => {
      if (res.length === 1) {
        setSaved(true);
      }
    });
  };

  const handleLiked = () => {
    if (liked) {
      data.relation("likedBy").remove(Parse.User.current());
      data.save().then(() => setLiked(false));
    } else {
      data.relation("likedBy").add(Parse.User.current());
      data.save().then(() => setLiked(true));
    }
  };

  const checkSender = () => {
    data
      ?.get("sender")
      ?.fetch()
      .then((res) => setSender(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    checkSender();
    checkLiked();
    checkSaved();
  }, []);

  const checkUndefined = (string) => {
    if (typeof string !== "undefined") {
      return string;
    } else {
      return "نامعلوم";
    }
  };

  const handleSaved = () => {
    if (saved) {
      console.log("bitch");
      Parse.User.current().relation("savedNews").remove(data);
      Parse.User.current()
        .save()
        .then(() => setSaved(false));
    } else {
      Parse.User.current().relation("savedNews").add(data);
      Parse.User.current()
        .save()
        .then(() => setSaved(true));
    }
  };

  const executeScroll = () =>
    toggleComments
      ? containerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      : commentRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

  const handleComments = () => {
    setToggleComments(!toggleComments);
    executeScroll();
    const Comments = Parse.Object.extend("Comments");
    const commentsQuery = new Parse.Query(Comments);
    commentsQuery.equalTo("parent", data);
    trackPromise(
      commentsQuery.find().then((res) => {
        let items = [];
        res.forEach((i) => {
          i.get("sender").fetch();
          items.push(<Comment data={i} />);
        });
        setComments(items);
      })
    );
  };

  return (
    <NotificationContainer>
      <NotificationData ref={containerRef}>
        <NotificationLeft>
          <SenderContainer>
            <SenderImage src={sender?.get("image")?.url()} isBig={isBig} />
            <SenderTextContainer isBig={isBig}>
              <h3>
                {checkUndefined(sender?.get("firstName")) +
                  " " +
                  checkUndefined(sender?.get("lastName"))}
              </h3>
              <p>
                {month
                  ? `${Math.floor(months)}month`
                  : day
                  ? `${Math.floor(days)}d`
                  : hour
                  ? `${Math.floor(hours)}h`
                  : minute
                  ? `${Math.floor(minutes)}m`
                  : `${Math.floor(secounds)}s`}
              </p>

              <p>{sender?.get("username")}</p>
            </SenderTextContainer>
          </SenderContainer>

          <NotificationDescription isBig={isBig}>
            {data.get("description")}
          </NotificationDescription>
        </NotificationLeft>
        <IconsContainer>
          <Heart
            cursor="pointer"
            width={isBig ? "30" : "22"}
            height={isBig ? "30" : "22"}
            fill={liked ? "red" : "white"}
            onClick={handleLiked}
          />
          <Bookmark
            cursor="pointer"
            stroke="#B4CBB2"
            fill={saved ? "#B4CBB2" : "none"}
            width={isBig ? "30" : "22"}
            height={isBig ? "30" : "22"}
            onClick={handleSaved}
          />
          <Chat
            cursor="pointer"
            width={isBig ? "30" : "22"}
            height={isBig ? "30" : "22"}
            stroke={toggleComments ? "white" : "#130F26"}
            fill={toggleComments ? "#130F26" : "none"}
            onClick={handleComments}
          />
        </IconsContainer>
      </NotificationData>
      {data.get("image") ? (
        <NotificationImage src={data.get("image").url()} />
      ) : null}
      <Comments ref={commentRef} selected={toggleComments}>
        <LoadingIndicator />

        {toggleComments ? comments : null}

        <CommentsFooter>
          <input />
          <button>send</button>
        </CommentsFooter>
      </Comments>
    </NotificationContainer>
  );
}

const CommentsFooter = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
`;
