import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid';
// ? Variable Declarations
export const StringIDType = z.string();
export const UUIDType = z.string().uuid();
export const MemberType = z.object({
  id: StringIDType,
  type: z.string(),
});
export const MessageType = z.object({
  id: StringIDType,
  isDelete: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
  sender: MemberType,
  content: z.string(),
});

export const MessageDTOType = z.object({
  sender: MemberType,
  content: z.string(),
});

export const UserType = z.object({
  id: z.number(),
  name: z.string(),
  type: z.string(),
  avatar: z.string(),
});
export const MessageTypeArray = z.array(MessageType);
export const MemberTypeArray = z.array(MemberType);
export const ConversationType = z.object({
  id: UUIDType,
  name: z.string(),
  members: MemberTypeArray,
  messages: MessageTypeArray,
  isDelete: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export const PaginationType = z.object({
  page_size: z.number(),
  page_number: z.number(),
});

export const ConversationTypeArray = z.array(ConversationType);
// ? => JOIN ROOM
export const JoinRoomSchema = z.object({
  roomID: UUIDType,
});
// ? => SEND ROOM MESSAGE
export const SendRoomMessageSchema = z.object({
  conversationID: UUIDType.default(uuidv4()),
  members: MemberTypeArray,
  message: MessageDTOType,
});
// ? ==> TYPING
export const TypingSchema = z.object({
  sender: MemberType,
  isTyping: z.boolean(),
});
// ? ==> DELETE MESSAGE
export const DeleteMessageSchema = z.object({
  messageID: UUIDType,
  conversationID: UUIDType,
});
// ? ==> EDIT MESSAGE
export const EditMessageSchema = DeleteMessageSchema.merge(
  z.object({
    dto: MessageType.omit({
      id: true,
      isDelete: true,
      createdAt: true,
      updatedAt: true,
      sender: true,
    }),
  }),
);
// ? ==> DELETE CONVERSATION
export const DeleteConversationSchema = z.object({ id: StringIDType });
// ? ==> REQUEST MESSAGE
export const RequestMessageSchema = z.object({
  sort: z.object({
    id: StringIDType.optional(),
    members: MemberTypeArray.optional(),
  }),
  pagination: PaginationType.optional(),
});
// ? ==> REQUEST CONTACT LIST
export const RequestContactListSchema = z.object({
  sort: MemberType,
  pagination: PaginationType.optional(),
});
// ? ==> SEARCH USER BY NAME
export const SearchUserByNameSchema = z.object({
  name: z.string(),
});
