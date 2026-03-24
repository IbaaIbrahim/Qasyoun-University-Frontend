import Image from "next/image";
import { ReplySvg } from "@/components/svg";

const commentsData = [
  {
    id: 1,
    name: "Chigusa Kisa",
    date: "July 21, 2020 at 7:22 pm",
    text: "I love the way the instructor goes about the course. So easy to follow, even though a little bit challenging as expected.",
    avatar: "/assets/img/blog/deatils/user.png",
    replies: [
      {
        id: 2,
        name: "Nicolas Bryant",
        date: "July 21, 2020 at 7:22 pm",
        text: "I agree with you! The course is both challenging and engaging.",
        avatar: "/assets/img/blog/deatils/user-2.png",
      },
    ],
  },
];

export default function BlogDetailsComments() {
  return (
    <ul>
      {commentsData.map((comment) => (
        <li key={comment.id}>
          <div className="tp-postbox-comment-box d-flex">
            <div className="tp-postbox-comment-info">
              <div className="tp-postbox-comment-avater mr-20">
                <Image src={comment.avatar} alt={comment.name} width={50} height={50} />
              </div>
            </div>
            <div className="tp-postbox-comment-text">
              <div className="tp-postbox-comment-name">
                <h5>{comment.name}</h5>
                <span className="post-meta">{comment.date}</span>
              </div>
              <p>{comment.text}</p>
              <div className="tp-postbox-comment-reply">
                <a href="#">
                  <ReplySvg />
                  Reply
                </a>
              </div>
            </div>
          </div>
          {comment.replies && (
            <ul className="children">
              {comment.replies.map((reply) => (
                <li key={reply.id}>
                  <div className="tp-postbox-comment-box d-flex">
                    <div className="tp-postbox-comment-info">
                      <div className="tp-postbox-comment-avater mr-20">
                        <Image src={reply.avatar} alt={reply.name} width={50} height={50} />
                      </div>
                    </div>
                    <div className="tp-postbox-comment-text">
                      <div className="tp-postbox-comment-name">
                        <h5>{reply.name}</h5>
                        <span className="post-meta">{reply.date}</span>
                      </div>
                      <p>{reply.text}</p>
                      <div className="tp-postbox-comment-reply">
                        <a href="#">
                          <ReplySvg />
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
