import React, { useRef, useState } from "react";
import styled from "styled-components";
import closeIcon from "src/assets/icons/Close.svg";
import imageIcon from "src/assets/icons/Image.svg";
import folderIcon from "src/assets/icons/Folder.svg";
import Swal from "sweetalert2";
import { Button, Icon } from "src/styles/components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentWorkspace,
  updateShowPopupArchive,
} from "src/redux/globalValuesSlice";
import { selectEditItem } from "src/redux/archiveSlice";

const Container = styled.div`
  position: absolute;
  background-color: white;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 30px;
  width: 50vw;
  height: fit-content;
  z-index: 4;
  display: flex;
  flex-direction: column;
`;
const TopContainer = styled.div`
  margin: 0 5%;
  margin-top: 10%;
  display: flex;
  height: fit-content;
  /* justify-content: center; */
  align-items: flex-start;
  flex: 2;
`;
const TextInput = styled.textarea`
  border: none;
  display: block;
  outline: none;
  background: transparent;
  margin-right: 10px;
  text-align: right;
  width: 100%;
  min-height: 25vh;
  resize: none;
  scroll-behavior: smooth;
  padding-top: 20px;
  font-family: "dana-regular";
`;

const Toolbar = styled.div`
  border-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  border-top: solid 1px #c7c7c7;
  margin: 0 5%;
  padding: 10px 0;
`;

const CloseIcon = styled(Icon)`
  position: absolute;
  margin: 25px;
  width: 15px;
`;

const UserImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 10px;
`;

const Parse = require("parse");
const News = Parse.Object.extend("News");
const query = new News();

interface Props {
  popup: Function;
  primary?: boolean;
}
export default function DashboardAddPopUp(props: Props) {
  const [text, setText] = useState("");
  const [image, setImage] = useState<{ name: string }>();
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const workspace = useSelector(selectCurrentWorkspace);
  const editItem = useSelector(selectEditItem);

  const addTweet = () => {
    console.log(image);
    if (typeof image !== "undefined") {
      const parseImage = new Parse.File(image.name, image);
      query.set("image", parseImage);
    }

    query.set("description", text);
    query.set("sender", Parse.User.current());
    query.set("workspace", workspace);
    query.save().then(() =>
      Swal.fire({
        title: "ثبت توییت",
        text: "توییت شما با موفقیت اضافه شد",
        confirmButtonText: "باشه",
      }).then(() => props.popup(false))
    );
  };

  const imageBtn: any = useRef(null);
  const fileBtn: any = useRef(null);

  const editObj = () => {};

  const handleImageBtn = () => {
    imageBtn?.current?.click();
  };
  const handleFileBtn = () => {
    fileBtn?.current?.click();
  };

  const handleImageSelect = (event: any) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
    // if (file.type === "image/jpeg" || "image/jpg" || "image/png") {
    //   setImage(URL.createObjectURL(fileUploaded));
    // }
  };
  const handleFileSelect = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleClose = () => {
    dispatch(updateShowPopupArchive(false));
  };
  return (
    <Container>
      <CloseIcon src={closeIcon} onClick={handleClose} />
      <TopContainer>
        <TextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="اینجا بنویسید"
        />

        <div>
          <UserImage src={Parse.User.current().get("image")?.url()} />
        </div>
      </TopContainer>
      <Toolbar>
        <div>
          {props.primary && (
            <>
              <input
                type="file"
                name="image"
                onChange={handleImageSelect}
                id="image"
                ref={imageBtn}
                accept="image/*,video/*"
                style={{ display: "none" }}
              />
              <input
                type="file"
                name="image"
                onChange={handleFileSelect}
                id="image"
                ref={fileBtn}
                accept=".doc,.docx,.pdf,audio/*"
                style={{ display: "none" }}
              />
              <Icon onClick={handleImageBtn} src={imageIcon} />
              <Icon onClick={handleFileBtn} src={folderIcon} />
            </>
          )}
        </div>
        <Button onClick={addTweet} light>
          ثبت
        </Button>
      </Toolbar>
    </Container>
  );
}
