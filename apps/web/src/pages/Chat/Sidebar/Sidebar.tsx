import { Button } from "@/components/ui/button";
import { FilePlus } from "lucide-react";
import React from "react";
import { useSessionCreator } from "./hooks/useSessionCreator";

export const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 p-4 space-y-8">
      <span className="text-xl font-bold">Socrates</span>

      <NewSessionButton />
      <SidebarSection label="Test" />
    </div>
  );
};

const SidebarSection = ({ label }) => {
  return (
    <div className="py-4">
      <span>{label}</span>
    </div>
  );
};

const NewSessionButton = () => {
  const { mutate } = useSessionCreator();

  return (
    <Button variant="outline" className="justify-start" onClick={() => mutate()}>
      <FilePlus className="mr-2 h-4 w-4" />
      New Chat Session
    </Button>
  );
};
