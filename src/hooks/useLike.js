import React, { useEffect, useState } from "react";

const useLike = () => {
  const [likes, setLikes] = useState([]);
  useEffect(() => {
}, [likes]);

  const onClickLike = (giftId) => {
    const gifExist = likes.find((item) => item.id == giftId);
    if (!gifExist) {
      const newLikesObj = {
        id: giftId,
        point: 1,
      };
      setLikes([...likes, newLikesObj]);
    } else {
      const updateLikes = likes.map((gif) => {
        if (gif.id === giftId) {
          return {
            ...gif,
            point: gif.point + 1,
          };
        }
        return gif;
      });
      setLikes(updateLikes);
    }
  };

  const totalLikes = (gifId) => {
    const datalike = likes.find((item) => item.id === gifId);
    return datalike ? datalike.point : 0;
  };

  return {
    totalLikes: (value) => totalLikes(value),
    onClickLike: (value) => onClickLike(value),
    likes: likes,
  };
};

export default useLike;
