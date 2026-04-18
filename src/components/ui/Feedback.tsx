import React from 'react'
import { 
  Modal as GeistModal, 
  ModalProps, 
  useToasts as useGeistToasts,
  useModal as useGeistModal
} from '@geist-ui/core'

export const Modal: React.FC<ModalProps> & {
  Title: typeof GeistModal.Title
  Subtitle: typeof GeistModal.Subtitle
  Content: typeof GeistModal.Content
  Action: typeof GeistModal.Action
} = (props) => {
  return <GeistModal {...props} />
}

Modal.Title = GeistModal.Title
Modal.Subtitle = GeistModal.Subtitle
Modal.Content = GeistModal.Content
Modal.Action = GeistModal.Action

export const useToasts = useGeistToasts
export const useModal = useGeistModal
