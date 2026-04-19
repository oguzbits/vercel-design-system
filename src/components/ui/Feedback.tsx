import React from 'react'
import { Modal as GeistModal, useToasts, useModal } from '@geist-ui/core'
import ModalTitle from '@geist-ui/core/esm/modal/modal-title'
import ModalSubtitle from '@geist-ui/core/esm/modal/modal-subtitle'
import ModalContent from '@geist-ui/core/esm/modal/modal-content'
import ModalAction from '@geist-ui/core/esm/modal/modal-action'

const ModalComponent: React.FC<any> = (props) => {
  return <GeistModal {...(props as any)} />
}

export type ModalComponentType = React.FC<any> & {
  Title: any;
  Subtitle: any;
  Content: any;
  Action: any;
}

const Modal = ModalComponent as ModalComponentType
Modal.Title = ModalTitle as any
Modal.Subtitle = ModalSubtitle as any
Modal.Content = ModalContent as any
Modal.Action = ModalAction as any
Modal.displayName = 'Modal'

export { Modal, useToasts, useModal }
