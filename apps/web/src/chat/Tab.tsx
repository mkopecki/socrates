import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { useSession } from "./hooks/useSession";
import { useSessionCreator } from "./hooks/useSessionCreator";
import * as LayoutTypes from "./types";

type TabProps = {
  tab: LayoutTypes.Tab;
};

export const Tab: React.FC<TabProps> = ({ tab }) => {
  // const { mutate } = useSessionCreator();
  //
  // const createNewSession = () => {
  //   mutate();
  // };
  //
  // if (!tab.session) {
  //   return (
  //     <div className="flex border justify-center items-center h-full w-full">
  //       <div className="flex flex-col space-y-2 p-4">
  //         <span>No Session Attached</span>
  //         <Button onClick={() => createNewSession()}>Create</Button>
  //       </div>
  //     </div>
  //   );
  // }

  const { isLoading, data } = useSession("123");

  if (isLoading) {
    return <span>Is Loading</span>;
  }

  console.log(data);

  // session state
  return (
    <div className="flex flex-col border h-full">
      <div className="w-full flex flex-row space-x-2 p-2 border-b">
        <span className="font-bold">{tab.title}</span>
        <span className="text-slate-400">23.30 using GPT-4</span>
      </div>

      <div className="w-full h-full flex flex-col space-x p-2">
        <Message />
        <Message />
        <Message />
        <Message />

        <div className="grow" />
      </div>

      <div className="w-full flex p-2 border-t space-x-2">
        <Textarea />
        <Button className="h-full">Send</Button>
      </div>
    </div>
  );
};

const Message = () => {
  return (
    <div className="w-full flex space-x-2">
      <span>C</span>
      <div className="flex flex-col">
        <div className="flex flex-row space-x-2">
          <span className="font-bold">Model Name</span>
          <span className="text-slate-400">12:30 20.20.2000</span>
        </div>
        <span>Message</span>
      </div>
    </div>
  );
};
