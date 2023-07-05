import { Message } from "@/types";

type MessageViewProps = {
  message: Message;
};

export const MessageView = ({ message }: MessageViewProps) => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex flex-row p-x-0.5 space-x-2 items-end">
        <span className="font-bold text-base">{message.owner}</span>
        <span className="text-xs">{formatDatetime(message.createdAt)}</span>
      </div>
      <span>{message.content}</span>
    </div>
  );
};

const formatDatetime = (datetime: number): string => {
  const date = new Date(datetime);
  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "short",
    timeStyle: "short",
    hour12: false,
    timeZone: "UTC",
  }).format(date);
  return formattedDate;
};
