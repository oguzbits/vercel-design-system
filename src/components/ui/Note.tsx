import React from "react";
import { Note as GeistNote, NoteProps } from "@geist-ui/core";
const NoteComponent: React.FC<any> = (props) => {
  const { label, children, ...rest } = props;
  // Handle Geist components that might need children or specific props
  return <GeistNote {...(rest as any)}>{label || children}</GeistNote>;
};

const FinalNote = NoteComponent as any;

FinalNote.displayName = "Note";

export { FinalNote as Note };
