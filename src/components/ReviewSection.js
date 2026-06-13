import "./ReviewSection.css";
import { useState } from "react";

function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Jung Hoseok",
      job: "Artist / Dancer",
      img: "/images/bts-j-hope.png",
      text: "I am just believing myself and running, alright. This world is deep and we are going for it, up all night. You're trying something new. That in itself is a reflection that you're going in a good direction.",
    },
    {
      id: 2,
      name: "Min Yoongi",
      job: "Artist / Rapper",
      img: "/images/bts-yoongi.png",
      text: "Stay innocent, be naive. But still dream big. Dream big to the point that it is beyond your ability and endeavour to achieve it. Because the dawn right before the sun rises is the darkest.",
    },
    {
      id: 3,
      name: "Kim Namjoon",
      job: "Artist / Rapper",
      img: "/images/rapmonster-bts.png",
      text: "My ideal and what is reality, they're so far, far away. But I want to cross those two bridges to reach myself. I hope you know your limits well. But don't stay within those limits.",
    },
    {
      id: 4,
      name: "Kim Seokjin",
      job: "Artist / Singer",
      img: "/images/jin-of-bts.webp",
      text: "If any of you feel lost in the face of uncertainty or the pressure of starting something new, don't rush. You may find any moment can be turned into an opportunity.",
    },
    {
      id: 5,
      name: "Park Jimin",
      job: "Artist / Singer",
      img: "/images/jimin-hd.webp",
      text: "It's alright if you started right now. It's alright if you're in a good mood. It's alright if you do everything you want to do. I hope you never give up.",
    },
    {
      id: 6,
      name: "Kim Taehyung",
      job: "Artist / Singer",
      img: "/images/v-bts.webp",
      text: "When things get hard, stop for a while and look back and see how far you've come. Don't forget how rewarding it is. Don't be upset because someone didn't cheer you up.",
    },
    {
      id: 7,
      name: "Jeon Jungkook",
      job: "Artist / Singer",
      img: "/images/bts-jk.webp",
      text: "You should build your own goals and dreams. I think it's really sad that some people don't get a chance to build their dreams because of outside pressure.",
    },
    {
      id: 8,
      name: "Makkah Ismael",
      job: "Nothing Yet",
      img: "/images/IMG_20230414_185140.jpg",
      text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time. The difference between a successful person and others is not a lack of strength.",
    },
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const randomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setCurrentReview(randomIndex);
  };

  const current = reviews[currentReview];

  return (
    <section id="review-area">
      <div className="container">
        <div className="title">
          <h1>Our Reviews</h1>
          <div className="underline"></div>
        </div>

        <div className="image-container">
          <div className="personal-info">
            <img src={current.img} alt={current.name} />
            <h2 className="author">{current.name}</h2>
            <h4 className="job">{current.job}</h4>
          </div>

          <div className="text">
            <p>{current.text}</p>
          </div>

          <div className="btns">
            <button className="btn prev-btn" onClick={prevReview}>
              &lt;
            </button>
            <button className="btn next-btn" onClick={nextReview}>
              &gt;
            </button>
          </div>

          <button className="random-btn" onClick={randomReview}>
            STAN BTS
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
