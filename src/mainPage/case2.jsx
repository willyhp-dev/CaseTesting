import { Link } from "react-router-dom";

export default function Case2Page() {
  let result = 0;
  type IComment = {
    commentId: number,
    commentContent: string,
    replies?: IComment[],
  };
  const comments: IComment[] = [
    {
      commentId: 1,
      commentContent: "Hai",
      replies: [
        {
          commentId: 11,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 111,
              commentContent: "Haai juga hai jugaa",
            },
            {
              commentId: 112,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
        {
          commentId: 12,
          commentContent: "Hai juga",
          replies: [
            {
              commentId: 121,
              commentContent: "Haai juga hai jugaa",
            },
          ],
        },
      ],
    },
    {
      commentId: 2,
      commentContent: "Halooo",
    },
  ];

  comments.forEach((element) => {
    result++;
    console.log(element.commentId);
    if (element.replies !== undefined) {
      result += element.replies.length;
      element.replies.forEach((element) => {
        if (element.replies !== undefined) {
          result += element.replies.length;
        }
      });
      console.log(element.replies);
    }
  });

  return (
    <div>
         <Link to="/" element =""><button>Case 1</button></Link>
         <Link to="/case3" element =""><button>Case 3</button></Link>
      <p>
        Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua
        balasan komentar. Berdasarkan data di atas, total komentar adalah 7
        komentar.
      </p>
      <ul>
        <li>{result}</li>
      </ul>
    </div>
  );
}
