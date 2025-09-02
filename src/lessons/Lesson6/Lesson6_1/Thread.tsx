import { useOptimistic } from "react";
import { Message } from "./Lesson6_1";

const Thread = ({
  messages,
  sendMessage,
}: {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
}) => {
  const formAction = async (formData: FormData) => {
    const messageText = formData.get("message");
    addOptimisticMessage(messageText);
    await sendMessage(formData);
  };

  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      {
        text: newMessage as string,
        sending: true,
        key: state.length + 1,
      },
      ...state,
    ]
  );

  return (
    <div>
      {optimisticMessages.map((message) => (
        <div key={message.key}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={formAction}>
        <input
          type="text"
          name="message"
          placeholder="Hello!"
          className="border-2 px-2 py-2 rounded-md"
        />
        <button type="submit" className="ml-2 border-2 px-2 py-2 rounded-md">
          送信
        </button>
      </form>
    </div>
  );
};

export default Thread;
