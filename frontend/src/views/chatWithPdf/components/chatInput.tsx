import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EnterIcon } from "@/components/ui/icons";

interface ChatInputProps {
  query: string;
  setQuery: (query: string) => void;
  onSubmit: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  query,
  setQuery,
  onSubmit,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && query.trim() !== "") {
      event.preventDefault(); // Prevent form submission (if wrapped in a form)
      onSubmit();
    }
  };

  return (
    <div className="flex gap-5">
      <Input
        name="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask your question... "
        className="w-full bg-black h-[50px]"
        onKeyDown={handleKeyDown} // Handle Enter key
      />
      <Button className="h-[50px]" onClick={onSubmit}>
        <EnterIcon />
      </Button>
    </div>
  );
};
